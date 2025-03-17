<template>
	<view :data-theme="theme()" :class="'order-datail pb100' + theme()" v-if="!loadding">
		<!--详情状态-->
		<view class="order-state d-s-c">
			<view class="icon-box">
				<span v-if="detail.state_text == '已付款，待发货'" class="icon iconfont icon-icon"></span>
				<span v-if="detail.state_text == '待付款'" class="icon iconfont icon-icon"></span>
				<span v-if="detail.state_text == '已发货，待收货'" class="icon iconfont icon-daishouhuo"></span>
				<span v-if="detail.state_text == '已完成'" class="icon iconfont icon-xuanze"></span>
				<span v-if="detail.state_text == '已取消'" class="icon iconfont icon-gantanhao"></span>
			</view>
			<view class="state-cont flex-1">
				<view class="state-txt d-b-c">
					<text class="desc f34">{{ detail.state_text }}</text>
				</view>
				<view class="status-price pt10" v-if="detail.pay_status.value == 10">应付金额：¥ {{ detail.pay_price }}
				</view>
				<view class="countdown-datetime" v-if="detail.pay_end_time">
					<text>剩{{ detail.pay_end_time }}自动关闭</text>
				</view>
			</view>
			<view class="dot-bg"></view>
		</view>

		<!--物流地址-->
		<view class="order-express p30 d-s-c" v-if="detail.delivery_type.value == 10">
			<view class="icon-box">
				<image style="width: 42rpx;height: 42rpx;" src="../../static/icon/address_icon.png" mode=""></image>
			</view>
			<view class="cont-text flex-1 o-h ml20 f30">
				<view class="express-text f32">
					{{ detail.address.name }}
					<text class="f26 gray9">{{ detail.address.phone }}</text>
				</view>
				<view class="gray3 f26 pt10">
					{{ detail.address.region.province }}{{ detail.address.region.city }}{{ detail.address.region.region }}{{ detail.address.detail }}
				</view>
			</view>
			<view class="icon iconfont icon-jiantou"></view>
		</view>
		<!-- 上门自提：自提门店 -->
		<view class="order-express p30 d-s-s" v-if="detail.delivery_type.value == 20">
			<view class="flow-delivery__title m-top20"><span class="icon iconfont icon-dizhi1">自提门店</span></view>
			<view class="cont-text flex-1 o-h ml20 f30">
				<view class="express-text">
					{{ extractStore.store_name }} {{ extractStore.phone }}
					<view class="f24 gray9 pt10">
						{{ extractStore.region.province }} {{ extractStore.region.city }}
						{{ extractStore.region.region }} {{ extractStore.address }}
					</view>
				</view>
			</view>
		</view>

		<!-- 物流信息 -->
		<view class="group bg-white" v-if="detail.delivery_type.value == 10 && detail.delivery_status.value == 20"
			@click="gotoExpress(detail.order_id)">
			<view class="d-b-c">
				<view class="f28">
					<view class="p-20-0">
						<text class="gray9">物流公司：</text>
						<text>{{ detail.express.express_name }}</text>
					</view>
					<view class="p-20-0">
						<text class="gray9">物流单号：</text>
						<text>{{ detail.express_no }}</text>
					</view>
				</view>
				<view><text class="icon iconfont icon-jiantou"></text></view>
			</view>
		</view>

		<!--购物列表-->
		<view class="shops group bg-white">
			<view class="list">
				<view class="one-product p-20-0" v-for="(item, index) in detail.product" :key="index">
					<view class="d-s-c">
						<view class="cover">
							<image :src="item.image.file_path" mode="aspectFit"></image>
						</view>
						<view class="flex-1">
							<view class="p-0-30 text-ellipsis-2 gray3 f30">{{ item.product_name }}</view>
							<view class="pt10 p-0-30 gray6 f24">{{ item.product_attr }}</view>
							<view class="pt10 p-0-30 d-b-c">
								<template v-if="item.is_user_grade != 1">
									<view class="price f22">
										¥
										<text class="f40">{{ item.product_price }}</text>
									</view>
								</template>
								<template v-else>
									<view class="text-l-t f22">
										¥
										<text class="f40">{{ item.product_price }}</text>
									</view>
								</template>
								<view class="f24 gray9">x{{ item.total_num }}</view>
							</view>
							<view class="mt10 tr f28" v-if="item.is_user_grade == 1">
								<text class="red">会员折扣价：</text>
								<text class="red">{{ item.grade_product_price }}</text>
							</view>
						</view>
					</view>
					<view v-if="item.table_id > 0 && item.table_record_id > 0" class="supplement-box">
						<view class="p20" v-for="(table_item, table_index) in item.tableData" :key="table_index">
							<view class="d-s-s" v-if="table_item.type == 'image'">
								<text class="gray6 mr15">{{ table_item.name }}:</text>
								<image style="width: 80rpx;height: 80rpx;" @click="yulan(table_item.value, 0)"
									:src="table_item.value" mode="aspectFill"></image>
							</view>
							<template v-else>
								<text class="gray6 mr15">{{ table_item.name }}:</text>
								<text>{{ table_item.value }}</text>
							</template>
						</view>
					</view>
					<view class="pt10 d-e-c">
						<!-- 申请售后 -->
						<view class="m-top20 dis-flex flex-x-end">
							<text v-if="item.refund">已申请售后</text>
							<view v-else-if="detail.isAllowRefund" @click="onApplyRefund(item.order_product_id)"><button
									type="default">申请售后</button></view>
						</view>
					</view>
					<view class="pt10 d-e-c" v-if="item.table_id > 0 && item.table_record_id == 0">
						<!-- 补充表单 -->
						<view class="m-top20 dis-flex flex-x-end">
							<view @click="onSaveTable(item.table_id, item.order_product_id)"><button
									class="theme-btn">补充信息</button></view>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!--订单信息-->
		<view class="group bg-white f26">
			<view class="p-20-0 d-b-c" v-if="detail.order_source == 80">
				<text class="">定金：</text>
				<text>￥{{ detail.advance.pay_price }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.pay_price && detail.order_source == 80">
				<text class="">尾款：</text>
				<text>￥{{ detail.total_price }}</text>
			</view>

			<view class="p-20-0">
				<text class="">订单编号：</text>
				<text>{{ detail.order_no }}</text>
			</view>
			<view class="p-20-0">
				<text class="">下单时间：</text>
				<text>{{ detail.create_time }}</text>
			</view>
			<view class="p-20-0">
				<text class="">支付方式：</text>
				<text>{{ detail.pay_type.text }}</text>
			</view>
			<view class="p-20-0">
				<text class="">配送方式：</text>
				<text>{{ detail.delivery_type.text }}</text>
			</view>
			<view class="p-20-0"
				v-if="detail.delivery_type.value == 30 && detail.order_status.value == 30 && detail.virtual_content != ''">
				<text class="">发货信息：</text>
				<text>{{ detail.virtual_content }}</text>
			</view>
			<view class="p-20-0">
				<text class="">备注：</text>
				<text>{{ detail.buyer_remark }}</text>
			</view>
			<view class="p-20-0" v-if="detail.order_status.value == 20 && detail.cancel_remark != ''">
				<text class="">商家备注：</text>
				<text>{{ detail.cancel_remark }}</text>
			</view>
		</view>

		<view class="group bg-white f26">
			<view class="p-20-0 d-b-c" v-if="detail.order_source == 20">
				<text class="">扣除{{ points_name() }}数：</text>
				<text>-{{ detail.points_num }}</text>
			</view>
			<view class="p-20-0 d-b-c">
				<text class="gray9">订单总额</text>
				<text>¥ {{ detail.total_price }}</text>
			</view>
			<view class="p-20-0 d-b-c">
				<text class="">运费</text>
				<text>¥ {{ detail.express_price }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.product_reduce_money > 0">
				<text class="">商品立减</text>
				<text>-¥ {{ detail.product_reduce_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.fullreduce_money > 0">
				<text class="">满减</text>
				<text>-¥ {{ detail.fullreduce_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.points_money > 0">
				<text class="">{{ points_name() }}抵扣</text>
				<text>-¥ {{ detail.points_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.advance && detail.advance.reduce_money > 0">
				<text class="">尾款立减</text>
				<text>-¥ {{ detail.advance.reduce_money }}</text>
			</view>
			<view class="p-20-0 d-b-c" v-if="detail.coupon_money > 0">
				<text class="">优惠券</text>
				<text>-¥ {{ detail.coupon_money }}</text>
			</view>
			<view class="p-20-0 d-e-c fb f34">
				实付金额：
				<text class="red"
					v-if="detail.order_source == 80">¥{{ (detail.pay_price * 1 + detail.advance.pay_price * 1).toFixed(2) }}</text>
				<text class="red" v-else>¥ {{ detail.pay_price }}</text>
			</view>
		</view>
		<template v-if="detail.order_source != 80">
			<view v-if="detail.order_status.value != 20 && detail.order_status.value != 30" class="foot-btns">
				<!-- 取消订单 -->
				<button class="theme-borderbtn" v-if="detail.pay_status.value == 10"
					@click="cancelOrder(detail.order_id)">取消订单</button>

				<block v-if="detail.order_status.value != 21">
					<block v-if="detail.pay_status.value == 20 && detail.delivery_status.value == 10">
						<button @click="cancelOrder(detail.order_id)" class="theme-borderbtn">申请取消</button>
					</block>
				</block>
				<text v-else class="count f28 gray9">取消申请中</text>
				<block v-if="detail.pay_status.value == 10">
					<!-- 订单付款 -->
					<button @click="onPayOrder(detail.order_id)" v-if="detail.pay_status.value == 10"
						class="ml10 theme-btn">去支付</button>
				</block>
				<!-- 确认收货 -->
				<block v-if="detail.delivery_status.value == 20 && detail.receipt_status.value == 10">
					<button class="theme-btn"
						v-if="detail.pay_type.value ==20 && detail.pay_source =='wx' && is_send_wx"
						@click="wxOrder(detail)">确认收货</button>
					<button v-else @click="orderReceipt(detail.order_id)" class="pay-btn theme-btn">确认收货</button>
				</block>
			</view>
		</template>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				/*是否加载完成*/
				loadding: true,
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				/*是否显示支付类别弹窗*/
				isPayPopup: false,
				/*订单id*/
				order_id: 0,
				/*订单详情*/
				detail: {
					order_status: [],
					address: {
						region: []
					},
					product: [],
					pay_type: [],
					delivery_type: [],
					pay_status: []
				},
				extractStore: {},
				is_send_wx: null,
				mch_id: null,
			};
		},
		onLoad(e) {
			this.order_id = e.order_id;
		},
		onShow() {
			/*获取订单详情*/
			this.getData();
		},
		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				let order_id = self.order_id;
				uni.showLoading({
					title: '加载中'
				});
				self._get(
					'user.order/detail', {
						order_id: order_id
					},
					function(res) {
						self.mch_id = res.data.mch_id;
						self.is_send_wx = res.data.is_send_wx;
						self.detail = res.data.order;
						self.extractStore = res.data.order.extractStore;
						self.loadding = false;
						uni.hideLoading();
					}
				);
			},
			/*取消订单*/
			cancelOrder(e) {
				let self = this;
				let order_id = e;
				uni.showModal({
					title: '提示',
					content: '您确定要取消当前订单吗?',
					success: function(o) {
						if (o.confirm) {
							uni.showLoading({
								title: '正在处理'
							});
							self._get(
								'user.order/cancel', {
									order_id: order_id
								},
								function(res) {
									uni.hideLoading();
									uni.showToast({
										title: '操作成功',
										duration: 2000,
										icon: 'success'
									});
									self.getData();
								}
							);
						}
					}
				});
			},

			/*确认收货*/
			orderReceipt(order_id) {
				let self = this;
				uni.showModal({
					title: '提示',
					content: '您确定要收货吗?',
					success: function(o) {
						if (o.confirm) {
							uni.showLoading({
								title: '正在处理'
							});
							self._post(
								'user.order/receipt', {
									order_id: order_id
								},
								function(res) {
									uni.hideLoading();
									uni.showToast({
										title: res.msg,
										duration: 2000,
										icon: 'success'
									});
									self.getData();
								}
							);
						}
					}
				});
			},
			wxOrder(item) {
				let self = this;
				if (wx.openBusinessView) {
					wx.openBusinessView({
						businessType: 'weappOrderConfirm',
						extraData: {
							merchant_id: self.mch_id,
							merchant_trade_no: item.trade_no,
							transaction_id: item.transaction_id
						},
						success() {
							self._post(
								'user.order/receipt', {
									order_id: item.order_id
								},
								function(res) {
									uni.showToast({
										title: res.msg,
										duration: 2000,
										icon: 'success'
									});
									self.listData = [];
									self.getData();
								}
							);
						},
						fail() {
							//dosomething
						},
						complete() {
							//dosomething
						}
					});
				} else {
					//引导用户升级微信版本
				}
			},
			/*查看物流*/
			gotoExpress(order_id) {
				this.gotoPage('/pages/order/express/express?order_id=' + order_id);
			},
			/*申请售后*/
			onApplyRefund(e) {
				this.gotoPage('/pages/order/refund/apply/apply?order_product_id=' + e);
			},
			onSaveTable(table_id, order_product_id) {
				this.gotoPage('/pages/plus/table/table?table_id=' + table_id + '&order_product_id=' + order_product_id);
			},
			/*支付方式选择*/
			onPayOrder(orderId) {
				let self = this;
				self.gotoPage('/pages/order/cashier?order_id=' + orderId);
			}
		}
	};
</script>

<style scoped lang="scss">
	page {}

	.order-express {
		background: #ffffff;
		margin: 0 20rpx;
		border-radius: 12rpx;
		margin-top: 20rpx;
	}

	.order-express .icon-box .iconfont {
		font-size: 50rpx;
	}

	.order-datail {
		padding-bottom: 90rpx;
		background-color: #f2f2f2;
	}

	.state-cont .countdown-datetime {
		margin-top: 16rpx;
	}

	.state-cont .countdown-datetime text {
		padding: 4rpx 8rpx;
		border-radius: 4rpx;
		background: rgba(0, 0, 0, 0.4);
	}

	.group {
		margin: 0 20rpx;
		margin-top: 20rpx;
		border-radius: 12rpx;
	}

	.foot-btns button {
		height: 60rpx;
		line-height: 60rpx;
		border-radius: 30rpx;
	}

	.supplement-box {
		margin-top: 20rpx;
		@include background_color('bg-tips');
		@include border_color('border_color');
		border: 1rpx solid;
		border-radius: 12rpx;
		line-height: 1.5;
	}
</style>
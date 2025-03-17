<template>
	<view>
		<view class="top-tabbar">
			<view :class="state_active == 0 ? 'tab-item active' : 'tab-item'" @click="stateFunc(0)">未使用</view>
			<view :class="state_active == 1 ? 'tab-item active' : 'tab-item'" @click="stateFunc(1)">已使用</view>
			<view :class="state_active == 2 ? 'tab-item active' : 'tab-item'" @click="stateFunc(2)">已过期</view>
		</view>

		<!--列表-->
		<scroll-view scroll-y="true" class="scroll-Y" :style="'height:' + scrollviewHigh + 'px;'" lower-threshold="50"
			@scrolltoupper="scrolltoupperFunc" @scrolltolower="scrolltolowerFunc">
			<view class="p30 bg-white">
				<view class="item-wrap mb20" v-for="(item, index) in listData" :key="index">
					<view
						:class="item.is_expire==0&&item.is_use==0 ? 'coupon-item coupon-item-'+item.color.text : 'coupon-item coupon-item-gray'">
						<!--装饰用的小圆-->
						<view class="circles">
							<text v-for="(circle, num) in 8" :key="num"></text>
						</view>
						<view class="info">
							<view>{{item.coupon_type.text}}</view>
						</view>
						<view class="operation d-b-c">
							<view class="flex-1 coupon-content">
								<view>
									<template v-if=" item.coupon_type.value == 10 ">
										<view class="price">
											<text class="f40 fb">减{{ item.reduce_price*1 }}元</text>
										</view>
									</template>
									<template v-if="item.coupon_type.value == 20 ">
										<text class="f40 fb">{{ item.discount }}</text><text>折</text>
									</template>
								</view>
								<view class="f30">{{item.min_price>0?'满'+item.min_price*1+'元可用':'无门槛'}}</view>
								<view class="f24">
									有效期：{{item.start_time.text}}至{{item.end_time.text}}
								</view>
							</view>

							<view class="right-box d-c-c">
								<template v-if="item.state.value>0">
									<view type="default" v-if="item.apply_range!=10" class="f30"
										@click.stop="gotoPage('/pages/coupon/detail?coupon_id='+ item.coupon_id+'&apply_range='+item.apply_range)">
										立即使用
									</view>
									<view type="default" v-else class="f30"
										@click.stop="gotoPage('/pages/index/index')">
										立即使用
									</view>
								</template>
								<view v-else class="f30">
									<text>{{item.state.text}}</text>
								</view>
							</view>
						</view>
					</view>
					<view class="range_item d-b-c" v-if="item.apply_range == 20"
						@click.stop="gotoPage('/pages/coupon/detail?coupon_id='+ item.coupon_id+'&apply_range='+item.apply_range)">
						<view>仅可购买指定部分商品</view>
						<view><text class="icon iconfont icon-jiantou" style="color: #999999; font-size: 24rpx;"></text>
						</view>
					</view>
					<view class="range_item d-b-c" v-if="item.apply_range == 30"
						@click.stop="gotoPage('/pages/coupon/detail?coupon_id='+ item.coupon_id+'&apply_range='+item.apply_range)">
						<view>仅可购买指定分类商品</view>
						<view><text class="icon iconfont icon-jiantou" style="color: #999999; font-size: 24rpx;"></text>
						</view>
					</view>
				</view>
			</view>
			<view class="d-c-c p30" v-if="listData.length == 0 && !loading">
				<text class="iconfont icon-wushuju"></text>
				<text class="cont">亲，暂无相关记录哦</text>
			</view>
			<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
		</scroll-view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore
		},
		data() {
			return {
				/*手机高度*/
				phoneHeight: 0,
				/*可滚动视图区域高度*/
				scrollviewHigh: 0,
				/*状态选中*/
				state_active: 0,
				/*列表*/
				/*当前第几页*/
				page: 1,
				/*一页多少条*/
				last_page: 0,
				list_rows: 15,
				listData: [],
				no_more: false,
				loading: false,
				data_type: 'not_use'
			};
		},
		mounted() {
			/*初始化*/
			this.init();
		},
		onShow() {
			this.initData()
			/*获取数据*/
			this.getData();
		},
		computed: {
			/*加载中状态*/
			loadingType() {
				if (this.loading) {
					return 1;
				} else {
					if (this.listData.length != 0 && this.no_more) {
						return 2;
					} else {
						return 0;
					}
				}
			}
		},
		methods: {
			/*初始化*/
			init() {
				let self = this;
				uni.getSystemInfo({
					success(res) {
						self.phoneHeight = res.windowHeight;
						// 计算组件的高度
						let view = uni.createSelectorQuery().select('.top-tabbar');
						view.boundingClientRect(data => {
							let h = self.phoneHeight - data.height;
							self.scrollviewHigh = h;
						}).exec();
					}
				});
			},
			initData() {
				this.listData = [];
				this.page = 1;
				this.no_more = false;
			},
			/*获取数据*/
			getData() {
				let self = this;
				self.loading = true;
				let data_type = self.data_type;
				self._get('user.coupon/lists', {
					page: self.page,
					list_rows: self.list_rows,
					data_type: data_type,
				}, function(res) {
					self.loading = false;
					self.listData = self.listData.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
					if (res.data.list.last_page <= 1) {
						self.no_more = true;
						return false;
					}
				});
			},

			/*可滚动视图区域到底触发*/
			scrolltolowerFunc() {
				let self = this;
				if (self.no_more) {
					return;
				}
				self.page++;
				if (self.page <= self.last_page) {
					self.getData();
				} else {
					self.no_more = true;
				}
			},
			/*状态切换*/
			stateFunc(e) {
				let self = this;
				if (self.state_active != e) {
					if (e == 0) {
						self.data_type = 'not_use';
					}
					if (e == 1) {
						self.data_type = 'is_use';
					}
					if (e == 2) {
						self.data_type = 'is_expire';
					}
					self.state_active = e;
					self.initData();
					self.getData();
				}
			},

			/*可滚动视图区域到顶触发*/
			scrolltoupperFunc() {
				console.log('滚动视图区域到顶');
			},
			/*查看规则*/
			lookRule(item) {
				item.rule = true;
			},

			/*关闭规则*/
			closeRule(item) {
				item.rule = false;
			}
		}
	};
</script>

<style>
	.range_item {
		border: 1rpx solid #D9D9D9;
		border-top: none;
		padding: 8rpx;
		border-bottom-left-radius: 10rpx;
		border-bottom-right-radius: 10rpx;
		color: #666666;
		box-shadow: 0 0 8rpx rgba(0, 0, 0, 0.1);
	}
</style>

<template>
	<view style="flex: 1;" class="br6 mt16">
		<view class="bg-white">
			<view class="d-b-c m-0-20 border-b-d9 p-20-0" @click="isRevise=true">
				<view class="d-s-c" v-if="last_extract.linkman==''&&last_extract.phone==''">
					<view class="icon-box mr10 linkmen_add">
						<text class="icon iconfont icon-jia"></text>
					</view>
					<view>添加提货人信息</view>
				</view>
				<view class="flex-1 d-b-c ww100" v-else>
					<view class="flex-1">提货人：{{last_extract.linkman}} <text class="ml10">{{last_extract.phone}}</text>
					</view>
					<view class="icon-box">
						<view class="d-c-c">
							<view class="gray9 f26">修改</view>
							<view class="icon iconfont icon-jiantou"></view>
						</view>
					</view>
				</view>

			</view>
		</view>

		<!--地址-->
		<template v-if="!extract_store || !extract_store.store_id">
			<view class="d-b-c pr20 bg-white" @click="addAddress()">
				<view class="add-address d-s-c">
					<view class="icon-box mr10">
						<text class="icon iconfont icon-dizhi1"></text>
					</view>
					<text>请选择自提点</text>
				</view>
			</view>
		</template>
		<template v-if='extract_store&&extract_store.store_id'>
			<view class="d-b-c pr20 bg-white" @click="addAddress()">
				<view class="address-defalut-wrap">
					<view class="info d-s-s">
						<text class="state">当前自提点</text>
						<view class="province-c-a d-s-s flex-1">
							<text>{{ extract_store.region.province }}</text>
							<text>{{ extract_store.region.city }}</text>
							<text>{{ extract_store.region.region }}</text>
						</view>
					</view>
					<view class="address">
						<text class="fb gray3">{{ extract_store.store_name }}</text>
						<view class="icon-box"></view>
					</view>
					<view class="user">
						<text class="name">{{ extract_store.address }}</text>
						<text class="tel">{{ extract_store.phone }}</text>
					</view>
				</view>
				<view>
					<i class='iconfont icon-jiantou'></i>
				</view>
			</view>
		</template>
		<Adress :isAddress='isAddress' :store_id='store_id' @close="closeAdress"></Adress>
		<uniPopup :show="isRevise" type="middle" @hidePopup="hidePopupFunc">
			<view class="ww100">
				<view class="t-c f36 pb20">添加提货人</view>
				<view class="d-s-c p-30-0 border-b-d9 border-t-d9 f32">提货人 :<input type="text" placeholder="提货人姓名"
						v-model="last_extract.linkman" /></view>
				<view class="d-s-c p-30-0 border-b-d9 f32">手机号:<input type='number' placeholder="提货人手机号"
						v-model="last_extract.phone" /></view>
				<button class="revise_btn" @click="revise">保存</button>
			</view>
		</uniPopup>
	</view>
</template>

<script>
	import Adress from './address/address';
	import uniPopup from '@/components/uni-popup.vue';
	export default {
		data() {
			return {
				isAddress: false,
				store_id: 0,
				isRevise: false,
				linkman: '',
				phone: '',
			};
		},
		components: {
			Adress,
			uniPopup
		},
		props: ['extract_store', 'last_extract'],
		onLoad() {

		},
		mounted() {

		},
		methods: {
			/*添加地址*/
			addAddress() {
				let store_id = -1;
				if (this.extract_store && this.extract_store.store_id) {
					store_id = this.extract_store.store_id;
				}
				this.store_id = store_id
				this.isAddress = true;
			},
			closeAdress() {
				this.isAddress = false;
			},
			revise() {
				let params = {
					linkman: this.last_extract.linkman,
					phone: this.last_extract.phone
				}
				uni.setStorageSync('extract', params)
				this.$fire.fire('extract', params)
				this.isRevise = false;
			},
			hidePopupFunc() {
				this.isRevise = false;
			}
		}
	};
</script>

<style scoped lang="scss">
	.mt16 {
		margin-top: 16rpx;
	}

	.buy-checkout.vender .item .key {
		width: 200rpx;
	}

	.pr20 {
		padding-right: 20rpx;
		/* padding-bottom: 40rpx; */
	}

	.icon-box.linkmen_add {
		@include background_color('background_color');
		width: 38rpx;
		height: 38rpx;
		border-radius: 8rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.icon-box.linkmen_add .icon-jia {
		color: #FFFFFF;
		font-size: 22rpx;
	}

	.revise_btn {
		@include background_color('background_color');
		border: none;
		margin-top: 30rpx;
		color: #FFFFFF;
	}

	.t-c {
		text-align: center;
	}

	.m-30-0 {
		margin: 30rpx 0;
	}

	.icon.icon-jiantou {
		color: #999999;
		font-size: 26rpx;
	}

	.icon-box .icon.icon-dizhi1 {
		@include font_color('font_color');
		font-size: 44rpx;
	}
</style>
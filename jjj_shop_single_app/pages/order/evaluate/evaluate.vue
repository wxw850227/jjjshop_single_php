<template>
	<view class="evaluate pb100" v-if="!loadding">
		<form @submit="formSubmit" @reset="formReset">
			<view class="evaluate-item p30" v-for="(item, index) in tableData" :key="index">
				<view class="product d-s-c">
					<view class="cover">
						<image :src="item.image.file_path" mode="aspectFit"></image>
					</view>
					<view class="info ml20">
						<view class="name f28">{{ item.product_name }}</view>
						<view class="price pt10 f22 red">
							¥
							<text class="f40">{{ item.product_price }}</text>
						</view>
					</view>
				</view>
				<view class="grade d-b-c p-30-0 mt30">
					<view :class="item.score == 10 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="gradeFunc(item, 10, index)">
						<view class="item d-c-c">
							<text class="icon iconfont icon-pingjiahaoping"></text>
							<text class="ml10">好评</text>
						</view>
					</view>
					<view :class="item.score == 20 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="gradeFunc(item, 20, index)">
						<view class="item d-c-c">
							<text class="icon iconfont icon-pingjiazhongping"></text>
							<text class="ml10">中评</text>
						</view>
					</view>
					<view :class="item.score == 30 ? 'flex-1 d-c-c active' : 'flex-1 d-c-c'" @click="gradeFunc(item, 30, index)">
						<view class="item d-c-c">
							<text class="icon iconfont icon-pingjiachaping"></text>
							<text class="ml10">差评</text>
						</view>
					</view>
				</view>
				<view class="textarea-box d-s-c f28">
					<textarea class="p10 box-s-b border flex-1" v-model="item.content" placeholder="请输入评价内容" />
				</view>
				<view class="upload-list d-s-c">
					<view class="item" v-for="(imgs, img_num) in item.image_list" :key="img_num" @click="deleteImg(index, img_num)">
						<image :src="imgs.file_path" mode="aspectFit"></image>
					</view>
					<view class="item upload-btn d-c-c d-c" @click="openUpload(index)" v-if="item.image_list.length < 9">
						<text class="icon iconfont icon-xiangji"></text>
						<text class="gray9">上传图片</text>
					</view>
				</view>
			</view>
			<view class="foot-btns"><button form-type="submit" class="btn-red">确认提交</button></view>
		</form>

		<!--上传图片-->
		<Upload v-if="isUpload" @getImgs="getImgsFunc"></Upload>
	</view>
</template>

<script>
import Upload from '@/components/upload/upload.vue';
export default {
	components: {
		Upload
	},
	data() {
		return {
			/*是否加载完成*/
			loadding: true,
			order_id: '',
			/*页面数据*/
			tableData: [],
			score: 10,
			/*是否打开上传图片*/
			isUpload: false,
			image_id: [],
			img: '/static/temp/photo.jpg',
			index: ''
		};
	},
	onLoad(e) {
		this.order_id = e.order_id;
	},
	mounted() {
		uni.showLoading({
			title: '加载中'
		});
		/*获取页面数据*/
		this.getData();
	},
	methods: {
		getData() {
			let self = this;
			let order_id = self.order_id;
			self._get(
				'user.comment/order',
				{
					order_id: order_id
				},
				function(res) {
					self.tableData = res.data.productList;
					let b = self.tableData.forEach((item, index) => {
						self.tableData[index].score = 10;
						self.tableData[index].image_list = [];
					});
					self.loadding = false;
					uni.hideLoading();
				}
			);
		},
		/*选择评价*/
		gradeFunc(item, e, index) {
			item.score = e;
			this.tableData[index] = item;
		},

		/*提交*/
		formSubmit: function(e) {
			let self = this;
			let order_id = self.order_id;
			self._post(
				'user.comment/order',
				{
					order_id: order_id,
					formData: JSON.stringify(this.tableData)
				},
				function(res) {
					self.showSuccess('评价成功！',function(){
						self.gotoPage('/pages/order/myorder', 'redirect');
					});
				}
			);
		},

		/*打开上传图片*/
		openUpload(index) {
			this.index = index;
			this.isUpload = true;
		},

		/*获取上传的图片*/
		getImgsFunc(e) {
			let self = this;
			if(e&&typeof(e)!='undefined'){
				let index = self.index;
				self.tableData[index].image_list = self.tableData[index].image_list.concat(e);
			}
			self.isUpload = false;
		},
		
		/*点击图片删除*/
		deleteImg(i,n){
			let self =this;
			let data = this.tableData[i];
			data.image_list.splice(n,1);
			this.tableDat[i] = data;
		}
		
	}
};
</script>

<style>
.evaluate {
	/* background: #eeeeee; */
}
.evaluate-item {
	margin-bottom: 20rpx;
	background: #ffffff;
	border-bottom: 1px solid #dddddd;
}
.product .cover,
.product .cover image {
	width: 160rpx;
	height: 160rpx;
}
.evaluate .grade .item .iconfont {
	width: 60rpx;
	height: 60rpx;
	line-height: 60rpx;
	border-radius: 50%;
	font-size: 40rpx;
	color: #ffffff;
	text-align: center;
}
.evaluate .grade .item {
	height: 60rpx;
	padding-right: 20rpx;
	line-height: 60rpx;
	border-radius: 30rpx;
	transition: background-color 0.4s;
}
.evaluate .grade .flex-1:nth-child(1) .iconfont {
	background: #f42222;
}
.evaluate .grade .flex-1:nth-child(2) .iconfont {
	background: #f2b509;
}
.evaluate .grade .flex-1:nth-child(3) .iconfont {
	background: #999999;
}
.evaluate .grade .flex-1.active:nth-child(1) .item {
	background: #f42222;
	color: #ffffff;
}
.evaluate .grade .flex-1.active:nth-child(2) .item {
	background: #f2b509;
	color: #ffffff;
}
.evaluate .grade .flex-1.active:nth-child(3) .item {
	background: #999999;
	color: #ffffff;
}
</style>

<template>
	<div class="product-add">
		<!--form表单-->
		<el-form size="small" ref="form" :model="form" label-width="200px">
			<!--添加门店-->
			<div class="common-form">修改物流公司</div>
			<el-form-item label="物流公司名称 ">
				<el-input v-model="form.express_name" class="max-w460"></el-input>
				<div class="tips">
					请对照
					<el-link type="primary" :underline="false" @click="gotoCompany()">物流公司编码表</el-link>
					填写
				</div>
			</el-form-item>
			<el-form-item label="物流公司代码 ">
				<el-input v-model="form.express_code" class="max-w460"></el-input>
				<div class="tips">用于快递100API查询物流信息，务必填写正确</div>
			</el-form-item>
			<el-form-item label="微信物流公司id ">
				<el-input v-model="form.wx_code" class="max-w460"></el-input>
				<div class="tips">请对照
					<el-link type="primary" :underline="false" @click="gotoWxCompany()">
						微信物流公司编码表
					</el-link>
					填写
				</div>
				<div class="tips">用于向小程序发货的物流公司id，下载微信物流表格对比快递100物流公司编码表，务必填写正确，没有找到编码不填</div>
			</el-form-item>
			<el-form-item label="排序">
				<el-input v-model="form.sort" type="number" class="max-w460"></el-input>
				<div class="tips">数字越小越靠前</div>
			</el-form-item>

			<!--提交-->
			<div class="common-button-wrapper"><el-button type="primary" @click="onSubmit"
					:loading="loading">提交</el-button></div>
		</el-form>
	</div>
</template>

<script>
	import SettingApi from '@/api/setting.js';

	export default {
		data() {
			return {
				/*切换菜单*/
				// activeIndex: '1',
				/*form表单数据*/
				form: {
					express_id: '',
					express_name: '',
					express_code: '',
					wx_code: "",
					sort: ''
				},
				loading: false
			};
		},
		created() {
			this.getData();
		},

		methods: {
			/*获取数据*/
			getData() {
				let self = this;
				// 取到路由带过来的参数
				const params = this.$route.query.express_id;
				SettingApi.expressDetail({
							express_id: params
						},
						true
					)
					.then(data => {
						let detail = data.data.detail;
						// 将数据放在当前组件的数据内
						self.form.express_id = detail.express_id;
						self.form.express_name = detail.express_name;
						self.form.express_code = detail.express_code;
						self.form.wx_code = detail.wx_code;
						self.form.sort = detail.sort;
					})
					.catch(error => {});
			},

			/*提交表单*/
			onSubmit() {
				let self = this;
				self.loading = true;
				let params = this.form;
				SettingApi.editExpress(params, true)
					.then(data => {
						self.loading = false;
						ElMessage({
							message: '恭喜你，修改成功',
							type: 'success'
						});
						self.$router.push('/setting/express/index');
					})
					.catch(error => {
						self.loading = false;
					});
			},

			/*跳转物流编码*/
			gotoCompany() {
				let baseUrl = window.location.protocol + '//' + window.location.host;
				window.location.href = baseUrl + '/express.xlsx';
			},
			/*跳转微信物流编码*/
			gotoWxCompany() {
				let baseUrl = window.location.protocol + '//' + window.location.host;
				window.location.href = baseUrl + '/wx_express.xlsx';
			}
		}
	};
</script>

<style>
	.tips {
		color: #ccc;
	}
</style>
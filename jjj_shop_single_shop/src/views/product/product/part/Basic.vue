<template>
  <div class="basic-setting-content pl16 pr16">
    <!--基本信息-->
    <div class="common-form">基本信息</div>
    <el-form-item label="商品名称：" :rules="[{ required: true, message: '请填写商品名称' }]" prop="model.product_name">
      <el-input v-model="form.model.product_name" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="商品编码："><el-input v-model="form.model.product_no" class="max-w460"></el-input></el-form-item>
    <el-form-item label="所属分类：" :rules="[{ required: true, message: '你选择商品分类' }]" prop="model.category_id">
      <el-select v-model="form.model.category_id">
        <template v-for="cat in form.category" :key="cat.category_id">
          <el-option :value="cat.category_id" :label="cat.name"></el-option>
          <template v-if="cat.child !== undefined" >
            <template v-for="two in cat.child"  :key="two.category_id">
              <el-option :value="two.category_id" :label="two.name" style="padding-left: 30px;"></el-option>
              <template v-if="two.child !== undefined" > 
                <template v-for="three in two.child" :key="three.category_id">
                  <el-option :value="three.category_id" :label="three.name" style="padding-left: 60px;"></el-option>
                </template>
              </template>
            </template>
          </template>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item label="销售状态：">
      <el-radio-group v-model="form.model.product_status">
        <el-radio :label="10">立即上架</el-radio>
        <el-radio :label="20">放入仓库</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="商品图片：" :rules="[{ required: true, message: '请上传商品图片' }]" prop="model.image">
      <div class="draggable-list">
				<template v-if="form.model.image&&form.model.image.length>0">
					<draggable v-model="form.model.image" group="people" item-key="id" class="draggable-list">
						<template #item="{element}">
							<div class="item">
								<img v-img-url="element.file_path" />
								<a href="javascript:void(0);" class="delete-btn" @click.stop="deleteImg(element)">
									<el-icon>
										<Close />
									</el-icon>
								</a>
							</div>
						</template>
					</draggable>
				</template>

				<div class="item img-select" @click="openProductUpload('image', 'image')"><el-icon>
						<Plus />
					</el-icon></div>
			</div>
    </el-form-item>
    <el-form-item label="商品视频：">
      <el-row>
        <div class="draggable-list">
          <div class="item img-select" v-if="form.model.video_id==0" @click="openProductUpload('video', 'video')">
            <el-icon><Plus /></el-icon>
          </div>
          <div v-if="form.model.video_id!=0">
            <video width="150" height="150" :src="form.model.video.file_path" :autoplay="false" controls>
              您的浏览器不支持 video 标签
            </video>
            <div>
              <el-button icon="Picture" @click="delVideo">删除视频</el-button>
            </div>
          </div>
        </div>
      </el-row>
    </el-form-item>
    <el-form-item label="视频封面：">
      <el-row>
        <div class="draggable-list">
          <div class="item img-select" v-if="form.model.poster_id==0" @click="openProductUpload('image', 'poster')">
            <el-icon><Plus/></el-icon>
          </div>
          <div v-if="form.model.poster_id!=0" class="item" @click="openProductUpload('image', 'poster')">
            <img :src="form.model.poster.file_path" width="100" height="100" />
          </div>
        </div>
      </el-row>
    </el-form-item>
    <el-form-item label="商品卖点：">
      <el-input type="textarea" v-model="form.model.selling_point" class="max-w460"></el-input>
    </el-form-item>
    <!--其他设置-->
    <div class="common-form mt50">其他设置</div>
    <el-form-item label="商品属性：">
      <el-radio-group v-model="form.model.is_virtual">
        <el-radio :label="0">实物商品</el-radio>
        <el-radio :label="1">虚拟商品(无需发货)</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="运费模板：" :rules="[{ required: true, message: '选择运费模板' }]" prop="model.delivery_id" v-if="form.model.is_virtual==0">
      <el-select v-model="form.model.delivery_id">
        <el-option v-for="item in form.delivery" :value="item.delivery_id" :key="item.delivery_id" :label="item.name"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="初始销量：">
      <el-input type="number" min="0" v-model="form.model.sales_initial" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="商品排序：" :rules="[{ required: true, message: ' ' }]" prop="model.product_sort">
      <el-input type="number" min="0" v-model="form.model.product_sort" class="max-w460"></el-input>
    </el-form-item>
    <el-form-item label="限购数量：" :rules="[{ required: true, message: ' ' }]" prop="model.limit_num">
      <el-input type="number" min="0" v-model="form.model.limit_num" class="max-w460"></el-input>
      <div class="gray9">每个会员购买的最大数量，0为不限购</div>
    </el-form-item>
    <el-form-item label="发货类型：" v-if="form.model.is_virtual==1">
      <el-radio-group v-model="form.model.virtual_auto">
        <el-radio :label="1">自动</el-radio>
        <el-radio :label="0">手动</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="虚拟内容：" :rules="[{ required: true, message: '请填写虚拟内容' }]" prop="model.virtual_content" v-if="form.model.is_virtual==1">
      <el-input type="text" v-model="form.model.virtual_content" class="max-w460"></el-input>
      <div class="gray9">虚拟物品内容</div>
    </el-form-item>
    <el-form-item label="会员等级限制：">
      <el-select v-model="form.model.grade_ids" multiple placeholder="请选择" style="width: 460px;">
        <el-option
          v-for="item in form.gradeList"
          :key="item.grade_id"
          :label="item.name"
          :value="item.grade_id">
        </el-option>
      </el-select>
      <div class="gray9">仅设置的等级会员可购买，不设置则都可以购买</div>
    </el-form-item>
    <!--商品图片组件-->
    <Upload v-if="isProductUpload" :config="config" :isupload="isProductUpload" @returnImgs="returnProductImgsFunc">上传图片</Upload>
  </div>
</template>

<script>

import Upload from '@/components/file/Upload.vue';
import draggable from 'vuedraggable';
export default {
  components: {
    Upload,
    draggable
  },
  data() {
    return {
      isProductUpload: false,
      config: {},
      file_name: 'image'
    };
  },
  inject: ['form'],
  created() {

  },
  methods: {

    /*打开上传图片*/
    openProductUpload: function(file_type, file_name) {
      this.file_name = file_name;
      if(file_type == 'image'){
        this.config = {
          total: 9,
          file_type: 'image'
        };
      }else{
        this.config = {
          total: 1,
          file_type: 'video'
        };
      }
      this.isProductUpload = true;
    },

    /*上传商品图片*/
    returnProductImgsFunc(e) {
      console.log(e);
      if (e != null) {
        if(this.file_name == 'video'){
          this.form.model.video_id = e[0].file_id;
          this.form.model.video = e[0];
        }else if(this.file_name == 'image'){
          let imgs = this.form.model.image.concat(e);
          this.form.model.image = imgs;
        }else if(this.file_name == 'poster'){
          this.form.model.poster_id = e[0].file_id;
          this.form.model.poster = e[0];
        }
      }
      this.isProductUpload = false;
    },

    /*删除商品图片*/
    deleteImg(index) {
      this.form.model.image.splice(index, 1);
    },
    delVideo(){
      this.form.model.video_id = 0;
      this.form.model.video = {};
    },
  }
};
</script>
<style lang="scss" scoped></style>

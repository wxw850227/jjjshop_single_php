<template>
  <div class="product-add" v-loading="loading">
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="基础设置" name="basic"></el-tab-pane>
      <el-tab-pane label="规格库存" name="spec"></el-tab-pane>
      <el-tab-pane label="商品详情" name="content"></el-tab-pane>
      <el-tab-pane label="高级设置" name="buyset"></el-tab-pane>
    </el-tabs>
    <!--form表单-->
    <el-form size="small" ref="form" :model="form" label-width="180px" v-if="!loading">
      <!--基础信息-->
      <Basic v-show="activeName == 'basic'"></Basic>
      <!--规格设置-->
      <Spec v-show="activeName == 'spec'"></Spec> 
      <!--商品详情-->
      <Content v-show="activeName == 'content'"></Content>
      <!--高级设置-->
      <Buyset v-show="activeName == 'buyset'"></Buyset>
      <!--提交-->
      <div class="common-button-wrapper">
        <el-button size="small" type="info" @click="cancelFunc">取消</el-button>
        <el-button size="small" type="primary" @click="onSubmit" :disabled="save_loading">发布</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import PorductApi from '@/api/product.js';
import Basic from './part/Basic.vue';
import Spec from './part/Spec.vue';
import Content from './part/Content.vue';
import Buyset from './part/Buyset.vue';
import { formatModel } from '@/utils/base.js';
export default {
  components: {
    /*基础信息*/
    Basic,
    /*规格信息*/
    Spec,
    /*商品详情*/
    Content,
    /*高级设置*/
    Buyset
  },
  data() {
    return {
      activeName: 'basic',
      /*商品ID*/
      product_id: 0,
      /*判断是编辑*/
      scene: 'edit',
      /*是否正在加载*/
      loading: true,
      /*是否正在提交保存*/
      save_loading: false,
      /*form表单数据*/
      form: {
        model: {},
        /*商品分类*/
        catgory: [],
        /*运费模板*/
        delivery: [],
        /*会员等级*/
        gradeList: [],
        /*规格数据*/
        specData: null,
        /*是否锁住*/
        isSpecLocked: false,
        /*分销基础设置*/
        basicSetting: {},
        /*万能表单*/
        tableList: []
      },
      /*模型数据*/
      model: {
        /*商品名称*/
        product_name: '',
        video_id: 0,
        poster_id: 0,
        /*商品分类*/
        category_id: null,
        /*商品图片*/
        image: [],
        is_picture: 0,
        contentImage: [],
        /*商品卖点*/
        selling_point: '',
        /*规格类别,默认10单规格，20多规格*/
        spec_type: 10,
        /*库存计算方式,默认20付款减库存，10下单减库存*/
        deduct_stock_type: 20,
        /*检查用户等级*/
        is_alone_grade: 0,
        /*单规格*/
        sku: {
          /*产品价格*/
          product_price: 0,
          /*产品划线价*/
          line_price: 0,
          /*库存数量*/
          stock_num: 0,
          /*商品重量*/
          product_weight: 0,
          /*商品编码*/
          product_no: '',
          product_sku_id:''
        },
        /*多规格类别*/
        spec_many: {
          /*多规格类别*/
          spec_attr: [],
          /*多规格表格数据*/
          spec_list: []
        },
        /*商品详情内容*/
        content: '',
        /*运费模板ID*/
        delivery_id: '',
        /*商品状态*/
        product_status: 10,
        /*初始销量*/
        sales_initial: 0,
        /*商品排序，默认100*/
        product_sort: 100,
        /*是否开启积分赠送,默认1为开启，0为关闭*/
        is_points_gift: 1,
        /*是否允许使用积分抵扣,默认1为允许，0为不允许*/
        is_points_discount: 1,
        /*最大积分抵扣数量*/
        max_points_discount: 0,
        /*会员折扣设置,默认1为单独设置折扣,0为默认折扣*/
        is_enable_grade: 1,
        /*等级金额类型,默认10为百分比，20为固定金额*/
        alone_grade_type: 10,
        /*限购会员*/
        grade_ids: [],
        /*是否开启单独分销,默认0为关闭，1为开启*/
        is_ind_agent: 0,
        /*分销佣金类型,默认10为百分比，20为固定金额*/
        agent_money_type: 10,
        /*一级佣金*/
        first_money: 0,
        /*二级佣金*/
        second_money: 0,
        /*三级佣金*/
        third_money: 0,
        /*是否虚拟商品*/
        is_virtual: 0,
        /*限购数量*/
        limit_num: 0,
        /*虚拟商品发货方式*/
        virtual_auto: 0,
        /*虚拟商品发货内容*/
        virtual_content: '',
        /*关联表单*/
        table_id: '',
        /*商品预告*/
        is_preview: 0,
        /*商品预告时间*/
        preview_time: '',
      }
    };
  },
  provide: function() {
    return {
      form: this.form
    };
  },
  created() {
    /*获取列表*/
    this.product_id = this.$route.query.product_id;
    this.scene = this.$route.query.scene;
    this.getData();
  },
  methods: {
    /**
     * 获取基础数据
     */
    getData: function() {
      let self = this;
      PorductApi.getEditData(
        {
          product_id: self.product_id,
          scene: self.scene
        },
        true
      )
        .then(res => {
          self.loading = false;
          /*单独产品折扣*/
          if(res.data.model.alone_grade_equity!=null&&typeof res.data.model.alone_grade_equity !='undefined'){
            let equitys=res.data.model.alone_grade_equity;
            res.data.gradeList.forEach(item=>{
              item.product_equity=equitys[item.grade_id];
            });
          }
          Object.assign(self.form, res.data);

          if (res.data.specData) {
            self.form.model.spec_many = res.data.specData;
          } else {
            self.form.model.spec_many = {
              spec_attr: [],
              spec_list: []
            }
            self.form.model.sku = res.data.model.sku[0];
          }
          self.form.model.product_status = res.data.model.product_status.value;
          // 等级id转换成数组
          for(let i=0;i<self.form.model.grade_ids.length;i++){
            self.form.model.grade_ids[i] = parseInt(self.form.model.grade_ids[i]);
          }
          if(self.form.model.table_id == 0){
            self.form.model.table_id = '';
          }
        })
        .catch(error => {
          self.loading = false;
        });
    },

    /*转JSON字符串*/
    convertJson(list){
      let obj={};
      list.forEach(item=>{
        obj[item.grade_id]=item.product_equity;
      });
      return JSON.stringify(obj);
    },

    /*提交*/
    onSubmit: function() {
      let self = this;
      self.$refs.form.validate(valid => {
        if (valid) {
          let params = formatModel(self.model, self.form.model);
          params.scene = self.scene;
          params.image = self.ImgKeepId(params.image);
          params.product_id = self.product_id;
          params.alone_grade_equity=self.convertJson(self.form.gradeList);
          self.save_loading = true;
          PorductApi.editProduct({
             product_id: self.product_id,
             scene: self.scene,
             params: JSON.stringify(params)
          }, true)
            .then(data => {
              self.save_loading = false;
              ElMessage({
                message: '保存成功',
                type: 'success'
              });
              self.cancelFunc();
            })
            .catch(error => {
              self.save_loading = false;
            });
        }
      });
    },

    /*图片数值只保留id*/
    ImgKeepId(list) {
      let arr = [];
      for (let i = 0, length = list.length; i < length; i++) {
        let obj = {
          image_id: list[i].image_id,
          file_id: list[i].file_id
        };
        arr.push(obj);
      }
      return arr;
    },

    /*保存为草稿*/
    Draft() {
      let self = this;
      self.form.model.product_status = 30;
      self.onSubmit();
    },

    /*取消*/
    cancelFunc() {
      this.$router.back(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
.basic-setting-content {
}

.product-add {
  padding-bottom: 50px;
}
</style>

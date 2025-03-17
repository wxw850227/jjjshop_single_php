<template>
  <div class="buy-set-content pl16 pr16">
    <!--积分设置-->
    <div class="common-form">积分设置</div>
    <el-form-item label="是否开启积分赠送：">
      <el-radio-group v-model="form.model.is_points_gift">
        <el-radio :label="1">开启</el-radio>
        <el-radio :label="0">关闭</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="是否允许使用积分抵扣：">
      <el-radio-group v-model="form.model.is_points_discount">
        <el-radio :label="1">允许</el-radio>
        <el-radio :label="0">不允许</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item v-if="form.model.is_points_discount == 1" label="最大抵扣积分数量：" :rules="[{ required: true, message: ' ' }]" prop="model.max_points_discount">
      <el-input type="number" min="0" v-model="form.model.max_points_discount" class="max-w460"></el-input>
    </el-form-item>
    <!--会员折扣设置-->
    <div class="common-form mt50">会员折扣设置</div>
    <el-form-item label="是否开启会员折扣：">
      <el-radio-group v-model="form.model.is_enable_grade">
        <el-radio :label="1">开启</el-radio>
        <el-radio :label="0">关闭</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="会员折扣设置：">
      <el-radio-group v-model="form.model.is_alone_grade">
        <el-radio :label="0">默认折扣</el-radio>
        <el-radio :label="1">单独设置折扣</el-radio>
      </el-radio-group>
      <div class="gray9" v-if="form.model.is_alone_grade==0">默认折扣：默认为用户所属会员等级的折扣率</div>
    </el-form-item>

    <el-form-item label="折扣佣金类型：" v-if="form.model.is_alone_grade==1">
      <el-radio-group v-model="form.model.alone_grade_type" @change="changeGradeType">
        <el-radio :label="10">百分比</el-radio>
        <el-radio :label="20">固定金额</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item label="" v-if="form.model.is_alone_grade==1">
      <div class="max-w460">
        <el-table :data="form.gradeList" border size="small" style="width: 100%">
          <el-table-column prop="name" label="会员等级">
          </el-table-column>
          <el-table-column prop="name" label="折扣">
            <template v-slot="scope">
              <div class="d-s-c">
                <el-input v-model="scope.row.product_equity" type="number" placeholder="请输入折扣"></el-input>
                <span class="ml10">{{ grade_unit }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-form-item>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        unit: '%',
        grade_unit: '%'
      };
    },
    created() {
      if(this.form.model.alone_grade_type == '20'){
        this.grade_unit = '元';
      }
      if(this.form.model.agent_money_type == '20'){
        this.unit = '元';
      }
    },
    inject: ['form'],
    methods: {
      /*换算单位*/
      changeMoneyType: function(val) {
        if (val == '10') {
          this.unit = '%';
        } else {
          this.unit = '元';
        }
      },
	  /*换算单位*/
	  changeGradeType: function(val) {
	    if (val == '10') {
	      this.grade_unit = '%';
	    } else {
	      this.grade_unit = '元';
	    }
	  }
    }
  };
</script>

<style></style>

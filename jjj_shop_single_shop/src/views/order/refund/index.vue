<template>
  <div class="user">
    <!--搜索表单-->
    <div class="common-seach-wrap">
      <el-form size="small" :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="订单号">
          <el-input v-model="formInline.order_no" placeholder="请输入订单号"></el-input>
        </el-form-item>
        <el-form-item label="售后类型">
          <el-select v-model="formInline.type" placeholder="请选择">
            <el-option label="全部" value="0"></el-option>
            <el-option label="退货退款" value="10"></el-option>
            <el-option label="换货" value="20"></el-option>
            <el-option label="仅退款" value="30"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始时间">
          <div class="block">
            <span class="demonstration"></span>
            <el-date-picker v-model="formInline.create_time" type="daterange" value-format="YYYY-MM-DD"
              range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="Search" @click="onSubmit()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--内容-->
    <div class="product-content">
      <div class="table-wrap">
        <el-tabs v-model="activeName" @tab-change="handleClick">
          <el-tab-pane :label="'进行中(' + (arr[0] ? arr[0].total : 0) + ')'" name="0"></el-tab-pane>
          <el-tab-pane :label="'已拒绝(' + (arr[10] ? arr[10].total : 0) + ')'" name="10"></el-tab-pane>
          <el-tab-pane :label="'已完成(' + (arr[20] ? arr[20].total : 0) + ')'" name="20"></el-tab-pane>
          <el-tab-pane :label="'已取消(' + (arr[30] ? arr[30].total : 0) + ')'" name="30"></el-tab-pane>
        </el-tabs>
        <el-table :data="tableData" border style="width: 100%" v-loading="loading">
          <el-table-column prop="orderproduct.product_name" width="400" label="商品信息">
            <template #default="scope">
              <div class="d-s-c">
                <img v-img-url="scope.row.orderproduct.image.file_path" alt="" width="50px" />
                <div class="flex-1 ml10">
                  <p>
                    <span class="gray9">订单号：</span>
                    <span class="green">{{ scope.row.order_no }}</span>
                  </p>
                  <p class="text-ellipsis-2 lh18">{{ scope.row.orderproduct.product_name }}</p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="时间" width="200">
            <template #default="scope">
              <p class="gray6">
                <span class="gray9">售后申请：</span>
                {{ scope.row.create_time }}
              </p>
              <p class="gray6">
                <span class="gray9">下 单：</span>
                {{ scope.row.orderMaster.create_time }}
              </p>
            </template>
          </el-table-column>
          <el-table-column prop="orderproduct.product_price" label="单价">
            <template #default="scope">
              <span class="orange">{{ scope.row.orderproduct.product_price }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="orderproduct.total_num" label="数量"></el-table-column>
          <el-table-column prop="orderproduct.total_pay_price" label="付款价"></el-table-column>
          <el-table-column prop="user.nickName" label="买家">
            <template #default="scope">
              <div  v-if="scope.row.user">
                <span>{{ scope.row.user.nickName }}</span>
                <br />
                <span class="gray9">(ID:{{ scope.row.user.user_id }})</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="type.text" label="售后类型">
            <template #default="scope">
              <span class="orange">{{ scope.row.type.text }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="" label="处理状态" width="130">
            <template #default="scope">
              <div v-if="scope.row.status.value == 0">
                <!-- 审核状态-->
                <p>
                  商家审核：
                  <span class="orange" v-if="scope.row.is_agree.value == 0">{{ scope.row.is_agree.text }}</span>
                  <span class="orange" v-if="scope.row.is_agree.value == 10">{{ scope.row.is_agree.text }}</span>
                  <span class="orange" v-if="scope.row.is_agree.value == 20">{{ scope.row.is_agree.text }}</span>
                </p>
                <!-- 发货状态-->
                <p v-if="scope.row.type.value != 30 && scope.row.is_agree.value == 10">
                  用户发货：
                  <span class="orange" v-if="scope.row.is_user_send == 0">待发货</span>
                  <span class="orange" v-else>已发货</span>
                </p>
                <!-- 商家收货状态-->
                <p
                  v-if="scope.row.type.value != 30 && scope.row.is_agree.value == 10 && scope.row.is_user_send == 1 && scope.row.is_receipt == 0">
                  <span>商家收货：</span>
                  <span class="orange">待收货</span>
                </p>
              </div>
              <div v-if="scope.row.status.value == 20">
                <span>{{ scope.row.status.text }}</span>
              </div>
              <div v-if="scope.row.status.value == 10">
                <span>{{ scope.row.status.text }}</span>
              </div>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="110">
            <template #default="scope">
              <p>
                <el-button @click="Detail(scope.row.order_refund_id)" type="text" size="small">详情</el-button>
              </p>
              <p>
                <el-button v-if="scope.row.is_agree.value == 0" @click="Detail(scope.row.order_refund_id)" type="text"
                  size="small">审核</el-button>
              </p>
              <p>
                <el-button
                  v-if="scope.row.type.value != 30 && scope.row.is_agree.value == 10 && scope.row.is_receipt == 0 && scope.row.is_user_send == 1"
                  @click="Detail(scope.row.order_refund_id)" type="text" size="small">
                  处理
                </el-button>
              </p>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <!--分页-->
      <div class="pagination">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" background
          :current-page="curPage" :page-sizes="[2, 10, 20, 50, 100]" :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper" :total="totalDataNumber"></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import OrderApi from '@/api/order.js';
  export default {
    data() {
      return {
        /*是否加载完成*/
        loading: true,
        /*列表数据*/
        tableData: [],
        /*一页多少条*/
        pageSize: 20,
        /*一共多少条数据*/
        totalDataNumber: 0,
        /*当前是第几页*/
        curPage: 1,
        /*横向表单数据模型*/
        formInline: {
          order_no: '',
          style_id: '',
          shop_id: '',
          create_time: ''
        },
        status: -1,
        arr: [],

        activeName: '0'
      };
    },
    created() {
      /*获取列表*/
      this.getTableList();
    },
    methods: {
      /*选择第几页*/
      handleCurrentChange(val) {
        this.curPage = val;
        this.getTableList();
      },

      /*每页多少条*/
      handleSizeChange(val) {
        this.curPage = 1;
        this.pageSize = val;
        this.getTableList();
      },
      /*切换菜单*/
      handleClick(tab, event) {
        this.curPage = 1;
        this.status = tab;
        this.getTableList();
      },

      /*获取列表*/
      getTableList(params = '') {
        let self = this;
        let Params = {};
        Params.status = self.status;
        Params.page = self.curPage;
        Params.list_rows = self.pageSize;
        if (params != '') {
          Params.order_no = params.order_no;
          Params.create_time = params.create_time;
          Params.type = params.type;
        }
        self.loading = true;
        OrderApi.orderrefund(Params, true)
          .then(data => {
            self.loading = false;
            self.tableData = data.data.list.data;
            self.totalDataNumber = data.data.list.total;
            self.exStyle = data.data.ex_style;
            self.shopList = data.data.shopList;
            self.arr = data.data.arr;
          })
          .catch(error => {});
      },

      /*搜索查询*/
      onSubmit() {
        let self = this;
        let Params = this.formInline;
        self.getTableList(Params);
      },

      /*详情*/
      Detail(e) {
        let self = this;
        let order_refund_id = e;
        this.$router.push({
          path: '/order/refund/Detail',
          query: {
            order_refund_id: order_refund_id
          }
        });
      }
    }
  };
</script>
<style></style>

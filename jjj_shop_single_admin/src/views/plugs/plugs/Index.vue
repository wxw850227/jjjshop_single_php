<template>
  <div class="plus-container">
    <!--插件首页-->
    <div class="common-level-rail">
      <!-- <el-button type="primary" icon="el-icon-plus" @click="addType">添加类别</el-button> -->
    </div>

    <div v-for="(item, index) in tableData" :key="index" class="mb16">
      <div class="common-form d-s-c">
        <span>{{item.name}}</span>
        <!-- <a href="javascript:void(0);" class="close-btn ml10 d-c-c" @click="deleteClick(item)">
          <i class="el-icon-error f20"></i>
        </a> -->
      </div>
      <div class="plus-list">
        <div class="item" v-for="(child, num) in item.children" :key="num">
          <div class="item-box pr">
            <a href="javascript:void(0);" class="close-btn" @click="deleteClick(child)">
              <el-icon :size="20">
                <CloseBold /> 
              </el-icon>
            </a>
            <a>
              <span class="iconfont icon" :class="hasIcon(child.icon)"></span>
              <div class="ml10">
                <h3>{{child.name}}</h3>
                <p>{{child.remark}}</p>
              </div>
            </a>
          </div>
        </div>
        <div class="item">
          <div class="d-s-c mt10">
            <div class="add-item-box d-c-c" @click="addClick(item)">
              <el-icon class="el-icon-plus">
                <Plus />
              </el-icon>
            </div> 
            <div class="ml10">
              <p class="f14 gray9">添加插件到此类别下</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--类别-->
    <Type v-if="open_type" :open_type="open_type" @closeDialog="closeDialogFunc($event, 'type')"></Type>

    <!--添加-->
    <Add v-if="open_add" :open_add="open_add" :curModel="curModel" @closeDialog="closeDialogFunc($event, 'add')"></Add>

    <!--编辑-->
    <Edit v-if="open_edit" :open_edit="open_edit" :curModel="curModel" @closeDialog="closeDialogFunc($event, 'edit')"></Edit>
  </div>
</template>

<script>
  import PlugsApi from '@/api/plugs.js';
  import Edit from './dialog/Edit.vue';
  import Add from './dialog/Add.vue';
  import Type from './dialog/Type.vue';
  import {
    deepClone
  } from '@/utils/base.js';
  export default {
    components: {
      /*编辑组件*/
      Edit: Edit,
      Add: Add,
      Type
    },
    data() {
      return {
        /*是否正在加载*/
        loading: true,
        /*表格数据*/
        tableData: [],
        /*总条数*/
        totalDataNumber: 0,
        /*是否打开添加弹窗*/
        open_add: false,
        /*是否打开编辑弹窗*/
        open_edit: false,
        /*是否打开类别弹窗*/
        open_type: false,
        /*当前编辑的对象*/
        curModel: {}
      };
    },
    created() {
      /*获取列表*/
      this.getData();
    },
    methods: {

      /*获取列表*/
      getData() {
        let self = this;
        let Params = {};
        PlugsApi.plugslist(Params, true)
          .then(res => {
            self.loading = false;
            self.tableData = res.data.accessList;
            self.totalDataNumber = res.data.list.total;
          })
          .catch(error => {
            self.loading = false;
          });
      },

      /*添加插件类别*/
      addType() {
        this.open_type = true;
        //this.tableData.push({plus_name:'新类别'});
      },

      /*启用插件*/
      statusChange: function(checked, row) {
        let self = this;
        self.loading = true;
        PlugsApi.updatePlugsStatus({
              plus_id: row.plus_id
            },
            true
          )
          .then(data => {
            self.loading = false;
            row.status = checked;
          })
          .catch(error => {
            self.loading = false;
            row.status = !checked;
          });
      },

      /*推荐插件*/
      recomChange: function(checked, row) {
        let self = this;
        self.loading = true;
        PlugsApi.updatePlugsRecom({
              plus_id: row.plus_id
            },
            true
          )
          .then(data => {
            self.loading = false;
            row.is_recom = checked;
            console.log(row);
          })
          .catch(error => {
            self.loading = false;
            row.is_recom = !checked;
          });
      },

      /*打开添加*/
      addClick(e) {
        this.curModel = e;
        this.open_add = true;
      },

      /*打开编辑*/
      editClick(item) {
        // this.userModel = item;
        this.userModel = deepClone(item);
        this.open_edit = true;
      },

      closeDialogFunc(e, f) {
        if (f == 'type') {
          this.open_type = e.openDialog;
          if (e.type == 'success') {
            this.tableData.push({
              plus_name: '新类别'
            });
          }
        }
        if (f == 'add') {
          this.open_add = e.openDialog;
          if (e.type == 'success') {
            this.getData();
          }
        }
        if (f == 'edit') {
          this.open_edit = e.openDialog;
          if (e.type == 'success') {
            this.getData();
          }
        }
      },
      /*删除插件*/
      deleteClick(row) {
        let self = this;
        ElMessageBox.confirm('删除后不可恢复，确认删除该记录吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          })
          .then(() => {
            self.loading = true;
            PlugsApi.deleteplugs({
                  plus_id: row.access_id
                },
                true
              )
              .then(data => {
                if (data.code == 1) {
                  self.loading = false;
                  ElMessage({
                    message: data.msg,
                    type: 'success'
                  });
                  self.getData();
                }
              })
              .catch(error => {
                self.loading = false;
              });
          })
          .catch(() => {});
      },
      //判断是否有图标
      hasIcon(e) {
        if (e != null && e.length > 0) {
          return e;
        } else {
          return 'icon-chajian1';
        }
      }
    }
  };
</script>

<style>
  .plus-container {
    min-height: 400px;
  }

  .plus-container .common-form .close-btn {
    color: #CCCCCC;
  }

  .plus-list {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .plus-list .item {
    width: 25%;
  }

  .plus-list .item .item-box {
    margin: 0 10px 20px;
    border: 1px solid #FFFFFF;
  }

  .plus-list .item .item-box .close-btn {
    position: absolute;
    padding-left: 0;
    width: 20px;
    height: 20px;
    top: 20px;
    right: 4px;
    color: #ff0000;
    display: none;
  }

  .plus-list .item .item-box:hover {
    border-radius: 8px;
    border: 1px dashed #CCCCCC;
  }

  .plus-list .item .item-box:hover .close-btn {
    display: block;
  }

  .plus-list .item .add-item-box {
    width: 40px;
    height: 40px;
    margin-left: 20px;
    border-radius: 8px;
    border: 1px solid #186eeb;
  }

  .plus-list .item a {
    display: flex;
    height: 60px;
    padding-left: 10px;
    justify-content: flex-start;
    align-items: center;
  }

  .plus-list .item a h3 {
    font-weight: normal;
    color: #333333;
  }

  .plus-list .item a:hover h3 {
    color: #3a8ee6;
  }

  .plus-list .item a p {
    font-size: 12px;
    color: #999999;
  }

  .plus-list .item .item-box .iconfont {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    line-height: 40px;
    background: #3a8ee6;
  }

  .plus-list .item a .icon.iconfont {
    color: #ffffff;
    font-size: 22px
  }
</style>

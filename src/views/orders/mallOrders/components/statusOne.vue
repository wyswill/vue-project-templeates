<template>
  <div class="main">
    <!-- 搜索条件开始 -->
    <div class="filter-container recss" style="margin-top: 20px;">
      <div class="search_div" style="margin-left: 20px;">
        <el-select class="reselect" size="medium" placeholder="订单编号" v-model="searchType">
          <el-option label="订单号" value="1"></el-option>
          <el-option label="昵称" value="2"></el-option>
          <el-option label="联系电话" value="3"></el-option>
        </el-select>
        <el-input class="reinput" size="medium" placeholder v-model="searchStr"></el-input>
      </div>

      <div class="search_div">
        <span class="titlehead retitle">创建时间：</span>
        <el-date-picker
          size="medium"
          v-model="searchtime"
          type="daterange"
          align="right"
          unlink-panels
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        ></el-date-picker>
      </div>
      <div class="search_div">
        <el-button type="success" @click="tableSearch()" size="medium">搜索</el-button>
      </div>
      <div class="search_div">
        <el-button type="success" size="medium">导出excel</el-button>
      </div>
    </div>
    <!-- 搜索条件结束-->

    <!-- table列表开始 -->
    <div class="table">
      <el-table :data="dataList" style="width: 100%">
        <el-table-column align="center" label="订单编号" prop="orderNum"></el-table-column>
        <el-table-column align="center" label="昵称" prop="commodityNum"></el-table-column>
        <el-table-column align="center" label="联系电话" prop></el-table-column>
        <el-table-column align="center" label="创建时间" prop="makeDatetime"></el-table-column>
        <el-table-column align="center" label="状态" prop="status">
          <template slot-scope="scope">
            <span v-if="scope.row.status==1">待付款</span>
            <span v-if="scope.row.status==2">待发货</span>
            <span v-if="scope.row.status==3">待收货</span>
            <span v-if="scope.row.status==4">已完成</span>
          </template>
        </el-table-column>
        <el-table-column align="center" label="支付方式" prop="sourceType">
          <template slot-scope="scope">
            <span v-if="scope.row.sourceType==2">微信</span>
            <span v-if="scope.row.sourceType==1">支付宝</span>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="text"
              v-if="scope.row.status==3||scope.row.status==4"
              @click="handleDelivery(scope.$index, scope.row)"
            >快递</el-button>
            <el-button
              size="mini"
              type="text"
              v-if="scope.row.status==2"
              @click="handleDelivergoods(scope.$index, scope.row)"
            >发货</el-button>
            <el-button size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">订单详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 表格分页开始 -->
      <pagination
        background
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="getList"
      />
      <!--表格分页结束 -->
    </div>
    <!-- table列表结束-->
    <!-- 发货弹窗开始 -->
    <el-dialog title="发货" :visible.sync="sendDialogVisible" width="30%" >
      <el-form :model="sendForm">
        <el-form-item label="快递公司" label-width="120px">
          <el-input v-model="sendForm.company" autocomplete="off" placeholder="请填写快递公司名称"></el-input>
        </el-form-item>
        <el-form-item label="快递单号" label-width="120px">
          <el-input v-model="sendForm.exmNumber" autocomplete="off" placeholder="请填写快递单号"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sendDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sureDeliveryGoods">保 存</el-button>
      </span>
    </el-dialog>
    <!-- 发货弹窗结束 -->
    <!-- 快递弹窗开始 -->
    <el-dialog title="发货" :visible.sync="deliveryDialogVisible" width="30%" >
          <p><span>快递公司：</span><span>顺丰快递</span></p> 
          <p><span>快递单号：</span><span id="inviteCode">122234325252</span><span>复制</span></p> 
      <span slot="footer" class="dialog-footer">
        <el-button type="success" @click="lookDelivery">查看快递进度</el-button>
      </span>
    </el-dialog>
    <!-- 快递弹窗结束 -->
  </div>
</template>

<script>
import { getMallOrders } from "@/api/orders";
import Pagination from "@/components/Pagination";
// import formatTime from "@/utils/index";
export default {
  props: ["activedata"],
  components: { Pagination },
  created() {
    // this.getList();
  },

  data() {
    return {
      // 搜索条件
      searchType: "",
      searchStr: "",
      searchtime: "",
      //列表数据
      dataList: [{

      }],
      total: 100,
      listQuery: {
        page: 1,
        limit: 20
      },
      deliveryDialogVisible:false,//快递弹窗
      sendDialogVisible: false,//发货弹窗
      sendForm:{
        company:'',
        exmNumber:''
      }
      //activeStatus:this.activedata
    };
  },
  watch: {
    activedata: function(val, oldVal) {
      this.activedata = val;
      this.getList();
    }
  },
  methods: {
    handleSizeChange: function(val) {
      let that = this;
      that.pageInfo.pageSize = val;
      that.getList();
    },
    handleCurrentChange: function(val) {
      let that = this;
      that.pageInfo.page = val;
      that.getList();
    },
    //查询
    tableSearch() {
      let that = this;
      let sTime = formatTime(that.searchtime[0], "Y-M-D h:m:s");
      let eTime = formatTime(that.searchtime[1], "Y-M-D h:m:s");
      that.startTime = sTime;
      that.endTime = eTime;
      that.getList();
    },

    //订单列表
    getList() {
     let that = this;
      let data = {
        status: that.activedata,
        sourceType: that.sourceType,
        startTime: that.startTime,
        endTime: that.endTime,
        searchType: that.searchType,
        searchStr: that.searchStr
      };
      getMallOrders(data).then(res => {
        if (res && res.code === 0) {
          that.dataList = [...res.data.list];
          that.total = res.data.totalCount;
        } else {
          that.dataList = [];
          that.total = 0;
        }
        that.dataListLoading = false;
      });
    },
    //发货
    handleDelivergoods(index,row){
     let that=this;
     that.sendDialogVisible=true;
    },
    //确认发货
    sureDeliveryGoods(){
    let that=this;
     that.sendDialogVisible=false;
    },
    //快递
    handleDelivery(index,row){
    let that=this;
     that.deliveryDialogVisible=true;
    },
     //确认复制
    copySureHandle(){
      this.copydialogVisible=false
      var Url2 = document.getElementById("inviteCode").innerText;
      var oInput = document.createElement("input");
      oInput.value = Url2;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
      oInput.className = "oInput";
      oInput.style.display = "none";
      console.log("复制成功");
    },
    //查看快递详情
    lookDelivery(){
     let that=this;
     that.deliveryDialogVisible=false;
     window.open("https://www.kuaidi100.com/?from=openv");
    },
    //详情
    handleDetail(index, row) {
    let that=this;
    that.$router.push({
        name: "mallOrdersDetail",
        query: {
        //   orderCode: row.orderCode
        }
      });
    }
  }
};
</script>


<style scoped="scoped">
.filter-container {
  margin-bottom: 20px;
}

.filter-container .filter-item {
  margin-bottom: 20px;
  margin-right: 40px;
}

.search_div {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;
}

.reinput {
  width: 200px;
  display: inline-block;
}
.table {
  border-top: 1px solid #dedede;
}

.pagination-container {
  margin: 0 auto;
  width: 40%;
}

.titlehead {
  line-height: 40px;
  border: none;
  min-width: 60px;
}

.titlehead:hover {
  background: none;
}
</style>

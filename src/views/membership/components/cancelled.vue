<template>
  <div class="main">
    <!-- 搜索条件开始 -->
    <div class="filter-container recss" style="margin-top: 20px;">
      <div class="search_div" style="margin-left: 20px;">
        <el-select class="reselect" size="medium" placeholder="订单编号" v-model="searchType">
          <el-option label="订单号" value="1"></el-option>
          <el-option label="投放标题" value="2"></el-option>
          <el-option label="广告名称" value="3"></el-option>
          <el-option label="广告商名称" value="4"></el-option>
          <el-option label="微信" value="5"></el-option>
          <el-option label="支付宝" value="6"></el-option>
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
        <el-table-column align="center" label="联系电话" prop="phone"></el-table-column>
        <el-table-column align="center" label="实付金额" prop="makeDatetime"></el-table-column>
        <el-table-column align="center" label="支付时间" prop="status"></el-table-column>
        <el-table-column align="center" label="支付方式" prop="sourceType">
          <!-- <template slot-scope="scope">
            <span v-if="scope.row.sourceType==2">微信</span>
            <span v-if="scope.row.sourceType==1">支付宝</span>
          </template> -->
        </el-table-column>
        <el-table-column align="center" label="类型" prop="status"></el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
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

    <el-dialog title="订单详情" :visible.sync="deliveryDialogVisible" width="30%" >
        <p><span>昵称：</span><span>顺丰快递</span></p> 
        <p><span>联系电话：</span><span>122234325252</span></p> 
        <p class="jiange"><span>类型：</span><span>122234325252</span></p> 
        <p><span>优惠券：</span><span>122234325252</span></p> 
        <p><span>账户余额：</span><span>122234325252</span></p> 
        <p class="fontColor jiange"><span>创建时间：</span><span>122234325252</span></p> 
        <p class="fontColor"><span>支付时间：</span><span>122234325252</span></p> 
        <p class="fontColor"><span>订单编号：</span><span>122234325252</span></p> 
        <p class="jiange"><span>实际支付：</span><span class="total-money">￥200</span> <span>支付方式：支付宝</span></p> 

        <span slot="footer" class="dialog-footer">
            <el-button type="success" @click="colseDialog">关闭</el-button>
        </span>
    </el-dialog>
  </div>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
    components: { Pagination },
    data(){
        return{
            // 搜索条件
            searchType: "",
            searchStr: "",
            searchtime: "",
            //列表数据
            dataList: [{

            }],
            total: 0,
            listQuery: {
                page: 1,
                limit: 20
            },
            deliveryDialogVisible: false,//发货弹窗
            sendForm:{
                company:'',
                exmNumber:''
            }
        }
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
        
        //详情
        handleDetail(index, row) {
            let that=this;
            that.deliveryDialogVisible = true;
        },
        colseDialog(){
            let that=this;
            that.deliveryDialogVisible = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.filter-container {
    margin-bottom: 20px;
    .filter-item {
        margin-bottom: 20px;
        margin-right: 40px;
    }
}
.fontColor{
    span{
        color: #999;
    }
}
.jiange{
    margin-top: 30px;
}
.total-money{
    color: orangered;
}

.search_div {
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 10px;
    .reinput {
        width: 200px;
        display: inline-block;
    }
}
</style>

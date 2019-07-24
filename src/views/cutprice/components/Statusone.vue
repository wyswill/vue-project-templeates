<template>
  <div class="main">
          <!-- 搜索条件开始 -->
    <div class="filter-container recss">
      <div class="search_div">
        <span class="titlehead retitle">创建时间:</span>
        <el-date-picker
          size="medium"
          v-model="searchtime"
          type="datetimerange"
          align="right"
          unlink-panels
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
     <div class="search_div">
        <el-select size="medium" class="reselect" placeholder="全部" v-model="selectName" @change="handleName">
          <el-option label="联系电话" value="1"></el-option>
          <el-option label="昵称" value="2"></el-option>
        </el-select>
        <el-input  class="reinput" size="medium" placeholder="请输入关键词进行搜索" v-model="seacherName"></el-input>
      </div>
      <div class="search_div">
        <el-button type="warning" @click="tableSearch()" size="medium">搜索</el-button>
      </div>
    </div>
    <!-- 搜索条件结束-->

    <!-- table列表开始 -->
		<div style="margin:10px 20px 0px;">
			<el-table :data='dataList' style="width: 100%" border>
				<el-table-column align="center" label="昵称" prop="name"></el-table-column>
				<el-table-column align="center" label="联系电话" prop="phone"></el-table-column>
				<el-table-column align="center" label="已砍(元)" prop="price"></el-table-column>
				<el-table-column align="center" label="创建时间" prop="createTime"></el-table-column>
        <el-table-column label="操作" width="150" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="text" @click="handleDetail(scope.$index, scope.row)">查看详情</el-button>
          </template>
        </el-table-column>
			</el-table>
      <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.limit" @pagination="getbargain" />
		</div>
		<!-- table列表结束-->

  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import getTimes from "@/utils/formatedate";
export default {
  data() {
    return {
      listQuery: {
        page: 1,
        limit: 10,
      },
      // 搜索条件时间
      searchtime: "",
      //昵称+电话
      selectName: "",
      seacherName: "",
      dataList:[
        {
         name:'123',
         phone:'123',
         price:'123',
         createTime:'123',
        }
      ],

    };
  },
  created(){
     this.getbargain();
  },
  methods: {
  
    //电话+联系人
    handleName(val) {
      this.selectName = val;
    },

    //查询
    tableSearch() {
      let sTime = getTimes.formatTime(this.searchtime[0], "Y-M-D h:m:s");
      let eTime = getTimes.formatTime(this.searchtime[1], "Y-M-D h:m:s");

      this.sTime = sTime;
      this.eTime = eTime;
      console.log(this.sTime, this.eTime)
    },
   
     // 列表数据
    getbargain() {
      
      
    },
    
    //详情
    handleDetail(index, row) {
      this.$router.push({
        name: 'bargaindetails',
        query: {
        
        }
      })
    },
  

 
  }
};
</script>


<style scoped="scoped">
.filter-container {
  margin: 20px;
}

.filter-container .filter-item {
  margin-bottom: 20px;
  margin-right: 40px;
}

.search_div {
  /* display: flex; */
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
}

.reinput{
  width: 200px;
}
.search_div .el-input__inner {
  box-sizing: inherit;
}

.table {
  border-top: 1px solid #dedede;
}

.site-wrapper .el-pagination {
  margin-top: 15px;
  text-align: center;
}

.titlehead {
  line-height: 40px;
  /* margin-right: 10px; */
  border: none;
  min-width: 60px;
}

.titlehead:hover {
  background: none;
}
</style>

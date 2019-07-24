<template>
  <div class="big-box">
    <!-- <div class="searchposition">
      <el-button type="success" @click="delMore">批量删除</el-button>
      <el-button type="success" @click="addCard">新增</el-button>
    </div> -->
    <div class="tableblock">
      <el-table :data="memberCardList" border>
        <!-- <el-table-column
          type="selection"
          width="55"/> -->
        <el-table-column label="优惠券名称" align="center" prop="cardName"/>
        <el-table-column label="类型" prop="cardPrice" align="center"/>
        <el-table-column label="创建时间" prop="cardSort" align="center"/>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <pagination
        :total="total"
        :page.sync="listQuery.page"
        :limit.sync="listQuery.limit"
        @pagination="memberCardList" />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
export default {
  components: { Pagination },
  data() {
    return {
      memberCardList: [
        { cardName: '月卡', cardPrice: 100, cardSort: 3}
      ],
      value: true,
      total: 1,
      listQuery: {
        page: 1,
        limit: 20
      }
    }
  },
  methods: {
   
    // 编辑
    handleClick(e){
      this.$router.push({
        name:'addCouponManger',
        query:{}
      })
    }
    
  }
}
</script>

<style lang="scss" scoped>
.big-box{
    width: 100%;
    height: 100%;
    padding:20px;
    .searchposition{
        width: 100%;
        height: 60px;
        line-height: 60px;
    }
}
</style>

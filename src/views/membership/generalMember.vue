<template>
  <div class="big-box">
    <div class="searchposition">
      <el-button type="success" @click="delMore">批量删除</el-button>
      <el-button type="success" @click="addCard">新增</el-button>
    </div>
    <div class="tableblock">
      <el-table :data="memberCardList" border>
        <el-table-column
          type="selection"
          width="55"/>
        <el-table-column label="名称" align="center" prop="cardName"/>
        <el-table-column label="售价(元)" prop="cardPrice" align="center"/>
        <el-table-column label="排序" prop="cardSort" align="center"/>
        <el-table-column label="状态" align="center">
          <template slot-scope="scope">
            <el-tooltip :content="'Switch value: ' + scope.row.value" placement="top">
              <el-switch
                v-model="value"
                active-color="#13ce66"
                inactive-color="#ff4949"
                active-value="true"
                inactive-value="0"/>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
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
        { cardName: '月卡', cardPrice: 100, cardSort: 3, cardStatus: true }
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
    // 批量删除
    delMore() {
      this.$confirm('确定删除选中记录吗？删除后将不可恢复', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'info',
        center: true
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 新增
    addCard() {
      this.$router.push({
        name: 'addNewCard',
        query: {}
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.big-box{
    width: 100%;
    height: 100%;
    padding: 10px 20px;
    .searchposition{
        width: 100%;
        height: 60px;
        line-height: 60px;
    }
}
</style>

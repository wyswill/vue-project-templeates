<template>
  <div class="big-box">
    <div class="searchposition">
      <el-button type="success" @click="delMore">批量删除</el-button>
      <el-button type="success" @click="dialogFormVisible = true">新增</el-button>
    </div>
    <div class="tableblock">
      <el-table :data="memberCardList" border>
        <el-table-column
          type="selection"
          width="55"/>
        <el-table-column label="礼包名称" align="center" prop="bagName"/>
        <el-table-column label="1小时免费取茶(杯)" prop="cupNum" align="center"/>
        <el-table-column label="每月VIP专享购买商品个数" prop="goodNum" align="center"/>
        <el-table-column label="VIP分享券赠送数量" prop="tickerNum" align="center"/>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="handleClick(scope.row)">编辑</el-button>
            <el-button type="text" size="small" @click="handleDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 新增/编辑礼包 -->
    <el-dialog :visible.sync="dialogFormVisible" title="礼包设置">
      <el-form :model="form">
        <el-form-item label="礼包名称" prop="name">
          <el-input v-model="form.name" style="width:300px;"/>
        </el-form-item>
        <el-form-item prop="termOfValidity">
          <h3 style="display: inline-block;margin-left:10px;">1小时内可在茶几上免费领取</h3>
          <div style="display: inline-block;margin-left:10px;">
            <el-input v-model="form.termOfValidity" placeholder="" style="width: 300px;" step="1" type="number" min="0">
              <template slot="append">杯茶</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item prop="freeGood">
          <h3 style="display: inline-block;margin-left:10px;">每个月在VIP专享区域购买</h3>
          <div style="display: inline-block;margin-left:10px;">
            <el-input v-model="form.freeGood" placeholder="" style="width: 300px;" step="1" type="number" min="0">
              <template slot="append">件免费商品</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item prop="ticker">
          <h3 style="display: inline-block;margin-left:10px;">共赠送</h3>
          <div style="display: inline-block;margin-left:10px;">
            <el-input v-model="form.ticker" placeholder="" style="width: 300px;" step="1" type="number" min="0">
              <template slot="append">张分享券</template>
            </el-input>
          </div>
        </el-form-item>
        <el-form-item label="是否有分销资格" prop="status">
          <el-radio-group v-model="form.status">
            <el-radio label="是"/>
            <el-radio label="否"/>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      memberCardList: [
        { bagName: '普通礼包', cupNum: 3, goodNum: 5, tickerNum: 12 }
      ],
      dialogFormVisible: false,
      form: {
        name: '',
        termOfValidity: '',
        freeGood: '',
        ticker: '',
        status: ''
      },

      formLabelWidth: '120px'
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
        name: 'addNewVipCard',
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
     h3{
        font-weight: normal;
        color: #555;
        margin: 0;
        font-size: 14px;
    }
}
</style>

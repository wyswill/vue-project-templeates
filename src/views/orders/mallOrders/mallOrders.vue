<template>
  <div class="main">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="0">全部</el-menu-item>
      <el-menu-item index="1">待付款</el-menu-item>
      <el-menu-item index="2">待发货</el-menu-item>
      <el-menu-item index="3">待收货</el-menu-item>
      <el-menu-item index="4">已完成</el-menu-item>
    </el-menu>

    <!-- 全部订单 -->
    <statusOne ref="myOrder" :activedata="activeIndexs"></statusOne>

  </div>
</template>
<script>
import statusOne from './components/statusone.vue'
export default {
  components: {
    statusOne
  },

  // 以上为自定义方法
  data() {
    return {
			 activeIndexs: '0',
			 activeIndex: '0'
    }
  },
//   watch: {
//         	$route(to, from) {
//         		if (from.name == 'orderEdit') {
//         			this.activeIndexs = 0
//         			this.$refs.myOrder.stockwaterList()
//         		}
// 		     }
//   },
  methods: {

		   // 选择状态触发事件
		   handleSelect(key, keyPath) {
			   const that = this
			   that.activeIndex = key
			   that.activeIndexs = key
		   }

  }
}
</script>
<style lang="scss" type="text/scss" scoped="scoped">
	.filter-container {
		display: flex;
		margin-bottom: 20px;
		margin-top: 20px;
	}

	.filter-container .filter-item {
		margin-bottom: 20px;
		margin-right: 40px;
	}

	.search_div {
		display: flex;
		margin-right: 20px;
	}

	.search_div>button {
		margin-left: 20px;
	}

	.search_div .el-input__inner {
		box-sizing: inherit;
	}
	.serverMeal,.discountCard {
		width: 100%;
	}
	.mainpage{
		min-width: 1110px;
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
		margin-right: 20px;
		border: none;
		min-width: 60px;
	}
</style>

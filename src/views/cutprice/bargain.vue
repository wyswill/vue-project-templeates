

<template>
	<div class="main">
		<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
			<el-menu-item index="0">进行中</el-menu-item>
			<el-menu-item index="1">已结束</el-menu-item>
		</el-menu>
		<!-- 全部订单 -->
		<Statusone :activedata='activedatas'></Statusone>
		

	</div>
</template>

<script>
	import Statusone from "./components/Statusone.vue";
	export default {
		props:['activedata'],
		components: {
			Statusone
		},
		
		//以上为自定义方法
		data() {
			return {
			 activedatas:'0',
			 activeIndex:'0',
			};
		},
		methods: {
			
		   //选择状态触发事件
		   handleSelect(key,keyPath){
			   let that = this;
			   that.activeIndex = key;
			   that.activedatas = key;
		   },
		}
	};
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
<template>
	<div class="main">	
       <el-button type="success" @click="goBackHandle" size="medium">返回订单列表</el-button>
       <p>订单状态：已完成</p>
		<el-row>
			<el-col :span="24">
				<div>
					<!--订单详情开始-->
					<el-row>
						<el-col :span="8">
							<div>
								<div>
									<h3>收货地址</h3>
								</div>
								<div class="addressDiv">
                                    <p>收货人：张三</p>
									<p>手机号码：13456732354</p>
                                    <p>收货地址：湖北省武汉市硚口区猪八戒园区</p>
									
								</div>
							</div>
						</el-col>
						<el-col :span="16">
							<div class="deliveryDiv">
								<div style="height: 200px;padding-top: 50px;margin-left: 10%;">
									<div>
                                      <p>快递公司:顺丰快递</p>
                                      <p>快递单号:<span id="inviteCode">122234325252</span><span class="copySpan" @click="copySureHandle">复制</span><span class="copySpan" @click="lookDelivery">查看快递进度</span></p>
                                    </div>
									<div style="margin-top: 20px;text-align: center;width: 50%;">
                                     <el-button type="success" @click="handleDelivergoods">发货</el-button>
                                    </div> 
								</div>
							</div>
						</el-col>
					</el-row>
					<div class="orderDiv">
						<h3>订单信息</h3>
						<p>订单备注：{{dataList.message}}</p>
						<p>订单编号：{{dataList.orderNum}}</p>
						<p>所属店铺：{{dataList.shopName}}</p>
	                    <p>支付时间：{{dataList.deliveryTime}}</p>
						<p v-if="dataList.sourceType==1">支付方式：支付宝</p>
						<p v-if="dataList.sourceType==2">支付方式：微信</p>
					</div>
					<!--订单详情结束-->
					<!--中间表格开始 -->
					<h3>商品信息</h3>
					<el-table :data="commodityList" style="width: 100%">
					    <el-table-column align="center" label="商品" prop="commodityName"></el-table-column>
						<el-table-column align="center" label="商品条码" prop="commodityCoding"></el-table-column>
						<el-table-column align="center" label="商品规格" prop="specifications"></el-table-column>
						<el-table-column align="center" label="零售价" prop="price"></el-table-column>
						<el-table-column align="center" label="单位" prop="unit"></el-table-column>
						<el-table-column align="center" label="数量" prop="number"></el-table-column>
						<el-table-column align="center" label="优惠金额" prop="discountsMoney"></el-table-column>
						<el-table-column align="center" label="实付金额" prop="actualAmount"></el-table-column>
					</el-table>
					<!--中间表格结束 -->
					<div style="text-align: right;">
						<p>商品小计：￥{{dataList.commodityAmount}}</p>
						<p>总优惠：￥{{dataList.discountsMoney}}</p>
						<p>运费：￥{{dataList.sendMoney}}</p>
						<h5>订单共{{dataList.commodityNum}}件商品：实付:<span style="color: red;">￥{{dataList.paymentAmount}}</span></h5>
					</div>
				</div>
			</el-col>
		</el-row>   
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
	</div>      	
</template>
<script>

//	import { queryOrderDetail} from "@/api/order"
export default {
	
	created: function() {
	//	this.getorderDetails();
	},

	
	//以上为自定义方法
	data() {
		return {
			//默认选择
			activeIndex: "1",
			//图片路径
			// picurl: getUrl(),
			//中间订单列表请求loading
			listLoading: false,				
			//订单详情商品数据
			commodityList: [],
			//订单详情数据
			dataList: {},
			sendDialogVisible: false,//发货弹窗
			sendForm:{
				company:'',
				exmNumber:''
			}				
			}
		},
		methods: {


			//我的活动订单详情接口
			getorderDetails() {
				var that = this;
                  let data={
				  	'orderCode':that.$route.query.orderCode,
				  }
			    queryOrderDetail(data).then(res => {
		          if (res && res.code === 0) {
		           that.commodityList=[...res.data.orderCommodityVOS];
		           that.dataList=res.data
		          } else {
		          }
		          this.dataListLoading = false
		        })
				this.total = this.commodityList.length;
				for(let j=0;j<this.commodityList.length;j++){
					this.payprices +=this.commodityList[j].payprice;
					this.sellprices+=this.commodityList[j].sellprice;
				}
				this.allprice = this.payprices;
				this.allsellprice = this.sellprices;
				this.paymoney = this.allprice-this.allsellprice-this.fare;
			},
            //返回订单列表页
           goBackHandle(){
               let that = this;
                that.$router.push({
                name:"mallOrders"
            })
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
		}
	};
</script>
<style scoped="scoped" lang="scss">
.main{
	margin: 10px;
    .addressDiv{
		margin: 20px;
		border:1px solid #cccccc;
		padding: 20px;
	}
	.deliveryDiv{
		.copySpan{
			display: inline-block;
			padding: 10px 20px;
			margin-right: 20px;
			margin-left: 10px;
			color: #ffffff;
			background-color: #85ce61;
			border-radius: 10px;
			cursor: pointer;
		}
	}
	.orderDiv{
    padding: 10px 0px;
		p{
			margin-left: 30px;
		}
	}
}
</style>

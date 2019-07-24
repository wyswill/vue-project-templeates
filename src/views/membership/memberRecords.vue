<template>
    <div class="big-box">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="已支付" name="first">
                <Paymented></Paymented>
            </el-tab-pane>
            <el-tab-pane label="已取消" name="second">
                <Cancelled></Cancelled>
            </el-tab-pane>
        </el-tabs>
    </div>
  
</template>

<script>
    import Paymented from './components/paymented.vue';
    import Cancelled from './components/cancelled.vue';
    export default {
        components: {
            Paymented,
            Cancelled
        },
        data() {
            return {
                activeName: 'first'
            }
        },
        methods: {
            handleClick(tab, event) {
                console.log(tab, event);
            }
        }
    };
</script>

<style lang="scss" scoped>
.big-box{
    width: 100%;
    height: 100%;
    padding: 20px;
}
</style>

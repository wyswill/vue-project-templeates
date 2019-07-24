<template>
  <div class="big-box">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="优惠券名称" prop="name">
        <el-input v-model="ruleForm.name" style="width:300px;"/>
      </el-form-item>
      <el-form-item label="优惠券名称" prop="name">
         <h3 style="display: inline-block;margin-left:10px;">赠饮券</h3>
      </el-form-item>
      <el-form-item label="优惠券面额" prop="price">
        <h3 style="display: inline-block;margin-left:10px;">满</h3>
        <div style="display: inline-block;">
          <el-input v-model="ruleForm.discount" placeholder="请输入金额" style="width: 200px;">
            <template slot="append">元</template>
          </el-input>
        </div>
        <h3 style="display: inline-block;margin-left:10px;">，可抵扣</h3>
        <div style="display: inline-block;">
          <el-input v-model="ruleForm.discount2" placeholder="请输入金额" style="width: 200px;">
            <template slot="append">元</template>
          </el-input>
        </div>
      </el-form-item>
      
      <el-form-item label="有效期" prop="termOfValidity">
        <h3 style="display: inline-block;margin-left:10px;">购买之日起</h3>
        <div style="display: inline-block;margin-left:10px;">
          <el-input v-model="ruleForm.termOfValidity" placeholder="请输入金额" style="width: 300px;" step="1" type="number" min="0">
            <template slot="append">天内使用有效</template>
          </el-input>
        </div>
      </el-form-item>
      
      <el-form-item label="会员权益详情">
        <div style="max-width:800px;min-width:600px;">
          <Tinymce id="tinymce" :height="300" v-model="content"></Tinymce>
        </div>

      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  components: { Tinymce },
  data() {
    return {
      ruleForm: {
        name: '',
        price: '',
        sort: '',
        termOfValidity: '',
        type: [],
        status: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请输入价格', trigger: 'blur' }
        ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个礼包', trigger: 'change' }
        ],
        termOfValidity: [
          { required: true, message: '请输入有效期', trigger: 'blur' }
        ],
        status: [
          { required: true, message: '请选择状态', trigger: 'change' }
        ]
      },
      dialogImageUrl: '',
      dialogVisible: false,
      pics: 6,
      content: ''
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },

    
  }
}
</script>

<style lang="scss" scoped>
.big-box {
    width: 100%;
    height: 100%;
    padding: 20px;
    h3{
        font-weight: normal;
        color: #888;
        margin: 0;
        font-size: 14px;
    }
}
</style>

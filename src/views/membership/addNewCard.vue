<template>
  <div class="big-box">
    <el-form
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name" style="width:300px;"/>
      </el-form-item>
      <el-form-item label="售价" prop="price">
        <div style="display: inline-block;">
          <el-input v-model="ruleForm.discount" placeholder="请输入折扣" style="width: 200px;">
            <template slot="append">元</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="ruleForm.status">
          <el-radio label="开启"/>
          <el-radio label="关闭"/>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="ruleForm.sort" style="width:150px;"/>
      </el-form-item>
      <el-form-item label="有效期" prop="termOfValidity">
        <h3 style="display: inline-block;margin-left:10px;">购买之日起</h3>
        <div style="display: inline-block;margin-left:10px;">
          <el-input v-model="ruleForm.termOfValidity" placeholder="请输入金额" style="width: 300px;" step="1" type="number" min="0">
            <template slot="append">天内使用有效</template>
          </el-input>
        </div>
      </el-form-item>
      <el-form-item label="会员商品图">
        <el-upload
          :limit="pics"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card">
          <i class="el-icon-plus"/>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img :src="dialogImageUrl" width="100%" alt="">
        </el-dialog>
        <div style="color:#999;">建议尺寸：800x800，第一张图片为商品简介图会出现在列表中，为商品缩略图，其余为轮播图，可以拖拽图片调整顺序，最多上传6张</div>
      </el-form-item>
      <el-form-item label="礼包" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="普通礼包" name="type"/>
          <el-checkbox label="A礼包" name="type"/>
          <el-checkbox label="B礼包" name="type"/>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="会员权益详情">
        <div style="max-width:800px;min-width:600px;">
          <Tinymce id="tinymce" :height="300" v-model="content"/>
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
        sort: [
          { required: true, message: '请输入排序', trigger: 'blur' }
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

    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
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

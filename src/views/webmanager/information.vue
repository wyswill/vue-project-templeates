<template>
  <div class="row information">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="公司名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="公司LOGO：" prop="logoimg">
        <el-upload
          class="avatar-uploader"
          :action="upurl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="地址：" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="邮箱：" prop="emails">
        <el-input v-model="ruleForm.emails"></el-input>
      </el-form-item>
      <el-form-item label="客服电话：" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="QQ：" prop="qqnum">
        <el-input v-model="ruleForm.qqnum"></el-input>
      </el-form-item>
      <el-form-item label="后台管理地址：" prop="managerurl">
        <el-input v-model="ruleForm.managerurl" placeholder="请输入后台管理网址"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleForm)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { validURL, validEmail, isMobile } from "@/utils/validate";
import { getinformation_api, getmsgupdate_api } from "@/api/webmanager";

import { getPic, getUrl } from "@/api/common";

export default {
  data() {
    var isEmail = (rule, value, callback) => {
      if (!validEmail(value)) {
        callback(new Error("邮箱格式错误"));
      } else {
        callback();
      }
    };
    var validURLs = (rule, value, callback) => {
      if (!validURL(value)) {
        callback(new Error("后台网址格式错误"));
      } else {
        callback();
      }
    };
    var isMobiles = (rule, value, callback) => {
      if (!isMobile(value)) {
        callback(new Error("电话格式错误"));
      } else {
        callback();
      }
    };

    return {
      // 图片上传地址
      upurl: getPic(),

      imageUrl: "",
      ruleForm: {
        name: "",
        address: "",
        emails: "",
        phone: "",
        qqnum: "",
        managerurl: ""
      },
      rules: {
        name: [
          { required: true, message: "公司名称不能为空", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
        qqnum:[
          { required: true, message: "QQ号码不能为空", trigger: "blur" }
        ],
        address: [
          { required: true, message: "地址不能", trigger: "blur" }
        ],
        phone: [
            { required: true, message: '客服电话不能为空', trigger: 'blur' },
            { validator: isMobiles, trigger: 'blur' }
        ],
        emails: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { validator: isEmail, trigger: 'blur' }
        ],
        managerurl:[
            { required: true, message: '后台管理地址不能为空', trigger: 'blur' },
            { validator: validURLs, trigger: 'blur' }
        ],
      }
    };
  },
  methods: {

    //提交表单
    submitForm(ruleForm) {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
         
          if(this.imageUrl){
              this.ruleForm.imageUrl = this.imageUrl;
          }else{
            this.$message({
              type: "error",
              message: "图片不能为空"
            });
            return
          }        
          console.log(this.ruleForm)

          getmsgupdate_api(ruleForm).then(res=>{
            if(res.code == 0){

            }else{
                this.$message({
                  type: "error",
                  message:res.msg
                });
            }
          })
        } else {
          return false;
        }
      });
    },

    //取消
    resetForm(formName) {
      this.imageUrl = ''
      this.$refs[formName].resetFields();
    },

    // 图片上传
    handleAvatarSuccess(res, file) {
      if (res.code == 0) {
        this.imageUrl = getUrl() + res.data;
      } else {
        this.$message({
          message: "图片上传失败，请重新上传！",
          type: "warning"
        });
      }
    },

    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return isLt2M;
    }
  }
};

</script>

<style lang="scss" type="text/scss" scoped>
.row {
  padding: 40px;
  .el-form {
    width: 60%;
  }
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 150px;
  line-height: 150px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 150px;
  display: block;
}
</style>
<style>
.information .el-form .el-upload {
  border: 1px dashed #d9d9d9;
}
</style>


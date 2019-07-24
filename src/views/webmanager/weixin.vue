<template>
  <div class="row information">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
       <el-form-item label="标题：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="微信公众号"></el-input>
      </el-form-item>

      <el-form-item label="简述：" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"  placeholder="扫描下方二维码,关注微信公众号可获取最新信息,还可以使用H5下单购买各类茶产品"></el-input>
      </el-form-item>
      
      <el-form-item label="二维码图片：">
        <el-upload
          class="avatar-uploader"
          :action="upurl"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="pcimageUrl" :src="pcimageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      
      <el-form-item label="页面图片：">
        <el-upload
          class="avatar-uploader"
          :action="upurl"
          :show-file-list="false"
          :on-success="handleSuccessphone"
          :before-upload="beforeUploadphone"
        >
          <img v-if="phoneimageUrl" :src="phoneimageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    
      <el-form-item>
        <el-button @click="resetForm('ruleForm')">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleForm)">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { validURL,isMobile} from "@/utils/validate";
import { getweixin_api, weixinupdate_api } from "@/api/webmanager";

import { getPic, getUrl } from "@/api/common";

export default {
  data() {
    return {
      // 图片上传地址
      upurl: getPic(),
      pcimageUrl: "",
      phoneimageUrl: "",

      ruleForm: {
        name: "",
        content: "",
      },
      rules: {
        name: [
          { required: true, message: "标题不能为空", trigger: "blur" },
          { min: 3, max: 20, message: "长度在 3 到 20 个字符", trigger: "blur" }
        ],
         content: [
          { required: true, message: "简述不能为空", trigger: "blur" },
        ],   
      }
    };
  },
  methods: {

    //提交表单
    submitForm(ruleForm) {
      this.$refs["ruleForm"].validate(valid => {
        if (valid) {
         
          if(this.pcimageUrl){
              this.ruleForm.pcimageUrl = this.pcimageUrl;
          }else{
            this.$message({
              type: "error",
              message: "二维码图片不能为空"
            });
            return
          }   
          
          if(this.phoneimageUrl){
              this.ruleForm.phoneimageUrl = this.phoneimageUrl;
          }else{
            this.$message({
              type: "error",
              message: "页面图片不能为空"
            });
            return
          }   


          console.log(this.ruleForm)

          weixinupdate_api(ruleForm).then(res=>{
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
      this.pcimageUrl = '';
      this.phoneimageUrl = ''
      this.$refs[formName].resetFields();
    },

    // pc图片上传
    handleAvatarSuccess(res, file) {
      if (res.code == 0) {
        this.pcimageUrl = getUrl() + res.data;
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
    },

    // 移动端图片上传
    handleSuccessphone(res, file) {
      if (res.code == 0) {
        this.phoneimageUrl = getUrl() + res.data;
      } else {
        this.$message({
          message: "图片上传失败，请重新上传！",
          type: "warning"
        });
      }
    },

    beforeUploadphone(file) {
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


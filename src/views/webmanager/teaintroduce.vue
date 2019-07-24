<template>
  <div class="row teaintroduce">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="茶机介绍"></el-input>
      </el-form-item>

      <el-form-item label="简述：" prop="content">
        <el-input type="textarea" v-model="ruleForm.content"  placeholder="自助茶水售卖终端由小茶神健康研究院研制，操作十分便捷，由工作人员放入茶包和桶装纯净水后,机器就可以开始运转了--续水、冲泡制作、回收废茶包一键完成。"></el-input>
      </el-form-item>

      <el-form-item label="视频上传：">
        <el-input v-model="imageUrl" style="width:89%;float:left" placeholder="请选择视频文件进行上传"></el-input>
        <el-upload
          style="width:11%;float:right"
          class="upload-demo"
          :action="upurl"
          :on-success="handleAvatarSuccess"
          :file-list="fileList"
          :limit="1"
          >
          <el-button size="medium" type="primary">点击上传</el-button>
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

import { getteaintroduce_api, getteaupdate_api } from "@/api/webmanager";

import { getPic, getUrl } from "@/api/common";

export default {
  data() {
   

    return {
     
      // 图片上传地址
      upurl: getPic(),
      imageUrl:"",
      fileList: [],
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
         
          if(this.imageUrl){
              this.ruleForm.imageUrl = this.imageUrl;
          }else{
            this.$message({
              type: "error",
              message: "视频不能为空"
            });
            return
          }        
          console.log(this.ruleForm)

          getteaupdate_api(ruleForm).then(res=>{
            if(res.code == 0){

            }else{
                this.$message({
                  type: "error",
                  message: res.msg
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
.teaintroduce .el-upload-list{
      display: none
}
</style>


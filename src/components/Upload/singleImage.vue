<template>
  <div class="uploud">
    <el-upload
      :action="url"
      list-type="picture-card"
      :limit="limit"
      :on-success="success"
      :on-remove="remove"
      :on-exceed="exceedHandler"
      :show-file-list="true"
      :file-list="fileList?fileList:[]"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="ele" alt v-for="(ele,index) in fileList" :key="index"/>
    </el-dialog>
    <small>{{discription}}</small>
  </div>
</template>

<script>
  export default {
    props: ["discription", "limit", "cb", "removefn", "data", "fileList", "arr"],
    data() {
      let url = this.$server + "/console-api/uccn/file/uploadImage";
      return {url, dialogImageUrl: "", dialogVisible: false};
    },
    methods: {
      success(res) {
        if (this.data) this.cb(res, this.data);
        else this.cb(res, this.arr);
      },
      remove(file) {
        if (this.data) this.removefn(file, this.data);
        else this.removefn(file, this.arr);
      },
      exceedHandler() {
      }
    }
  };
</script>

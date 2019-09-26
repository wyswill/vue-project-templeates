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
    props: {
      discription: String,
      limit: Number,
      fileList: Array,
    },
    data() {
      let url = 'http://localhost:3000/uploud';
      return {url, dialogImageUrl: "", dialogVisible: false};
    },
    methods: {
      success(res) {
        this.fileList.push(res);
      },
      remove(file) {
        let t = JSON.parse(JSON.stringify(this.fileList));
        this.$emit('update:fileList', t.filter(ele => ele.uid != file.uid));
      },
      exceedHandler() {
      }
    }
  };
</script>

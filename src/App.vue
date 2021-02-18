<template>
  <a-layout>
    <a-layout-header class="header">
      <h2 class="title">twitter管理后台</h2>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
            mode="inline"
            :style="{ height: '100%', borderRight: 0 }"
            @select="sliderSelectAction"
        >
          <div v-for="ele in routes">
            <a-sub-menu key="{{ele.name}}">
              <template #title>
                {{ele.name}}
              </template>
              <a-menu-item v-for="s in ele.children" :key="`${ele.path}/${s.path}`">
                {{s.name}}
              </a-menu-item>
            </a-sub-menu>
          </div>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item v-for="ele in breadcrumbArr" :key="ele">{{ele}}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '80vh' }">
          <router-view/>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import { routes }       from '@/router';

@Options({})
export default class Home extends Vue {
  routes = routes;

  breadcrumbArr: string[] = [];

  sliderSelectAction(item: { key: string }) {
    this.breadcrumbArr = item.key.split('/');
    this.$router.push(item.key);
  }
}
</script>

<style lang="less">
.title {
  color: #ffffff;
}

</style>

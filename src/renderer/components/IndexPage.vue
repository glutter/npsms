<template>
  <el-container>
    <el-aside width="220px">
      <AppAside/>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
  import AppAside from './Aside/Aside'

  export default {
    name: 'index',
    components: {
      AppAside
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  [v-cloak] {
    display: none;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body,
  #app,
  .el-container
   {
    height: 100%;
  }

  body {
    font-family: 'Source Sans Pro', sans-serif;
    min-width: 1190px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .el-main {
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
  .el-container.is-vertical {
    height: 100%;
  }
</style>

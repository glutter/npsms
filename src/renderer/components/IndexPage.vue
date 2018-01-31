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
  }
  .el-container.is-vertical {
    height: 100%;
  }
  .el-row {
    margin-bottom: 20px;
  }

  .el-row:last-child {
    margin-bottom: 0;
  }

  .el-col {
    border-radius: 4px;
    margin-bottom: 10px;
  }
  .el-col.no-bt-margin {
    margin-bottom: 0;
  }
</style>

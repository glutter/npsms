<template>
  <el-container>
  <el-header height="60px">
    <AppHeader/>
  </el-header>
  <el-container>
    <!-- <el-aside width="260px">
      <AppAside/>
    </el-aside> -->
    <el-main>
      <AppMain/>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  import AppAside from './Layout/Aside'
  import AppHeader from './Layout/Header'
  import AppMain from './Layout/Main'

  export default {
    name: 'index-page',
    components: {
      AppAside,
      AppHeader,
      AppMain
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: 'Source Sans Pro', sans-serif; }

  .el-header,
  .el-footer {
    background-color: rgb(206, 14, 72);
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    border-right: 5px solid #eee;
    text-align: center;
    line-height: 120px;
  }

  .el-main {
    color: #333;
    /* text-align: center;
    line-height: 160px; */
  }
  .el-container.is-vertical {
    height: 100%;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

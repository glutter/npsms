<template>
  <el-container>
    <el-aside width="260px">
      <AppAside/>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
</el-container>
</template>

<script>
  import AppAside from './Layout/Aside'
  import AppMain from './Layout/Main'

  export default {
    name: 'index-page',
    components: {
      AppAside,
      AppMain
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
  body { font-family: 'Source Sans Pro', sans-serif; }

  .el-header,
  .el-footer {
    background-color: rgb(206, 14, 72);
    color: rgb(255, 255, 255);
    text-align: center;
    line-height: 60px;
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
  .spinner_wrap {
    height: 100%;
    position: relative;
    background: #ff0000;
    padding-top: 50vh;
  }
</style>

<template>
    <el-menu default-active="1" class="el-menu-vertical">
      <router-link to="/index-page">
        <el-menu-item index="1">
          <i class="el-icon-document"></i>
          <span slot="title">Мои накладные</span>
        </el-menu-item>
      </router-link>
      <router-link to="/index-page/package-cost">
        <el-menu-item index="3">
          <i class="el-icon-sold-out"></i>
          <span slot="title">Стоимость доставки</span>
        </el-menu-item>
      </router-link>
      <router-link to="/index-page/delivery">
        <el-menu-item index="4">
          <i class="el-icon-date"></i>
          <span slot="title">Сроки доставки</span>
        </el-menu-item>
      </router-link>
      <router-link to="/index-page/settings">
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">Настройки</span>
        </el-menu-item>
      </router-link>
    </el-menu>
</template>

<script>
  export default {
    data () {
      return {}
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<style>
  .el-aside {
    background: rgb(233, 234, 245);
  }
  .el-menu {
    background: transparent;
  }
  .el-menu-vertical {
    min-height: 100%;
  }
</style>

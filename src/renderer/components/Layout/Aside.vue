<template>
    <el-menu default-active="1" class="el-menu-vertical" :collapse="isCollapse">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Мои накладные</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Отследить посылку</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">Стоимость доставки</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">Сроки доставки</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-setting"></i>
        <span slot="title">Ближайшее отделение</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">Настройки</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        isCollapse: false
      }
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
  .el-menu-vertical:not(.el-menu--collapse) {
    // min-height: 400px;
  }
  .el-menu-vertical {
    min-height: 100%;
  }
</style>

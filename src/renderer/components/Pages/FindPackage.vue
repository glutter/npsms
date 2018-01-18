<template>
  <el-row type="flex" class="row-bg" justify="center" align="middle">
    <el-col :span="10">
      <div>
        <el-input placeholder="Введите номер накладной" v-model="input"></el-input>
      </div>
    <div>
      <el-input placeholder="Введите номер телефона" v-model="input">
        <template slot="prepend">+38</template>
      </el-input>
    </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'find-package',
  data () {
    return {
      input: ''
    }
  }
}
</script>

<style>
  .row-bg {
    height: 100%;
  }
</style>

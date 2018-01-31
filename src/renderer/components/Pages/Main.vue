<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <h1>Мои накладные</h1>
      </el-col>
    </el-row>
    <EnFilter/>
    <EnTable/>
  </div>
</template>

<script>
import EnTable from './Main/EnTable'
import EnFilter from './Main/EnFilter'

export default {
  components: {
    EnTable,
    EnFilter
  }
}
</script>

<style>

</style>

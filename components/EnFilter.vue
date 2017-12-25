<template>
  <el-form :inline="true" class="np-form-inline">
    <el-form-item label="Date">
      <el-date-picker v-model="dateFilter" format="dd.MM.yyyy" value-format="dd.MM.yyyy" type="daterange" range-separator="-" start-placeholder="Start date"
        end-placeholder="End date">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="getEn">GetEn</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    computed: {
      dateFilter: {
        get: function () {
          return this.$store.state.dateFilter
        },
        set: function (value) {
          this.$store.commit('UPDATE_DATE_FILTER', value)
        }
      }
    },
    data() {
      return {
        value6: ''
      }
    },
    methods: {
      getEn() {
        this.$store.dispatch('LOAD_EN_LIST')
      }
    }
  }

</script>

<style>
  .np-form-inline {
    padding-top: 22px;
    padding-left: 22px;
    background: rgb(233, 234, 245);
    margin-bottom: 30px;
  }

</style>

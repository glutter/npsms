<template>
  <el-form :inline="true" class="np-form-inline">
    <el-form-item label="Дата">
      <el-date-picker
        v-model="dateFilter"
        format="dd.MM.yyyy"
        value-format="dd.MM.yyyy"
        type="daterange"
        range-separator="-"
        start-placeholder="От"
        end-placeholder="До"
        :picker-options="pickerOptions">
      </el-date-picker>
    </el-form-item>
    <el-form-item>
      <el-button
      type="primary"
      @click="getEn">
      Получить список ЕН</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  computed: {
    dateFilter: {
      get () {
        return this.$store.state.DateFilter.dateFilter
      },
      set (value) {
        this.$store.commit('UPDATE_DATE_FILTER', value)
      }
    }
  },
  data () {
    return {
      pickerOptions: {
        firstDayOfWeek: 1
      }
    }
  },
  methods: {
    getEn () {
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

<template>
  <el-table
    :data="createdEn"
    style="width: 100%"
    stripe
    max-height="720">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      prop="IntDocNumber"
      label="Номер EN"
      width="150">
    </el-table-column>
    <el-table-column
      prop="CreateTime"
      label="Дата создания"
      width="120">
    </el-table-column>
    <el-table-column
      prop="CitySenderDescription"
      label="Отправитель"
      width="120">
    </el-table-column>
    <el-table-column
      prop="CityRecipientDescription"
      label="Получатель"
      width="120">
    </el-table-column>
    <el-table-column
      prop="RecipientsPhone"
      label="Телефон получателя"
      width="300">
    </el-table-column>
    <el-table-column
      prop="Weight"
      label="Вес"
      width="120">
    </el-table-column>
    <el-table-column
      prop="RecipientAddressDescription"
      label="Объявленная стоимость"
      width="120">
    </el-table-column>
    <el-table-column
      prop="SeatsAmount"
      label="Колличество мест"
      width="120">
    </el-table-column>
    <el-table-column
      prop="CostOnSite"
      label="Стоимость доставки"
      width="120">
    </el-table-column>
    <el-table-column
      prop="StateName"
      label="Статус"
      width="120">
    </el-table-column>
    <el-table-column
      prop="EstimatedDeliveryDate"
      label="Дата доставки"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="Operations"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData4)"
          type="text"
          size="small">
          Send SMS
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    computed: mapState([
      'createdEn'
    ]),
    data() {
      return {
        tableData4: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
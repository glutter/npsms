<template>
  <el-table
    v-loading="loading"
    :data="createdEn"
    style="width: 100%"
    stripe
    border
    empty-text='Нет данных'
    max-height="720">

    <el-table-column
      type="selection">
    </el-table-column>

    <el-table-column
      type="index">
    </el-table-column>

    <el-table-column
      prop="IntDocNumber"
      label="Номер EN"
      class-name="bold"
      width="160">
    </el-table-column>

    <el-table-column
      prop="CreateTime"
      width="120"
      label="Дата создания">
    </el-table-column>

    <el-table-column
      label="Отправитель"
      width="180">
      <template slot-scope="scope">
          <p class="bold">{{scope.row.CitySenderDescription}}</p>
          <p>{{scope.row.SenderDescription}}</p>
          <p>{{scope.row.SenderAddressDescription}}</p>
      </template>
    </el-table-column>

    <el-table-column
      label="Получатель"
      width="180">
      <template slot-scope="scope">
          <p class="bold">{{scope.row.CityRecipientDescription}}</p>
          <p>{{scope.row.RecipientDescription}}</p>
          <p>{{scope.row.RecipientAddressDescription}}</p>
      </template>
    </el-table-column>

    <el-table-column
      label="Телефон получателя"
      width="130">
      <template slot-scope="scope">
          <p class="bold">{{scope.row.RecipientsPhone}}</p>
          <p>{{scope.row.RecipientContactPerson}}</p>
      </template>
    </el-table-column>

    <el-table-column
      prop="Weight"
      label="Вес"
      width="70">
    </el-table-column>

    <el-table-column
      prop="Cost"
      width="130"
      label="Объявленная стоимость">
    </el-table-column>

    <el-table-column
      prop="SeatsAmount"
      width="130"
      label="Колличество мест">
    </el-table-column>

    <el-table-column
      prop="CostOnSite"
      width="130"
      label="Стоимость доставки">
    </el-table-column>

    <el-table-column
      prop="StateName"
      width="130"
      label="Статус">
    </el-table-column>

    <el-table-column
      prop="EstimatedDeliveryDate"
      width="140"
      label="Дата доставки">
    </el-table-column>

    <el-table-column
      fixed="right"
      width="130"
      label="Операции">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="sendSMS(scope.$index, createdEn)"
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
    sendSMS (index, row) {
      var enNumber = row[index].IntDocNumber
      var phoneNumber = '+' + row[index].RecipientsPhone
      this.$store.dispatch('SEND_SMS', [enNumber, phoneNumber])
    }
  },
  computed: {
    ...mapState({
      createdEn: state => state.EnTable.createdEn,
      loading: state => state.EnTable.loading
    })
  },
  data () {
    return {}
  }
}
</script>

<style>
  .bold {
    font-weight: 700;
  }
  .el-table .cell {
    word-break: normal;
  }
  .el-table {
    font-size: inherit;
  }
</style>

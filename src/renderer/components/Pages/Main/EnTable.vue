<template>
  <div>
    <el-table
      v-loading="loading"
      :data="createdEn"
      style="width: 100%"
      stripe empty-text='Нет данных'
      @selection-change="handleSelectionChanges">

      <el-table-column
        type="selection">
      </el-table-column>

      <el-table-column
        type="expand">
        <template slot-scope="props">
          <el-row>
            <el-col :span="12">
            <p class="bold">Доп. информация</p>
            <p>Вес посылки: {{props.row.Weight}} кг.</p>
            <p>Объявленная стоимость: {{props.row.Cost}} грн.</p>
            <p>Колличество мест: {{props.row.SeatsAmount}} шт.</p>
            <p>Стоимость доставки: {{props.row.CostOnSite}} грн.</p>
            <p>Статус: {{props.row.StateName}}</p>
            <p>Ожидаемая дата доставки: {{props.row.EstimatedDeliveryDate}}</p>
          </el-col>
            <el-col :span="12">
            <p class="bold">Отправитель</p>
            <p>{{ props.row.CitySenderDescription }}</p>
            <p>{{props.row.SenderDescription}}</p>
            <p>{{props.row.SenderAddressDescription}}</p>
          </el-col>
          </el-row>
        </template>
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
        label="Получатель">
        <template slot-scope="scope">
          <p class="bold">{{scope.row.CityRecipientDescription}}</p>
          <p>{{scope.row.RecipientAddressDescription}}</p>
          <br>
          <p>{{scope.row.RecipientDescription}}</p>
          <p class="bold">{{scope.row.RecipientsPhone}}</p>
          <p>{{scope.row.RecipientContactPerson}}</p>
        </template>
      </el-table-column>

      <el-table-column
        width="120"
        label="Операции">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="sendSMS(scope.$index, createdEn)"
            size="medium">
            <i class="el-icon-message"></i>
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div></div>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    data () {
      return {}
    },
    methods: {
      sendSMS (index, row) {
        var enNumber = row[index].IntDocNumber
        var phoneNumber = '+' + row[index].RecipientsPhone
        this.$store.dispatch('SEND_SMS', [enNumber, phoneNumber])
      },
      handleSelectionChanges (value) {
        this.$store.commit('SET_MULTI_EN', value)
      }
    },
    computed: {
      ...mapState({
        createdEn: state => state.EnTable.createdEn,
        loading: state => state.EnTable.loading
      })
    }
  }
</script>

<style>
  .bold {
    font-weight: 700;
  }

  .el-table .cell {
    word-break: normal;
    line-height: normal;
  }
</style>
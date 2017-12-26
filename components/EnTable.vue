<template>
  <el-table
    :data="createdEn"
    style="width: 100%"
    stripe
    border
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
      label="Телефон получателя">
      <template slot-scope="scope">
          <p class="bold">{{scope.row.RecipientsPhone}}</p>
          <p>{{scope.row.RecipientContactPerson}}</p>
      </template>
    </el-table-column>

    <el-table-column
      prop="Weight"
      label="Вес">
    </el-table-column>

    <el-table-column
      prop="Cost"
      label="Объявленная стоимость">
    </el-table-column>

    <el-table-column
      prop="SeatsAmount"
      label="Колличество мест">
    </el-table-column>

    <el-table-column
      prop="CostOnSite"
      label="Стоимость доставки">
    </el-table-column>

    <el-table-column
      prop="StateName"
      label="Статус">
    </el-table-column>

    <el-table-column
      prop="EstimatedDeliveryDate"
      label="Дата доставки">
    </el-table-column>

    <el-table-column
      fixed="right"
      label="Operations">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, createdEn)"
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
      }
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

<template>
  <div>
    <md-table md-card>
      <md-table-toolbar>
        <h1 class="md-title">Електронные накладные</h1>
      </md-table-toolbar>
      <md-table-row>
        <md-table-head>Номер EN</md-table-head>
        <md-table-head>Дата создания</md-table-head>
        <md-table-head>Отправитель</md-table-head>
        <md-table-head>Получатель</md-table-head>
        <md-table-head>Телефон получателя</md-table-head>
        <md-table-head>Вес</md-table-head>
        <md-table-head>Объявленная стоимость</md-table-head>
        <md-table-head>Колличество мест</md-table-head>
        <md-table-head>Стоимость доставки</md-table-head>
        <md-table-head>Статус</md-table-head>
        <md-table-head>дата доставки</md-table-head>
      </md-table-row>

      <md-table-row>
        <md-table-cell md-numeric></md-table-cell>
        <md-table-cell>
          С <md-datepicker @input="getEn" v-model="dateFilter.dateFrom" /><br>
          по <md-datepicker @input="getEn" v-model="dateFilter.dateTo" />
        </md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell md-numeric></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
        <md-table-cell></md-table-cell>
      </md-table-row>

      <md-table-row v-for="item in createdEn" v-bind:key="item.id">
        <md-table-cell md-numeric><b>{{item.IntDocNumber}}</b></md-table-cell>
        <md-table-cell>{{item.CreateTime}}</md-table-cell>
        <md-table-cell><b>{{item.CitySenderDescription}}</b><br>{{item.SenderDescription}}<br>{{item.SenderAddressDescription}}</md-table-cell>
        <md-table-cell><b>{{item.CityRecipientDescription}}</b><br>{{item.RecipientDescription}}<br>{{item.RecipientAddressDescription}}</md-table-cell>
        <md-table-cell><b>{{item.RecipientsPhone}}</b> {{item.RecipientContactPerson}}</md-table-cell>
        <md-table-cell md-numeric>{{item.Weight}}</md-table-cell>
        <md-table-cell>{{item.RecipientAddressDescription}}</md-table-cell>
        <md-table-cell>{{item.SeatsAmount}}</md-table-cell>
        <md-table-cell>{{item.CostOnSite}}</md-table-cell>
        <md-table-cell>{{item.StateName}}</md-table-cell>
        <md-table-cell>{{item.EstimatedDeliveryDate}}</md-table-cell>
      </md-table-row>

    </md-table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'NpTable',
    computed: mapState([
      'createdEn',
      'dateFilter'
    ]),
    methods: {
      getEn() {
        this.$store.dispatch('LOAD_EN_LIST')
      }
    }
  }
</script>

<style>
.md-app-content .md-card {
    overflow: auto
  }
</style>

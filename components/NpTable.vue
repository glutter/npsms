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
          С <md-datepicker v-model="$store.state.filterDateFrom" /><br>
          по <md-datepicker v-model="$store.state.filterDateTo" />
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

      <md-table-row v-for="item in $store.state.createdEn" v-bind:key="item.id">
        <md-table-cell md-numeric>{{item.IntDocNumber}}</md-table-cell>
        <md-table-cell>{{item.CreateTime}}</md-table-cell>
        <md-table-cell>{{item.CitySenderDescription}}<br>{{item.SenderDescription}}<br>{{item.SenderAddressDescription}}</md-table-cell>
        <md-table-cell>{{item.CityRecipientDescription}}<br>{{item.RecipientDescription}}<br>{{item.RecipientAddressDescription}}</md-table-cell>
        <md-table-cell>{{item.RecipientsPhone}} {{item.RecipientContactPerson}}</md-table-cell>
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
  export default {
    name: 'NpTable'
  }
</script>

<style>
.md-app-content .md-card {
    overflow: auto
  }
</style>

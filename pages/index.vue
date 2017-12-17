<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{title}}</span>
        <md-button class="md-raised md-accent" @click="getEN">Загрузить ЕН</md-button>
      </md-app-toolbar>
      <md-app-content>
        <NpTable/>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import axios from 'axios'
  import NpTable from '~/components/NpTable'

  export default {
    name: 'index',
    components: {
      NpTable
  },
    data: () => ({
      menuVisible: false,
      title: 'NPSms',
      // createdEn: []
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      },
      getEN() {

        var today = new Date()
        var dd = today.getDate()
        var mm = today.getMonth()+1 //January is 0!
        var yyyy = today.getFullYear()

        if(dd<10) {
          dd = '0'+dd
        }
        if(mm<10) {
            mm = '0'+mm
        }

        today = mm + '.' + dd + '.' + yyyy


        var url = 'https://api.novaposhta.ua/v2.0/json/'
        var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
        var data = {
          "apiKey": apiKey,
          "modelName": "InternetDocument",
          "calledMethod": "getDocumentList",
          "methodProperties": {
            "DateTimeFrom": "01.01.2017",
            "DateTimeTo": today,
            "GetFullList": "1"
          }
        }
        axios.post(url, data).then((response) => {
          this.$store.commit('getCreatedEn', response.data.data)
          console.log(this.$store.state.createdEn)
        }).catch(function (error) {
          console.log(error)
        })
      }
    },
    mounted () {
      this.getEN()
    }
  }

</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 100vh;
    border: 1px solid rgba(#000, .12);
  } // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

</style>

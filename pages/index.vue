<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{title}}</span>
        <md-button class="md-raised md-accent" @click="getEN">Загрузить ЕН</md-button>
      </md-app-toolbar>
      <md-app-content>
        <div>
            <li v-for="item in createdEn" v-bind:key="item.id">{{item.Weight}}</li>
          </ul>
        </div>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'index',
    data: () => ({
      menuVisible: false,
      title: 'NPSms',
      createdEn: []
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      },
      getEN() {
        var url = 'https://api.novaposhta.ua/v2.0/json/'
        var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
        var data = {
          "apiKey": apiKey,
          "modelName": "InternetDocument",
          "calledMethod": "getDocumentList",
          "methodProperties": {
            "GetFullList": "1"
          }
        }
        axios.post(url, data).then((response) => {
          this.createdEn = response.data.data
          console.log(this.createdEn)
        }).catch(function (error) {
          console.log(error)
        })
      }
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

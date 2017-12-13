<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">{{title}}</span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item>
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">Inbox</span>
          </md-list-item>

          <md-list-item>
            <md-icon>send</md-icon>
            <span class="md-list-item-text">Sent Mail</span>
          </md-list-item>

          <md-list-item>
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">Trash</span>
          </md-list-item>

          <md-list-item>
            <md-icon>error</md-icon>
            <span class="md-list-item-text">Spam</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
          <md-empty-state
      md-icon="devices_other"
      md-label="Create your first project"
      md-description="Creating project, you'll be able to upload your design and collaborate with people.">
      <md-button @click="getEN" class="md-primary md-raised">Загрузить ЕН</md-button>
    </md-empty-state>
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
      title: 'NPSms'
    }),
    methods: {
      toggleMenu () {
        this.menuVisible = !this.menuVisible
      },
      getEN () {
        var url = 'https://api.novaposhta.ua/v2.0/json/'
        var apiKey = '6be5aca674dcb520b2b64a50c9f51935'
        var data = {
          "apiKey": apiKey,
          "modelName": "Address",
          "calledMethod": "searchSettlements",
          "methodProperties": {
            "CityName": "згурівка",
            "Limit": 5
          }
        }
        axios.post(url, data).then(function (response) {
          console.log(response.data)
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
  }

   // Demo purposes only
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
</style>



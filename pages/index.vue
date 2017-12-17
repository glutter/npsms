<template>
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{title}}</span>
        <md-button class="md-raised md-accent" @click="getEn">Загрузить ЕН</md-button>
      </md-app-toolbar>
      <md-app-content>
        <NpTable/>
      </md-app-content>
    </md-app>
</template>

<script>
  import NpTable from '~/components/NpTable'


  export default {
    name: 'index',
    components: {
      NpTable
  },
    data: () => ({
      menuVisible: false,
      title: 'NPSms'
    }),
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible
      },
      getEn() {
        this.$store.dispatch('LOAD_EN_LIST')
      }
    },
    // mounted: function () {
    //   this.$store.dispatch('LOAD_EN_LIST')
    // }

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

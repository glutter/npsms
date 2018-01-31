<template lang="html">
    <el-form :model="appSettings" ref="appSettings" label-width="140px" class="settings_form">
      <el-row :gutter="20">
        <el-col :span="24">
          <h1>Настройки</h1>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div>
            <span class='s_subtitle'>Новая почта</span>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item label="URL адрес API">
            <el-input v-model="appSettings.apiURL" placeholder="Введите URL адрес API">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Ключ API">
            <el-input v-model="appSettings.apiKey" placeholder="Введите ключ API">
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <div>
            <span class='s_subtitle'>SMS Сервис (используется SMPP протокол)</span>
          </div>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Адресс сервера">
            <el-input v-model="appSettings.smsServer" placeholder="Введите адрес сервера"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Порт сервера">
            <el-input v-model.number="appSettings.smsPort" placeholder="Введите порт сервера"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Логин">
            <el-input v-model="appSettings.smsLogin" placeholder="Введите логин"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Пароль">
            <el-input type="password" v-model="appSettings.smsPass" placeholder="Введите пароль"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="Ваше альфа-имя">
            <el-input v-model="appSettings.smsAlfaName" placeholder="Введите альфа-имя"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
           <el-form-item>
            <el-button type="primary" @click="submitForm('appSettings')">Сохранить</el-button>
            <span> (После сохранения настроек перезапустите программу)</span>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
</template>

<script>
  export default {
    data () {
      return {
        appSettings: {
          apiURL: '',
          apiKey: '',
          smsServer: '',
          smsPort: '',
          smsLogin: '',
          smsPass: '',
          smsAlfaName: ''
        }
      }
    },
    mounted () {
      if (this.$db.get('settings') !== undefined) {
        this.appSettings = this.$db.get('settings')
      }
    },
    methods: {
      submitForm () {
        this.$db.set('settings', this.appSettings)
        alert('Настройки успешно сохранены')
      }
    }
  }
</script>

<style lang="css">
  .s_subtitle {
    display: block;
    padding: 15px;
    font-size: 18px;
    background: #eee;
    margin-bottom: 20px;
  }

  .input-label {
    margin-bottom: 5px;
    display: inline-block;
  }
</style>
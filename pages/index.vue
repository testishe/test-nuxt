<template>
  <div>
    <section class="section">
      <h1>Обувь</h1>
      <nuxt-link :to="{ path: '/', query: { from: 'shoes' } }">На главную</nuxt-link>
      <nuxt-link :to="{ path: '/shoes' }">Обувь</nuxt-link>
      <nuxt-link :to="{ path: '/shoes/snickers' }">Кросовки</nuxt-link>
      <nuxt-link :to="{ path: '/fruits' }">Фрукты</nuxt-link>
      <nuxt-link :to="{ path: `/fruits/bananas/${3}` }">Банан №3</nuxt-link>
    </section>

    <div class="section">
      <UniversalText :to="{ path: '/fruits' }">Универсальный компонент nuxt ссылка</UniversalText>
      <UniversalText href="https://www.google.com/" target="_blank">Универсальный компонент простая ссылка</UniversalText>
    </div>

    <div class="section">
      <input v-model="inputText" type="text">
      <br><br>
      <UniversalText @click.native="click">Универсальный компонент кнопка</UniversalText>
      <br><br>
      Store here: {{ storLabel }}
    </div>
  </div>
</template>

<script>
import UniversalText from '../components/UniversalText'

export default {
  components: { UniversalText },
  data () {
    return {
      inputText: ''
    }
  },
  computed: {
    storLabel () {
      return this.$store.getters.getText
    }
  },
  methods: {
    click () {
      this.$store.commit('addText', this.inputText)
    }
  }
}
</script>

<style>
.section {
  margin: 20px;
  padding: 20px;
  border: 1px solid silver;
}
</style>
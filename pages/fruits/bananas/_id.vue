<template>
  <section>
    <h1>Банан №{{ $router.history.current.params.id }}</h1>
    <nuxt-link :to="{ path: '/', query: { from: 'bananas' } }">На главную</nuxt-link>
    <nuxt-link :to="{ path: '/shoes' }">Обувь</nuxt-link>
    <nuxt-link :to="{ path: '../../../shoes/snickers' }" append>Кросовки</nuxt-link>
    <nuxt-link :to="{ path: '/fruits' }">Фрукты</nuxt-link>
    <nuxt-link :to="{ path: `/fruits/bananas/${3}` }">Банан №3</nuxt-link>
  </section>
</template>

<script>
export default {
}
</script>

<style>
</style>
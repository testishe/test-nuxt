<template>
  <component :is="tag" :to="to" :href="href" class="UniversalText">
    <slot/>
  </component>
</template>

<script>
import NuxtLink from '../.nuxt/components/nuxt-link.server'

export default {
  name: 'UniversalText',
  props: {
    href: {
      type: String,
      default: undefined
    },
    to: {
      type: [String, Object],
      default: undefined
    }
  },
  computed: {
    tag () {
      if (this.to) return NuxtLink
      else if (this.href) return 'a'
      return 'button'
    }
  }
}
</script>

<style>
.UniversalText {
  padding: 5px 10px;
  border: 1px solid silver;
}
</style>

<template>
  <div id="app">
    <Cards methodName='next'/>
    <Cards methodName='prev'/>
    <Cards methodName='shuffle'/>
    <Cards methodName='random'/>
  </div>
</template>

<script>
import Cards from '@/components/Cards.vue'

export default {
  name: 'app',
  components: {
    Cards
  }
}
</script>

<style>
</style>

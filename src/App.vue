<template>
  <div id="app">
    <Cards methodName='next'/>
    <pre class="prettyprint lang-js">
      <code>
      let item = (this.iterator.hasNext())?this.iterator.next():this.iterator.fast();
      item.content.excute()
      </code>
    </pre>
    <Cards methodName='prev'/>
    <pre class="prettyprint lang-js">
      <code>
      let item = (this.iterator.hasPrev())?this.iterator.prev():this.iterator.last();
      item.content.excute()
      </code>
    </pre>
    <Cards methodName='shuffle'/>
    <pre class="prettyprint lang-js">
      <code>
      let init =()=>{
        console.log('shuffle init')
      }
      let update =(item)=>{
        console.log('shuffle update' + item.name)
      }
      let complete =()=>{
        console.log('shuffle complete')
      }
      let item = this.iterator.shuffle(init, update, complete);
      item.content.excute()
      </code>
    </pre>
    <Cards methodName='random'/>
    <pre class="prettyprint lang-js">
      <code>
      let item = this.iterator.random();
      item.content.excute()
      </code>
    </pre>
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

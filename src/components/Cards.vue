<template>
  <div>
    <div>
      <button @click="excute">{{methodName}}</button>
      <ul>
        <li v-for="(item, i) in list" :key="item">
          <Card :imagePath=item :ref="item"/>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Item from '@/assets/js/libs/tk90755/utils/iterator/Item.js'
import Iterator from '@/assets/js/libs/tk90755/utils/iterator/Iterator.js'

export default {
  name: 'cards',
  components: {
    Card
  },
  props: {
    methodName: String
  },
  data: function () {
    return {
      counter: 0,
      iterator: undefined,
      list: [
        './images/card_club_01.png', 
        './images/card_club_02.png', 
        './images/card_club_03.png',
        './images/card_club_04.png',
        './images/card_club_05.png',
        './images/card_club_06.png',
        './images/card_club_07.png',
        './images/card_club_08.png',
        './images/card_club_09.png',
        './images/card_club_10.png'
      ]
    }
  },
  mounted() {
    this.iterator = new Iterator();
    for(let i in this.list){
      let path = this.list[i]
      this.iterator.addItem(new Item(path, path));
    }
  },
  methods: {
    excute() {
      if(this.methodName == 'next'){
        this._next();
      }else if(this.methodName == 'prev'){
        this._prev();
      }else if(this.methodName == 'shuffle'){
        this._shuffle();
      }else if(this.methodName == 'random'){
        this._random();
      }
    },
    _next(){
      let item = (this.iterator.hasNext())?this.iterator.next():this.iterator.fast();
      console.log(item.name)
    },
    _prev(){
      let item = (this.iterator.hasPrev())?this.iterator.prev():this.iterator.last();
      console.log(item.name)
    },
    _shuffle(){
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
    },
    _random(){
      let item = this.iterator.random();
      console.log(item.name)
    }
  }
};
</script>
<style scoped>
li{
  list-style: none;
  display: inline-block;   
}
button{
  margin: 0 5px;
}
</style>

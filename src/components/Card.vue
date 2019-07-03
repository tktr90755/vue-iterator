<template>
  <div id="cardlist">
    <ul>
      <li ref="li" @click="excute">
        <div class="omote" ref="omote"><img :src="imagePath" width="100" height="146"></div>
        <div class="ura" ref="ura"><img src="/images/card_back.png" width="100" height="146"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'card',
  data() {
    return {
      turnUp: false
    }
  },
  props: {
    imagePath: String
  },
  mounted(){
    this.back()
  },
  methods: {
    excute(){
      let f = (this.turnUp)?this.back:this.front;
      this.turnUp = !this.turnUp;
      f()
    },
    back() {
      let omote = this.$refs['omote'];
      let ura = this.$refs['ura'];
      omote.style.setProperty("-webkit-transform" , "perspective(500) rotateY(-90deg)");
      omote.style.setProperty("-moz-transform" , "perspective(500px) rotateY(-90deg)");
      omote.style.setProperty("transform" , "perspective(500px) rotateY(-90deg)");
      
      setTimeout(function(){
        ura.style.setProperty("-webkit-transform" , "perspective(500) rotateY(0deg)");
        ura.style.setProperty("-moz-transform" , "perspective(500px) rotateY(0deg)");
        ura.style.setProperty("transform" , "perspective(500px) rotateY(0deg)");
      }, 125);    
    },
    front() {
      let omote = this.$refs['omote'];
      let ura = this.$refs['ura'];
      ura.style.setProperty("-webkit-transform" , "perspective(500) rotateY(90deg)");
      ura.style.setProperty("-moz-transform" , "perspective(500px) rotateY(90deg)");
      ura.style.setProperty("transform" , "perspective(500px) rotateY(90deg)");
      
      setTimeout(function(){
        omote.style.setProperty("-webkit-transform" , "perspective(500) rotateY(0deg)");
        omote.style.setProperty("-moz-transform" , "perspective(500px) rotateY(0deg)");
        omote.style.setProperty("transform" , "perspective(500px) rotateY(0deg)");
      }, 125);      
    }
  }
}
</script>
<style scoped>
li {
  position: relative;
  float: left;
  margin: 0 10px 10px 0;
  width: 100px;
  height: 146px;
  list-style: none;
  cursor: pointer;
}
.omote {
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -webkit-transform:perspective(1000) rotateY(0deg);
  -moz-transform:perspective(1000px) rotateY(0deg);
  transform:perspective(1000px) rotateY(0deg);
  -webkit-transition:ease-out 0.125s -webkit-transform;
  -moz-transition:ease-out 0.125s -moz-transform;
  transition:ease-out 0.125s transform;
}
.ura {
  position: absolute;
  top: 0;
  left: 0;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  -webkit-transform:perspective(1000) rotateY(90deg);
  -moz-transform:perspective(1000px) rotateY(90deg);
  transform:perspective(1000px) rotateY(90deg);
  -webkit-transition:ease-out 0.125s -webkit-transform;
  -moz-transition:ease-out 0.125s -moz-transform;
  transition:ease-out 0.125s transform;
}
</style>

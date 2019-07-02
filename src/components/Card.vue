<template>
  <div class="card">
    <img :src="imagePath" width="100" height="146">
  </div>
</template>

<script>

import {TweenMax} from "gsap";

export default {
  name: 'card',
  props: {
    imagePath: String
  },
  mounted(){

  },
  methods: {
    update(delta){
      // if(this.mixer !== undefined)this.mixer.update(delta);
    },
    myCharacter(){
      // return this.character;
    },
    myMixer(){
      // return this.mixer;
      console.log('bbbbbb')
    }
  }
}
</script>
<style scoped>

</style>

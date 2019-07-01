<template>
  <div class="hello">

  </div>
</template>

<script>

import Iterator from '@/assets/js/libs/tk90755/utils/iterator/Iterator.js'
import {TweenMax} from "gsap";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
    }
  }
}
</script>
<style scoped>

</style>

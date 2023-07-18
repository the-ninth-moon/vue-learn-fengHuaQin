<template>
  <div class="single">
    <button :class="{active:isActive}" @click="play">{{enter}}<p>{{ letter }}</p>
    </button>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  props:{
    enter:String,
    kind:String,
    letter:String,
  },

  data:function(){
    return {
      mp3url:"/instrument/"+this.kind+"/"+this.enter+".mp3",
      audio:null,
      isActive:false,
      size:"100%",
    }
  },
  created:function(){
      this.audio = new Audio();
      this.audio.src = this.mp3url;
      this.audio.preload = 'auto';
      this.audio.load();
  },
  methods:{
    play(){
      var audio2 = new Audio(this.mp3url);
      audio2.play();
      
    },
    change ()
    {
      this.isActive = !this.isActive;
    }   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    border-radius: 50%;
    width: v-bind(size);
    height: v-bind(size);
    box-shadow: 0px 0px 10px #E4E6C3;
    color:green;
    font-weight:bold;
    font-size: larger;
  }  
  button:active{
    width: 100%;
    height: 100%;
    transform: translateY(-1px);
  }
  .active{
    width: 100%;
    height: 100%;
    transform: translateY(-1px);
  }

  .single{
    height: 60px;
    width: 60px;
    margin: 10px;
    display: inline-block;
  }
  p{
    font-size: smaller;
    margin: 0 0 ;
  }
</style>

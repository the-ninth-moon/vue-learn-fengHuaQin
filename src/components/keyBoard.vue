<template>
    <div class="line">
      <div class="inner highest">
        <keyMusic ref="C6"  :kind=this.kind letter="1" enter="C6"/>
        <keyMusic ref="D6"  :kind=this.kind letter="2" enter="D6"/>
        <keyMusic ref="E6"  :kind=this.kind letter="3" enter="E6"/>
        <keyMusic ref="F6"  :kind=this.kind letter="4" enter="F6"/>
        <keyMusic ref="G6"  :kind=this.kind letter="5" enter="G6"/>
        <keyMusic ref="A6"  :kind=this.kind letter="6" enter="A6"/>
        <keyMusic ref="B6"  :kind=this.kind letter="7" enter="B6"/>
    </div>
    </div>
    <div class="line">
      <div class="inner high">
        <keyMusic ref="C5"  :kind=this.kind letter="Q" enter="C5"/>
        <keyMusic ref="D5"  :kind=this.kind letter="W" enter="D5"/>
        <keyMusic ref="E5"  :kind=this.kind letter="E" enter="E5"/>
        <keyMusic ref="F5"  :kind=this.kind letter="R" enter="F5"/>
        <keyMusic ref="G5"  :kind=this.kind letter="T" enter="G5"/>
        <keyMusic ref="A5"  :kind=this.kind letter="Y" enter="A5"/>
        <keyMusic ref="B5"  :kind=this.kind letter="U" enter="B5"/>
     </div>
    </div>
    <div class="line">
      <div class="inner low">
        <keyMusic ref="C4"  :kind=this.kind letter="A" enter="C4"/>
        <keyMusic ref="D4"  :kind=this.kind letter="S" enter="D4"/>
        <keyMusic ref="E4"  :kind=this.kind letter="D" enter="E4"/>
        <keyMusic ref="F4"  :kind=this.kind letter="F" enter="F4"/>
        <keyMusic ref="G4"  :kind=this.kind letter="G" enter="G4"/>
        <keyMusic ref="A4"  :kind=this.kind letter="H" enter="A4"/>
        <keyMusic ref="B4"  :kind=this.kind letter="J" enter="B4"/>
      </div>
    </div>
    <div class="line">
      <div class="inner lowest">
        <keyMusic ref="C3"  :kind=this.kind letter="Z" enter="C3"/>
        <keyMusic ref="D3"  :kind=this.kind letter="X" enter="D3"/>
        <keyMusic ref="E3"  :kind=this.kind letter="C" enter="E3"/>
        <keyMusic ref="F3"  :kind=this.kind letter="V" enter="F3"/>
        <keyMusic ref="G3"  :kind=this.kind letter="B" enter="G3"/>
        <keyMusic ref="A3"  :kind=this.kind letter="N" enter="A3"/>
        <keyMusic ref="B3"  :kind=this.kind letter="M" enter="B3"/>
    </div>
    </div>
    <div>
      <p>{{ key }}</p>
    </div>
  </template>
  
  <script>
  import keyMusic from './keyMusic.vue'
  
  export default {
    name: 'keyBoard',
    components: {
      keyMusic
    },
    props:{
        kind:String,
        title:String,
    },
    data() {
      return {
        key: ''
      }
    },
    mounted() {
      document.addEventListener('keydown', this.onKeyDown)
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.onKeyDown)
    },
    methods: {
      onKeyDown(event) {
        this.key += event.key
      switch(event.key){
        case '1':
          this.$refs.C6.play();
          this.$refs.C6.change();
          break;
        case '2':
          this.$refs.D6.play();
          break;
        case '3':
          this.$refs.E6.play();
          break;
        case 'i':
          this.$refs.C6.play();
          break;
        case 'o':
          this.$refs.D6.play();
          break;
        case 'p':
          this.$refs.E6.play();
          break;
        case '4':
          this.$refs.F6.play();
          break;
        case '5':
          this.$refs.G6.play();
          break;
        case '6':
          this.$refs.A6.play();
          break;
        case '7':
          this.$refs.B6.play();
          break;
        case 'q':
          this.$refs.C5.play();
          break;
        case 'w':
          this.$refs.D5.play();
          break;
        case 'e':
          this.$refs.E5.play();
          break;
        case 'r':
          this.$refs.F5.play();
          break;
        case 't':
          this.$refs.G5.play();
          break;
        case 'y':
          this.$refs.A5.play();
          break;
        case 'u':
          this.$refs.B5.play();
          break;
        case 'k':
          this.$refs.C5.play();
          break;
        case 'l':
          this.$refs.D5.play();
          break;
        case ';':
          this.$refs.E5.play();
          break;
        case 'a':
          this.$refs.C4.play();
          break;
        case 's':
          this.$refs.D4.play();
          break;
        case 'd':
          this.$refs.E4.play();
          break;
        case 'f':
          this.$refs.F4.play();
          break;
        case 'g':
          this.$refs.G4.play();
          break;
        case 'h':
          this.$refs.A4.play();
          break;
        case 'j':
          this.$refs.B4.play();
          break;
        case ',':
          this.$refs.C4.play();
          break;
        case '.':
          this.$refs.D4.play();
          break;
        case '/':
          this.$refs.E4.play();
          break;
        case 'z':
          this.$refs.C3.play();
          break;
        case 'x':
          this.$refs.D3.play();
          break;
        case 'c':
          this.$refs.E3.play();
          break;
        case 'v':
          this.$refs.F3.play();
          break;
        case 'b':
          this.$refs.G3.play();
          break;
        case 'n':
          this.$refs.A3.play();
          break;
        case 'm':
          this.$refs.B3.play();
          break;
        default:
          this.key = '';
          break;
      }
    },
    }
  }
  </script>
  
  <style>
  .line{
    width:100%;
    height:100%;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .inner{
    width:100%;
    margin: 0 auto;
    text-align: center;
  }
  </style>
  
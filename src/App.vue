<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0"><a href="https://space.bilibili.com/68329743" target="_blank">柒氿分参</a> </el-menu-item>
    <el-menu-item index="1" style="transform: translateX(200px);"><h1 >风花琴青春版</h1></el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="2">
      <template #title>乐器种类</template>
      <el-menu-item index="2-1"><RouterLink to="/piano">钢琴</RouterLink></el-menu-item>
      <el-menu-item index="2-3"><RouterLink to="/electric_piano">电钢琴</RouterLink></el-menu-item>
      <el-menu-item index="2-2"><RouterLink to="/music_box">八音盒</RouterLink></el-menu-item>
      <el-menu-item index="2-3"><RouterLink to="/nylon_guitar">吉他</RouterLink></el-menu-item>

    </el-sub-menu>
  </el-menu>
  </el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>
 


<script>
import keyBoard from './components/keyBoard.vue'

import piano from "./page/Piano.vue"


export default {
  name: 'App',
  components: {
    keyBoard,
    piano,
  },
  mounted(){
    //准备横屏
    this.init();
  },
  methods: {
    // 判断是否是手机端，如果是，返回true
    _isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    },
    init() {
      this.forceLandscapeScreenHandle();

      // 这里监控
      this.onWindowSizeChanged();
    },

    forceLandscapeScreenHandle() {
      const body = document.getElementsByTagName('body')[0];
      const html = document.getElementsByTagName('html')[0];
      const width = html.clientWidth;
      const height = html.clientHeight;
      const max = width > height ? width : height;
      const min = width > height ? height : width;
      body.style.width = max + "px";
      body.style.height = min + "px";
    },

    onWindowSizeChanged() {
      window.addEventListener("resize", this.forceLandscapeScreenHandle)
    }
  },
  
}

</script>

<style>

.flex-grow {
  flex-grow: 1;
}
a{
  text-decoration: none;
}
#app {
  /*文字居中*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;
}

* {
  /*初始化样式*/
  margin: 0;
  padding: 0;
}

html {
  /*用于 获取 屏幕的可视宽高*/
  width: 100%;
  height: 100%;
  overflow: hidden;
}

body {
  /*让 body 初始 width 和 height 就 等于 页面可视区域的 宽高*/
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

}

.common-layout{
  width:100%;
  height: 90%;
  z-index: 0;
}

@media screen and (orientation: portrait) {
  /*竖屏样式*/
  body {
    transform-origin: 0 0;
    transform: rotateZ(90deg) translateY(-100%);
  }
}


</style>

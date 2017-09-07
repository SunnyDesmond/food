<template>
  <div id="app">
    <all-head></all-head>
    <router-view></router-view>
  </div>
</template>

<script>
import allHead from './components/header/head'
export default {
  name: 'app',
  components:{
    allHead
  }
}
</script>

<style>
      @import './style/base.scss';
</style>

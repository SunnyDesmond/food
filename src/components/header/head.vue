<template>
    <header class="head">
        <span class="back-arr" @click="back"></span>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    name: "head",
    data() {
        return {
            title: '名气家常菜'
        }
    },
    methods:{
        back(){
            window.history.back()
        }
    },
}
</script>

 

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.head {
    background-color: #0097FF;
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
      height: r(150);
    
    .back-arr{
        @include bis('../../assets/img/back_arrow.png');
        width: r(60);
        height: r(60);
        margin-left: r(45);
        z-index: 1000;
    }
    h1 {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        font-weight: 500;
        font-size: r(60);
        color: #fff;
      flex:1;
        text-align: center;
        height: r(150);
        line-height: r(150);
    }
}
</style>

<template>
    <header class="head">
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
    }
}
</script>

 

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.head {
    background-color: #0097FF;
    position: fixed;
    width: 100%;
   
    h1 {
        font-weight: 500;
        font-size: r(60);
        color: #fff;
        width: 100%;
        text-align: center;
        height: r(150);
        line-height: r(150);
    }
}
</style>

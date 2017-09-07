<template>
    <div class="navTab">
        <div class="tab" :class="[{cur:item.iscur,}]" v-for="(item, index) in tabItems" :key="item.id">{{item.title}}</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabItems: [
                { title: "快食简餐",iscur:true},
                { title: "精致小点",iscur:false},
                { title: "特色卤味",iscur:false},
                { title: "新鲜净菜",iscur:false}
            ]
        }
    },
  
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.navTab {
    display: flex;
    justify-content: space-around;
    background-color: #0097FF;
    height: r(150);
    .tab {
        font-size: r(46);
        color: #fff;
        padding: r(10);
        display: flex;
        align-items: center;
        position: relative;
        &.cur:after {
            content: "";
            position: absolute;
            bottom: r(20);
            left: 0;
            width: 100%;
            border-bottom: 1px solid #fff;
        }
    }
}
</style>


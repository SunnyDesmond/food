<template>
    <div class="tabFoot">
        <div class="item" v-for="tab in tabs" :key="tab.id">
            <span class="icon iconfont" :class="tab.icon"></span>
            <span class="label">{{tab.label}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabs: [
                {
                    label: "美食",
                    icon:"icon-meishi"
                },
                {
                    label: "订单",
                     icon:"icon-dingdan"
                },
                {
                    label: "我的",
                     icon:"icon-home"
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin';
@import '../../assets/fonts/iconfont.css';
.tabFoot {
    position: fixed;
    left: 0;
    bottom: 0;
    background-color: #fff;
    border-top: 1px solid #D5D5D5;
    height: r(150);
    width: 100%;
    display: flex;
justify-content: space-around;
    .item{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        span{
            font-size: r(36);
            &.icon{
                font-size: r(66);
            }
        }
    }
}

</style>

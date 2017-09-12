<template>
    <div>
        <div class="navTab">
            <div class="tab" :class="[{cur:item.iscur,}]" v-for="(item, index) in tabItems" :key="item.id" @click="tabJump(index)">{{item.title}}</div>
        </div>
        <food-list :tabType="tabType"></food-list>
    </div>
</template>

<script>
import foodList from '@/components/common/foodlist/foodlist'
export default {
    props: ["tabType"],
    data() {
        return {
            tabItems: [
                { title: "快食简餐", iscur: false },
                { title: "精致小点", iscur: false },
                { title: "特色卤味", iscur: false },
                { title: "新鲜净菜", iscur: false }
            ]
        }
    },
    methods: {
        // tab跳转
        tabJump: function(index) {
            this.$router.push({ query: { tabType: index } });
            window.sessionStorage.setItem("tabType", index);
            //处理选项卡下划线
            for (let i = 0; i < this.tabItems.length; i++) {
                this.tabItems[i].iscur = false;
                this.tabItems[index].iscur = true;
            }
        },
    },
    components: {
        foodList,
    },
    mounted() {
        //处理选项卡下划线

        const tabVal = window.sessionStorage.getItem("tabType");
        if (tabVal != undefined) {
            for (let i = 0; i < this.tabItems.length; i++) {
                this.tabItems[i].iscur = false;
                this.tabItems[tabVal].iscur = true;
            }
        } else {
            this.tabItems[0].iscur = true;
        }

    }

}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.navTab {
    display: flex;
    justify-content: space-around;
    background-color: #0097FF;
    height: r(150);
    position: fixed;
    width: 100%;
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


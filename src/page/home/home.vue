<template>
    <div class="home">
        <nav-tab></nav-tab>
        <food-list></food-list>
        <tab-foot></tab-foot>
    </div>
</template>

<script>
import navTab from '@/components/common/navtab/navtab'
import foodList from '@/components/common/foodlist/foodlist'
import tabFoot from '@/components/footer/foot'
export default {
    name: "home",

    data() {
        return {

        }
    },
    components: {
        navTab,
        foodList,
        tabFoot
    }
}
</script>



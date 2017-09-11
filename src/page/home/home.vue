<template>
    <div class="home">
        <nav-tab></nav-tab>
        <tab-foot></tab-foot>
    </div>
</template>

<script>
import navTab from '@/components/common/navtab/navtab'
import tabFoot from '@/components/footer/foot'
export default {
    name: "home",

    data() {
        return {

        }
    },
    components: {
        navTab,
        tabFoot
    }
}
</script>
<style lang="scss" scoped>
@import 'src/style/mixin.scss';
    .home{
        padding-top: r(150);
    }
</style>



<template>
    <div class="counter">
        <span class="minus" :class="{minusHide:food.minusFlag}" @click.stop="minus(food)">-</span>
        <span :class="{minusHide:food.minusFlag}">{{food.num}}</span>
        <span class="plus" @click.stop="plus(food)">+</span>
    </div>
</template>


<script>
export default {
    props:["food"],
    data() {
        return {

        }
    },
    methods: {
        plus: function(food) {
            food.num++;
            food.minusFlag = false;
        },
        minus: function(food) {
            let foodNumCheck = food.num--;
            if (foodNumCheck <= 0) {
                food.num = 0;
                food.minusFlag = true;
            }
        },
    }

}

</script>

<style lang="scss" scoped>
@import 'src/style/mixin';
.counter {
    display: flex;
    justify-content: flex-end;
    span {
        width: r(60);
        height: r(60);
        display: block;
        text-align: center;
        line-height: r(60);
        &.minusHide {
            display: none;
        }
        &.minus {
            border-radius: 50%;
            border: 1px solid #0097FF;
        }
        &.plus {
            border-radius: 50%;
            background-color: #0097FF;
            color: #fff;
        }
    }
}
</style>

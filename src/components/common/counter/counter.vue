<template>
    <div class="counter">
        <span class="minus" :class="{minusHide:food.minusFlag}" @click.stop="minus(food)">-</span>
        <span :class="{minusHide:food.minusFlag}">{{food.num}}</span>
        <span class="plus" @click.stop="plus(food)">+</span>
    </div>
</template>


<script>
export default {
    props: ["food"],
    data() {
        return {

        }
    },
    methods: {
        plus: function(food) {
           
            if (food.num < food.limit) {
                food.num++;
            }else{
                return false;                
            }
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
    align-content: center;
    span {
        width: r(60);
        height: r(60);
        font-size: r(42);
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        color: #B1B1B1;
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
            border: 1px solid #0097FF;
        }
    }
}
</style>

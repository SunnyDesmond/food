<template>
    <div>
        <div class="foodList">

            <router-link tag="div" class="box" v-for="food in foods" to="./foodinfo" :key="food.id">
                <div class="img">
                    <img :src="food.img" alt="">
                </div>
                <div class="info">
                    <h3 class="name">{{food.name}}</h3>
                    <p class="biref">{{food.brief}}</p>
                    <div class="zone">
                        <span class="price">￥{{food.price}}</span>
                        <!-- 计数器组件 -->
                        <counter :food="food"></counter>
                    </div>
                </div>
            </router-link>

        </div>
        <div class="cart">
            <span>{{countCartNum}}</span>
        </div>
    </div>
</template>

<script>
import counter from '../../common/counter/counter';
import axios from 'axios';
export default {
    name: "foodList",
    props: ["food"],
    data() {
        return {
            cartnum: null,
            cartTotalPrice: null,
            foods: null
        }
    },
    methods: {
        // 获取foodlist
        getFoodList: function() {
            let that = this;
            axios.get("../../static/json/foods.json")
                .then(res => {
                    that.foods = JSON.parse(res.request.response);
                })
                .catch(function(err) {
                    console.log(err)
                })
        },
        //页面跳转传值
        routerJump: function(food) {
            this.$router.push({ path: "./foodinfo", query: { food, cartnum: this.cartnum, cartTotalPrice: this.countCartTotalPrice } });
        },

    },
    computed: {
        countCartNum: function() {
          
            let cartNum = 0;
            for (let i = 0; i < this.foods.length; i++) {
                cartNum += this.foods[i].num;
            }

            return this.cartnum = cartNum;
        },
        countCartTotalPrice: function() {
            let cartPrice = 0;
            for (let x = 0; x < this.foods.length; x++) {
                let singlePrice = this.foods[x].price * this.foods[x].num;
                cartPrice += singlePrice;
            }
            return this.cartTotalPrice = parseFloat(cartPrice).toFixed(2);  //解决js 浮点数计算bug
        },
    },
    mounted() {
        this.getFoodList();

    },
    components: {
        counter
    }
}

</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.box {
    padding: r(20);
    display: flex;
    justify-content: space-around;
    align-items: center;

    .img {
        width: r(250);
        height: r(250);
        border-radius: r(20);
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-content: center;
        img {

            width: 100%;
        }
    }
    .info {
        width: r(650);
        overflow: hidden;
        height: r(280);
        .biref {
            line-height: 1.4;
            height: r(90);
            overflow: hidden;
        }
        .zone {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: r(30);
            .price {
                color: #ff4400;
                font-size: r(40);
                line-height: 1;
            }
        }
    }
}

.cart {
    position: fixed;
    left: r(80);
    bottom: r(200);
    width: r(120);
    height: r(120);
    border-radius: 50%;
    background-color: #fff000;
    z-index: 999;
    span {
        font-size: r(46);
        color: #f10c0c;
        display: block;
        line-height: r(120);
        text-align: center;
    }
}
</style>

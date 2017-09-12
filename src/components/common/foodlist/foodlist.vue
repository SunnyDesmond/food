<template>
    <div>
        <div class="foodList" :tabType="tabType">
            <div class="box" v-for="food in foods" :key="food.id">
                <div class="img" @click="jump(food)">
                    <img :src="food.img" alt="">
                </div>
                <div class="info">
                    <h3 class="name" @click="jump(food)">{{food.name}}</h3>
                    <p class="biref" @click="jump(food)">{{food.brief}}</p>
                    <div class="zone">
                        <span class="price">￥{{food.price}}</span>
                        <!-- 计数器组件 -->
                        <counter :food="food"></counter>
                    </div>
                </div>
            </div>

        </div>
        <div class="cart">
            <span>{{countCartNum}}</span>
        </div>
    </div>
</template>

<script>
import counter from '../../common/counter/counter';
import mockdata from "@/plugins/mock";
import axios from 'axios';

export default {
    name: "foodList",
    props: ["tabType", "food"],
    data() {
        return {
            cartnum: null,
            cartTotalPrice: null,
            foodsListLen: null,  //foods 某一分类的 list 的长度
            foods: null,
            foodsLen:null //foods 的分类数量
        }
    },
    methods: {
        // 获取foodlist
        getFoodList: function() {
            let that = this;
            // 从sessionStorage获取tab值
            const tabVal = window.sessionStorage.getItem("tabType");

            //  mock 数据   
            new Promise(() => {
                that.foods = mockdata.data.foodsList[`foods${tabVal}`];
                that.foodsLen = Object.keys(mockdata.data.foodsList).length;
                that.foodsListLen = that.foods.length;
            }).catch(err => {
                console.log(err)
            })

            // 实际请求数据
            // axios.get("../../static/json/foods.json")
            //     .then(res => {
            //         that.foods = JSON.parse(res.request.response);
            //         that.foodsListLen = that.foods.length;
            //     })
            //     .catch(err => {
            //         console.log(err)
            //     })

        },
        jump: function(food) {
            //本地localstorge 塞值 再进行跳转
            window.localStorage.setItem("food", JSON.stringify(food));
            this.$router.push({ path: "./foodinfo" });
        },
        //本地存储
        setDataInLocalStorage: function() {
             const tabVal = window.sessionStorage.getItem("tabType");
             let cartNumList = {};
             for(let i=0;i<this.foodsLen;i++){
                 cartNumList[i] = this.cartnum;
             }
             console.log(cartNumList)
            //  cartNumList.cartNumList = this.cartnum;
            window.localStorage.setItem(`cartNumList`, JSON.stringify(cartNumList));
            window.localStorage.setItem(`cartTotalPrice${tabVal}`, this.countCartTotalPrice);
        },
    },
    computed: {
        countCartNum() {
          
            // 获取本地存储的购物车中的值
              let cartNum = 0; 

            for (let i = 0; i < this.foodsListLen; i++) {
                cartNum += this.foods[i].num;
            }
            return this.cartnum = cartNum;
        },
        countCartTotalPrice: function() {
            let cartPrice = 0;
            for (let x = 0; x < this.foodsListLen; x++) {
                let singlePrice = this.foods[x].price * this.foods[x].num;
                cartPrice += singlePrice;
            }
            return this.cartTotalPrice = parseFloat(cartPrice).toFixed(2);  //解决js 浮点数计算bug
        }
    },
    mounted() {
        this.getFoodList();
    },
    watch: {
        //监控页面购物车总数变化 页面数据传递给本地存储
        "cartnum": "setDataInLocalStorage",
        $route() {
            this.getFoodList();  //监听路由变化，根据路由请求type获取数据
            const num = window.localStorage.getItem("cartnum");
            const newNum = parseInt(num) + this.cartnum;
            window.localStorage.setItem("cartnum",newNum)
        }
    },
    components: {
        counter,
    }
}

</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.foodList {
    padding-top: r(150);
    padding-bottom: r(150);
}

.box {
    padding: r(20);
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 1px solid #F1F1F1;
    &:last-child {
        border: 0;
    }
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

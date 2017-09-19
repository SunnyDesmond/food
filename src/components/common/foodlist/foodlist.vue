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

        <div class="hovercart">
            <span>{{countCartNum}}</span>
        </div>
        <loading v-show="isLoad"></loading>
    </div>
</template>

<script>
import counter from '../../common/counter/counter';
import mockdata from "@/plugins/mock";
import axios from 'axios';
import loading from '../../common/loading/loading';
export default {
    name: "foodList",
    props: ["tabType", "food"],
    data() {
        return {
            foodsAll: null,
            foodsAllLen: null,  //所有foods的种类
            foods: null,
            foodsListLen: null,  //foods 某一分类的 list 的长度
            isLoad: false  //是否展示加载
        }
    },
    methods: {
        // 获取foodlist
        getFoodList: function() {

            let that = this;
            // 从sessionStorage获取tab值
            let tabVal = window.sessionStorage.getItem("tabType");
            if (tabVal) {
                tabVal = window.sessionStorage.getItem("tabType");
            } else {
                tabVal = 0;
            }

            new Promise((resolve,reject) => {
                var that = this;
                that.isLoad = true;
                that.foods = null;
                setTimeout(function() {
                    that.foodsAll = mockdata.data.foodsList; //总数据

                    that.foodsAllLen = Object.keys(mockdata.data.foodsList).length; //总数据的分类

                    that.foods = mockdata.data.foodsList[`foods${tabVal}`];  //某一个分类的数据

                    that.foodsListLen = that.foods.length;  //某一个分类的数据 的长度
                    that.isLoad = false;
                }, 500)
            });



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

    },
    computed: {
        countCartNum() {
            let allFoodListCount = 0;
            for (let i = 0; i < this.foodsAllLen; i++) {
                for (let z = 0; z < this.foodsAll[`foods${i}`].length; z++) {
                    allFoodListCount += this.foodsAll[`foods${i}`][z].num;
                }
            }
            return allFoodListCount;
        },
    },
    created() {
        this.getFoodList();
    },
    watch: {
        $route() {
            this.getFoodList();  //监听路由变化，根据路由请求type获取数据

        }
    },
    components: {
        counter, loading
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

.hovercart {
    position: fixed;
    left: r(80);
    bottom: r(200);
    width: r(120);
    height: r(120);
    border-radius: 50%;
    background-size: contain;
    z-index: 999;
    background: #fff url('../../../assets/img/cart.png') no-repeat center center/60%;
    span {
        font-size: r(32);
        color: #fff;
        display: block;
        text-align: center;
        position: absolute;
        top: r(10);
        right: 0;
        width: r(50);
        height: r(50);
        line-height: r(50);
        border-radius: 50%;
        background-color: #f10c0c;
    }
}
</style>

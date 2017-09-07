<template>
    <div>
        <div class="foodList">
            <div class="box" v-for="food in foods" @click="routerJump(food)" :key="food.id">
                <div class="img">
                    <img :src="food.img" alt="">
                </div>
                <div class="info">
                    <h3 class="name">{{food.name}}</h3>
                    <p class="biref">{{food.brief}}</p>
                    <div class="zone">
                        <span class="price">{{food.price}}</span>
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

export default {
    name: "foodList",
    props:["food"],
    data() {
        return {
            cartnum: "",
            foods: [{
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "111非常非常好吃,真尼玛太好吃啦，鲜香滑嫩，入口即化，我要受不了了",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "2天22:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/c8ac542b7b6844cfd53db15c8004246172@s_0,w_172,h_172,q_100",
                name: "鱼香肉丝",
                brief: "222非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "1天22:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/9c1893e21ada09cd8ec721c8f17333d403@s_0,w_172,h_172,q_100",
                name: "小面包",
                brief: "3333非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "4天22:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "21天02:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "12天22:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "2天22:14:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "2天18:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "322天22:11:32"
            },
            {
                img: "https://img.waimai.baidu.com/pb/cda8817625765870b9acb14728898d7e93@s_0,w_172,h_172,q_100",
                name: "蟹黄骚麦",
                brief: "非常非常好吃，鲜香滑嫩，入口即化",
                price: "￥15.0",
                num: 0,
                minusFlag: true,
                time: "0天22:11:32"
            },
            ]

        }
    },
    methods: {
        //页面跳转传值
        routerJump: function(food) {
            this.$router.push({ path: "./foodinfo", query: { food } });
        }
    },
    computed: {
        countCartNum: function() {
            let cartNum = 0;
            for (let i = 0; i < this.foods.length; i++) {
                cartNum += this.foods[i].num;
            }
            return this.cartnum = cartNum;
        }
    },
    components:{
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
    .info{
        width: r(650);
        overflow: hidden;
         height: r(280);
        .biref{
                line-height: 1.4;
                height: r(90);
                overflow: hidden;
        }
        .zone{
            .price{
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

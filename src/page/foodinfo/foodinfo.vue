<template>

  <div class="foodinfo">
        <div class="banner">
            <div class="img">
                <img :src="foodinfo.img" alt="">
            </div>
            <div class="tips">
                <p class="name">{{tips}}&nbsp;&nbsp;{{foodinfo.time}}</p>
            </div>
        </div>
        <div class="food-detail">
            <h1 class="name">{{foodinfo.name}}</h1>
            <p class="brief">{{foodinfo.brief}}</p>
            <div class="info">
                <span class="price">￥{{foodinfo.price}}</span>
                <div class="btn">
                    <strong class="tips">限量{{foodinfo.limit}}份</strong>
                    <counter :food="foodinfo"></counter>
                </div>
            </div>
        </div>
        <div class="slide-more">
            <em class="arr-up"></em>
            <span class="tips">上拉查看图文详情</span>
        </div>
        <div class="submit-wrap">
            <span class="icon-cart"><em>{{cartTotalNum}}</em></span>
            <div class="price-detail">
                <span class="price">￥{{singlePriceCount}}</span>
                <span class="tips">另需配送费{{foodinfo.peisongfei}}元</span>
            </div>
            <button class="submit-btn">提交订单</button>
        </div>
    </div>
  
  
</template>

<script>
import counter from '../../components/common/counter/counter'
export default {
    props: ['food'],
    data() {
        return {
            tips: "距离预定结束还有",
            foodTotalNum:null,
            foodTotalPrice:null,
            singlePrice:null,
            foodinfo: {
                img: null,
                time: null,
                name: null,
                brief: null,
                price: null,
                num: null,
                peisongfei:null,
                limit:null
            }
        }
    },
    methods: {
        // 得到localStorage的值
        getLocalStorageParams: function() {
            let foodObj = JSON.parse(window.localStorage.getItem("food"));
            let cartTotalPrice = parseFloat(window.localStorage.getItem("cartTotalPrice")) ;
            let cartnum = parseInt(window.localStorage.getItem("cartnum"));
            const {img,time,brief,name,price,num,peisongfei,limit} = foodObj;
            this.foodinfo.img = img;
            this.foodinfo.time = time;
            this.foodinfo.brief = brief;
            this.foodinfo.name = name;
            this.foodinfo.price = price;
            this.foodinfo.num = num;
            this.foodinfo.peisongfei = peisongfei;
            this.foodinfo.limit = limit;

            this.foodTotalNum = cartnum;
            this.foodTotalPrice = cartTotalPrice;


        }
    },
    mounted(){
         this.getLocalStorageParams(); 
    },
    computed:{
        // 计算单品总价
        singlePriceCount:function(){
            return parseFloat(this.foodinfo.price* this.foodinfo.num).toFixed(2);
        },
        //  单品购物车数量
        cartTotalNum:function(){
          
            return  this.foodinfo.num;
        }
    },
    components: {
        counter
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.foodinfo {
    background-color: #f5f5f5;
    padding-top: r(150);
}

.banner {
    position: relative;
    overflow: hidden;
    .img {
        img {
            width: 100%;
            display: block;
        }
    }
    .tips {
        position: absolute;
        left: 0;
        bottom: 0;
        height: r(120);
        width: 100%;
        background-color: rgba(0, 0, 0, .7);
        .name {
            color: #EBEBEA;
            font-size: r(44);
            line-height: r(120);
            padding-left: r(45);
        }
    }
}

.food-detail {
    padding: 0 r(45);
    background-color: #fff;
    padding-bottom: r(20);
    .name {
        font-size: r(48);
        color: #6C6C6C;
        font-weight: 600;
        line-height: 1.8;
    }
    .brief {
        font-size: r(42);
        color: #989898;
        line-height: 1.6;
    }
    .info {
        display: flex;
        justify-content: space-between;
        .price {
            color: #E31738;
            font-size: r(60);
        }
        .btn {
            display: flex;
            align-items: center;
            justify-content: space-around;
            .tips {
                border: 1px solid #129EFF;
                border-radius: r(15);
                font-size: r(42);
                font-weight: normal;
                color: #129EFF;
                margin-right: r(20);
                padding: r(6);
            }
        }
    }
}

.slide-more {
    margin-top: r(40);
    background-color: #fff;
    height: r(130);
    display: flex;
    justify-content: center;
    align-items: center;
    .arr-up {
        @include bis('../../assets/img/arrow_up.png');
        width: r(60);
        height: r(60);
    }
    .tips {
        font-size: r(46);
        color: #9B9B9B;
    }
}

.submit-wrap {
    position: fixed;
    left: 0;
    bottom: 0;
    border-top: 1px solid #DCDCDC;
    background-color: #fff;
    width: 100%;
    height: r(150);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .icon-cart {
        @include bis('../../assets/img/cart.png');
        width: r(80);
        height: r(80);
        position: relative;
        margin-left: r(45);
        em{
            position: absolute;
            width: r(45);
            height: r(45);
            border-radius: 50%;
            background-color: #E31436;
            color: #fff;
            font-size: r(32);
            font-style: normal;
            right: r(-15);
            top: r(-15);
            line-height: r(45);
            text-align: center;
        }
    }
    .price-detail{
        display: flex;
         flex-direction:column;
         margin-right: r(80);
        .price{
            font-size: r(44);
            color: #E31436;
            flex: 1;
        }
        .tips{
            flex: 1;
            font-size: r(36);
            columns: #666666;
        }
    }
    .submit-btn{
        width: r(450);
        height: 100%;
        appearance: none;
        border:0;
        align-self: flex-end;
        background-color: #089BFF;
        font-size: r(44);
        color: #fff;
        &:active{
            opacity: .8;
        }
    }
}
</style>

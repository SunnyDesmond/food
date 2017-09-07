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
                <span class="price">{{foodinfo.price}}</span>
                <counter :food="foodinfo"></counter>
            </div>
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
            foodinfo:{
                img: null,
                time: null,
                name: null,
                brief: null,
                price: null,
                num: null,
            }
        }
    },
    methods: {
        // 得到路由中的参数
        getUrlParams: function() {
            this.foodinfo.img = this.$route.query.food.img;
            this.foodinfo.time = this.$route.query.food.time;
            this.foodinfo.brief = this.$route.query.food.brief;
            this.foodinfo.name = this.$route.query.food.name;
            this.foodinfo.price = this.$route.query.food.price;
            this.foodinfo.num = this.$route.query.food.num;   
        }
    },
    mounted() {
        this.getUrlParams();
        
    },
    components: {
        counter,
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.banner {
    height: r(800);
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
    .name {
        font-size: r(48);
        color: #6C6C6C;
        font-weight: 600;
    }
    .brief {
        font-size: r(42);
        color: #989898;
        line-height: 1.4;
    }
    .info {
        display: flex;
        justify-content: flex-start;
        .price {
            color: #ff4400;
            font-size: r(60);
        }
    }
}
</style>

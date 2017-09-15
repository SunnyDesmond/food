<template>
    <div class="loading">
        <i class="icon-loading"></i>
        <span>玩命加载中..</span>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
@import 'src/style/mixin.scss';
.loading {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    width: r(300);
    height: r(300);
    border-radius: r(15);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-content: center;
    z-index: 1000;
    .icon-loading {
        width: r(100);
        height: r(100);
        background: url(../../../assets/img/loading.png) no-repeat center center/100%;
        animation: loading 1s linear infinite;
        @keyframes loading {
            0% {
                transform: rotate(0)
            }
            100% {
                transform: rotate(360deg)
            }
        }
    }
    span {
        font-size: r(36);
        color: #fff;
        text-align: center;
        padding-top: r(40);
    }
}
</style>

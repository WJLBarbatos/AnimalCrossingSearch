<template>
    <div class="hello">
        <div class="head">
            <p class="title">动森简单搜</p>
            <button class="btn" @click="goFish()">
                <img :src="fishImg" style="width:1rem;height:1rem" />
                鱼类
            </button>
            <button class="btn" @click="goInsect()">
                <img :src="insectImg" style="width:1rem;height:1rem" />
                昆虫
            </button>
            <br />
            <br />
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            fishImg: "",
            insectImg: ""
        };
    },
    methods: {
        goFish() {
            this.$router.push("/fish");
        },
        goInsect() {
            this.$router.push("/insect");
        }
    },
    mounted() {
        var fishId = Math.floor(Math.random() * 80);
        fishId = fishId < 10 ? "0" + fishId : fishId;
        this.fishImg = require("../assets/imgFishes/f" + fishId + ".png");
        var insectId = Math.floor(Math.random() * 80);
        insectId = insectId < 10 ? "0" + insectId : insectId;
        this.insectImg = require("../assets/imgInsects/i" + insectId + ".png");
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
}

.head {
    position: relative;
    background: rgb(255, 255, 255);
    left: 0;
    width: 100%;
    z-index: 1000;
}

.title {
    margin-top: 1rem;
    text-align: center;
    font-size: 0.8rem;
    color: rgb(55, 228, 170);
}

.btn {
    /* display: inline-block; */
    margin-top: 1rem;
    margin-left: 15%;
    margin-right: 15%;
    height: 4rem;
    line-height: 4rem;
    border: 3px solid #ebebeb;
    background: #ffffff;
    border-radius: 0.5em;
    font-size: 1.5rem;
    width: 70%;
    color: #d8aa6c;
}
</style>

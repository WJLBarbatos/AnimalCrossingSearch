<template>
    <div class="hello">
        <div class="head">
            <button class="btn" @click="goFish()">鱼类</button>
            <button class="btn" @click="goInsect()">昆虫</button>
            <br />
            <br />
            <hr />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goFish() {
            this.$router.push("/fish");
        },
        goInsect() {
            this.$router.push("/insect");
        }
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

.btn {
    /* display: inline-block; */
    margin-top: 2rem;
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

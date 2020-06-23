<template>
    <div class="emoticonsearch">
        <div class="head">
            <br />
            <div>
                性格筛选：
                <br />
                <input type="checkbox" id="isBaozao" v-model="isBaozao" />
                <label for="isBaozao">暴躁</label>
                <input type="checkbox" id="isYundong" v-model="isYundong" />
                <label for="isYundong">运动</label>
                <input type="checkbox" id="isYouxian" v-model="isYouxian" />
                <label for="isYouxian">悠闲</label>
                <input type="checkbox" id="isZilian" v-model="isZilian" />
                <label for="isZilian">自恋</label>
                <br />
                <input type="checkbox" id="isDajiejie" v-model="isDajiejie" />
                <label for="isDajiejie">大姐姐</label>
                <input type="checkbox" id="isYuanqi" v-model="isYuanqi" />
                <label for="isYuanqi">元气</label>
                <input type="checkbox" id="isChengshu" v-model="isChengshu" />
                <label for="isChengshu">成熟</label>
                <input type="checkbox" id="isPutong" v-model="isPutong" />
                <label for="isPutong">普通</label>
                <p>
                    *表情名的颜色：
                    <span style="color:red">特殊表情</span>
                    ，
                    <span style="color:gray">默认表情</span>
                </p>
            </div>
            <br />

            <br />
            <!-- <div>
                <span>搜索：</span>
                <input placeholder="请输入名称" />
                <button class="btn">走你！</button>
            </div>
            <br />-->
        </div>
        <br />
        <div class="table" style="margin-top:2.5rem;">
            <div class="tabelCell" v-for="item in emoticonsList">
                <div class="content-id">{{item.id}}</div>

                <!-- <img v-bind:src="item.icon" style="width:1rem;height:1rem;margin-top:0.6rem;" />
                <br />-->
                <div class="content-name-ssr" v-if="item.sp===2">{{item.name}}</div>
                <div class="content-name-default" v-if="item.sp===1">{{item.name}}</div>
                <div class="content-name" v-if="item.sp===0">{{item.name}}</div>

                <div class="content">{{item.type}}</div>

                <!-- <div class="content">{{item.shadow}}</div> -->
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
import { emoticons } from "./Emoticons";
export default {
    data() {
        return {
            emoticonsList: emoticons,
            isBaozao: true,
            isYundong: true,
            isYouxian: true,
            isZilian: true,
            isDajiejie: true,
            isYuanqi: true,
            isChengshu: true,
            isPutong: true
        };
    },
    methods: {
        typeFilter: function() {
            let tempList = [];
            let index = 0;
            for (let i = 0; i < emoticons.length; i++) {
                if (this.isBaozao && emoticons[i].type === "暴躁") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isYundong && emoticons[i].type === "运动") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isYouxian && emoticons[i].type === "悠闲") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isZilian && emoticons[i].type === "自恋") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isDajiejie && emoticons[i].type === "大姐姐") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isYuanqi && emoticons[i].type === "元气") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isChengshu && emoticons[i].type === "成熟") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
                if (this.isPutong && emoticons[i].type === "普通") {
                    tempList[index] = emoticons[i];
                    index++;
                    continue;
                }
            }
            // return tempList;
            this.emoticonsList = tempList;
        }
    },
    watch: {
        isBaozao: function() {
            this.typeFilter();
        },
        isYundong: function() {
            this.typeFilter();
        },
        isYouxian: function() {
            this.typeFilter();
        },
        isZilian: function() {
            this.typeFilter();
        },
        isDajiejie: function() {
            this.typeFilter();
        },
        isYuanqi: function() {
            this.typeFilter();
        },
        isChengshu: function() {
            this.typeFilter();
        },
        isPutong: function() {
            this.typeFilter();
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.emoticonsearch {
    margin-left: 20px;
    margin-right: 20px;
    position: relative;
}

.head {
    position: fixed;
    background: rgb(255, 255, 255);
    width: 100%;
    z-index: 1000;
    max-width: 12rem;
}

.tableCell {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
}

.content-id {
    /* text-align: center; */
    /* top: -0.8rem; */
    display: inline-block;
    position: relative;
    width: 8%;
}

.content {
    /* text-align: center; */
    /* top: -0.8rem; */
    display: inline-block;
    position: relative;
    width: 20%;
}

.content-price {
    /* text-align: center; */
    /* top: -0.8rem; */
    display: inline-block;
    position: relative;
    width: 12%;
}

.content-name {
    /* text-align: center; */
    /* top: -0.8rem; */
    display: inline-block;
    position: relative;
    width: 12%;
}

.content-name-ssr {
    /* text-align: center; */
    /* top: -0.8rem; */
    color: red;
    display: inline-block;
    position: relative;
    width: 12%;
}

.content-name-default {
    /* text-align: center; */
    /* top: -0.8rem; */
    color: gray;
    display: inline-block;
    position: relative;
    width: 12%;
}

.btn {
    display: inline-block;
    height: 0.6rem;
    line-height: 0.6rem;
    border: 1px solid #ebebeb;
    background: #ffffff;
    border-radius: 0.1rem;
    font-size: 0.35rem;
    width: 18%;
    color: #d8aa6c;
}
</style>

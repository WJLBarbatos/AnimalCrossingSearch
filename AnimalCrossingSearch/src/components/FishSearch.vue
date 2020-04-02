<template>
    <div class="hello">
        <div class="head">
            <br />
            <div>
                <input type="checkbox" id="checkbox" v-model="checkCurMonth" />
                <label for="checkbox">只显示本月可获得鱼类</label>
                <input type="radio" id="one" value="North" v-model="picked" />
                <label for="one">北半球</label>
                <input type="radio" id="two" value="South" v-model="picked" />
                <label for="two">南半球</label>
            </div>
            <br />
            <div>
                <span>排序</span>
                <input type="radio" id="1" value="ID" v-model="sorted" />
                <label for="1">编号</label>
                <input type="radio" id="2" value="price" v-model="sorted" />
                <label for="2">售价</label>
                <input type="radio" id="3" value="shadow" v-model="sorted" />
                <label for="3">鱼影</label>
            </div>

            <div>
                <span>地点</span>
                <input type="checkbox" id="chitang" v-model="chitang" />
                <label for="chitang">池塘</label>
                <input type="checkbox" id="heliu" v-model="heliu" />
                <label for="heliu">河流</label>
                <input type="checkbox" id="dahai" v-model="dahai" />
                <label for="dahai">大海</label>
                <input type="checkbox" id="xuanya" v-model="xuanya" />
                <label for="xuanya">悬崖</label>
                <input type="checkbox" id="chuhaikou" v-model="chuhaikou" />
                <label for="chuhaikou">出海口</label>
                <input type="checkbox" id="matou" v-model="matou" />
                <label for="matou">码头</label>
            </div>
            <br />
            <!-- <div>
                <span>搜索：</span>
                <input placeholder="请输入名称" />
                <button class="btn">走你！</button>
            </div>
            <br />-->
        </div>
        <br />
        <div class="table" style="margin-top:2.7rem;">
            <div class="tabelCell" v-for="item in fishList">
                <div class="content-id">{{item.id}}</div>
                <div class="content">{{item.name}}</div>
                <div class="content">{{item.sellPrice}}</div>
                <div class="content">{{item.location}}</div>
                <div style="width: 25%; display: inline-block;">
                    <div class="north">{{item.northDesc}}</div>
                    <hr />
                    <div class="south">{{item.southDesc}}</div>
                    <hr />
                    <div>{{item.appearTime}}</div>
                </div>
                <!-- <div class="content">{{item.shadow}}</div> -->
                <hr />
            </div>
        </div>
    </div>
</template>

<script>
import { fishList } from "./FishList";
export default {
    data() {
        return {
            checkCurMonth: false,
            chitang: true,
            heliu: true,
            dahai: true,
            xuanya: true,
            chuhaikou: true,
            matou: true,
            picked: "North",
            fishList: fishList,
            sorted: "ID"
        };
    },
    methods: {
        currentMonthFilter: function() {
            let nowDate = new Date();
            let month = nowDate.getMonth() + 1;
            let tempList = [];
            let index = 0;
            if (this.checkCurMonth) {
                if (this.picked === "North") {
                    for (let i = 0; i < fishList.length; i++) {
                        for (
                            let j = 0;
                            j < fishList[i].appearNorth.length;
                            j++
                        ) {
                            if (fishList[i].appearNorth[j] === month) {
                                tempList[index] = fishList[i];
                                index++;
                                continue;
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < fishList.length; i++) {
                        for (
                            let j = 0;
                            j < fishList[i].appearSouth.length;
                            j++
                        ) {
                            if (fishList[i].appearSouth[j] === month) {
                                tempList[index] = fishList[i];
                                index++;
                                continue;
                            }
                        }
                    }
                }
            } else {
                tempList = fishList;
            }
            return tempList;
        },
        locationFilter: function() {
            let monthList = this.currentMonthFilter();
            let tempList = [];
            let index = 0;
            for (let i = 0; i < monthList.length; i++) {
                if (this.chitang && monthList[i].location === "池塘") {
                    tempList[index] = monthList[i];
                    index++;
                    continue;
                }
                if (this.heliu && monthList[i].location === "河流") {
                    tempList[index] = monthList[i];
                    index++;
                    continue;
                }
                if (this.dahai && monthList[i].location === "大海") {
                    tempList[index] = monthList[i];
                    index++;
                    continue;
                }
                if (this.xuanya && monthList[i].location === "悬崖上") {
                    tempList[index] = monthList[i];
                    index++;
                    continue;
                }
                if (this.chuhaikou && monthList[i].location === "出海口") {
                    tempList[index] = monthList[i];
                    index++;
                    continue;
                }
                if (this.matou && monthList[i].location === "码头") {
                    tempList[index] = fishList[i];
                    index++;
                    continue;
                }
            }
            return tempList;
        },
        sort: function() {
            //this.currentMonthFilter();
            console.log("sorted: " + this.sorted);
            if (this.sorted === "price") {
                let tempList = this.locationFilter();
                let n = tempList.length;
                let i = 0;
                while (i < n) {
                    if (
                        i == 0 ||
                        tempList[i - 1].sellPrice >= tempList[i].sellPrice
                    ) {
                        i++;
                    } else {
                        let tmp = tempList[i];
                        tempList[i] = tempList[i - 1];
                        tempList[--i] = tmp;
                    }
                }
                this.fishList = tempList;
            } else if (this.sorted === "ID") {
                let tempList = this.locationFilter();
                let n = tempList.length;
                let i = 0;
                while (i < n) {
                    if (i == 0 || tempList[i - 1].id <= tempList[i].id) {
                        i++;
                    } else {
                        let tmp = tempList[i];
                        tempList[i] = tempList[i - 1];
                        tempList[--i] = tmp;
                    }
                }
                this.fishList = tempList;
            }
        }
    },
    watch: {
        sorted: function() {
            //console.log("sorted: " + this.sorted);
            //this.$router.push("/insectsearch");
            this.sort();
        },
        chitang: function() {
            this.sort();
        },
        heliu: function() {
            this.sort();
        },
        dahai: function() {
            this.sort();
        },
        xuanya: function() {
            this.sort();
        },
        chuhaikou: function() {
            this.sort();
        },
        matou: function() {
            this.sort();
        },
        checkCurMonth: function() {
            this.sort();
        },
        picked: function() {
            if (this.checkCurMonth) {
                this.sort();
            }
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
    position: fixed;
    background: rgb(255, 255, 255);
    left: 0;
    width: 100%;
    z-index: 1000;
}

.tableCell {
    width: 100%;
    margin: 0;
    padding: 0;
    position: relative;
}

.content-id {
    /* text-align: center; */
    top: -0.8rem;
    display: inline-block;
    position: relative;
    width: 8%;
}

.content {
    /* text-align: center; */
    top: -0.8rem;
    display: inline-block;
    position: relative;
    width: 20%;
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

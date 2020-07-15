<template>
    <div class="insectsearch">
        <div class="head">
            <br />
            <div>
                <input type="checkbox" id="checkbox" v-model="checkCurMonth" />
                <label for="checkbox">只显示本月可获得海产</label>
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
        <div class="table" style="margin-top:2.0rem;">
            <div class="tabelCell" v-for="item in seaList">
                <div class="content-id">{{item.id}}</div>
                <div class="content">
                    <!-- <img v-bind:src="item.icon" style="width:1rem;height:1rem;margin-top:0.6rem;" />
                    <br />-->
                    {{item.name}}
                </div>
                <div class="content-price">{{item.sellPrice}}</div>
                <div class="content">{{item.location}}</div>
                <div style="width: 30%; display: inline-block;">
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
import { seaList } from "./SeaList";
export default {
    data() {
        return {
            checkCurMonth: false,
            picked: "North",
            seaList: seaList,
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
                    for (let i = 0; i < seaList.length; i++) {
                        for (
                            let j = 0;
                            j < seaList[i].appearNorth.length;
                            j++
                        ) {
                            if (seaList[i].appearNorth[j] === month) {
                                tempList[index] = seaList[i];
                                index++;
                                continue;
                            }
                        }
                    }
                } else {
                    for (let i = 0; i < seaList.length; i++) {
                        for (
                            let j = 0;
                            j < seaList[i].appearSouth.length;
                            j++
                        ) {
                            if (seaList[i].appearSouth[j] === month) {
                                tempList[index] = seaList[i];
                                index++;
                                continue;
                            }
                        }
                    }
                }
            } else {
                tempList = seaList;
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
                    tempList[index] = insectList[i];
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
                let tempList = this.currentMonthFilter();
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
                this.seaList = tempList;
            } else if (this.sorted === "ID") {
                let tempList = this.currentMonthFilter();
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
                this.seaList = tempList;
            }
        }
    },
    watch: {
        sorted: function() {
            //console.log("sorted: " + this.sorted);
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
.insectsearch {
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

.content-price {
    /* text-align: center; */
    top: -0.8rem;
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

<template>
    <div id="app">
        <router-view />
        <footer class="footer">
            <p>
                ©2020&nbsp;
                <a href="http://beian.miit.gov.cn" target="_blank">沪ICP备20008436号-1</a>
            </p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "App"
};
</script>

<style>
#app {
    font-size: 12px;
    max-width: 12rem;
    margin: 0 auto;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    height: 100%;
    position: relative;
    overflow-y: auto;
}

.footer {
    text-align: center;
    height: 60px;
    line-height: 30px;
    padding: 20px;
    color: #999;
}
</style>

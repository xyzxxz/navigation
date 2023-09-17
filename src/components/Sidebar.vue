<template>
    <div id="sidebar">
        <nav>
            <a href="#zonghewangzhan">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'earth-asia']" size="lg"/>
                </div>
                <span>综合网站</span>
            </a>
            <a href="#waiyuxuexi">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'language']" size="lg" />
                </div>
                <span>外语学习</span>
            </a>
            <a href="#bianchengxuexi">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'terminal']" size="lg" />
                </div>
                <span>编程学习</span>
            </a>
            <a href="#yishusheji">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'pen-ruler']" size="lg" />
                </div>
                <span>艺术设计</span>
            </a>
            <a href="#dianzishuji">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'book-open']" size="lg" />
                </div>
                <span>电子书籍</span>
            </a>
            <a href="#yinyue">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'music']" size="lg" />
                </div>
                <span>音乐</span>
            </a>
            <a href="#huihua">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'palette']" size="lg" />
                </div>
                <span>绘画</span>
            </a>
        </nav>
    </div>
</template>

<script setup>
// import axios from 'axios'
// import { onBeforeMount, onMounted, ref } from 'vue'
// const navItems = ref([])
// onMounted(() => {
//     axios
//         .get('http://localhost:3000/data')
//         .then((res) => {
//             for (const key in res.data) {
//                 const ele = res.data[key]
//                 ele.id = '#' + ele.id
//                 navItems.value.push(ele)
//             }
//             // console.log(navItems)
//         })
//         .catch((err) => {
//             console.log(err)
//         })
// })
</script>

<style scoped>
#sidebar {
    min-width: 250px;
}

nav {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    margin-bottom: 0;
    list-style: none;
}

a {
    display: flex;
    width: 100%;
    height: 60px;
    padding-left: 10px;
    text-align: left;
    align-items: center;
    font-size: larger;
    font-family: SourceHanSansSC;
    color: aquamarine;
    text-decoration: none;
}

a:hover,
a:focus {
    background-color: darkslategray;
    border-radius: 20px;
    color: var(--bs-nav-link-hover-color);
}

.icon {
    width: 35px;
}
</style>

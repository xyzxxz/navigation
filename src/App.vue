<script setup>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'

axios.defaults.baseURL = "http://localhost:3000"

const OverallSites = ref([])
const LanguageSites = ref([])
const ProgrammingSites = ref([])
const DesignSites = ref([])
const BooksSites = ref([])
const MusicSites = ref([])
const ArtSites = ref([])
onMounted(() => {
    axios.get('/Overall')
        .then((res) => {
            res.data["sites"].forEach(element => {
                OverallSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
    axios.get('/Language')
        .then((res) => {
            res.data["sites"].forEach(element => {
                LanguageSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
    axios.get('/Programming')
        .then((res) => {
            res.data["sites"].forEach(element => {
                ProgrammingSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
    axios.get('/Design')
        .then((res) => {
            res.data["sites"].forEach(element => {
                DesignSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
    axios.get('/Books')
        .then((res) => {
            res.data["sites"].forEach(element => {
                BooksSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
    axios.get('/Music')
        .then((res) => {
            res.data["sites"].forEach(element => {
                MusicSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
    axios.get('/Art')
        .then((res) => {
            res.data["sites"].forEach(element => {
                ArtSites.value.push(element)
            });
        })
        .catch((err) => {
            console.log(err)
        });
})
</script>

<template>
    <Header />
    <div id="main">
        <Sidebar />
        <div id="content">
            <div id="zonghewangzhan" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'earth-asia']" size="lg"/>
                </div>
                <span>综合网站</span>
            </div>
            <div class="site-card">
                <div v-for="site in OverallSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
            <div id="waiyuxuexi" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'language']" size="lg" />
                </div>
                <span>外语学习</span>
            </div>
            <div class="site-card">
                <div v-for="site in LanguageSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
            <div id="bianchengxuexi" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'terminal']" size="lg" />
                </div>
                <span>编程学习</span>
            </div>
            <div class="site-card">
                <div v-for="site in ProgrammingSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
            <div id="yishusheji" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'pen-ruler']" size="lg" />
                </div>
                <span>艺术设计</span>
            </div>
            <div class="site-card">
                <div v-for="site in DesignSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
            <div id="dianzishuji" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'book-open']" size="lg" />
                </div>
                <span>电子书籍</span>
            </div>
            <div class="site-card">
                <div v-for="site in BooksSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
            <div id="yinyue" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'music']" size="lg" />
                </div>
                <span>音乐</span>
            </div>
            <div class="site-card">
                <div v-for="site in MusicSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
            <div id="huihua" class="categroy">
                <div class="icon">
                    <font-awesome-icon :icon="['fas', 'palette']" size="lg" />
                </div>
                <span>绘画</span>
            </div>
            <div class="site-card">
                <div v-for="site in ArtSites" class="card">
                    <a :href="site.link" class="card-body">
                        <img :src="site.icon" alt="" class="card-icon" />
                        <div>
                            <h5 class="card-title">{{ site.title }}</h5>
                            <span class="card-info">{{ site.description }}</span>
                        </div>
                    </a>
                </div>  
            </div>
        </div>
    </div>
</template>

<style scoped>
#main {
    display: flex;
    height: 690px;
}

#content {
    margin-left: 20px;
    overflow: scroll;
    overflow-x: hidden;
    min-width: 150px;
    width: 100%;
}
/* scroll bar style */
#content::-webkit-scrollbar {
    width: 10px;
}
#content::-webkit-scrollbar-thumb {
    background-color: rgba(150, 150, 150, 0.5);
    border-radius: 5px;
}

.categroy {
    text-align: center;
    line-height: 40px;
    font-family: SourceHanSansSC;
    font-size: larger;
    margin-bottom: 16px;
}

.icon {
    display: inline-block;
    width: 40px;
    margin-right: 5px;
}

.site-card {
    display: flex;
    flex-wrap: wrap;
}

.card {
    margin-right: 22px;
    margin-bottom: 20px;
}

.card-body {
    width: 100%;
    display: flex;
}

.card-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    margin-right: 10px;
}

.card-title {
    font-family: "Franklin\ Gothic";
    font-size: large;
    margin-bottom: 5px;
}

.card-info {
    overflow: hidden;
}
/* 毛玻璃效果 */
.card {
    position: relative;
    display: flex;
    flex-direction: row;
    padding: 3px 10px;
    min-width: 200px;
    width: 15%;
    height: 60px;
    align-items: center;
    background: hsla(0, 0%, 0%, 0.3);
    overflow: hidden;
    background-clip: border-box;
    border-radius: 15px;
    backdrop-filter: blur(5px);
}

</style>

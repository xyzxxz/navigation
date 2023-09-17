<template>
    <div class="search">
        <div class="search-menu">
            <div>
                <label for="all"><span>网页</span></label>
                <label for="image"><span>图片</span></label>
                <label for="video"><span>视频</span></label>
                <label for="tool"><span>工具</span></label>
            </div>
        </div>
        <div class="form">
            <img src="../assets/icons/bing-icon.png" alt="bing" @click="selectEngine"/>
            <div class="engine-list">

            </div>
            <input
                type="text"
                @keyup.enter="search"
                v-model="searchText"
                id="search-text"
                name="q"
                placeholder="Type / to search"
                class="form-control"
            />
            <button type="submit" class="btn" @click="search">
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" size="lg" />
            </button>
        </div>
        <div class="suggestions">

        </div>
    </div>
</template>

<script setup>
import axios from 'axios';

let searchEngine = 'https://cn.bing.com/search?q='
let searchText = ''
function selectEngine() {

}

function search() {
    window.location.href = searchEngine + searchText
}
</script>

<style scoped>
.search {
    height: 250px;
    position: relative;
    margin: 0 auto;
    padding: 75px 0;
    max-width: 800px;
    width: 100%;
}

.search-menu {
    display: block;
    height: 50px;
    position: inherit;
    margin-left: 20px;
}

.search-menu > div {
    top: inherit;
    padding: inherit;
    position: relative;
    min-width: 75px;
    margin-bottom: 0;
    display: block;
    height: 100%;
}

label {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    padding: 2px 0;
    height: 100%;
    text-align: center;
}

span {
    display: block;
    padding: 10px 20px;
    text-align: center;
    font-family: SourceHanSansSC;
    font-size: 15px;
}

.form {
    height: 50px;
    width: 800px;
    position: relative;
    display: block;
}

@media (max-width: 600px) {
    .form {
        width: 500px;
    }
}

img {
    display: inline-block;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    left: 10px;
    border: 0;
    margin: 10px 10px;
    border-radius: 3px;
}

input {
    display: block;
    margin: 0;
    padding: 8px 40px 8px 55px;
    width: 100%;
    height: 50px;
    font-size: 1.3rem;
    line-height: 1.5;
    background-color: rgba(75, 75, 75, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    transition:
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
}

input:focus {
    color: antiquewhite;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 25, 0.25);
}

input::placeholder {
    font-family: "Franklin Gothic";
    font-size: 20px;
}

button {
    position: absolute;
    display: inline-block;
    color: darkcyan;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    top: 0;
    right: 0;
    background: transparent;
    border: 0;
    margin: 0 10px;
    padding: 1px 6px;
    line-height: 50px;
    transition:
        color 0.15s ease-in-out,
        background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
}
</style>

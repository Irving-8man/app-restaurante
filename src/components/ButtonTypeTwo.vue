<template>
    <button href="#" class="hbtn hb-border-bottom-br3 hpill">Detail Bottom</button>
</template>

<style scoped>
.hbtn {
    position: relative;
    box-sizing: border-box;
    display: inline-block;
    overflow: hidden;
    padding: 8px 20px;
    margin: 0px 3px 6px;
    text-align: center;
    border: 2px solid rgb(255, 255, 255);
    text-decoration: none;
    color: rgb(255, 255, 255);
    white-space: nowrap;
    z-index: 0;
}


.hbtn i {
    padding-right: 8px;
}


.hb-border-bottom-br3::after {
    border-radius: 50px;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    height: 100%;
    content: "";
    border: 2px solid rgb(255, 255, 255);
    z-index: 2;
    margin: 0px;
    left: 0px;
    bottom: 0px;
    border-top-width: 2px;
    transition: border-top-width 0.1s ease 0.2s, height 0.2s ease 0.1s, width 0.2s ease 0s, margin 0.2s ease 0s;
}


.hb-border-bottom-br3 {
    position: relative;
    transition-duration: 0.3s;
    overflow: visible;
    box-sizing: border-box;
    border: none;
    padding: 10px 22px;
}


.hb-border-bottom-br3:hover::after {
    width: 60%;
    height: 0px;
    border-width: 0px 2px 2px;
    margin: 0px 20%;
    transition: border-top-width 0.1s ease 0s, height 0.2s ease 0.1s, width 0.2s ease 0.2s, margin 0.2s ease 0.2s;
}


.hpill {
    border-radius: 50px;
}
</style>
// 1.获取元素
var slidebar = document.querySelector('.list-group');
var banner = document.querySelector('.picture')
// banner.offsetTop 就是被卷去头部的大小 一定要写到滚动的外面
var bannerTop = banner.offsetTop;
// 当我们侧边栏固定定位之后，应该变化的数值
var slidebarTop = slidebar.offsetTop - bannerTop;
// 获取 main 主体元素
var main = document.querySelector('.floor');
var goBack = document.querySelector('.goBack')
var mainTop = main.offsetTop;
var listGroup = document.querySelectorAll(".list-group-item");
console.log(listGroup);
// 2.页面滚动事件 scroll
document.addEventListener('scroll', function () {
    // console.log(11);
    // window.pageYOffset 页面被卷去的头部
    // console.log(window.pageYOffset);
    // 3.当我们页面被卷去的头部大于等于172，此时侧边栏就要改为固定定位
    if (window.pageYOffset >= bannerTop) {
        slidebar.style.position = 'fixed';
        slidebar.style.top = slidebarTop + 'px';
    } else {
        slidebar.style.position = 'absolute';
        slidebar.style.top = 300 + 'px';
    }
    // 4.当我们页面滚动到main盒子，就显示goBack模块
    if (window.pageYOffset >= mainTop - 800) {
        goBack.style.display = 'block';
        console.log(window.pageYOffset);
    } else {
        goBack.style.display = 'none';
    }
    if (window.pageYOffset >= 2800) {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
        listGroup[5].style.backgroundColor = '#dc2c24';
        listGroup[5].style.color = '#fff';
    }
    else if (window.pageYOffset >= 2500) {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
        listGroup[4].style.backgroundColor = '#dc2c24';
        listGroup[4].style.color = '#fff';
    }
    else if (window.pageYOffset >= 2000) {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
        listGroup[3].style.backgroundColor = '#dc2c24';
        listGroup[3].style.color = '#fff';
    } else if (window.pageYOffset >= 1400) {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
        listGroup[2].style.backgroundColor = '#dc2c24';
        listGroup[2].style.color = '#fff';
    } else if (window.pageYOffset >= 850) {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
        listGroup[1].style.backgroundColor = '#dc2c24';
        listGroup[1].style.color = '#fff';
    } else if (window.pageYOffset >= 350) {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
        listGroup[0].style.backgroundColor = '#dc2c24';
        listGroup[0].style.color = '#fff';
    } else {
        for (var i = 0; i < listGroup.length; i++) {
            listGroup[i].style.backgroundColor = '#fff';
            listGroup[i].style.color = '#000';
        }
    }
})
// 3.当我们点击了返回顶部模块，就让窗口滚动的页面的最上方
goBack.addEventListener('click', function () {
    // 里面的 x和 y不跟单位，直接写数字即可
    // window.scroll(0, 0);
    // 因为是窗口滚动，所以对象是window
    animate(window, 0);
});
// 返回顶部
$(".goBack").click(function () {
    // $(document).scrollTop(0);  // 直接返回顶部，不带动画
    $("body, html").stop().animate({
        scrollTop: 0
    });  // 同时写下body、html是因为firefox、ie不支持body，而chrome支持body，为了兼容
})
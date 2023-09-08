// 万年历模块
var timer = document.querySelector('.timer');
function getDate() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var dates = date.getDate();
    var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    var time = new Date;
    var h = time.getHours();
    h = h < 10 ? '0' + h : h;
    var m = time.getMinutes();
    m = m < 10 ? '0' + m : m;
    var s = time.getSeconds();
    s = s < 10 ? '0' + s : s;
    return '今天是: ' + year + '年' + month + '月' + dates + '日 ' + arr[date.getDay()] + "  " + h + ':' + m + ':' + s;
}
countDown();
setInterval(countDown, 1000);
function countDown() {
    timer.innerText = getDate();
}
// 鼠标经过显示二维码
var content1 = document.getElementById('c1');;
var logo1 = document.getElementById('r1');
logo1.onmouseover = function () {
    content1.style.display = 'block';
}
logo1.onmouseleave = function () {
    content1.style.display = 'none';
}
var content2 = document.getElementById('c2');;
var logo2 = document.getElementById('r2');
logo2.onmouseover = function () {
    content2.style.display = 'block';
}
logo2.onmouseleave = function () {
    content2.style.display = 'none';
}
// 鼠标经过显示搜索栏
var flag = true;
var content3 = document.getElementById('search');
var logo3 = document.getElementById('r3');
logo3.onmouseover = function () {
    if (flag) {
        content3.style.display = 'block';
    }

}
logo3.onmouseleave = function () {
    if (flag) {
        content3.style.display = 'block';
    }
}
logo3.onclick = function () {
    flag = !flag;
    if (flag) {
        content3.style.display = 'block';
    } else {
        content3.style.display = 'none';
    }
}

// 鼠标经过导航栏，旗子移动
window.addEventListener('load', function () {
    // 1.获取元素
    var cloud = document.querySelector('.flag');
    var c_nav = document.querySelector('.nav-pills');
    var lis = c_nav.querySelectorAll('li');
    // 2.给所有的小li绑定事件
    // 这个current作为筋斗云的起始位置
    var current = 268;
    for (var i = 0; i < lis.length; i++) {
        if (i == 0) {
            // (1)鼠标经过，把当前小li的位置作为目标值
            lis[i].addEventListener('mouseenter', function () {
                animate(cloud, this.offsetLeft + 268);
            });
            // (2)鼠标离开，就回到起始的位置
            lis[i].addEventListener('mouseleave', function () {
                animate(cloud, current);
            });
            // (3)当我们鼠标点击，就把当前位置作为目标值
            lis[i].addEventListener('click', function () {
                current = this.offsetLeft + 268;
            });
        }
        else {
            // (1)鼠标经过，把当前小li的位置作为目标值
            lis[i].addEventListener('mouseenter', function () {
                animate(cloud, this.offsetLeft + 294);
            });
            // (2)鼠标离开，就回到起始的位置
            lis[i].addEventListener('mouseleave', function () {
                animate(cloud, current);
            });
            // (3)当我们鼠标点击，就把当前位置作为目标值
            lis[i].addEventListener('click', function () {
                current = this.offsetLeft + 294;
            });
        }
    }
})
// 鼠标经过变色
var li = document.querySelector(".news").querySelector('ul').querySelectorAll('li')
console.log(li);
var h6 = document.querySelectorAll('.r_top');
console.log(h6);
for (var i = 0; i < li.length; i++) {
    li[i].onmouseover = function () {
        for (var j = 0; j < h6.length; j++) {
            h6[j].querySelector('h6').style.color = '#000';
            this.querySelector('h6').style.color = '#f65469';
        }
    }
    li[i].onmouseleave = function () {
        for (var j = 0; j < h6.length; j++) {
            h6[j].querySelector('h6').style.color = '#000';
        }
    }
}
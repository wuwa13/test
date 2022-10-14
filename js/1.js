window.addEventListener('load', function () {
    var a1 = document.querySelector(".a1");
    var a2 = document.querySelector(".a2");
    var i = 0;
    a2.onmouseover = function () {

        if (i == 6) {
            a2.style.left = a2.offsetLeft - 350 + 'px';
            a2.style.top = a2.offsetTop + 360 + 'px';
            alert("niah0");
            return false;
        }

        if (a2.offsetLeft >= 150 && a2.offsetLeft < 550) {
            a2.style.left = a2.offsetLeft + 50 + 'px';
            i++;
        } else if (a2.offsetTop >= 322) {
            a2.style.top = a2.offsetTop / 10 + 'px';
            i++;

        } else if (a2.offsetLeft == 550) {
            a2.style.left = -350 + 'px';
            i++;
        } else if (a2.offsetTop == 32) {
            a2.style.top = a2.offsetTop + 289 + 'px';
            i++;

        } else if (a2.offsetLeft == -200) {
            a2.style.left = a2.offsetLeft + 200 + 'px';
            a2.style.top = a2.offsetTop + 1 + 'px';
            i++;
        }
    }

    var d1 = this.document.querySelector('.d1');
    var info = this.document.querySelector('.info');
    var img = this.document.createElement("img");
    img.setAttribute("src", 'img/blood.jpg');
    img.setAttribute("id", 'i1');
    let NUMBER = 1;
    let COUNT = 10;
    let COLORS = ['#8c00ff', '#006bff', '#4fff00', '#ffb800', '#ff0000'];
    let timer = null;
    function $(str) {
        return document.querySelector(str);
    }

    a1.onclick = function () {

        if (COUNT < 0) {
            COUNT = 11;
        }
        actionNum();

    }
    var btn = this.document.querySelector('.btn1');
    btn.onclick = function () {
        d1.style.display = "block";
        info.style.display = "none";
    }

    function actionNum() {
        d1.style.display = "none";

        let h1 = $('h1');
        $('h1').style.display = 'block';
        timer = setInterval(() => {
            COUNT--;
            NUMBER++;
            if (COUNT >= 0) {
                h1.classList.remove('active');
                setTimeout(() => {
                    let num = Math.floor(Math.random() * 5);
                    h1.innerText = COUNT;
                    h1.style.color = COLORS[num];
                    h1.classList.add('active');
                }, 100);
            } else {
                clearInterval(timer);
                info.style.display = "block";
                $('h1').style.display = 'none';
                window.location.href = "3.html";
            }
        }, 1000);
    }

    function c() {
        var j = 0;
        d1.style.display = "none";
        info.style.display = "block";
        btn.style.display = "block";
        var str = "汉斯哦啊桂花糕艰苦艰苦你看了几乎囊括了什么的考十大打什么了虑";
        info.style.fontSize = "20px";
        info.innerHTML += str.charAt(j);
        j++;
        info.timer = setInterval(function () {
            info.innerHTML += str.charAt(j);
            j++;
            if (j == str.length) {
                info.appendChild(img);
                clearTimeout(info.timer);
            }
        }, 30)

    }
});
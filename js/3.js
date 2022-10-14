window.addEventListener('load', function () {

    var ols = this.document.querySelectorAll('.sel li');
    //得到属性
    var dot_an = str('dot_an');
    var dot_1 = str('dot_1');
    var dot_info_1 = str('dot_info_1');
    var dot_info = str('dot_info');
    var dot_line = str('dot_line');
    var dot_dot = str('dot_dot');

    var dot_2_to = str('dot_2_to');
    var dot_2_to1 = str('dot_2_to1');
    var x = 0;

    if (x == 0) {
        anviation(dot_an, 350, dot_info);
        addhtml(dot_info_1, '某某某生日快乐');

    }




    function str(obj) {
        return document.querySelector('.' + obj);
    }
    for (var i = 0; i < ols.length; i++) {

        ols[i].setAttribute('index', i);
        ols[i].onclick = function () {
            for (var i = 0; i < ols.length; i++) {
                ols[i].className = '';
                // CSS动画animation处理
                dotandline();
            }
            x = this.getAttribute('index');
            if (x == 0) {
                li_index();

            } else {


                setout();
            }
            this.className = 'dot';
        }
    }
    // CSS动画animation处理
    function dotandline() {
        dot_dot.style.animation = "";
        dot_line.style.animation = '';
        dot_2_to.style.animation = '';
        dot_2_to1.style.animation = '';
        dot_dot.style.animationFillMode = "";
    }
    /*   当前第一个页面的处理 */
    function li_index() {
        anviation(dot_an, 350, dot_info, dot_info_1);
        dot_an.style.display = 'block';
        dot_1.style.display = 'block';
        dot_line.style.display = 'none';
        dot_dot.style.display = 'none';
    }
    /*   css动画定时器处理 */
    function setout() {
        dot_1.style.display = 'none';
        //dot_an首页小圆点
        dot_an.style.top = -250 + 'px';
        dot_an.style.display = 'none';//隐藏
        dot_info.style.display = 'none';
        setTimeout(function () { dot_line.style.animation = "mymove1 2s"; }, 30);



        setTimeout(function () {
            dot_dot.style.animation = "mymove 2s calc(0.25s * 10) ";
            dot_dot.style.animationFillMode = "forwards ";
        }, 30);


        setTimeout(function () {


            dot_2_to.style.animation = "move1 3s calc(0.25s * 14)";

            dot_2_to.style.animationFillMode = "forwards ";
            dot_2_to.style.display = 'block';

        }, 30);
        setTimeout(function () {

            dot_2_to1.style.animation = "move2 3s calc(0.5s * 12)";
            dot_2_to1.style.animationFillMode = "forwards ";
            dot_2_to1.style.display = 'block';
        })
        dot_line.style.top = 0 + 'px';
    }
    function anviation(obj, h, target) {

        var timer = setInterval(function () {
            if (obj.offsetTop >= h) {

                clearInterval(timer);
                dot_an.style.display = 'none';
                /*   dot_info.sty.display = 'none'; */
                if (target) {
                    target.style.display = 'block';

                }
            }

            obj.style.top = obj.offsetTop + 50 + 'px';

        }, 120)
    }
    function addhtml(obj, info) {
        obj.innerHTML += info;
        obj.style.fontSize = 25 + 'px';
        obj.style.marginLeft = 100 + 'px';
        obj.style.marginTop = 10 + 'px';
    }

    var m = 0;
    /*  滚轮监听 */
    windowAddMouseWheel();
    function windowAddMouseWheel() {
        var scrollFunc = function (e) {

            e = e || window.event;
            if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
                if (e.wheelDelta > 0) { //当滑轮向上滚动时
                    m--;
                    if (m == 2 || m == 4 || m == 6 || m == 8 || m == 10 || m == 12 || m == 14 || m == 16) {

                        dot_1.style.display = 'none';
                        anviation(dot_an, 350, dot_info);
                        setout();
                        for (var i = 0; i < ols.length; i++) {
                            ols[i].className = '';
                        }
                        ols[m / 2].className = 'dot';
                    }
                    //第一个页面处理
                    if (m == 0) {
                        dot_1.style.display = 'block';
                        li_index();
                        //小圆点定位
                        for (var i = 0; i < ols.length; i++) {
                            ols[i].className = '';
                        }
                        ols[m / 2].className = 'dot';
                        // CSS动画animation处理
                        dotandline();
                    }
                    if (m == -2) {
                        m == 0;
                    }
                }
                if (e.wheelDelta < 0) { //当滑轮向下滚动时
                    m++;
                    if (m == 2 || m == 4 || m == 6 || m == 8 || m == 10 || m == 12 || m == 14 || m == 16 || m == 18) {
                        dot_1.style.display = 'none';
                        setout();
                        for (var i = 0; i < ols.length; i++) {
                            ols[i].className = '';
                        }
                        ols[m / 2].className = 'dot';
                        // CSS动画animation处理
                        dotandline();
                    }
                    if (m == 20) {
                        m = 18;
                    }
                }
            }

        };
        //给页面绑定滑轮滚动事件
        if (document.addEventListener) { //火狐使用DOMMouseScroll绑定
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }
        //其他浏览器直接绑定滚动事件
        window.onmousewheel = document.onmousewheel = scrollFunc;
    }
})
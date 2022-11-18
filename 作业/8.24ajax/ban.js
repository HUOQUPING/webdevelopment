$(function () {
    function Banner(element) {
        this.$tabLi = $(element.tabLi);
        this.$picUl = $(element.picUl);
        this.$banner = $(element.banner);
        this.$btn = $(element.btn);
        this.$btnA = $(element.btnA);
        this.imgWidth = $(element.picLi).width();
        this.index = 0;
        this.nowTime = new Date();
        this.timer = null;
        // 点击下面的小图
        this.tabLiClick();
        // 鼠标悬停
        this.bannerHover();
        // 左右点击
        this.btnAClick();
        // 自动轮播
        this.autoPlay();
    }

    // 点击下面的小图上面切换添加类名轮播
    Banner.prototype.tabLiClick = function () {
        var $this = this;
        $this.$tabLi.click(function () {
            //序列号
            $this.index = $(this).index();
            $(this).addClass('active').siblings().removeClass('active');

            $this.$picUl.animate({
                marginLeft: -$this.imgWidth * ($this.index + 1) + 'px'
            }, 300);
        });
    };

    // 鼠标移上清楚定时器
    Banner.prototype.bannerHover = function () {
        var $this = this;
        $this.$banner.hover(function () {
            $this.$btn.show();
            clearInterval($this.timer);
        }, function () {
            $this.$btn.hide();
            $this.autoPlay(2000);
        });
    };

    // 点击左右轮播
    Banner.prototype.btnAClick = function () {
        var $this = this;
        $this.$btnA.click(function () {
            //当前时间减去上一次时间大于300毫秒才执行
            if (new Date() - $this.nowTime > 300) {
                $this.nowTime = new Date();
                var i = $(this).index();
                console.log(i);
                // 判断点击哪个按钮
                i ? $this.index++ : $this.index--;
                fn($this);
            }
        }).
            mousedown(function () {
                return false;
            });
    };

    // 自动轮播
    Banner.prototype.autoPlay = function () {
        var $this = this;
        $this.timer = setInterval(function () {
            $this.index++;
            fn($this);
        }, 2000);
    };

    // 下标 偏移量 轮播 计算处理
    function fn($this) {
        var liIndex = $this.index;
        if (liIndex >= $this.$tabLi.length) {
            liIndex = 0;
        } else if (liIndex < 0) {
            liIndex = $this.$tabLi.length - 1;
        }
        $this.$tabLi.eq(liIndex).addClass('active').siblings().removeClass('active');
        $this.$picUl.animate({
            marginLeft: -$this.imgWidth * ($this.index + 1) + 'px'
        }, 300, function () { //回调函数判断，让图片瞬间复位
            if ($this.index == $this.$tabLi.length) {
                $this.$picUl.css('marginLeft', -$this.imgWidth + 'px');
                $this.index = 0;
            } else if ($this.index < 0) {
                $this.$picUl.css('marginLeft', -$this.imgWidth * ($this.$tabLi.length) + 'px');
                $this.index = $this.$tabLi.length - 1;
            }
        });
    }

    // 调用封装函数
    var banner = new Banner({
        tabLi: '#banner .tab li',
        picUl: '#banner .pic ul',
        banner: '#banner',
        btn: '#banner .btn',
        btnA: '#banner .btn a',
        picLi: '#banner .pic li',

        // delayTime: 2000
    });

});
function Carousal(container, data) {
    this.container = container
    this.position = null
    this.data = data
    this.ul = null
    this.index = 0
    this.timer = null
    this.init = function () {
        this.getImg(this.data)
        this.autoPlay()
        this.changePosition()
    }
    this.init()
}
Carousal.prototype.getImg = function (data) {
    let banner = data.data
    this.ul = $('<ul>').appendTo(this.container).addClass('banner-list')
    for (let i = banner.length - 2; i < banner.length * 2 + 2; i++) {
        let li = $('<li>').appendTo(this.ul).addClass('item')
        $('<img>').appendTo(li).attr('src', banner[i % banner.length].img)
    }
    this.ul.children().eq(this.index + 2).removeClass('bg-cover').siblings().addClass('bg-cover')
    this.position = 2 * 760 - (parseInt(innerWidth) - 760 - 17) / 2
    this.ul[0].style.left = -this.position + 'px'
}
Carousal.prototype.autoPlay = function () {
    clearInterval(this.timer)
    this.timer = setInterval(() => {
        this.next()
    }, 3000)
}
Carousal.prototype.next = function () {
    if (this.index == 3) {
        this.ul[0].style.left = -this.position + 'px'
        this.index = 0
    }
    this.index = this.index + 1
    this.ul.children().eq(this.index + 2).removeClass('bg-cover').siblings().addClass('bg-cover')
    this.ul.animate({
        left: -this.position - 760 * (this.index) + 'px'
    }, {
        duration: 300,
        easing: 'linear',
    }).fadeIn()
}
Carousal.prototype.changePosition = function () {
    onresize = () => {
        this.position = 2 * 760 - (parseInt(innerWidth) - 760 - 17) / 2
    }
}
class Content {
    constructor() {

        this.url = ' https://apis.netstart.cn/music/personalized/newsong'
        this.$song = $('.song')
        this.$lrclist = $('.lrclist')
        this.$audio = $('.audio-play')
        this.title = null
        this.init()
    }
    init() {
        this.getData(this.url)
    }
    // this.render()
    getData(url) {
            let self = this
            $.ajax({

                url,
                type: 'get',
                success: function(data) {
                    // console.log(result);
                    let { result } = data
                    this.result = result
                    self.creatList(this.result)
                    self.myClick()

                }
            })
        }
        // 创建歌曲列表项
    creatList(arr) {
        for (let i = 0; i < arr.length; i++) {
            let { id, name } = arr[i]
            console.log(id, name);
            $(`<li>${name}</li>`).addClass('li1').attr('data-id', id).appendTo('.song')
        }
    }
    // 给每一首歌绑定点击事件
    myClick() {
        // console.log(this.$ul1);
        let slef = this
        this.$song.on('click', 'li', (e) => {
            console.log(123);
            let el = e.target
            console.log(el);
            let id = el.dataset.id
            console.log(id)
            $.ajax({
                url: `https://apis.netstart.cn/music/lyric?id=${id}`,
                type: 'get',
                success: function(data) {
                    let { lrc: { lyric } } = data
                    // console.log(lyric)
                    // console.log(el.textContent);

                    // 获取歌名
                    this.title = el.textContent
                    $('.title').text(this.title)
                        // 正则表达获取歌词
                    let lrc1 = []
                    let lrcReg = /^\[(\d+):(\d+\.\d+)\]([\S ]*)$/gm
                    lyric.replace(lrcReg, function(match, $2, $3, $4) {

                        // console.log($2, $3, $4);
                        lrc1.push({
                            time: $2 * 60 + parseFloat($3),
                            lrc: $4
                        })
                        return match
                    })
                    console.log(lrc1);

                    slef.creatLrc(lrc1)

                }

            })
            let url2 = `https://music.163.com/song/media/outer/url?id=${id}.mp3`
            this.$audio.attr('src', url2)
        })
    }

    // 创建歌词列表
    creatLrc(arr) {

        $('.smallbox .lrclist')[0].textContent = ''
        for (let i = 0; i < arr.length; i++) {
            let { time, lrc } = arr[i]
            $(`<li>${lrc}</li>`).attr('data-time', time).appendTo('.lrclist')

        }
    }
}
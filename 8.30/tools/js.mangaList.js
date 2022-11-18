function MangaList(container,data){
    this.container = container
    this.data = data.list
    this.init = function(){
        this.create()
    }
    this.init()
}
MangaList.prototype.create = function(){
    let ul = $('<ul>').appendTo(this.container).addClass('items')

    for(let i = 0;i<this.data.length;i++){
        let li = $('<li>').appendTo(ul).addClass('item')
        $('<img>').appendTo(li).attr('src',this.data[i].vertical_cover)
        $('<div>').appendTo(li).addClass('title').text(this.data[i].title)
        $('<span>').appendTo(li).addClass('style').text(this.data[i].styles[0].name)
    }
}
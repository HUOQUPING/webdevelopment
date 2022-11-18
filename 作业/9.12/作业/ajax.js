function ajax(option) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest
        // 初始化请求
        xhr.open(option.type, option.url)
        // 发送请求
        xhr.send()
        // 绑定事件处理
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    // 请求成功获取数据
                    // 获取文本数据 
                    resolve(xhr.responseText)
                } else {
                    reject(xhr.responseText)
                }
            }
        }
    })
}
import $ from 'jquery'
import { get } from 'axios'

import {Success,Error,Warning}from'./message.js'

// import { Dog } from './moduleA'

import * as moduleA from './moduleA'

$('<input>').appendTo('body')
// 这里的代码无法直接用
// 需要使用webpack 打包成产品 指令 npx webpack

get('https://apis.netstart.cn/bcomic/Banner').then(data => {
    console.log(data);
})

// 每次代码更新都要重新打包

console.log(moduleA, moduleA.Dog);
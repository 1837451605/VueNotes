分析结构
用到哪些功能、技术

基本功能：
查询笔记   ： v-for 
添加笔记   ： 事件click、追加数组
删除笔记   ： 事件click、删除当前下标的数组
修改笔记   ： 事件keyup、修改指定下标的内容
保存笔记   ： 保存到HTML5提供的本地存储里面


额外的功能：
时间           moment.js
字数统计       获取文本框的长度 .length
标题限制长度   lodash.js


用到的技术：
vue.js
HTML\CSS样式
前端样式框架  https://semantic-ui.com/


问题：
笔记的数据是什么结构
单条笔记：笔记的内容、笔记的添加时间
[
{"text":"笔记内容","time":"时间戳"},
{"text":"笔记内容","time":"时间戳"},
{"text":"笔记内容","time":"时间戳"}
]

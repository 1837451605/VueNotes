new Vue({
    el:'#app',
    data:{
        num:"添加笔记",
        text1:"",
        uls:[
            {text:"aaaaaaa",delete:"删除",nei:"111111111111"}
        ]
    },
    methods:{
        btn:function(index){
            this.uls.push({
                    text:this.num,
                    delete:"删除",
                    nei:this.text1
                })
        },
        btn2:function(index){
            this.uls.splice(index,1)
        }
    }
})

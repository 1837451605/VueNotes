new Vue({
    el: "#app",
    data: {
        message: "",
        title: "新建笔记",
        number: "0",
        set: [
            {txt:"花有重开日，人无再少年",title:"慎",n:"11",t:"09:00"},
        ],
        newset: "",
    },
    computed: {

    },
    mounted: function(){
        this.set = JSON.parse(sessionStorage.all);
    },
    methods: {
        nu: function(event){
            this.number = event.path[0].value.length ? event.path[0].value.length : 0;
        },
        nu1: function(i,event){
            this.set[i].n = event.path[0].value.length ? event.path[0].value.length : 0;
            this.set[i].txt = event.path[0].value;
            sessionStorage.all = JSON.stringify(this.set);
        },
        add: function(event){
            var time = moment().format("HH:mm:ss");
            if(this.message && this.title){
                this.newset = {txt:this.message,title:this.title,n:this.number,t:time};
                this.set.unshift(this.newset);
            };
            var str = JSON.stringify(this.set);
            sessionStorage.all = str;
            console.log(JSON.parse(sessionStorage.all));
        },
        remove: function(){
            sessionStorage.all = JSON.stringify([
            {txt:"花有重开日，人无再少年",title:"慎",n:"11",t:"09:00"},
        ]);
        }
    }
})
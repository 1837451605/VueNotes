/**
 * Created by lenovo on 18/9/19 019.
// */
//var obj = { name:'Jim' };
//
//var str = JSON.stringify(obj);
new Vue({
    el:"#app",
    data:{
        miao:"",
        txt:'',
        newAddText:'',
        nowTime:"",
        biaotizi:0,
        text:[
            {
                id:1,h2:"心情日记",
                atra:"今天晴，心晴还不错",
                zi:7,
                shi:""

            },
            {
                id:2,h2:"生活日记",
                 atra:"今天多云，过得还不错",
                zi:8,
                shi:""
            }
        ]
    },
    mounted: function(){
        this.text = JSON.parse(sessionStorage.all);
        this.nowTimes();
    },
    methods: {
        add: function () {
            if (this.txt === "") {
                alert("请输入内容")
            } else {
                this.text.push({
                    h2: this.newAddText,
                    atra: this.txt,
                    zi: this.txt.length

                });
                this.newAddText = "";
                this.txt = "";
                sessionStorage.all = JSON.stringify(this.text);
            }

        },
        //biaotizi1: function () {
        //    biaotizi=biaotizi.txt.length ? biaotizi.txt.length : 0;
        //},
        fun: function (a) {
            this.text[a].zi = this.text[a].atra.length ? this.text[a].atra.length : 0;
        },
        timeFormate(timeStamp) {
            let year = new Date(timeStamp).getFullYear();
            let month = new Date(timeStamp).getMonth() + 1 < 10 ? "0" + (new Date(timeStamp).getMonth() + 1) : new Date(timeStamp).getMonth() + 1;
            let date = new Date(timeStamp).getDate() < 10 ? "0" + new Date(timeStamp).getDate() : new Date(timeStamp).getDate();
            let hh = new Date(timeStamp).getHours() < 10 ? "0" + new Date(timeStamp).getHours() : new Date(timeStamp).getHours();
            let mm = new Date(timeStamp).getMinutes() < 10 ? "0" + new Date(timeStamp).getMinutes() : new Date(timeStamp).getMinutes();
            this.nowTime = year + "年" + month + "月" + date + "日" + " " + hh + ":" + mm;
        },
        nowTimes(){
            this.timeFormate(new Date());
            setInterval(this.nowTimes,30*1000);
        }

    },
        // 创建完成时
        created() {
            this.nowTimes();
        },
    });
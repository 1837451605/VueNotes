//var a = {
//
//}
Vue.component('card',{
    props:['link','text','src','h5','p'],
    template:`<div class="card" style="width: 18rem;">
    <img class="card-img-top" :src="src" alt="">
    <div class="card-doby">
        <h5 class="card-title">{{h5}}{{src}}{{link}}</h5>
        <p class="card-text">{{p}}</p>
        <a :href="link" class="btn btn-primary">{{text}}</a>
    </div>
    </div>`
})

new Vue({
    el:"#app"
})
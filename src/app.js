// 本地安装 vue
// npm install vue --save
// 加载vue模块，是从node_modules加载
import Vue from 'vue';
// 时间设置插件
import moment from 'moment';
Vue.filter('fmtdate',(date,fmrStr)=>{
  return moment(date).format(fmrStr);
})

// 全局引用mint-ui
import Mint from 'mint-ui'; 

 Vue.use(Mint);  
 import 'mint-ui/lib/style.css';
// 使用vue-router插件（模块）
// 本地安装 vue-router
// npm install vue-router --save
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引用axios
import axios from 'axios';
axios.defaults.baseURL='http://vue.studyit.io/api/';
// 实例对象
Vue.prototype.$http=axios;
Vue.prototype.axios = axios;

// 1 引用组件
import home from './components/Home/home.vue';
import member from './components/Member/member.vue';
import shopcar from './components/Shopcar/shopcar.vue';
import search from './components/Search/search.vue';
import news from './components/Home/news/news.vue';
import share from './components/Home/share/share.vue';
import buy from './components/Home/buy/buy.vue';
import feedback from './components/Home/feedback/feedback.vue';
import video from './components/Home/video/video.vue';
import contant from './components/Home/contant/contant.vue';
import newsDetail from './components/Home/news/detail.vue';
import shareDetail from './components/Home/Share/detail.vue';

// 2 创建路由对象
let router = new VueRouter({
  linkActiveClass: 'mui-active',
  routes: [
    {path:'/',redirect:'/home'},
    {path: '/home', component: home},
    {path: '/member', component: member},
    {path: '/shopcar', component: shopcar},
    {path: '/search', component: search},   
    {path: '/news',component:news},
    {path: '/share',component:share},
    {path:'/buy',component:buy},
    {path:'/feedback',component:feedback},
    {path:'/video',component:video},
    {path:'/contant',component:contant},
    {path:'newsDetail',path:'/news/:id',component:newsDetail,props:true},
    {name: 'shareDetail', path: '/share/:id', component: shareDetail, props: true}
    
  ]
});


// 加载组件（模块）
import app from './app.vue';
// 引用mui组件
import '../statics/css/mui.css'


// 3 把路由挂载到vue实例上
let vm = new Vue({
  el: '#app',
  router,
  render: c => c(app),
  created() {
    // 设置axios的拦截器
    // 发送请求之前
    // Add a request interceptor
    this.axios.interceptors.request.use(function (config) {
      // console.log(this);
      // Do something before request is sent
      this.$indicator.open('正在加载...');
      return config;
    }.bind(this), function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    this.axios.interceptors.response.use(function (response) {
      // Do something with response data
      this.$indicator.close();
      
      return response;
    }.bind(this), function (error) {
      // Do something with response error
      return Promise.reject(error);
    });
  }
})


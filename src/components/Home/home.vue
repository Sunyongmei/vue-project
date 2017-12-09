<template>
<!-- 轮播图 -->
  <div class="mui-content">
    <!-- <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item, index) in images" :key="index">
        <a :href="item.url">
          <img :src="item.img" alt="">
        </a>
      </mt-swipe-item> 
   
    </mt-swipe> -->
    <swipe :imgUrl="img_url"></swipe>
          
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
      
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                      
                <router-link to='./news'>
                    <span class="mui-icon icon-news"></span>
                    <div class="mui-media-body">新闻资讯</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to='./share'>
                    <span class="mui-icon icon-share"></span>
                    <div class="mui-media-body">图片分享</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to='./buy'>
                    <span class="mui-icon icon-buy"></span>
                    <div class="mui-media-body">商品购买</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                 <router-link to='./feedback'>
                    <span class="mui-icon icon-speedback"></span>
                    <div class="mui-media-body">留言反馈</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to='./video'>
                    <span class="mui-icon icon-video"></span>
                    <div class="mui-media-body">视频专区</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
                <router-link to='./contant'>
                    <span class="mui-icon icon-contant"></span>
                    <div class="mui-media-body">联系我们</div>
                </router-link>
            </li> 
        </ul>
    
     
  
  </div>
</template>

<script>
import swipe from '../common/swipe.vue';

 export default {
  data() {
    return {
    //    images: []
    img_url:'getlunbo'
    
    };
  },
  components:{
      swipe
  }
  
//   methods: {
//     // 获取轮播图数据
//     getlunbo() {
//       this.$http
//         .get('getlunbo')
//         .then((response) => {
//           if (response.status === 200 && response.data.status === 0) {
//             this.images = response.data.message;
//           } else {
//             console.log('请求服务器出错');
//           }
//         })
//         .catch((err) => {
//           console.error(err);
//         })
      
//     }
    
//   }
};

</script>

<style scoped>
     /* .mint-swipe{
        height:250px;
       
    }
   
    .mui-table-view-cell.mui-collapse .mui-table-view{
        margin-left: 0px;
    }
    .mint-swipe img{
        width:100%;
        height:100%;
       
    }
    .mui-table-view-cell{
        padding:0px 0px;
    }  */
    
    .icon-news{
        width:50px;
        height: 50px;
        background-image: url('../../../statics/images/menu1.png');
        background-repeat:round;
    }
    .icon-share{
        width:50px;
        height: 50px;
        background-image: url('../../../statics/images/menu2.png');
        background-repeat:round;
    }
    .icon-buy{
        width:50px;
        height: 50px;
        background-image: url('../../../statics/images/menu3.png');
        background-repeat:round;
    }
    .icon-speedback{
        width:50px;
        height: 50px;
        background-image: url('../../../statics/images/menu4.png');
        background-repeat:round;
    }
    .icon-video{
        width:50px;
        height: 50px;
        background-image: url('../../../statics/images/menu5.png');
        background-repeat:round;
    }
    .icon-contant{
        width:50px;
        height: 50px;
        background-image: url('../../../statics/images/menu6.png');
        background-repeat:round;
    }
    .mui-grid-view.mui-grid-9{
        background-color: #fff;
    }
</style>



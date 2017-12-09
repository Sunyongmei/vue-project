<template>
   <!--  评论 -->
      <div class="comment">
        <!--添加评论-->
        <h4>提交评论</h4>

        <div class="submitcomment">
            <textarea  v-model="content" placeholder="请输入评论内容"></textarea>
            <button @click="send" class="mui-btn mui-btn-primary">发表</button>
        </div>
            
        <div class="title">
            <h4>评论列表</h4>
        </div>    
        
        <!--评论列表-->
        
        <div v-for="(item, index) in comments" :key="index" class="item">
            <div class="content">
              {{item.content}}
            </div>
            <div>
              <span class="user">
                {{item.user_name}}
              </span>  
              <span>
                {{item.add_time | fmtdate('YYYY-MM-DD HH:mm:ss')}}
              </span>
            </div>
        </div>

        <div class="more">
            <button @click="loadmore" class="mui-btn mui-btn-primary mui-btn-outlined">加载更多</button>
        </div>

    </div>
</template>
<script>
export default {
  data(){
      return {
          comments:[],
          content:'',
          pageindex:1
      }
  },
  props:['id'],
  created(){
      this.getcomments();
  },
  methods:{
      getcomments(){
          let url = 'getcomments/'+this.id+'?pageindex='+this.pageindex;
          this.$http
             .get(url)
             .then((response)=>{
                 if(response.status===200 && response.data.status===0){
                     this.comments=this.comments.concat(response.data.message);
                 }else{
                     console.log('服务器内部出错');
                 }
             })
             .catch((err)=>{
                 console.error(err);
             })
          
      },
    //   发表评论
    send(){
        if(this.content.length===0){
            this.$toast('请输入内容');
            return;

        }
        let url = 'postcomment/'+this.id;
        this.axios
            .post(url,'content='+this.content)
            .then((response)=>{
                if(response.status===200 && response.data.status===0){
                    this.comments.unshift({
                        user_name:'匿名用户',
                        add_time:new Date(),
                        content:this.content
                    })
                    // 清空文本框
                    this.content='';
                }else{

                }
                this.$toast(response.data.message)
            })
            .catch((err)=>{
                console.error(err);
            })

    },
    loadmore(){
        this.pageindex++;
        this.getcomments();
    }
  }
}
</script>
<style scoped>
/*  评论的样式 */
    .submitcomment {
        text-align: center;
    }
    
    .submitcomment textarea {
        margin-top: 10px;
        padding: 0;
        width: 96%;
        height: 60px;
    }
    
    .submitcomment button {
        width: 96%;
    }
    
    .comment .title {
        border-top: 1px solid rgba(92, 92, 92, 0.4);
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
        margin: 20px 0 0 0;
        vertical-align: middle;
        padding: 10px 0;
    }
    
    .item {
        padding: 15px 10px;
        border-bottom: 1px solid rgba(92, 92, 92, 0.4);
    }
    
    .item div {
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
    }
    
    .item span {
        font-size: 15px;
    }
    
    .item .user {
        color: skyblue;
    }
    
    .more {
        margin: 10px 0;
        text-align: center;
    }
    
    .more>button {
        width: 96%;
    }
</style>

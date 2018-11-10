<template>

        <div class="Content-Main">
            <form  action="" method="post" class="form-userInfo">
                <h1>玩家信息</h1>
                <!--<span class="text1">游戏信息：</span>-->
                <p>
                <div class="fileInputContainer"style="display: table-cell">
                <img  :src="imgUrl"style="padding: 12px 12px 12px 181px;">
                    <!--<input class="fileInput" id="" type="file" name="">-->
                </div>
                <label>
                    <span>名字:</span>
                    <input type="text"  v-model="personname" name="name" placeholder="">
                </label>
                <!--<label class="Main-sex">-->
                    <!--<span>sex:</span>-->
                    <!--<input type="checkbox" class="man">男-->
                    <!--<input type="checkbox" class="women">女-->
                <!--</label>-->
                <label>
                    <span>排名:</span>
                    <input type="email" v-model="rank_tier" name="rank" placeholder="">
                </label>
                <label>
                    <span> 单挑排名:</span>
                    <input type="text" v-model="solo_competitive_rank" name="solo_rank" placeholder="">
                </label>
                <!--<label>-->
                    <!--<span>Message:</span>-->
                    <!--<textarea id="message" name="message" placeholder=""></textarea>-->
                <!--</label>-->
                <label>
                    <span>steamId:</span>
                    <input type="email" v-model="steamid" name="steamId" placeholder="">
                </label>
                <!--<label>-->
                    <!--<input type="button" class="button" value="提交">-->
                <!--</label>-->
            </form>
        </div>


</template>

<script>
    export default {
        name: "PlayerInfo",
        data() {
            return {
                imgUrl: null,
                inputId:null,
                steamid:null,
                personname:null,
                rank_tier:null,
                solo_competitive_rank: null

            };
        },
        watch: {
            // 方法1
            '$route' (to, from) {

                //监听路由是否变化
                if(this.$route.query.inputId){// 判断传递值的变化
                    //获取文章数据
                    this.inputId = this.$route.query.inputId;
                    console.log(this.$route.query.inputId);
                    this.getplayerData();

                }
            }
        },
        inject:  ['reload'],
        methods: {
getplayerData(){
    console.log(this.inputId);
    this.$http.get('https://api.opendota.com/api/players/'+this.inputId, {})
        .then((response) => {
             console.log(response.data);
            this.imgUrl=response.data.profile.avatarfull;
            this.steamid=response.data.profile.steamid;
            this.personname=response.data.profile.personaname;
            this.rank_tier=response.data.rank_tier;
            this.solo_competitive_rank=response.data.solo_competitive_rank;
            console.log( this.imgUrl);
            console.log(response);
            //  Vue.set(this.tabledata1,response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
}
        } ,
        mounted:function(){

        },
        created() {

            this.inputId = this.$route.query.inputId;
            this.getplayerData();
            console.log( this.inputId );

        },
    }

</script>

<style scoped>
    .Content-Main{
        max-width: 500px;
        margin: auto;
        border: none;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        font: 12px "Helvetica Neue", Helvetica, Arial, sans-serif;
        text-shadow: 1px 1px 1px #444;
        color: #D3D3D3;
        background: #555;
    }
    .Content-Main h1{
        padding: 8px 0px 40px 10px;
        display: block;
        border-bottom: 1px solid #444;
    }
    .text1{
        margin-left: 3px;
    }
    .Content-Main label{
        margin: 0px 0px 5px;
        display: block;
    }
    .fileInputContainer{
        height: 99px;
        width: 99px;
        margin: 20px 20px 20px 20px ;
        border: none;
        /*background: url("img/Example.jpg");*/
        overflow: hidden;
        position: relative;
    }
    .fileInput{
        height: 106px;
        border: none;
        font-size: 300px;
        opacity: 0;
        filter:alpha(opacity=0);
        cursor: pointer;
        position: absolute;
    }
    .Content-Main label>span{
        width: 20%;
        float: left;
        text-align: right;
        padding-right: 10px;
        margin-top: 10px;
        font-weight: bold;
    }
    .Main-sex{
        padding-right: 13px;
        padding-bottom: 13px;
        font-weight: bold;
        line-height: 4px;
    }
    .Main-sex input[type=checkbox]{
        margin-top:6px;
        vertical-align:middle;
    }
    .Content-Main input[type="text"],.Content-Main input[type="email"],.Content-Main textarea{
        height: 25px;
        width: 70%;
        line-height: 15px;
        padding: 5px 0px 5px 5px;
        margin-bottom: 16px;
        margin-right: 6px;
        margin-top: 2px;
        border: none;
        border-radius:2px;
        -webkit-border-radius:2px;
        -moz-border-radius:2px;
        outline: 0 none;
        background:  #DFDFDF;
        color: #525252;
    }
    .Content-Main textarea{
        height: 100px;
        width: 70%;
        padding: 5px 0px 0px 5px;
    }
    .Content-Main .button{
        padding: 8px 24px 8px 24px;
        margin-bottom: 8px;
        border: none;
        border-radius: 4px;
        -moz-border-radius: 4px;
        -webkit-border-radius: 4px;
        font-weight: bold;
        text-shadow: 1px 1px 1px #FFE477;
        box-shadow: 1px 1px 1px  #3D3D3D;
        -moz-box-shadow: 1px 1px 1px  #3D3D3D;
        -webkit-box-shadow: 1px 1px 1px  #3D3D3D;
        color: #585858;
        background: #f6ff0a;
    }
    .Content-Main .button:hover{
        color:  #333;
        background-color:  #EBEBEB ;
    }
</style>
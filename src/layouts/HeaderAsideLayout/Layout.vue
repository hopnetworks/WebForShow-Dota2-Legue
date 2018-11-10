<template>
  <div class="app-wrapper" >

    <div class="main-container">

      <nav-bar></nav-bar>
        <div class="maxtopmainbar">
            <div style="width:100%; ;height:160px;background-position: center;background: no-repeat"
                 v-bind:style="{background:'url(' + imgList[0].idView + ')'} "
            >
                <!--<img src="../../assets/carousel1.png"/>-->
            </div>

            <div style="position: absolute;top:19px;width:100%;display: table;height: 130px;">
                <div style="margin-left: auto;margin-right: auto;position: relative;text-align: center;width:1080px;padding-left:20px;">

                    <div style="position: absolute;top:40px;left:20px;text-align: left;font-size: 28px;color:#fff;font-weight: 500;width:450px;">
                       联赛数据
        </div></div></div><!--

      <div class="block">
        <span class="demonstration"></span>
        <el-carousel height="100px">
          <el-carousel-item v-for="item in imgList" :key="item"style="display: table-cell">
            <el-row>
            <el-col :span="24"><img ref="50" :src="item.idView" style="width:100%; height:500px;padding: 0px 0px 150px 0px;"/></el-col>
            </el-row>
            <!--<h3>{{ item }}</h3>-->
          <!--</el-carousel-item>-->
        <!--</el-carousel>-->
      </div>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { NavBar, AppMain ,carousel} from './components';

export default {
  name: 'layout',
  components: {
    NavBar,
    AppMain,
      carousel,
  },
    data() {
        return{
            // 图片需要引入, 否则无法显示
            imgList: [
                // url(//cdn.max-c.com/image/back_new_2.jpg)
                {id: 0, idView: require('../../assets/backgroudNavBar.png')},
                // {id: 1, name: '', idView: require('../../assets/carousel1.png')},
                // {id: 2, name: '', idView: require('../../assets/carousel1.png')}

            ]
        }
    }
};
</script>

<style lang="scss" scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }
.img{
    height: -webkit-fill-available;

}
  .el-carousel__item:nth-child(2n) {

    background-size:contain;
    /*background-position:110% 101%;*/

    background-color: #99a9bf;
    /*background: url('../../assets/carousel1.png')top center no-repeat;*/
    height: 100%;
    width: 100%;
    display: table-cell
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;display: table-cell

  }
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  &:after {
    content: "";
    display: table;
    clear: both;
  }
}

.main-container {
  min-height: 100vh;
  transition: margin-left 0.28s;
  //margin-left: 256px;
  background-color:#303133;
}
  .maxtopmainbar {
      width: 100%;
      min-width: 1100px;
      height: 150px;
      margin-right: auto;
      margin-left: auto;
      position: relative;
  }
</style>

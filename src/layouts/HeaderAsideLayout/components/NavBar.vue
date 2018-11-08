<template>
  <el-menu class="navbar" mode="horizontal" style="background-color:#1c2635;border-bottom:coral">
  <div class="header" style="color: #bbb">
      <div class="logo">
        <i class="back"></i>
      </div>
      <div class="tabs">
        <div class="item">
          <router-link to="/1">首页</router-link>
        </div>
        <div class="item">
          <router-link to="/Analysis">比赛记录</router-link>
        </div>
        <div class="item"style="width:120px;" >
          <router-link to="/rank">队伍积分排行</router-link>
        </div>
        <div class="item">
          <router-link to="/playerrank">玩家排行</router-link>
        </div>
      </div>
      <div to="/user" class="user" @click="$router.push('/user')">
        <i class="icon icon-user"></i>
      </div>
    </div>
    <div class="user-profile-container" trigger="click"style=" color:#ecc8c8;">
      <div class="user-profile-content">
        <div class="menu-icons">
          <input v-model="inputId" placeholder="请输入玩家ID"style="
  border-radius: 21px;
    background-color: rgb(43, 39, 39);
    padding: 1px;
    height: 28px;
    border: 2px solid rgb(88, 88, 88);
    color: rgb(255, 255, 255);
"@keyup.enter="submit"></input>
          <span class="menu-icon"><i class="el-icon-search icon"   @click="submit"></i></span>
          <!--<span class="menu-icon"><i class="el-icon-message icon"></i></span>-->
          <span class="menu-icon">
            <el-badge is-dot class="item">
              <i class="el-icon-message icon"></i>
            </el-badge>
          </span>
        </div>

        <el-dropdown>
          <div class="user-profile-body">
            <img class="user-avatar" src="https://img.alicdn.com/tfs/TB1ONhloamWBuNjy1XaXXXCbXXa-200-200.png"
         >
            <span class="user-name">Player</span>
          </div>


          <el-dropdown-menu class="user-dropdown" slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>
                我的主页
              </el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>
                个人设置
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item>
              <span @click="logout" style="display:block;">退出</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </el-menu>
</template>

<script>

export default {
  name: 'NavBar',
  methods: {
    logout() {
      console.log('Logout');
    },
      submit(){
          console.log(this.inputId);
          this.$router.push({ path: '/playerInfo', query: { inputId: this.inputId }})

      }
  },
    data() {
        return {
           inputId: null,
        };
    },
};
</script>

<style lang="scss" scoped>
.router-link-active{
      font-weight: 700;
      color: #ecc8c8!important;
      // border-bottom: 3px solid #fff;
      }
 .header {
    position :absolute;
    width :60%;
    height :56px;
    color: #303133;
    display :flex;
    line-height: 65px;
   // background: #1c2635;
    z-index :2;
    }
    .tabs{
          width :60%;
          display :flex;
          font-size :14px;
          .item{
            flex: 1;
            text-align :center;
              height :56px;
              color: #ecc8c8;
              display: inline-block;
              box-sizing :border-box;
              }
              }
.navbar {
  height: 64px;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .user-profile-container {
    position: absolute;
    right: 0px;
    cursor: pointer;
    .user-profile-content {
      display: flex;
      padding: 20px 0;
    }
    .menu-icons {
      display: flex;
      align-items: center;
      .menu-icon {
        padding: 0 12px;
        .icon {
          display: inline-block;
          font-size: 18px;
          text-align: center;
        }
      }
    }
    .user-profile-body {
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding-right: 14px;
    }
    .user-avatar {
      width: 24px;
      height: 24px;
      margin: 0 8px 0 12px;
      border-radius: 4px;
    }
    .user-name {
      color: rgba(0,0,0,.65);
    }
    .user-department {
      font-size: 12px;
      color: rgba(102, 102, 102, 0.65);
    }
    .el-icon-caret-bottom {
      position: absolute;
      right: 0;
      top: 13px;
      font-size: 12px;
    }
  }
}
>>>.el-input__inner{
    -webkit-appearance: none;
    background-color: #2f2a2a;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #bdc5d8;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: 0;
    padding: 0 15px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
  }
</style>


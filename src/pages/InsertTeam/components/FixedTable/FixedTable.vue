<template>

  <div className="fixed-table">
    <basic-container>

      <el-table
      :data="tabledata"

      style="width:100%"
      height="500px">
        <el-table-column
          fixed
          prop="teamName"
          label="队伍名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="gameSum"
          label="队伍比赛数"
          width="120">
        </el-table-column>
        <el-table-column
          prop="integration"
          label="队伍积分"
          width="120">
        </el-table-column>

     <el-table-column label="操作"  >
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">添加选手</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>

      </el-table>
    </basic-container>
      <!--<div>{{'parent data : ' + tabledata}}</div>-->
  </div>
</template>

<script>
import BasicContainer from '@vue-materials/basic-container'
import axios from 'axios'
import VueAxios from 'vue-axios'
//Vue.prototype.$http = axios
import Vue from 'vue';
Vue.prototype.$http = axios;

  export default {
  components: { BasicContainer },
  name: 'FixedTable',
      template: '<div>{{tabledata}}</div>',
      props:

         [ 'tabledata'
          ],
  data() {
    return {
       // tableData: [
     // ]
    }
  },
      watch: {
          name(tabledata){
              this.tabledata = tabledata ;
          },

          tabledata(newValue, oldValue) {//普通的watch监听
              console.log("a: " + newValue, oldValue);
          }
      },
  methods: {
      getTeamData(){
          axios.get('http://localhost:8080/findallteam', {

          })
              .then((response) => {
                  // console.log(response.data);
                  console.log(response.data);

                  this.tabledata=response.data;
              })
              .catch(function (error) {
                  console.log(error);
              });

      },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },

  // mounted:function(){
  //  //this.getTeamData();
  // },


}

</script>

<style>
  .fixed-table {

  }
</style>

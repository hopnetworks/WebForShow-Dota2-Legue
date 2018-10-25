<template>

  <div className="fixed-table">
    <basic-container>

      <el-table
              :data="tabledata"
              style="width:100%"
              height="500px">
        <el-table-column
                fixed
                prop="matchId"
                label="比赛ID"
                width="150">
        </el-table-column>
        <el-table-column
                prop="duration"
                label="比赛时间"
                width="120">
        </el-table-column>
        <el-table-column
                prop="first_blood_time"
                label="一血时间"
                width="120">
        </el-table-column>
        <el-table-column
                prop="winteam"
                label="胜利阵营"
                width="120">
        </el-table-column>
        <el-table-column label="操作"  >
          <template slot-scope="scope">
            <!--<el-button-->
            <!--size="mini"-->
            <!--@click="handleEdit(scope.$index, scope.row)">添加选手</el-button>-->
            <el-button
                    size="mini"
                    type="primary"
                    @click="handleDelete(scope.$index, scope.row)">查看</el-button>
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
      components: {BasicContainer},
      name: 'FixedTable',
      data() {
          return {
              tabledata: []
          }
      },
      methods: {

          handleEdit(index, row) {
              console.log(index, row);
          },
          handleDelete(index, row) {
              console.log(index, row);
          }
      },
      mounted: function () {

          axios.get('http://localhost:8080/findallmatch', {})
              .then((response) => {
                  // console.log(response.data);
                  console.log(response.data);
                  this.tabledata = response.data;
                  console.log(this.tabledata);
                  //  Vue.set(this.tabledata1,response.data)
              })
              .catch(function (error) {
                  console.log(error);
              });


      }
  }
</script>

<style>
  .fixed-table {

  }
</style>

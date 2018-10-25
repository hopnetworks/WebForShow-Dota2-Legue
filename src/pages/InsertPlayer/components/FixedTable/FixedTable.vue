<template>

  <div className="fixed-table">
    <basic-container>
        <!--<div> <button>新增队伍</button>-->
        <!--</div>-->
      <el-table
      :data="tableData"
      style="width: 100%"
      height="500px">
        <el-table-column
          fixed
          prop="teamName"
          label="选手Steam32位Id"
          width="150">
        </el-table-column>
        <el-table-column
          prop="gameSum"
          label="选手"
          width="120">
        </el-table-column>
        <el-table-column
          prop="killsSum"
          label="选手击杀总数"
          width="120">
        </el-table-column>
     <el-table-column label="操作" width="180" fixed="right">
          <template slot-scope="scope">
            <!--<el-button-->
              <!--size="mini"-->
              <!--@click="handleEdit(scope.$index, scope.row)">添加选手</el-button>-->
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除该选手</el-button>
          </template>
        </el-table-column>

      </el-table>
    </basic-container>
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
  data() {
    return {
        tableData: [
      ]
    }
  },
  methods: {
      getTeamData(){
          axios.get('http://localhost:8080/findbyteamid', {

          })
              .then((response) => {
                  // console.log(response.data);
                  console.log(response.data);

                  this.tableData=response.data;
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

  mounted:function(){

this.getTeamData();
  },


}

</script>

<style>
  .fixed-table {

  }
</style>

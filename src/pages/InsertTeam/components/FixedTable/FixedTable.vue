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

import Vue from 'vue';


  export default {
  components: { BasicContainer },

  name: 'FixedTable',
      props:
         [ 'tabledata'
          ],
      inject:  ['reload'],
  // data() {
  //   return {
  //      // tableData: [
  //    // ]
  //   }
  // },
  //     computed: {
  //         tabledata() {
  //             return this.tabledata
  //         }
  //         },

      // watch: {
      //
      //     tabledata: function (val) {
      //             this. tabledata(val)
      //         },
      //
      //     tabledata(newValue, oldValue) {//普通的watch监听
      //         console.log("a: " + newValue, oldValue);
      //     }
      // },
  methods: {

    handleEdit(index, row) {
      console.log(index, row);
      //  path: '/insertteam'
        this.$router.push({ path: '/insertplayer', query: { team_id: row.teamId }})



    },
      handleDelete(index, row) {
          let params = new URLSearchParams();
          params.append('teamId',row.teamId);
          console.log(row.teamId);
          this.$http.post('https://ai.hopnetwork.com:8001/deleteteam', params,{
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
              }
          })
              .then((response) => {
                  // console.log(response.data);
                  console.log(response.data);
           this.reload();
                  //  this.$options.FixedTable.reload();
                  // that.dialogVisible=false;
                  // this.tableData3=response.data;
              })
              .catch(function (error) {
                  console.log(error);
              });


      }
  },

  mounted:function(){
   //this.tabledata=this.tabledata;
  },


}

</script>

<style>
  .fixed-table {

  }
</style>

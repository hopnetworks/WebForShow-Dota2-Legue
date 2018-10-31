<template>

  <div className="fixed-table">
    <basic-container>
        <!--<div> <button>新增队伍</button>-->
        <!--</div>-->
      <el-table
      :data="tabledata"
      style="width: 100%"
      height="500px">
        <el-table-column
          fixed
          prop="accountId"
          label="选手Steam32位Id"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="选手"
          width="120">
        </el-table-column>
        <el-table-column
          prop="killsSum"
          label="选手击杀总数"
          width="120">
        </el-table-column>
     <el-table-column label="操作" width="180" >
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



import Vue from 'vue';


  export default {
  components: { BasicContainer },
  name: 'FixedTable',
      props:
          [ 'tabledata'
          ],
      inject:  ['reload'],
  data() {

    return {
        teamId:''
    }
  },

  methods: {
      getTeamData(){


      },
    handleEdit(index, row) {

      console.log(index, row);
    },
      handleDelete(index, row) {
          let params = new URLSearchParams();
          params.append('accountId',row.accountId);
          console.log(row.teamId);
          this.$http.post('https://ai.hopnetwork.com:8001/deleteplayer', params,{
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

//this.getTeamData();
  },


}

</script>

<style>
  .fixed-table {

  }
</style>

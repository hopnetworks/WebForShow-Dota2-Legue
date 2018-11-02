<template>
  <div id="matchpage" className="fixed-table">
    <basic-container style="width:100%;color:#f0f9eb;
          background-color: #303133">
      <el-table
              :header-cell-style="{ 'background-color':'#282733',color:'#ffffff'}"
              :data="tabledata"
              :row-style="{background:'#303133',color:'#4efd1ffa'}"
              @row-click="handleShow"
              stripe>
        <el-table-column
                fixed
                prop="matchId"
                label="比赛ID"
                @click="handleShow(scope.$index, scope.row)">
        </el-table-column>
        <el-table-column
                prop="duration"
                label="持续时间"
                sortable
                >
        </el-table-column>
        <el-table-column
                prop="first_blood_time"
                label="一血时间"
        >
        </el-table-column>
          <!--v-if="tabledata.radiant_win ==true"-->
        <el-table-column label="胜利阵营"  >
            <template slot-scope="scope">
                <p v-if="scope.row.radiant_win ==true">
                    天辉
                </p>
                <p v-else>
                    夜魇
                </p>
            </template>
                <!--prop="winteam"-->
                <!--label="胜利阵营"-->
                <!--width="120"-->
        <!--value="天辉">-->
        </el-table-column>

        <el-table-column label="胜利队伍" prop="win_team_name" >
          <template  prop="win_team_name">
            <!--<el-button-->
            <!--size="mini"-->
            <!--@click="handleEdit(scope.$index, scope.row)">添加选手</el-button>-->
            <!--<el-button-->
                    <!--size="mini"-->
                    <!--type="primary"-->
                    <!--@click="handleDelete(scope.$index, scope.row)">查看</el-button>-->
          </template>
        </el-table-column>

      </el-table>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination
                    style="padding: 15px 5px;"
                    small
                    width="100%"
                    background
                    layout="prev, pager, next"
                    :total="1000">
            </el-pagination>
        </div>
    </basic-container>
    <!--<div>{{'parent data : ' + tabledata}}</div>-->
  </div>
</template>


<script>
import BasicContainer from '@vue-materials/basic-container'

import VueAxios from 'vue-axios'
//Vue.prototype.$http = axios
import Vue from 'vue';


  export default {
      components: {BasicContainer},
      name: 'FixedTable',
      data() {
          return {
              tabledata: [

              ]
          }
      },
      methods: {
          tableRowClassName(row) {

                  return 'tableRowClassName';

          },

          handleEdit(index, row) {
              console.log(index, row);
          },
          handleShow(row) { console.log( row);
              this.$router.push({ path: '/matchdetial', query: { match_id: row.matchId }})


          }
      },
      created: function () {

          this.$http.get('https://ai.hopnetwork.com:8001/findallmatch', {})
              .then((response) => {
                  // console.log(response.data);
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

<style scoped>
  .fixed-table {
      background: linear-gradient(#55ff61, #3358aa);

      font-size: 17px;
  }
  >>>.el-table{
      padding:0;
      font-size: 1px;
      border-bottom: 0;
  }
  >>>.el-table tr th{
      padding: 1px 0px 1px 42px;
      /*background-color: #303133;*/
      color: aliceblue;

  }
  >>>.el-table td{
    padding: 1px 0px 1px 42px;

   }


  .el-table-column{
      background:#f0f9eb ;
  }
  .el-table.tableRowClassName{
      background:#f0f9eb ;
  }
    .el-pagination{
        text-align: center;
    }


  .el-table--striped >>>.el-table__body tr.el-table__row--striped td,.el-table__body tr.hover-row td{
    background: #23222e;
  }
  .el-table--striped >>>.el-table__body tr.hover-row td{
      background: #2c2c42;
  }


  /*>>> .el-table--striped{*/
      /*background-color: #041425;*/

  /*}*/
</style>
<style >
   .el-table tr th{
        padding: 1px 0px 1px 42px;
        /*background-color: #303133;*/
        color: aliceblue;

    }
 .el-table td{
        padding: 1px 0px 1px 42px;

    }
    .el-table--striped .el-table__body tr.el-table__row--striped td,.el-table__body tr.hover-row td{
        background: #23222e;
    }
    .el-table--striped .el-table__body tr.hover-row td{
        background: #2c2c42;
    }
  .el-table tr th{
       padding: 1px 0px 1px 42px;
       /*background-color: #303133;*/
       color: aliceblue;

   }
  .el-table{
       padding:0;
       font-size: 1px;
       border-bottom: 0;
   }
   .el-table.cell{
   line-height:23px;
   }

</style>
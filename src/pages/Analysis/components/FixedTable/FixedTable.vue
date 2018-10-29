<template>

  <div className="fixed-table">
    <basic-container>

      <el-table
              :data="tabledata"
              style="width:100%"
              stripe
              @row-click="handleShow">
        <el-table-column
                type="button"
                fixed
                prop="matchId"
                label="比赛ID"
                width="150"
                @click="handleShow(scope.$index, scope.row)">
        </el-table-column>
        <el-table-column
                prop="duration"
                label="持续时间"
                width="120">
        </el-table-column>
        <el-table-column
                prop="first_blood_time"
                label="一血时间"
                width="120">
        </el-table-column>
          <!--v-if="tabledata.radiant_win ==true"-->
        <el-table-column label="胜利阵营"  width="120">
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
                  { winteam:'',}
              ]
          }
      },
      methods: {

          handleEdit(index, row) {
              console.log(index, row);
          },
          handleShow(row) { console.log( row);
              this.$router.push({ path: '/matchdetial', query: { match_id: row.matchId }})


          }
      },
      mounted: function () {

          this.$http.get('http://localhost:8001/findallmatch', {})
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

<style>
  .fixed-table {

  }
</style>

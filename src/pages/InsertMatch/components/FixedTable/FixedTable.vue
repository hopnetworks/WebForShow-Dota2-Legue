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
      props:
         [ 'tabledata'
          ],
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

      inject:  ['reload'],

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

    handleDelete(index, row) {
        let params = new URLSearchParams();
        params.append('matchId',row.matchId);
      console.log(row.matchId);
        axios.post('http://localhost:8080//deletematch', params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                // console.log(response.data);
                console.log(response.data);
          //   this.$router.replace({
          //         path: '/empty',
           //    })
//then replace your route (with same component)
          //    this.$router.replace({
           //         path: '/insertteam',
           //     })
               // this.$router.push({ path: '/empty' })
              //  this.$router.push({ path: '/insertteam' })

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
   this.getTeamData();
  },


}

</script>

<style>
  .fixed-table {

  }
</style>

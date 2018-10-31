<template>

<div className="fixed-table">
  <basic-container>

    <el-table
            :data="tabledata"
            style="width:100%"
            stripe

            @row-click="handleShow">
      <el-table-column
             href=""
              type="button"
              fixed
              prop="teamName"
              label="队伍名"
              width="150"
           @click="handleShow(scope.$index, scope.row)">
      </el-table-column>
      <el-table-column
              prop="gameSum"
              label="比赛数"
              width="120">
      </el-table-column>
      <el-table-column
              prop="integration"
              label="队伍积分"
              width="120">
      </el-table-column>

      <el-table-column  >
        <template slot-scope="scope">
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
            handleShow(row) { console.log( row);
                this.$router.push({ path: '/teamdetial', query: { team_id: row.teamId }})


            }
        },
        created: function () {

            axios.get('https://ai.hopnetwork.com:8001/findallteam', {})
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

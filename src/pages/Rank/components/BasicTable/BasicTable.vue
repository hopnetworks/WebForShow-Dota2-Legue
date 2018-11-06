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
             href=""
              type="button"
              fixed
              prop="teamName"
              label="队伍名"

           @click="handleShow(scope.$index, scope.row)">
      </el-table-column>
      <el-table-column
              prop="gameSum"
              label="比赛数"
>
      </el-table-column>
      <el-table-column
              prop="integration"
              label="队伍积分"
           >
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

<style scoped>
    .fixed-table {
        background: linear-gradient(#55ff61, #3358aa);

        font-size: 17px;
    }
    >>>.el-table th.is-leaf{
        border-bottom:0px solid #ebeef5;
    }
    >>>.el-table{
        padding:0;
        font-size: 1px;
        border-bottom:0px solid #ebeef5;
    }
    >>>.el-table tr th{
        padding: 1px 0px 1px 42px;
        /*background-color: #303133;*/
        color: aliceblue;

    }
    >>>.el-table td{
        padding: 10px 10px 7px 42px;
        border-bottom:0px solid #ebeef5;
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

<template>
  <div id="playerpage" className="fixed-table">
    <basic-container style="width:100%;color:#f0f9eb;
          background-color: #303133">
      <el-table
              :header-cell-style="{ 'background-color':'#282733',color:'#ffffff'}"
              :data="tabledata"
              style="width: 100%"
              :row-style="{background:'#303133',color:'#4efd1ffa'}"
              @row-click="handleShow"
              stripe>
      <el-table-column
              type="button"
              fixed
              prop="accountId"
              label="玩家Id"

              @click="handleShow(scope.$index, scope.row)">
      </el-table-column>
      <el-table-column
              prop="personaname"
              label="玩家名"
      >
      </el-table-column>
      <el-table-column
              prop="killsSum"
              label="联赛总击杀"

              sortable
         >
      </el-table-column>

      <el-table-column
              sortable
              prop="assistsSum"
              label="联赛总助攻"
         >
      </el-table-column>
      <el-table-column
              sortable
              prop="deathsSum"
              label="联赛死亡"
       >
      </el-table-column>
      <el-table-column
              sortable
              prop="integration"
              label="联赛总积分"
      >
      </el-table-column>
      <el-table-column  >

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
                this.$router.push({ path: '/playerdetial', query: { team_id: row.teamId }})


            },
            filterHandler(value, row, column) {
                const property = column['property'];
                return row[property] === value;
            }
        },
        created: function () {

            axios.get('https://ai.hopnetwork.com:8001/findallplayer', {})
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
  >>>.el-table__empty-block{

    background: #23222e;
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
    padding: 8px 2px 15px 42px;
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

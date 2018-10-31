<template>
  <div id="app"className="InsertMatch-page">
      <el-button type="primary"style="
    margin-bottom: 10px;
    margin-top: 10px;"
                 @click="dialogVisible = true">添加比赛</el-button>
      <el-dialog @submit.native.prevent title="比赛" :visible.sync="dialogVisible">
          <el-form :model="newForm" ref="newForm">

              <el-form-item label="MatchId" prop="userAccount">
                  <el-input v-model="newForm.matchId"  auto-complete="off" style="width:70%;"></el-input>
              </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
                <el-button type="primary"  @click="onSubmit">确 定</el-button>
    <el-button @click="dialogVisible = false">取 消</el-button>

  </span>
      </el-dialog>
      <FixedTable v-bind:tabledata="tabledata1"/>
      </div>
</template>

<script>
import FixedTable from './components/FixedTable';
import Vue from 'vue';






// var vm=new Vue({
//     el: 'InsertPlayer-page',
// data:{
// }
// });
export default {
  name: 'InsertTeam',
  components: {
    FixedTable,

  },
    data() {
        return {
            tabledata1:[

            ],
            dialogVisible: false,
            newForm:{
               matchId:0
            }
        };
    },
    methods: {
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {
                    done();
                })
                .catch(_ => {});

        },

    onSubmit() {
        let params = new URLSearchParams();
        params.append('matchId', this.newForm.matchId);
         let  that=this;
        console.log(this.newForm.matchId);
        this.$http.post('https://ai.hopnetwork.com:8001/insertmatch', params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
            .then((response) => {
                // console.log(response.data);
                console.log(response.data);
                this.$http.get('https://ai.hopnetwork.com:8001/findallmatch', {

                })
                    .then((response) => {
                        // console.log(response.data);
                        console.log(response.data);
                        this.tabledata1=response.data;
                  // this.tabledata1.duration=   Vue.prototype.timeTurn(response.data.duration);
                        console.log(this.tabledata1);
                        //  Vue.set(this.tabledata1,response.data)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            //  this.$options.FixedTable.reload();
               // that.dialogVisible=false;
               // this.tableData3=response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        this.dialogVisible=false;
    },
       getTeamData(){
//
           this.$http.get('https://ai.hopnetwork.com:8001/findallmatch', {

    })
        .then((response) => {
            // console.log(response.data);
            console.log(response.data);
            this.tabledata1=response.data;
            console.log(this.tabledata1);
          //  Vue.set(this.tabledata1,response.data)
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

<template>
  <div className="InsertTeam-page">
      <el-button type="primary"style="
    margin-bottom: 10px;
    margin-top: 10px;"
                 @click="dialogVisible = true">添加选手</el-button>
      <el-dialog @submit.native.prevent title="队伍" :visible.sync="dialogVisible">
          <el-form :model="newForm" ref="newForm">

              <el-form-item label="选手accountId" prop="userAccount">
                  <el-input v-model="newForm.accountId"  auto-complete="off" style="width:70%;"></el-input>
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



export default {
  name: 'InsertTeam',
  components: {
    FixedTable,
  },
   created() {
       this.teamId = this.$route.query.team_id;
   },
    data() {

        return {
            tabledata1:[
            ],
            dialogVisible: false,
            newForm:{
                accountId:0
            },
            teamId:'',
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
        params.append('teamId', this.teamId);
        params.append('accountId', this.newForm.accountId);
         let  that=this;
        console.log(this.newForm.accountId);
        this.$http.post('http://localhost:8001/insertplayer', params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
            .then((response) => {
                // console.log(response.data);
                console.log(response.data);
            params = new URLSearchParams();
                console.log( this.teamId);
                params.append('teamId', this.teamId);
                this.$http.post('http://localhost:8001/findbyteamid',params, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then((response) => {
                        // console.log(response.data);

                        this.tabledata1=response.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            })
            .catch(function (error) {
                console.log(error);
            });
        this.dialogVisible=false;
    },

},
    mounted:function(){

        let params = new URLSearchParams();
        params.append('teamId', this.teamId);
        console.log( this.teamId);
        this.$http.post('http://localhost:8001/findbyteamid',params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((response) => {
                // console.log(response.data);
                console.log(response.data);
                this.tabledata1=response.data;
            })
            .catch(function (error) {
                console.log(error);
            });

    },


}
function getData(){



}
</script>

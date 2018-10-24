<template>
  <div id="app"className="InsertPlayer-page">
      <el-button type="primary"style="
    margin-bottom: 10px;
    margin-top: 10px;"
                 @click="dialogVisible = true">添加队伍</el-button>
      <el-dialog @submit.native.prevent title="队伍" :visible.sync="dialogVisible">
          <el-form :model="newForm" ref="newForm">

              <el-form-item label="队伍名" prop="userAccount">
                  <el-input v-model="newForm.teamName"  auto-complete="off" style="width:70%;"></el-input>
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
import axios from 'axios'
Vue.prototype.$http = axios;

var vm=new Vue({
    el: 'InsertPlayer-page',
data:{

}

});
export default {
  name: 'InsertTeam',
  components: {
    FixedTable,

  },
    data() {
        return {
            tabledata1:[],
            dialogVisible: false,
            newForm:{
                teamName:""
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
        params.append('teamName', this.newForm.teamName);
         let  that=this;
        console.log(this.newForm.teamName);
        axios.post('http://localhost:8080/insertteam', params,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }

        })
            .then((response) => {
                // console.log(response.data);
                console.log(response.data);
                this.$options.methods.getTeamData();
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
    axios.get('http://localhost:8080/findallteam', {

    })
        .then((response) => {
            // console.log(response.data);
            console.log(response.data);
            this.tabledata1=response.data;
            console.log(this.tabledata1);

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

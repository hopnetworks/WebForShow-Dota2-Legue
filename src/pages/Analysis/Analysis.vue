<template>
  <div className="analysis-page">

      <el-row>
          <el-col :span="24"><div class="grid-content bg-purple-dark"></div>
              <FixedTable style="color: black" />
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
      </el-row>
      <el-row>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
          <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      </el-row>
      </div>
</template>

<script>
import FixedTable from './components/FixedTable';

export default {
  name: 'Analysis',
  components: {
    FixedTable,
  },
};
</script>

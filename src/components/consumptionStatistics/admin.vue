<template>
  <div>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
    >

      <el-table-column
        prop="name"
        label="姓名"
        width="120"
      >
      </el-table-column>
      <el-table-column
        prop="private"
        label="用户类型"
        width="120"
      >
        <template slot-scope="scope">
          {{scope.row.private === 'user' ? '普通用户': '管理员'}}
        </template>
      </el-table-column>
      <el-table-column
        prop="role"
        label="菜单权限"
        width="470"
      >
        <template slot-scope="scope">
             <span
            class="scope"
            v-if="scope.row.private === 'admin'"
            v-for="val in cityOptions"
            :key="val"
          >{{$t('m.' + val )}}</span>
          <span
            class="scope"
            v-if="scope.row.private === 'user'"
            v-for="val in scope.row.role.split(',')"
            :key="val"
          >{{$t('m.' + val )}}</span>
       
        </template>
      </el-table-column>
      <el-table-column label="编辑">
        <template slot-scope="scope">
          <el-button
            @click="edit(scope.row.name)"
            type="primary"
            v-if="canSubmit"
          >
            编辑
          </el-button>
          <el-button
            @click="remove(scope.row.name)"
            type="danger"
            v-if="canSubmit"
          >
            删除
          </el-button>
        </template>

      </el-table-column>
    </el-table>
    <raydialog
      ref="dialog"
      @confirm="submit"
      :title="'编辑联系人'"
    >
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <el-checkbox
          v-for="city in cities"
          :label="city"
          :key="city"
        >{{city}}</el-checkbox>
      </el-checkbox-group>
    </raydialog>
  </div>
</template>
<script>
import { leftMenu } from "../ui/menu";
import raydialog from "../ui/dialog";
const cityOptions = leftMenu.map(val => {
  return val.name;
});
export default {
  components: {
    raydialog
  },
  data() {
    return {
      cityOptions,
      canSubmit: false,
      checkAll: false,
      checkedCities: [],
      cities: cityOptions,
      isIndeterminate: true,
      tableData: []
    };
  },
  created() {
    this.getPageData();
    this.canSubmit = JSON.parse(localStorage.getItem("menus")).type === "admin";
  },
  methods: {
    //
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    //
    getPageData() {
      this.$axios.get("/gucp/admin/view").then(data => {
        this.tableData = data.data.data;
      });
    },
    submit() {},
    edit(name) {
      this.$refs.dialog.open();
    },
    remove(name) {
      this.$axios
        .post("/gucp/deleteUser", {
          name: name
        })
        .then(data => {
          this.getPageData();
          this.$message({
            message: "删除成功",
            type: "success"
          });
        });
    }
  }
};
</script>
<style lang="less" scoped>
.scope {
  background: #2f84d4;
  color: #fff;
  display: inline-block;
  padding: 4px 16px;
  margin: 4px;
  border-radius: 10px;
}
</style>
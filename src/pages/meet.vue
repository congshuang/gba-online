<template>
  <div class="meet">
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"> 不见面</span>
        <el-table
          :data="tableData.rows"
          stripe
          :header-cell-class-name="hearderRowClassName"
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            property="spbm"
            label="审批部门"
            align="center"
            width="300">
            <template slot-scope="scope">
              <span style=" overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;">{{ scope.row.spbm }}</span>
            </template>
          </el-table-column>
          <el-table-column
            property="ywblsxmc"
            label="业务办理事项名称"
            align="center"
            width="500">
            <template slot-scope="scope">
              <span style=" overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;">{{ scope.row.ywblsxmc }}</span>
            </template>
          </el-table-column>
          <el-table-column
            property="qllx"
            label="权力类型"
            align="center"
            width="150">
          </el-table-column>
          <el-table-column
            property="zxbl"
            label="在线办理"
            align="center"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tableData.pagination.pageNo"
          :page-sizes="[5, 10, 20]"
          :page-size="tableData.pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.pagination.total"
          style="float: right;margin-right: 20px;margin-top: 10px;">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"> 见一次面</span>
        <el-table
          :data="tableData.rows"
          stripe
          :header-cell-class-name="hearderRowClassName"
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            align="center"
            width="50">
          </el-table-column>
          <el-table-column
            property="spbm"
            label="审批部门"
            align="center"
            width="300">
            <template slot-scope="scope">
              <span style=" overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;">{{ scope.row.spbm }}</span>
            </template>
          </el-table-column>
          <el-table-column
            property="ywblsxmc"
            label="业务办理事项名称"
            align="center"
            width="500">
            <template slot-scope="scope">
              <span style=" overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;">{{ scope.row.ywblsxmc }}</span>
            </template>
          </el-table-column>
          <el-table-column
            property="qllx"
            label="权力类型"
            align="center"
            width="150">
          </el-table-column>
          <el-table-column
            property="zxbl"
            label="在线办理"
            align="center"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="tableData.pagination.pageNo"
          :page-sizes="[5, 10, 20]"
          :page-size="tableData.pagination.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.pagination.total"
          style="float: right;margin-right: 20px;margin-top: 10px;">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name:'meet',
    data(){
        return{
          tableData: {
            pagination: {
              total: 0,
              pageNo: 1,
              pageSize: 10,
              parentId: 0
            },
            rows: [{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '对保护和开发土地资源、合理利用土地和进行科学技术研究的奖励对保护和开发土地资源、合理利用土地和进行科学技术研究的奖励',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '生产、经营易制毒化学品备案',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '职业病危害项目申报',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '事业单位变更登记',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '对保护和开发土地资源、合理利用土地和进行科学技术研究的奖励',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '测绘项目备案',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '代理记账机构设立审批',
              qllx: '其它',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '对保护和开发土地资源、合理利用土地和进行科学技术研究的奖励',
              qllx: '行政奖励',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '对保护和开发土地资源、合理利用土地和进行科学技术研究的奖励',
              qllx: '行政奖励',
              zxbl: '在线办理',
            },{
              spbm: '张家港市安全生产监督管理局',
              ywblsxmc: '对保护和开发土地资源、合理利用土地和进行科学技术研究的奖励',
              qllx: '其它',
              zxbl: '在线办理',
            }, ]
          },
        }
    },methods:{
      handleSizeChange(val) {
        this.tableData.pagination.pageSize = val;
        this.loadData();
      },
      handleCurrentChange(val) {
        this.tableData.pagination.pageNo = val;
        this.loadData();
      },
      hearderRowClassName({row, rowIndex}){
        return 'success-row';
      },
      loadData(){
        this.tableData.pagination.total = 20;
      }
    },mounted(){
      this.loadData();
    }
  }
</script>

<style>
  .el-table .success-row {
    background-color: #ddefff;
  }
</style>

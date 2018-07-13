<template>
  <div>
    <div class="diy-box">
      <div class="diy-body" v-for="matterpackage in packageList">
        <div class="diy-title">{{matterpackage.name}}</div>
        <div class="diy-content" @click="packageSelected(matterpackage.id)">
          <li v-for="item in matterpackage.content" :title="item">{{item}}</li>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as URL from '../api'

  export default {
    name: 'packagelist',
    data: function () {
      return {
        packageList: [
          {name: '烟花爆竹经营', content: ['户外广告设置的审批', '个体工商户设立登记', '烟花爆竹零售经营许可', '公章（法人印鉴）刻制备案']},
          {name: '危险品经营企业注册办理', content: ['户外广告设置的审批', '个体工商户设立登记', '危险化学品经营许可', '建设项目影响评价报告书审批', '公章（法人印鉴）刻制备案']},
          {name: '医疗器械企业注册办理', content: ['户外广告设置的审批', '个体工商户设立登记', '公章（法人印鉴）刻制备案']},
          {name: '教育培训机构', content: ['户外广告设置的审批', '个体工商户设立登记', '公章（法人印鉴）刻制备案']},
          {
            name: '旅馆经营企业办理',
            content: ['户外广告设置的审批', '个体工商户设立登记', '公众聚集场所开业使用前消防安全检查', '建设项目环境影响评价报告审批（不含如海排污口设置审批', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {
            name: '洗浴企业办理',
            content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '建设项目影响评价报告表审批', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {name: '劳务派遣公司办理', content: ['户外广告设置的审批', '个体工商户设立登记', '经营劳务派遣业务许可', '公章（法人印鉴）刻制备案']},
          {name: '药品经营企业注册办理', content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '公章（法人印鉴）刻制备案']},
          {
            name: '娱乐（歌舞、电子游戏）',
            content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '建设项目影响评价报告表审批', '娱乐场所经营单位设立、改扩建、变更地址', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {
            name: '宠物医院注册办理',
            content: ['户外广告设置的审批', '个体工商户设立登记', '建设项目影响评价报告表审批', '（不含入海排污口设置审批，不含辐射建设项目）', '动物诊疗许可证核发']
          },
          {name: '美容美发企业注册办理', content: ['户外广告设置的审批', '个体工商户设立登记', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']},
          {name: '餐饮（个体户）企业', content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个人独资企业设立登记', '食品经营许可（餐饮服务类）新发']},
          {
            name: '足疗企业注册办理',
            content: ['公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '建设项目环境影响评价报告审批（不含如海排污口设置审', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {name: '盈利性民办学校', content: ['户外广告设置的审批', '个体工商户设立登记', '民办学校的设立审批', '公章（法人印鉴）刻制备案']},
          {
            name: '机动车维修企业注册',
            content: ['户外广告设置的审批', '机动车维修经营许可', '个体工商户设立登记', '建设项目影响环境评价报告表审批（不含入海排污口设置审批，不含辐射建设项目）', '公章（法人印鉴）刻制备案']
          },
          {
            name: '食品销售企业注册办理',
            content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '食品经营许可（食品销售类）', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {
            name: '网吧经营注册办理',
            content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '互联网上网服务营业场所设立', '公章（法人印鉴）刻制备案']
          },
          {
            name: '酒吧注册办理',
            content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '个体工商户设立登记', '建设项目影响环境评价报告表审批（不含入海排污口设置审批，不含辐射建设项目）', '公章（法人印鉴）刻制备案']
          },
          {name: '运输企业注册办理', content: ['个体工商户设立登记', '道路货物运输经营（含普通货运、专用运输、大件运输）', '公章（法人印鉴）刻制备案']},
          {
            name: '出版物零售企业注册办理',
            content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '出版物零售单位设立审批', '个体工商户设立登记', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {
            name: '医疗机构注册办理',
            content: ['户外广告设置的审批', '个体工商户设立登记', '建设项目影响环境评价报告表审批（不含入海排污口设置审批，不含辐射建设项目）', '医疗机构设置审批', '公共场所卫生许可证新发', '公章（法人印鉴）刻制备案']
          },
          {name: '食品生产企业注册办理', content: ['户外广告设置的审批', '公众聚集场地开业，使用前消防安全检查', '食品小作坊登记', '个体工商户设立登记', '公章（法人印鉴）刻制备案']}
        ],
        tempData: null,
      }
    },
    methods: {
      //点击某个套餐
      packageSelected(id) {
        this.$router.push({name: 'serviceapply', params: {packageId: 1}});
      },
      //该方法用于加载套餐列表
      loadMatterPackageList() {
        var that = this;
        this.$axios.get(URL.getMatterPackageList)
          .then((rs) => {
            var data = rs.data;
            if (data.code == '200' && data.flag == 'success') {
              /*console.log(data.content);*/
              var array = [];
              $.each(data.content, (index, value) => {
                var tempArray = [];
                if (!!value.matterChildList && value.matterChildList.length > 0) {
                  $.each(value.matterChildList, (index1, value1) => {
                    tempArray.push(value1.name);
                  });
                }else{
                  tempArray.push('无关联事项业务信息');
                }
                array.push({
                  id: value.id,
                  name: value.name,
                  content: tempArray
                })
              });

              that.packageList = array;
              console.log(array);
            }
          })
      }
    },
    created: function () {
      //加载套餐列表
      this.loadMatterPackageList();
    }
  }

</script>

<style scoped>
  .diy-box {
    width: 100%;
    float: left;
    background-color: white;
    padding: 10px;
    min-height: 394px;
  }

  .diy-body {
    width: 32%;
    height: 210px;
    margin-right:1%;
    margin-bottom: 11px;
    margin-top: 11px;
    cursor: pointer;
    float: left;
  }

  .content li {
    list-style-type: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 5px 0px;
  }

  .diy-title {
    padding-left: 10px;
    padding-top: 5px;
    font-size: large;
    height: 30px;
    background-color: #408ED6;
    background: linear-gradient(-135deg, transparent 25px, #408ED6 0);
  }

  .diy-content {
    font-size: 10px;
    padding: 5px 10px;
    height: 155px;
    background-color: #408ED6;
    background-image: url('../../static/images/pages/packagelist/danger.png');
    background-size: 140px;
    background-position: right bottom;
    background-repeat: no-repeat;
  }

</style>

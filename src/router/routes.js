import NotFoundView from "../components/404.vue";
import main from "../components/layout/main.vue";
import Entry from "../entry.vue";
import pacagelist from '../pages/packagelist.vue';
import serviceapply from '../pages/serviceapply.vue';
import applynotice from '../pages/applynotice.vue';
import netapply from '../pages/netapply.vue';
import flowNatice from '../pages/service/flowNotice.vue';
import flowMessage from '../pages/service/flowMessage.vue';
import flow from '../pages/service/flow.vue';
import flowsucess from '../pages/service/flowsucess.vue';
import paperupload from '../pages/paperupload.vue';
import applyreport from '../pages/applyreport.vue';
import spaceMaster from '../pages/space/spaceMaster.vue';
import myspace from '../pages/space/index.vue';
import dbz from '../pages/space/dbz.vue';
import dpj from '../pages/space/dpj.vue';
import dtj from '../pages/space/dtj.vue';
import spz from '../pages/space/spz.vue';
import sqxzzd from '../pages/space/sqxzzd.vue';
import wdsc from '../pages/space/wdsc.vue';
import zxts from '../pages/space/zxts.vue';
import ybj from '../pages/space/ybj.vue';
import qt from '../pages/space/qt.vue';
import zwyp from '../pages/space/zwyp.vue';
import zzk from '../pages/space/zzk.vue';
import wdxzzd from '../pages/space/wdxzzd.vue';
import wdyy from '../pages/space/wdyy.vue';
import text from '../pages/text.vue';
import spfw from '../pages/meet.vue';
import device from '../pages/device.vue';
import consultation from '../pages/space/consultation.vue';

// Routes
const routes = [
  {
    path: '/404', component: NotFoundView ,name:'404'
  },
  {
    path: '', component: Entry, name:'index',children: [
    {path: '/flow', name: 'flow', component: flow,children:[
      {path: '/', name: 'notice', component: flowNatice},
      {path: '/flow/flowMessage', name: 'flowMessage', component: flowMessage},
      {path: '/flow/flowsucess', name: 'flowsucess', component: flowsucess},
    ]},
    {path: '/spacemaster', name: 'spacemaster', component: spaceMaster,children:[
      {path: '/', name: 'myspace', component: myspace},
      {path: '/spacemaster/bj/dtj', name: 'dtj', component: dtj},
      {path: '/spacemaster/bj/dbz', name: 'dbz', component: dbz},
      {path: '/spacemaster/bj/spz', name: 'spz', component: spz},
      {path: '/spacemaster/bj/dpj', name: 'dpj', component: dpj},
      {path: '/spacemaster/bj/ybj', name: 'ybj', component: ybj},
      {path: '/spacemaster/bj/qt', name: 'qt', component: qt},
      {path: '/spacemaster/xz/sqxzzd', name: 'sqxzzd', component: sqxzzd},
      {path: '/spacemaster/xz/wdxzzd', name: 'wdxzzd', component: wdxzzd},
      {path: '/spacemaster/fwzx/wdyy', name: 'wdyy', component: wdyy},
      {path: '/spacemaster/fwzx/zxts', name: 'zxts', component: zxts},
      {path: '/spacemaster/fwzx/wdsc', name: 'wdsc', component: wdsc},
      {path: '/spacemaster/zlzx/zzk', name: 'zzk', component: zzk},
      {path: '/spacemaster/zlzx/zwyp', name: 'zwyp', component: zwyp},
      {path: '/spacemaster/wyzx', name: 'wyzx', component: consultation},

    ]},
    {path: '/text', component: text ,name:'text'},
    {path: '/wyzx', name: 'wyzx', component: consultation},
    {path: '/spfw', name: 'spfw', component: spfw},
    {path: '/device', name: 'device', component: device},
    {path: '/', name: 'main', component: main,children:[
      {path: '/', name: 'list', component: pacagelist},
      {path: '/serviceapply/:packageId', name: 'serviceapply', component: serviceapply},
      {path: '/applynotice/:packageId/full', name: 'applynotice', component: applynotice},
      {path: '/netapply/:packageId', name: 'netapply', component: netapply},
      {path: '/paperupload/:packageId', name: 'paperupload', component: paperupload},
      {path: '/applyreport/:packageId', name: 'applyreport', component: applyreport}
    ]},
  ]
  },

  {path: '*',redirect: '/404'}
]


export default routes


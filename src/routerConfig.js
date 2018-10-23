// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import HeaderAsideLayout from './layouts/HeaderAsideLayout';

import SideLayout from './layouts/SideLayout';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Analysis';
import InsertTeam from './pages/InsertTeam';
import Rankandrecord from './pages/Rankandrecord';
import Rank from './pages/Rank';
import NotFound from './pages/NotFound';

const routerConfig = [
  {
    path: '/',
    layout: HeaderAsideLayout,
    component: Dashboard,
  },
    {
        path: '/12',
        layout: SideLayout,
        component: Dashboard,
    },
  {
    path: '/table',
    layout: HeaderAsideLayout,
    component: NotFound,
    // children: [
    //   {
    //     path: '/table/basic',
    //     layout: HeaderAsideLayout,
    //     component: NotFound,
    //   },
    //   {
    //     path: '/table/fixed',
    //     layout: HeaderAsideLayout,
    //     component: NotFound,
    //   },
    // ],
  },
  {
    path: '/form',
    layout: HeaderAsideLayout,
    component: NotFound,

  },

  // {
  //   path: '/profile',
  //   layout: HeaderAsideLayout,
  //   component: NotFound,
  //   children: [
  //     {
  //       path: '/profile/success',
  //       layout: HeaderAsideLayout,
  //       component: NotFound,
  //     },
  //     {
  //       path: '/profile/fail',
  //       layout: HeaderAsideLayout,
  //       component: NotFound,
  //     },
  //   ],
  // },
  {
    path: '/Analysis',
    layout: HeaderAsideLayout,
    component: Analysis,
  },
  // {
  //   path: '/result',
  //   layout: HeaderAsideLayout,
  //   component: NotFound,
  //   children: [
  //     {
  //       path: '/result/success',
  //       layout: HeaderAsideLayout,
  //       component: NotFound,
  //     },
  //     {
  //       path: '/result/fail',
  //       layout: HeaderAsideLayout,
  //       component: NotFound,
  //     },
  //   ],
  // },
    {
        path: '/insertteam',
        layout:SideLayout,
        component: InsertTeam,

    },
  {
    path: '/rankandrecord',
    layout: HeaderAsideLayout,
    component: Rankandrecord,
  },
  {
    path: '/rank',
    layout: HeaderAsideLayout,
    component: Rank,
  },
  {
    path: '*',
    layout: HeaderAsideLayout,
    component: NotFound,
  },
];

export default routerConfig;

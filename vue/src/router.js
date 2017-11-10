import Main from './views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '小美健康云平台 - 登录'
    },
    component: resolve => { require(['./views/login.vue'], resolve); }
};

// 404错误页面
export const page404 = {
    path: '/*',
    name: 'error_404',
    meta: {
        title: '小美健康云平台-页面不存在'
    },
    component: resolve => { require(['./views/error_page/404.vue'], resolve); }
};

// 401错误页面
export const page401 = {
    path: '/401',
    meta: {
        title: '小美健康云平台-权限不足'
    },
    name: 'error_401',
    component: resolve => { require(['./views/error_page/401.vue'], resolve); }
};

// 500错误页面
export const page500 = {
    path: '/500',
    meta: {
        title: '小美健康云平台-服务端错误'
    },
    name: 'error_500',
    component: resolve => { require(['./views/error_page/500.vue'], resolve); }
};

export const preview = {
    path: '/preview',
    name: 'preview',
    component: resolve => { require(['./views/form/article-publish/preview.vue'], resolve); }
};

// 锁屏页面
export const locking = {
    path: '/locking',
    name: 'locking',
    component: resolve => { require(['./views/main_components/locking-page.vue'], resolve); }
};

//作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    component: Main,
    children: [
        { path: 'home', title: {i18n: 'home'}, name: 'home_index', component: resolve => { require(['./views/home/home.vue'], resolve); } },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_index', component: resolve => { require(['./views/own-space/own-space.vue'], resolve); } },
        { path: 'order/:order_id', title: '订单详情', name: 'order_info', component: resolve => { require(['./views/advanced-router/component/order-info.vue'], resolve); } },  // 用于展示动态路由
        { path: 'shopping', title: '购物详情', name: 'shopping', component: resolve => { require(['./views/advanced-router/component/shopping-info.vue'], resolve); } },  // 用于展示带参路由
        { path: 'message', title: '消息中心', name: 'message_index', component: resolve => { require(['./views/message/message.vue'], resolve); } }
    ]
};

//作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/member',
        icon: 'person-stalker',
        name: 'member',
        title: '会员管理',
        component: Main,
        children: [
            {
                path: 'memberList',
                icon: 'person-add',
                name: 'memberList',
                title: '会员列表',
                component: resolve => { require(['./views/member/memberList.vue'], resolve); }
            },
            {
                path: 'memberCategory',
                icon: 'person',
                name: 'memberCategory',
                title: '人群分类',
                component: resolve => { require(['./views/member/memberCategory.vue'], resolve); }
            }
        ]
    },
    {
        path: '/health',
        icon: 'heart',
        name: 'health',
        title: '健康管理',
        component: Main,
        children: [
            {
                path: 'healthArchiving',
                icon: 'clipboard',
                name: 'healthArchiving',
                title: '报告归档',
                component: resolve => { require(['./views/health/healthArchiving.vue'], resolve); }
            },
            {
                path: 'healthWarning',
                icon: 'android-warning',
                name: 'healthWarning',
                title: '健康预警',
                component: resolve => { require(['./views/health/healthWarning.vue'], resolve); }
            },
            {
                path: 'picConsult',
                icon: 'images',
                name: 'picConsult',
                title: '图文咨询',
                component: resolve => { require(['./views/health/picConsult.vue'], resolve); }
            },
            {
                path: 'phoneConsult',
                icon: 'iphone',
                name: 'phoneConsult',
                title: '电话咨询',
                component: resolve => { require(['./views/health/phoneConsult.vue'], resolve); }
            }
        ]
    },
    {
        path: '/sms',
        icon: 'chatbox-working',
        name: 'sms',
        title: '短信通知',
        component: Main,
        children: [
            {
                path: 'smsRecord',
                icon: 'chatbubbles',
                name: 'smsRecord',
                title: '通知发送记录',
                component: resolve => { require(['./views/sms/smsRecord.vue'], resolve); }
            },
            {
                path: 'smsCustom',
                icon: 'chatbox',
                name: 'smsCustom',
                title: '自定义通知管理',
                component: resolve => { require(['./views/sms/smsCustom.vue'], resolve); }
            },
            {
                path: 'smsDefault',
                icon: 'chatbubble-working',
                name: 'smsDefault',
                title: '默认通知管理',
                component: resolve => { require(['./views/sms/smsDefault.vue'], resolve); }
            },
            {
                path: 'smsSet',
                icon: 'chatboxes',
                name: 'smsSet',
                title: '短信模板设置',
                component: resolve => { require(['./views/sms/smsSet.vue'], resolve); }
            }
        ]
    },
    {
        path: '/exam',
        icon: 'android-person',
        name: 'exam',
        title: '体检单位',
        component: Main,
        children: [
            {
                path: 'examUnit',
                icon: 'android-contacts',
                name: 'examUnit',
                title: '单位信息维护',
                component: resolve => { require(['./views/exam/examUnit.vue'], resolve); }
            },
            {
                path: 'examStaff',
                icon: 'android-people',
                name: 'examStaff',
                title: '员工健康档案',
                component: resolve => { require(['./views/exam/examStaff.vue'], resolve); }
            },
            {
                path: 'examComplete',
                icon: 'android-happy',
                name: 'examComplete',
                title: '体检完成情况',
                component: resolve => { require(['./views/exam/examComplete.vue'], resolve); }
            },
            {
                path: 'examAnalysis',
                icon: 'ios-list-outline',
                name: 'examAnalysis',
                title: '员工健康分析',
                component: resolve => { require(['./views/exam/examAnalysis.vue'], resolve); }
            }
        ]
    },
    {
        path: '/decision',
        icon: 'android-checkmark-circle',
        name: 'decision',
        title: '决策分析',
        component: Main,
        children: [
            {
                path: 'examReport',
                icon: 'ios-paper',
                name: 'examReport',
                title: '体检量报表',
                component: resolve => { require(['./views/decision/examReport.vue'], resolve); }
            },
            {
                path: 'personReport',
                icon: 'ios-paper-outline',
                name: 'personReport',
                title: '人群特征报表',
                component: resolve => { require(['./views/decision/personReport.vue'], resolve); }
            },
            {
                path: 'anomalyReport',
                icon: 'ios-list',
                name: 'anomalyReport',
                title: '异常项指标报表',
                component: resolve => { require(['./views/decision/anomalyReport.vue'], resolve); }
            },
            {
                path: 'revenueReport',
                icon: 'social-usd',
                name: 'revenueReport',
                title: '套餐收入分析',
                component: resolve => { require(['./views/decision/revenueReport.vue'], resolve); }
            },
            {
                path: 'rateReport',
                icon: 'android-menu',
                name: 'rateReport',
                title: '阳性率统计',
                component: resolve => { require(['./views/decision/rateReport.vue'], resolve); }
            },
            {
                path: 'complaintsReport',
                icon: 'ios-telephone',
                name: 'complaintsReport',
                title: '客户投诉建议',
                component: resolve => { require(['./views/decision/complaintsReport.vue'], resolve); }
            }
        ]
    },
    {
        path: '/depart',
        icon: 'ios-home',
        name: 'depart',
        title: '机构管理',
        component: Main,
        children: [
            {
                path: 'departList',
                icon: 'ios-keypad',
                name: 'departList',
                title: '机构列表',
                component: resolve => { require(['./views/depart/departList.vue'], resolve); }
            },
            {
                path: 'departList',
                icon: 'ios-keypad-outline',
                name: 'departList',
                title: '机构列表',
                component: resolve => { require(['./views/depart/departList.vue'], resolve); }
            }
        ]
    },
    {
        path: '/sys',
        icon: 'android-refresh',
        name: 'sys',
        title: '系统运维',
        component: Main,
        children: [
            {
                path: 'sysLog',
                icon: 'ios-compose',
                name: 'sysLog',
                title: '系统日志',
                component: resolve => { require(['./views/sys/sysLog.vue'], resolve); }
            },
            {
                path: 'smsLog',
                icon: 'ios-compose-outline',
                name: 'smsLog',
                title: '短信发送记录',
                component: resolve => { require(['./views/sys/smsLog.vue'], resolve); }
            }
        ]
    },
    {
        path: '/system',
        icon: 'android-settings',
        name: 'system',
        title: '系统管理',
        component: Main,
        children: [
            {
                path: 'menuManage',
                icon: 'ios-pricetag',
                name: 'menuManage',
                title: '菜单管理',
                component: resolve => { require(['./views/system/menuManage.vue'], resolve); }
            },
            {
                path: 'roleManage',
                icon: 'android-person',
                name: 'roleManage',
                title: '角色管理',
                component: resolve => { require(['./views/system/roleManage.vue'], resolve); }
            },
            {
                path: 'userManage',
                icon: 'android-contacts',
                name: 'userManage',
                title: '用户管理',
                component: resolve => { require(['./views/system/userManage.vue'], resolve); }
            },
            {
                path: 'configManage',
                icon: 'android-apps',
                name: 'configManage',
                title: '系统参数',
                component: resolve => { require(['./views/system/configManage.vue'], resolve); }
            }
        ]
    }
];

//所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    preview,
    locking,
    ...appRouter,
    page500,
    page401,
    page404
];

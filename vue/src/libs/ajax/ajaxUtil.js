import axios from 'axios'
import config from './ajaxConfig'
import iView from 'iview';
import Cookies from 'js-cookie';

axios.defaults.withCredentials=true;

/**
 * 创建实例时设置配置的默认值(设置超时时间为1分钟)
 */
var instance = axios.create({
  baseURL: config.test.BASE_URL,
  timeout: 60000,
  headers: {
    post: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }
})

/**
 * 添加一个请求拦截器
 */
instance.interceptors.request.use(function (config) {
  // 在请求发送之前做一些事
  var accessToken = Cookies.get("u_id") + "_" + Cookies.get("tokenId");
  var currentMenu = window.location.href;
  config.headers.common['AccessToken'] = accessToken;
  config.headers.common['currentMenu'] = currentMenu;
  iView.LoadingBar.start();
  return config
}, function (error) {
  // 当出现请求错误是做一些事
  iView.LoadingBar.error()
  return Promise.reject(error)
})

/**
 * 添加一个返回拦截器
 */
instance.interceptors.response.use(function (response) {
  // 对返回的数据进行一些处理
  if (response.status === 200) {
     if (response.data.code === 1) {
        iView.LoadingBar.finish();
        return response.data.data
     } else {
        iView.Message.error(response.data.message)
     }
  } else {
     iView.Message.error(response.statusText)
  }
  return Promise.reject(null)
}, function (error) {
  // 对返回的错误进行一些处理
  iView.LoadingBar.error()
  return Promise.reject(error)
})

/**
 * get和post请求封装
 */
export default {
  get: function (target) {
    return instance.get(target)
  },
  post: function (target, params = {}) {
    return instance.post(target, params)
  }
}
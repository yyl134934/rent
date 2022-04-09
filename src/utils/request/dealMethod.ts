import { message } from 'antd';
import utils from '@utils/index';
import cookie, {TokenKey} from "../cookie";

function errorCreat (msg: string) {
  const err = new Error(msg)
  errorLog(err)
}

function errorLog (err: any, duration: number = 1, fn = () => { }) {
  if (process.env.NODE_ENV === 'development') {
    console.error(err)
  }
  message.error(err.message, duration, fn)
}


// 处理请求拦截器 data, 并加上验证 headers
export function dealAxiosRequestConfig (config) {
  const preConfig = Object.assign({}, config);
    const token = utils.cookie.getCookie(TokenKey);
    if (token) {
      preConfig.headers = {
        ...preConfig.headers,
        Authorization: `Bearer ${token}`
      };
    } else if(!preConfig.noJweToken){
      return Promise.reject(new Error('身份认证过期'));
    }
  delete preConfig.noJweToken;
  return preConfig;
}

/**
 *
 * @param resData 响应值
 */


export function dealResStatus (resData: any) {
  const { code } = resData
  if (code === undefined) {
    return resData
  } else {
    if (code !== 200) {
      errorCreat(`${resData.message}`)
      return Promise.reject(resData.message)
    }
  }
}

export function dealResError (error: any) {
  if (!error) return
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '请求错误';
        break;
      case 401:
        error.message = '未授权，跳转至登录页面';
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = `请求地址出错: ${error.response.config.url}`;
        break;
      case 408:
        error.message = '请求超时';
        break;
      case 409:
        error.message = '资源冲突';
        break;
      case 500:
        error.message = '服务器内部错误';
        break;
      case 501:
        error.message = '服务未实现';
        break;
      case 502:
        error.message = '网关错误';
        break;
      case 503:
        error.message = '服务不可用';
        break;
      case 504:
        error.message = '网关超时';
        break;
      case 505:
        error.message = 'HTTP版本不受支持';
        break;
      default:
        break
    }
  }
  if (error.response?.status === 401) {
    message.error(error.message, 1, () => {

        cookie.removeCookie(TokenKey);
        window.location.href = "/login";
    })
  } else {
    message.error(error.message, 1)
  }
}

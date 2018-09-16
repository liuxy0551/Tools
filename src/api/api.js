import {
  wxRequest
} from '@/utils/wxRequest';

const host = 'https://h878.cn';

const register = params => wxRequest(params, host+'/group/meal/user/register');
// 用户协议
const getText = () => wxRequest('', host+'/group/meal/other/disclaimer');


export default {
  register,
  getText,
}

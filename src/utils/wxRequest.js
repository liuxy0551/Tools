import wepy from 'wepy';
import tip from './tip';

const wxRequest = async(params = {}, url) => {
  let showLoading = true;
  showLoading = !params._noLoading;
  if(showLoading){
    tip.loading();
    wepy.showNavigationBarLoading()
  }
  let data = params.query || {};
  // data.time = TIMESTAMP;
  let res = await wepy.request({
    url: url,
    method: params.method || 'GET',
    data: data,
    header: { 'Content-Type': 'application/json' },
  });
  if(showLoading){
    tip.loaded();
    wepy.hideNavigationBarLoading()
  }
  return res;
};


module.exports = {
  wxRequest
}

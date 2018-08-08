/**
 * Created by Zing on 2016/6/28.
 */
import { combineReducers } from 'redux';
import homeinfo from './home/rhome';
import homeshow from './home/rhomeshow';
import getdetil from './inquiry/rinquiry';//询盘初始化
import login from './login/rsign';//登录
import getnewlist from './inquiry/rinquirynd';//询盘新增详情
import Rreplys from './reply/rreply';//回复
import zxreduer from './Advisory/radvisory';//咨询
import rsupplier from './Supplier/rsupplier';//供应商
import ysreduer from './Advantage/radvantage';//运价优势
import yssreduer from './Adsertage/radsertage';//服务优势
import yspreduer from './Spfreight/rspfreight';//特种货运价优势
import Remployee from './employee/remployee';//员工
import Rbackplate from './backplate/rbackplate';//回盘
import rpaymentgs from './Paymentg/rPaymentg';//收款保函
import rpaymentgsh from './Paymenth/rPaymenth';//付款保函
import rblacklist from './blacklist/rblacklist';//黑名单曝光
import rmeeting from './meeting/rmeeting';//会议
import rmeetqt from './meetqt/rmeetqt';//会议洽谈
import rmeetxqlist from './meetxqlist/rmeetxqlist';//会议需求列表
import rmeetyslist from './meetyslist/rmeetyslist';//会议优势列表
import rmeetedit from './meetedit/rmeetedit';//会议编辑列表
import rcabs from './cab/rcab';//求仓保函新增
import rcabrs from './cabr/rcabr';//供仓保函新增
import rdeps from './dep/rdep';//定金管理列表
import rregr from './regr/rregr';//充值管理列表
import rcabsck from './cabsck/rcabsck';//舱位黑名单
import rcabPlatform from './cabPlatform/rcabPlatform';//平台舱位
import rcabMy from './cabMy/rcabMy';//我发布的舱位
import rcabg from './cabg/rcabg';//求舱方发布的供舱舱位
import rcabrg from './cabrg/rcabrg';//供舱方发布的供舱舱位
import shareState from './share/rshare';//暂时设定的公共的方法
import tickets from './tickets/rtickets';//优惠卷的方法
import owntkt from './owntkt/rowntkt';//已拥有的优惠卷
import myrelease from './myrelease/rmyrelease';
import { routerReducer } from 'react-router-redux'

var reducer = combineReducers({
    homeinfo: homeinfo,
    homeshow:homeshow,
    login:login,
    getdetil:getdetil,
    getnewlist:getnewlist,
    Rreplys:Rreplys,
    zxreduer:zxreduer,
    rsupplier:rsupplier,
    ysreduer:ysreduer,
    yssreduer:yssreduer,
    yspreduer:yspreduer,
    Remployee:Remployee,
    Rbackplate:Rbackplate,
    rpaymentgs:rpaymentgs,
    rpaymentgsh:rpaymentgsh,
    rblacklist:rblacklist,
    rmeeting:rmeeting,
    rmeetqt:rmeetqt,
    rmeetxqlist:rmeetxqlist,
    rmeetyslist:rmeetyslist,
    rmeetedit:rmeetedit,
    rcabs:rcabs,
    rcabrs:rcabrs,
    rdeps:rdeps,
    rregr:rregr,
    rcabsck:rcabsck,
    routing: routerReducer,
    rcabPlatform:rcabPlatform,
    rcabMy:rcabMy,
    rcabg:rcabg,
    rcabrg:rcabrg,
    tickets:tickets,
    shareState:shareState,
    owntkt:owntkt,
    myrelease:myrelease,
});
export default reducer;
/**
 * Created by Zing on 2016/8/9.
 */
import React,{Component} from 'react';
import Top from './../../components/home/top';
import Amid from './../../components/Advisory/Amid';
import NewL from './../../components/newl/NewL';
import Gotop from './../../components/Galy/Gotop';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  getyg,
  getqx,
  zxshow,
  gethgerxx,
  gethports,
  getindus,
  gethtcdl,
  gethxgmm,
  gethcomps,
  gethxjqy,
  gethcj,
  getprivxp,
  getxyye,
  getxxtxxg,
  getservsall,
    getsfzzrz,
    postsqrz,
    puthgerxxgs,
    puthgerxxyg,
    getnow
} from '../../action/home/ahome';
import {
  getzxfw,
  getzxka,
  getzxjtfw,
  getzxsendto,
  getzxccto,
  getzxjtser,
  getzxaddnew,
  getzxlistc,
  getzxlist,
  getzxlistgd,
  getzxhf,
  getzxxqs,
  putzxhfsc,
  putzxxzsc,
  putzxztgb,
  getzxportszj,
  getzxwtuo,
  getzxportsf,
  getpeoinfozx,
  getgbtsfw,
  getfwys,
  getfwdel,
  getusedelfw,
  getfwkanf,
  postxjgysf,
  getseraf,
  getbzlbz,
  postxjbzz,
  getkanzx
} from '../../action/Advisory/aadvisory';
import {
  getxpdetil,
  getxphplist,
  putxpxqzb,
  putxpxqtg,
  putxpxqzz,
  putxpxqsc,
  getcarrscy,
  getportszj,
  getportszjm,
  getsendto,
  getser,
  getxpeo,
  getports,
  getccto,
  getwtuo,
  getcarrs,
  getportsf,
  getpeohpinfod,
  getxaddhang,
  getxaddfr,
  getxadddg,
  getxaddot,
  getxaddbb,
  getxaddroro,
  gettspuys,
  gettstzx,
  getxaddfcl,
  getxaddair,
  getxaddlcl,
  getxaddreefer,
  getgbts,
  getysdel,
  getusedel,
  postxjgys,
  getfwkan,
  getsera,
  getqydkain,
  getmddkain
} from '../../action/inquiry/ainquiry'
import {
  getlianxir,
  getgysser,
  getgysjtser,
  getgyshfka,
  postgysnew,
  getkansu,
  getusermh,
  getuserlb,
  getzjusr
} from '../../action/Supplier/asupplier';
import {
  getbhfw,
  getbhr,
  getpayr,
  getnewbh,
  getusermhp,
  getuserlbp,
  getzjusrf
} from '../../action/Paymentg/aPaymentg';
import {
  getysfw,
  getysusers,
  getysfbr,
  getyscarrsall,
  getportsyjys,
  getkannoq,
  getkannom,
  getysports,
  gethxportszjs,
  gethotpol,
  gethxportszjms,
  getysportsm,
  getyscarrscy,
  getysline,
  getyscarrs,
  getysqportszj,
  getysmportszjm,
  getysgfwportsf,
  gethotpo,
  postysnew,
  getqydyj,
  getmddyj
} from '../../action/Advantage/aadvantage';
import {
  getyssfw,
  getyssfbr,
  getyssusers,
  getyssjtfww,
  getportsfwys,
  getkanfu,
  getyssjtfw,
  getyssports,
  getysfwzj,
  gethotpof,
  postyssnew,
  getkanf
} from '../../action/Adsertage/aadsertage';
import {
  getyspfw,
  getyspfbr,
  getyspusers,
  getyspportsa,
  getkannoqtz,
  getyspports,
  getysspzj,
  gethotposp,
  postyspnew,
  getkansp
} from '../../action/Spfreight/aspfreight';
import {
  getgyye,
  getgysfw,
  getgysl,
  getckfy,
  getnewqc
} from '../../action/cab/acab';
import {
  getfwlxcwb,
  postcwbfb,
  getcarrscwb,
  getqydkacwb,
  getmddkacwb,
  postcwbfbdg,
  postcwbfbhg,
  postcwbfbfr,
  postcwbfbot,
  getcabyue
} from '../../action/cabMy/acabMy';

class Advisory extends Component {
  render() {
    const { actions,text,zxinfo,shows,getdetil,getnewlist,rsup,pays,ysrdu,yssfw,yssp,cabnew,cabmynew} = this.props;
    return (
      <div className="advisorypage">
          <Gotop />
          <Top actions={actions} text={text} />
          <NewL actions={actions}
                text={text}
                getdetil={getdetil}
                getnewlist={getnewlist}
                zxinfo={zxinfo}
                rsup={rsup}
                pays={pays}
                ysrdu={ysrdu}
                yssfw={yssfw}
                yssp={yssp}
                cabnew={cabnew}
                cabmynew={cabmynew}
          />
          <Amid zxinfo={zxinfo} text={text} actions={actions} shows={shows}/>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    text:state.homeinfo,
    shows:state.homeshow,
    zxinfo:state.zxreduer,
    getdetil:state.getdetil,
    getnewlist:state.getnewlist,
    rsup:state.rsupplier,
    pays:state.rpaymentgs,
    ysrdu:state.ysreduer,
    yssfw:state.yssreduer,
    yssp:state.yspreduer,
    cabnew:state.rcabs,
    cabmynew:state.rcabMy
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({
      puthgerxxgs:puthgerxxgs,
      puthgerxxyg:puthgerxxyg,
      getnow:getnow,
      getyg:getyg,
      getqx:getqx,
      gethgerxx:gethgerxx,
      gethports:gethports,
      getindus:getindus,
      gethtcdl:gethtcdl,
      gethxgmm:gethxgmm,
      gethcomps:gethcomps,
      gethxjqy:gethxjqy,
      gethcj:gethcj,
      getprivxp:getprivxp,
      getxyye:getxyye,
      getxxtxxg:getxxtxxg,
      zxshow:zxshow,
      getzxfw:getzxfw,
      getzxka:getzxka,
      getzxjtfw:getzxjtfw,
      getzxsendto:getzxsendto,
      getzxccto:getzxccto,
      getzxjtser:getzxjtser,
      getzxaddnew:getzxaddnew,
      getzxlistc:getzxlistc,
      getzxlist:getzxlist,
      getzxlistgd:getzxlistgd,
      getzxhf:getzxhf,
      getzxxqs:getzxxqs,
      putzxhfsc:putzxhfsc,
      putzxxzsc:putzxxzsc,
      putzxztgb:putzxztgb,
      getzxportszj:getzxportszj,
      getzxwtuo:getzxwtuo,
      getzxportsf:getzxportsf,
      getpeoinfozx:getpeoinfozx,
      getgbtsfw:getgbtsfw,
      getfwys:getfwys,
      getfwdel:getfwdel,
      getusedelfw:getusedelfw,
      getfwkanf:getfwkanf,
      postxjgysf:postxjgysf,
      getseraf:getseraf,
      getbzlbz:getbzlbz,
      postxjbzz:postxjbzz,
      getkanzx:getkanzx,
      getxpdetil:getxpdetil,
      getxphplist:getxphplist,
      putxpxqzb:putxpxqzb,
      putxpxqtg:putxpxqtg,
      putxpxqzz:putxpxqzz,
      putxpxqsc:putxpxqsc,
      getcarrscy:getcarrscy,
      getportszj:getportszj,
      getportszjm:getportszjm,
      getsendto:getsendto,
      getser:getser,
      getxpeo:getxpeo,
      getports:getports,
      getccto:getccto,
      getwtuo:getwtuo,
      getcarrs:getcarrs,
      getportsf:getportsf,
      getpeohpinfod:getpeohpinfod,
      getxaddhang:getxaddhang,
      getxaddfr:getxaddfr,
      getxadddg:getxadddg,
      getxaddot:getxaddot,
      getxaddbb:getxaddbb,
      getxaddroro:getxaddroro,
      gettspuys:gettspuys,
      gettstzx:gettstzx,
      getxaddfcl:getxaddfcl,
      getxaddair:getxaddair,
      getxaddlcl:getxaddlcl,
      getxaddreefer:getxaddreefer,
      getgbts:getgbts,
      getysdel:getysdel,
      getusedel:getusedel,
      postxjgys:postxjgys,
      getfwkan:getfwkan,
      getsera:getsera,
      getqydkain:getqydkain,
      getmddkain:getmddkain,
      getlianxir:getlianxir,
      getgysser:getgysser,
      getgysjtser:getgysjtser,
      getgyshfka:getgyshfka,
      postgysnew:postgysnew,
      getkansu:getkansu,
      getusermh:getusermh,
      getuserlb:getuserlb,
      getzjusr:getzjusr,
      getbhfw:getbhfw,
      getbhr:getbhr,
      getpayr:getpayr,
      getnewbh:getnewbh,
      getusermhp:getusermhp,
      getuserlbp:getuserlbp,
      getzjusrf:getzjusrf,
      getysfw:getysfw,
      getysusers:getysusers,
      getysfbr:getysfbr,
      getyscarrsall:getyscarrsall,
      getportsyjys:getportsyjys,
      getkannoq:getkannoq,
      getkannom:getkannom,
      getysports:getysports,
      gethxportszjs:gethxportszjs,
      gethotpol:gethotpol,
      gethxportszjms:gethxportszjms,
      getysportsm:getysportsm,
      getyscarrscy:getyscarrscy,
      getysline:getysline,
      getyscarrs:getyscarrs,
      getysqportszj:getysqportszj,
      getysmportszjm:getysmportszjm,
      getysgfwportsf:getysgfwportsf,
      gethotpo:gethotpo,
      postysnew:postysnew,
      getqydyj:getqydyj,
      getmddyj:getmddyj,
      getyssfw:getyssfw,
      getyssfbr:getyssfbr,
      getyssusers:getyssusers,
      getyssjtfww:getyssjtfww,
      getportsfwys:getportsfwys,
      getkanfu:getkanfu,
      getyssjtfw:getyssjtfw,
      getyssports:getyssports,
      getysfwzj:getysfwzj,
      gethotpof:gethotpof,
      postyssnew:postyssnew,
      getkanf:getkanf,
      getyspfw:getyspfw,
      getyspfbr:getyspfbr,
      getyspusers:getyspusers,
      getyspportsa:getyspportsa,
      getkannoqtz:getkannoqtz,
      getyspports:getyspports,
      getysspzj:getysspzj,
      gethotposp:gethotposp,
      postyspnew:postyspnew,
      getkansp:getkansp,
      getgyye:getgyye,
      getgysfw:getgysfw,
      getgysl:getgysl,
      getckfy:getckfy,
      getnewqc:getnewqc,
      getservsall:getservsall,
        getsfzzrz:getsfzzrz,
        postsqrz:postsqrz,
      getfwlxcwb:getfwlxcwb,
      postcwbfb:postcwbfb,
      getcarrscwb:getcarrscwb,
      getqydkacwb:getqydkacwb,
      getmddkacwb:getmddkacwb,
      postcwbfbdg:postcwbfbdg,
      postcwbfbhg:postcwbfbhg,
      postcwbfbfr:postcwbfbfr,
      postcwbfbot:postcwbfbot,
      getcabyue:getcabyue
    },dispatch)
  }
}
Advisory=connect(mapStateToProps,mapDispatchToProps)(Advisory);
module.exports = Advisory;
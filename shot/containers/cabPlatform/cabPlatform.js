/**
 * Created by Chen on 2017/12/05.
 */
import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Top from './../../components/home/top';
import NewL from './../../components/newl/NewL';
import Gotop from './../../components/Galy/Gotop';
import Cabpmid from './../../components/cabPlatform/cabpmid';
import {
  getyg,
  getqx,
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
    postsqrz
} from '../../action/home/ahome';
import {
  getfwlx,
  getkouan,
  getqydka,
  getmddka,
  getcarrsp,
  getcabDisps,
  getcabDisp,
  putcabDispsbuy,
  getcabDepos,
  getnlfwlx
} from '../../action/cabPlatform/acabPlatform';
import {
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
  getxgztc,
  getxpxqch,
  getxpcwb,
  getqydkain,
  getmddkain
} from '../../action/inquiry/ainquiry'
import {
  getzxhf,
  getzxxqs,
  getzxsendto,
  getzxjtser,
  getzxportszj,
  putzxxzsc,
  putzxztgb,
  putzxhfsc,
  getzxfw,
  getzxka,
  getzxjtfw,
  getzxccto,
  getzxwtuo,
  getzxportsf,
  getpeoinfozx,
  getfwys,
  getzxaddnew,
  getgbtsfw,
  getfwdel,
  getusedelfw,
  getseraf,
  postxjgysf,
  getfwkanf,
  getkanzx
} from '../../action/Advisory/aadvisory';
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
  getbhfw,
  getbhr,
  getpayr,
  getnewbh,
  getusermhp,
  getuserlbp,
  getzjusrf
} from '../../action/Paymentg/aPaymentg';
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

class cabPlatform extends Component {
  render() {
    const { actions,text,getdetil,getnewlist,zxinfo,rsup,pays,ysrdu,yssfw,yssp,cabnew,cabmynew,cabnewr} = this.props;
    return (
      <div className="cabpage">
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
        <Cabpmid actions={actions} text={text} cabnewr={cabnewr}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    text:state.homeinfo,
    cabrnew:state.rcabrs,
    getdetil:state.getdetil,
    getnewlist:state.getnewlist,
    zxinfo:state.zxreduer,
    rsup:state.rsupplier,
    pays:state.rpaymentgs,
    ysrdu:state.ysreduer,
    yssfw:state.yssreduer,
    yssp:state.yspreduer,
    cabnew:state.rcabs,
    cabnewr:state.rcabPlatform,
    cabmynew:state.rcabMy
  }
}

function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({
      getyg:getyg,
      getqx:getqx,
      gethports:gethports,
      getindus:getindus,
      getprivxp:getprivxp,
      gethgerxx:gethgerxx,
      gethtcdl:gethtcdl,
      gethxgmm:gethxgmm,
      gethcomps:gethcomps,
      gethxjqy:gethxjqy,
      gethcj:gethcj,
      getxyye:getxyye,
      getxxtxxg:getxxtxxg,
      getfwlx:getfwlx,
      getkouan:getkouan,
      getqydka:getqydka,
      getmddka:getmddka,
      getcarrsp:getcarrsp,
      getcabDisps:getcabDisps,
      getcabDisp:getcabDisp,
      putcabDispsbuy:putcabDispsbuy,
      getcabDepos:getcabDepos,
      getnlfwlx:getnlfwlx,
      getservsall:getservsall,
        getsfzzrz:getsfzzrz,
        postsqrz:postsqrz,
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
      getxgztc:getxgztc,
      getxpxqch:getxpxqch,
      getxpcwb:getxpcwb,
      getqydkain:getqydkain,
      getmddkain:getmddkain,
      getzxhf:getzxhf,
      getzxxqs:getzxxqs,
      getzxsendto:getzxsendto,
      getzxjtser:getzxjtser,
      getzxportszj:getzxportszj,
      putzxxzsc:putzxxzsc,
      putzxztgb:putzxztgb,
      putzxhfsc:putzxhfsc,
      getzxfw:getzxfw,
      getzxka:getzxka,
      getzxjtfw:getzxjtfw,
      getzxccto:getzxccto,
      getzxwtuo:getzxwtuo,
      getzxportsf:getzxportsf,
      getpeoinfozx:getpeoinfozx,
      getfwys:getfwys,
      getzxaddnew:getzxaddnew,
      getgbtsfw:getgbtsfw,
      getfwdel:getfwdel,
      getusedelfw:getusedelfw,
      getseraf:getseraf,
      postxjgysf:postxjgysf,
      getfwkanf:getfwkanf,
      getkanzx:getkanzx,
      getlianxir:getlianxir,
      getgysser:getgysser,
      getgysjtser:getgysjtser,
      getgyshfka:getgyshfka,
      postgysnew:postgysnew,
      getkansu:getkansu,
      getusermh:getusermh,
      getuserlb:getuserlb,
      getzjusr:getzjusr,
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
      getbhfw:getbhfw,
      getbhr:getbhr,
      getpayr:getpayr,
      getnewbh:getnewbh,
      getusermhp:getusermhp,
      getuserlbp:getuserlbp,
      getzjusrf:getzjusrf,
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

cabPlatform=connect(mapStateToProps,mapDispatchToProps)(cabPlatform);
module.exports = cabPlatform;
import React,{Component} from 'react';
import Top from './../../components/home/top';
import Mid from './../../components/home/mid';
import NewL from './../../components/newl/NewL';
import Footinfo from './../../components/login/footinfo';
import Gotop from './../../components/Galy/Gotop';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
  getyg,
  getqx,
  hpshow,
  zxshow,
  hfshow,
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
  getyjuinfo,
  postgysnewyj,
  getyjlist,
  getyjfw,
  getyjsfw,
  getyplist,
  getfwlist,
  getyjsjtfww,
  getyjports,
  getyjportsn,
  getkanzs,
  getkanzsm,
  getyjcarrs,
  getypfw,
  getyjslistgd,
  getyplistgd,
  getyjlistgd,
  getvips,
  getwumaoge,
  gethotjgys,
  getservsall,
  getptyjxq,
  getfwyjxq,
  getsfzzrz,
  postsqrz,
  puthgerxxgs,
  puthgerxxyg,
  getnow
} from '../../action/home/ahome';
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
import {gethpxpxq,gethphpxq,gethpser,gethpka,gethppeos,gethpcarrs,gethpccto,gethpwtuo,gethpcarrscy,gethpportszj,gethpportszjm,gethpsendto,gethphl,gethphf,gethpxj,getpeoinfo,getportshf,gethpxaddhang,getxaddfrhp,getxaddhpdg,getxaddhpot,getxaddhpbb,getxaddhproro,postxjbzh,getbzlbh} from '../../action/backplate/abackplate';
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
import {getpeoinfohf,gethfka,gethfjtfw,gethfccto,gethfwtuo,gethfhfrede,getzxxq,postfshfl,puthfxqhl,gethfsendto,gethfjtser,gethfzjkan,gethfaddnew,gethfportsf} from '../../action/reply/areply';
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
  getcabrxq,
  getgyyer
} from '../../action/cabr/acabr';
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

import {
  getSerLists,
} from '../../action/share/aShare';
class Home extends Component {
  render() {
    const { actions,text,shows,getdetil,getnewlist,bck,zxinfo,replays,rsup,pays,ysrdu,yssfw,yssp,cabnew,cabrnew,cabmynew,publicState} = this.props;
    return (
      <div className="homepage">
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
              publicState={publicState}
        />
        <Mid actions={actions}
             text={text}
             shows={shows}
             getdetil={getdetil}
             getnewlist={getnewlist}
             bck={bck}
             zxinfo={zxinfo}
             replays={replays}
             cabnew={cabnew}
             cabrnew={cabrnew}
        />
        <Footinfo />
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    text:state.homeinfo,
    shows:state.homeshow,
    getdetil:state.getdetil,
    getnewlist:state.getnewlist,
    bck:state.Rbackplate,
    zxinfo:state.zxreduer,
    replays:state.Rreplys,
    rsup:state.rsupplier,
    pays:state.rpaymentgs,
    ysrdu:state.ysreduer,
    yssfw:state.yssreduer,
    yssp:state.yspreduer,
    cabnew:state.rcabs,
    cabrnew:state.rcabrs,
    cabmynew:state.rcabMy,
    publicState:state.shareState
  }
}
function mapDispatchToProps(dispatch){
  return {
    actions:bindActionCreators({
      getSerLists:getSerLists,
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
      getyjuinfo:getyjuinfo,
      postgysnewyj:postgysnewyj,
      getyjlist:getyjlist,
      getyjfw:getyjfw,
      getyjsfw:getyjsfw,
      getyplist:getyplist,
      getfwlist:getfwlist,
      getyjsjtfww:getyjsjtfww,
      getyjports:getyjports,
      getyjportsn:getyjportsn,
      getkanzs:getkanzs,
      getkanzsm:getkanzsm,
      getyjcarrs:getyjcarrs,
      getypfw:getypfw,
      getyjslistgd:getyjslistgd,
      getyplistgd:getyplistgd,
      getyjlistgd:getyjlistgd,
      getvips:getvips,
      getwumaoge:getwumaoge,
      gethotjgys:gethotjgys,
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
      hpshow:hpshow,
      getportshf:getportshf,
      gethpxaddhang:gethpxaddhang,
      getxaddfrhp:getxaddfrhp,
      getxaddhpdg:getxaddhpdg,
      getxaddhpot:getxaddhpot,
      getxaddhpbb:getxaddhpbb,
      getxaddhproro:getxaddhproro,
      postxjbzh:postxjbzh,
      getbzlbh:getbzlbh,
      getpeoinfo:getpeoinfo,
      gethpxpxq:gethpxpxq,
      gethphpxq:gethphpxq,
      gethpser:gethpser,
      gethpka:gethpka,
      gethppeos:gethppeos,
      gethpcarrs:gethpcarrs,
      gethpccto:gethpccto,
      gethpwtuo:gethpwtuo,
      gethpcarrscy:gethpcarrscy,
      gethpportszj:gethpportszj,
      gethpportszjm:gethpportszjm,
      gethpsendto:gethpsendto,
      gethphl:gethphl,
      gethphf:gethphf,
      gethpxj:gethpxj,
      zxshow:zxshow,
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
      hfshow:hfshow,
      getpeoinfohf:getpeoinfohf,
      gethfhfrede:gethfhfrede,
      getzxxq:getzxxq,
      postfshfl:postfshfl,
      puthfxqhl:puthfxqhl,
      gethfsendto:gethfsendto,
      gethfjtser:gethfjtser,
      gethfzjkan:gethfzjkan,
      gethfaddnew:gethfaddnew,
      gethfka:gethfka,
      gethfjtfw:gethfjtfw,
      gethfccto:gethfccto,
      gethfwtuo:gethfwtuo,
      getzxportsf:getzxportsf,
      gethfportsf:gethfportsf,
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
      getcabrxq:getcabrxq,
      getgyyer:getgyyer,
      getservsall:getservsall,
      getptyjxq:getptyjxq,
      getfwyjxq:getfwyjxq,
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
      getcabyue:getcabyue,
      
    },dispatch)
  }
}
Home=connect(mapStateToProps,mapDispatchToProps)(Home);
module.exports = Home;

/**
 * Created by Zing on 2016/8/17.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Addetil extends Component {
  constructor(props) {
    super(props);
    this.handqy=this.handqy.bind(this);
    this.handjy=this.handjy.bind(this);
    this.handleClick=this.handleClick.bind(this);
    this.handqr=this.handqr.bind(this);
    this.hzjdc=this.hzjdc.bind(this);
    this.hyj=this.hyj.bind(this);
    this.hsq=this.hsq.bind(this);
    this.hcw=this.hcw.bind(this);
    this.handvip=this.handvip.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      bz:'',
      zjdc:false,
      yj:false,
      sq:false,
      cw:false,
      nbz:''
    }
  }
  handvip(e){
    let This=this;
    confirm({
      title: '是否确认会员展示',
      content: '会员展示会比普通展示靠前展示',
      onOk() {
        //确认会员展示
        This.props.actions.putvipzs(This.state.userName,This.state.token,This.props.rows.adva);
      },
      onCancel() {}
    });
  }
  hzjdc(){
    this.setState({
      zjdc:!this.state.zjdc
    })
  }
  hyj(){
    this.setState({
      yj:!this.state.yj
    })
  }
  hsq(){
    this.setState({
      sq:!this.state.sq
    })
  }
  hcw(){
    this.setState({
      cw:!this.state.cw
    })
  }
  componentDidMount(){
    let zjdc,yj,sq,cw;
    if(this.props.ysrdu.ysdetl.booking==1){
      zjdc=true;
    }else{
      zjdc=false
    }
    if(this.props.ysrdu.ysdetl.freight==1){
      yj=true;
    }else{
      yj=false
    }
    if(this.props.ysrdu.ysdetl.qing==1){
      sq=true;
    }else{
      sq=false
    }
    if(this.props.ysrdu.ysdetl.shipSpace==1){
      cw=true;
    }else{
      cw=false
    }
    this.setState({
      zjdc:zjdc,
      yj:yj,
      sq:sq,
      cw:cw
    })
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      bz: nextProps.ysrdu.ysdetl.labe,
      nbz:nextProps.ysrdu.ysdetl.inLabe
    })
  }
  handqr(){
    let booking=this.state.zjdc?1:0;
    let freight=this.state.yj?1:0;
    let qing=this.state.sq?1:0;
    let shipSpace=this.state.cw?1:0;
    //修改标注4项
    let labe=this.state.bz==''?this.props.ysrdu.ysdetl.labe:this.state.bz;
    let enab=this.props.ysrdu.ysdetl.enab;
    let inLabe=this.state.nbz==''?this.props.ysrdu.ysdetl.inLabe:this.state.nbz;
    this.props.actions.putysbz(this.state.userName,this.state.token,this.props.rows.adva,labe,booking,freight,qing,shipSpace,enab,inLabe);
    this.props.actions.ysshow(false);
  }
  handleClick(){
    //改变详情动画
    this.props.actions.ysshow(false);
  }
  handqy(){
    //获取启用
    let booking=this.state.zjdc?1:0;
    let freight=this.state.yj?1:0;
    let qing=this.state.sq?1:0;
    let shipSpace=this.state.cw?1:0;
    let labe=this.state.bz==''?this.props.ysrdu.ysdetl.labe:this.state.bz;
    let enab=1;
    let inLabe=this.state.nbz==''?this.props.ysrdu.ysdetl.inLabe:this.state.nbz;
    this.props.actions.putysztbg(this.state.userName,this.state.token,this.props.rows.adva,labe,booking,freight,qing,shipSpace,enab,inLabe);
    this.props.handcb('zt1','启用');
    this.props.actions.ysshow(this.props.ysrdu.isc);
  }
  handjy(){
    //获取禁用
    let booking=this.state.zjdc?1:0;
    let freight=this.state.yj?1:0;
    let qing=this.state.sq?1:0;
    let shipSpace=this.state.cw?1:0;
    let labe=this.state.bz==''?this.props.ysrdu.ysdetl.labe:this.state.bz;
    let enab=0;
    let inLabe=this.state.nbz==''?this.props.ysrdu.ysdetl.inLabe:this.state.nbz;
    this.props.actions.putysztbg(this.state.userName,this.state.token,this.props.rows.adva,labe,booking,freight,qing,shipSpace,enab,inLabe);
    this.props.handcb('zt5','禁用');
    this.props.actions.ysshow(this.props.ysrdu.isc);
  }
  render() {
    return (
      <div className="addet">
        <div className="addet1">
          <div className="addet2">
            <div className="addet3">
              <span>运价优势详情</span>
              {
                (this.state.userid==this.props.ysrdu.ysdetl.user||this.state.userid==this.props.ysrdu.ysdetl.creator)?
                  <ul>
                    <li>
                      <a  href='javascript:void(0);' onClick={this.handleClick}>关闭</a>
                    </li>
                    <li>
                      <a  href='javascript:void(0);' onClick={this.handqr}>确认</a>
                    </li>
                    <li>
                      {
                        this.props.ysrdu.ysdetl.enab==1?<a href='javascript:void(0);' onClick={this.handjy}>禁用</a>
                          :<a href='javascript:void(0);' onClick={this.handqy}>启用</a>
                      }
                    </li>
                    <li className="yjdel1">
                      {
                        this.state.comp>0?
                          this.props.text.priv.admi!=0? <a href='javascript:void(0);' onClick={this.handvip}>会员展示</a>:undefined
                          : <a href='javascript:void(0);' onClick={this.handvip}>会员展示</a>
                      }
                    </li>
                  </ul>:
                  <ul>
                    <li>
                      <a  href='javascript:void(0);' onClick={this.handleClick}>关闭</a>
                    </li>
                  </ul>
              }
            </div>
            <div className="addet4">
              <ul>
                <li>
                  <span className="addsp">服务类型</span>
                  <p className="yjdel4">{this.props.ysrdu.ysdetl.servName}</p>
                </li>
                <li>
                  <span className="addsp">承运商</span>
                  <p className="yjdel4">{this.props.ysrdu.ysdetl.carrName}</p>
                </li>
                <li>
                  <span className="addsp">发布人</span>
                  <p className="yjdel4">{this.props.ysrdu.ysdetl.creatName}</p>
                </li>
                <li>
                  <span className="addsp">接收人</span>
                  <p className="yjdel4">
                    {
                      this.state.comp>0?this.props.ysrdu.ysdetl.userName:this.props.ysrdu.ysdetl.creatName
                    }
                  </p>
                </li>
                <li>
                  <span className="addsp">起运地</span>
                  <p className="yjdel4">{this.props.ysrdu.ysdetl.depaPortName}</p>
                </li>
                <li>
                  <span className="addsp">目的地</span>
                  <p className="yjdel4">{this.props.ysrdu.ysdetl.destPortName}</p>
                </li>
                <li>
                  <span className="addsp">状态</span>
                  <p className="addet5">
                    {
                      this.props.ysrdu.ysdetl.enab==1?"启用":"禁用"
                    }
                  </p>
                </li>
                <li>
                  <span className="addsp">有效期</span>
                  {
                    this.props.ysrdu.ysdetl.isVip==1?
                      <p className="yjdel4">会员展示至{moment(this.props.ysrdu.ysdetl.vipTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
                <li>
                  <span className="addsp"> </span>
                  {
                    this.props.ysrdu.ysdetl.isPlat == 1 ?
                      <p className="yjdel4">平台展示至{moment(this.props.ysrdu.ysdetl.platTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
                <li>
                  <span className="addsp"> </span>
                  {
                    this.props.ysrdu.ysdetl.isPush == 1 ?
                      <p className="yjdel4">已自动推送时间至{moment(this.props.ysrdu.ysdetl.pushTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
              </ul>
            </div>
            <div className="yjdel2">
              <span className="yjdel5">优势明细</span>
              <ul>
                {
                  this.state.zjdc?
                    <li className="yjdel6" onClick={this.hzjdc}>
                      直接订舱
                      <img className="yjdel7" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="yjdel8" onClick={this.hzjdc}>
                      直接订舱
                    </li>
                }
                {
                  this.state.yj?
                    <li className="yjdel6" onClick={this.hyj}>
                      运价
                      <img className="yjdel7" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="yjdel8" onClick={this.hyj}>
                      运价
                    </li>
                }
                {
                  this.state.sq?
                    <li className="yjdel6" onClick={this.hsq}>
                      DDP&nbsp;&nbsp;DDU
                      <img className="yjdel7" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="yjdel8" onClick={this.hsq}>
                      DDP&nbsp;&nbsp;DDU
                    </li>
                }
                {
                  this.state.cw?
                    <li className="yjdel6" onClick={this.hcw}>
                      保障舱位
                      <img className="yjdel7" src={require('../../src/image/yggou.png')} />
                    </li>:
                    <li className="yjdel8" onClick={this.hcw}>
                      保障舱位
                    </li>
                }
              </ul>
              <img className="yjdel9" src={require('../../src/image/ygqx.png')} />
            </div>
            <div className="yjdel3">
              <div className="yjdel10">
                <span className="addsp">外标注</span>
                {
                  (this.state.userid==this.props.ysrdu.ysdetl.user||this.state.userid==this.props.ysrdu.ysdetl.creator)?
                    <textarea
                      value={this.state.bz}
                      maxLength="100"
                      placeholder={this.props.ysrdu.ysdetl.labe=='null'?'':this.props.ysrdu.ysdetl.labe}
                      onChange={(e)=>{return this.setState({bz:e.target.value})}}
                    ></textarea>:<p>{this.props.ysrdu.ysdetl.labe}</p>
                }
              </div>
              {
                this.state.comp>0?
                  <div className="yjdel10">
                    <span className="addsp">内标注</span>
                    {
                      (this.state.userid==this.props.ysrdu.ysdetl.user||this.state.userid==this.props.ysrdu.ysdetl.creator)?
                        <textarea
                          value={this.state.nbz}
                          maxLength="100"
                          placeholder={this.props.ysrdu.ysdetl.inLabe=='null'?'':this.props.ysrdu.ysdetl.inLabe}
                          onChange={(e)=>{return this.setState({nbz:e.target.value})}}
                        ></textarea>:<p>{this.props.ysrdu.ysdetl.inLabe}</p>
                    }
                  </div>
                  :undefined
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * Created by Zing on 2016/8/17.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Adsdetil extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.handqy=this.handqy.bind(this);
    this.handjy=this.handjy.bind(this);
    this.handqr=this.handqr.bind(this);
    this.handvip=this.handvip.bind(this);
    this.state={
      userName : sessionStorage.getItem("SESSIONUSERACC"),
      token : sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      bz:'',
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
        This.props.actions.putvipzs(This.state.userName,This.state.token,This.props.rows.cont);
      },
      onCancel() {}
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      bz: nextProps.yssfw.yssdetl.labe,
      nbz:nextProps.yssfw.yssdetl.inLabe
    })
  }
  handqr(){
    let labe=this.state.bz==''?this.props.yssfw.yssdetl.labe:this.state.bz;
    let enab=this.props.yssfw.yssdetl.enab;
    let inLabe=this.state.nbz==''?this.props.yssfw.yssdetl.inLabe:this.state.nbz;
    //修改标注
    this.props.actions.putysbzfw(this.state.userName,this.state.token,this.props.rows.cont,labe,enab,inLabe);
    this.props.actions.yssshow(false);
  }
  handleClick(){
    //改变详情动画
    this.props.actions.yssshow(false);
  }
  handqy(){
    let labe=this.state.bz==''?this.props.yssfw.yssdetl.labe:this.state.bz;
    let inLabe=this.state.nbz==''?this.props.yssfw.yssdetl.inLabe:this.state.nbz;
    //获取启用
    this.props.actions.putyssztbg(this.state.userName,this.state.token,this.props.rows.cont,1,labe,inLabe);
    this.props.handcb('zt1','启用');
    this.props.actions.yssshow(this.props.yssfw.isc);
  }
  handjy(){
    let labe=this.state.bz==''?this.props.yssfw.yssdetl.labe:this.state.bz;
    let inLabe=this.state.nbz==''?this.props.yssfw.yssdetl.inLabe:this.state.nbz;
    //获取禁用
    this.props.actions.putyssztbg(this.state.userName,this.state.token,this.props.rows.cont,0,labe,inLabe);
    this.props.handcb('zt5','禁用');
    this.props.actions.yssshow(this.props.yssfw.isc);
  }
  render() {
    return (
      <div className="addet">
        <div className="addet1">
          <div className="addet2">
            <div className="addet3">
              <span>服务优势详情</span>
              {
                (this.state.userid==this.props.yssfw.yssdetl.user||this.state.userid==this.props.yssfw.yssdetl.creator)?
                  <ul>
                    <li>
                      <a  href='javascript:void(0);' onClick={this.handleClick}>关闭</a>
                    </li>
                    <li>
                      <a href='javascript:void(0);' onClick={this.handqr}>确认</a>
                    </li>
                    <li>
                      {
                        this.props.yssfw.yssdetl.enab==1?<a href='javascript:void(0);' onClick={this.handjy}>禁用</a>
                          :<a href='javascript:void(0);' onClick={this.handqy}>启用</a>
                      }
                    </li>
                    <li className="yjdel1">
                      {
                        this.state.comp>0?
                          this.props.yssfw.yssdetl.admi!=0? <a href='javascript:void(0);' onClick={this.handvip}>会员展示</a>:undefined
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
                  <p className="yjdel4">{this.props.yssfw.yssdetl.servName}</p>
                </li>
                <li>
                  <span className="addsp">具体服务</span>
                  <p className="yjdel4">{this.props.yssfw.yssdetl.servOptiName}</p>
                </li>
                <li>
                  <span className="addsp">发布人</span>
                  <p className="yjdel4">{this.props.yssfw.yssdetl.creatName}</p>
                </li>
                <li>
                  <span className="addsp">接收人</span>
                  <p className="yjdel4">
                    {
                      this.state.comp>0?this.props.yssfw.yssdetl.userName:this.props.yssfw.yssdetl.creatName
                    }
                  </p>
                </li>
                <li>
                  <span className="addsp">口岸</span>
                  <p className="yjdel4">{this.props.yssfw.yssdetl.portName}</p>
                </li>
                <li>
                  <span className="addsp">状态</span>
                  <p className="addet5">
                    {
                      this.props.yssfw.yssdetl.enab==1?"启用":"禁用"
                    }
                  </p>
                </li>
                <li>
                  <span className="addsp">有效期</span>
                  {
                    this.props.yssfw.yssdetl.isVip==1?
                      <p className="yjdel4">会员展示至{moment(this.props.yssfw.yssdetl.vipTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
                <li>
                  <span className="addsp"> </span>
                  {
                    this.props.yssfw.yssdetl.isPlat == 1 ?
                      <p className="yjdel4">平台展示至{moment(this.props.yssfw.yssdetl.platTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
                <li>
                  <span className="addsp"> </span>
                  {
                    this.props.yssfw.yssdetl.isPush == 1 ?
                      <p className="yjdel4">已自动推送时间至{moment(this.props.yssfw.yssdetl.pushTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
              </ul>
            </div>
            <div className="yjdel3">
              <div className="yjdel10">
                <span className="addsp">外标注</span>
                {
                  (this.state.userid==this.props.yssfw.yssdetl.user||this.state.userid==this.props.yssfw.yssdetl.creator)?
                    <textarea
                      value={this.state.bz}
                      maxLength="100"
                      placeholder={this.props.yssfw.yssdetl.labe=='null'?'':this.props.yssfw.yssdetl.labe}
                      onChange={(e)=>{return this.setState({bz:e.target.value})}}
                    ></textarea>:<p>{this.props.yssfw.yssdetl.labe}</p>
                }
              </div>
              {
                this.state.comp>0?
                  <div className="yjdel10">
                    <span className="addsp">内标注</span>
                    {
                      (this.state.userid==this.props.yssfw.yssdetl.user||this.state.userid==this.props.yssfw.yssdetl.creator)?
                        <textarea
                          value={this.state.nbz}
                          maxLength="100"
                          placeholder={this.props.yssfw.yssdetl.inLabe=='null'?'':this.props.yssfw.yssdetl.inLabe}
                          onChange={(e)=>{return this.setState({nbz:e.target.value})}}
                        ></textarea>:<p>{this.props.yssfw.yssdetl.inLabe}</p>
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
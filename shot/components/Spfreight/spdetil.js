/**
 * Created by Zing on 2016/10/20.
 */
import React,{Component} from 'react';
import moment from 'moment';

export default class Spdetil extends Component {
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
        This.props.actions.putvipzs(This.state.userName,This.state.token,This.props.rows.adva);
      },
      onCancel() {}
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      bz: nextProps.yssp.yspdetl.labe,
      nbz:nextProps.yssp.yspdetl.inLabe
    })
  }
  handqr(){
    let labe=this.state.bz==''?this.props.yssp.yspdetl.labe:this.state.bz;
    let inLabe=this.state.nbz==''?this.props.yssp.yspdetl.inLabe:this.state.nbz;
    let enab=this.props.yssp.yspdetl.enab;
    //修改标注
    this.props.actions.putysbzsp(this.state.userName,this.state.token,this.props.rows.adva,labe,inLabe,enab);
    this.props.actions.tzhshow(false);
  }
  handleClick(){
    //改变详情动画
    this.props.actions.tzhshow(false);
  }
  handqy(){
    let labe=this.state.bz==''?this.props.yssp.yspdetl.labe:this.state.bz;
    let inLabe=this.state.nbz==''?this.props.yssp.yspdetl.inLabe:this.state.nbz;
    //获取启用
    this.props.actions.putyspztbg(this.state.userName,this.state.token,this.props.rows.adva,1,labe,inLabe);
    this.props.handcb('zt1','启用');
    this.props.actions.tzhshow(this.props.yssp.isc);
  }
  handjy(){
    let labe=this.state.bz==''?this.props.yssp.yspdetl.labe:this.state.bz;
    let inLabe=this.state.nbz==''?this.props.yssp.yspdetl.inLabe:this.state.nbz;
    //获取禁用
    this.props.actions.putyspztbg(this.state.userName,this.state.token,this.props.rows.adva,0,labe,inLabe);
    this.props.handcb('zt5','禁用');
    this.props.actions.tzhshow(this.props.yssp.isc);
  }
  render() {
    return (
      <div className="addet">
        <div className="addet1">
          <div className="addet2">
            <div className="addet3">
              <span>特种货运价优势详情</span>
              {
                (this.state.userid==this.props.yssp.yspdetl.user||this.state.userid==this.props.yssp.yspdetl.creator)?
                  <ul>
                    <li>
                      <a  href='javascript:void(0);' onClick={this.handleClick}>关闭</a>
                    </li>
                    <li>
                      <a  href='javascript:void(0);' onClick={this.handqr}>确认</a>
                    </li>
                    <li>
                      {
                        this.props.yssp.yspdetl.enab==1?<a href='javascript:void(0);' onClick={this.handjy}>禁用</a>
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
                  <span className="addsp">服务</span>
                  <p className="yjdel4">{this.props.yssp.yspdetl.servName}</p>
                </li>
                <li>
                  <span className="addsp">口岸</span>
                  <p className="yjdel4">{this.props.yssp.yspdetl.depaPortName}</p>
                </li>
                <li>
                  <span className="addsp">发布人</span>
                  <p className="yjdel4">{this.props.yssp.yspdetl.creatName}</p>
                </li>
                <li>
                  <span className="addsp">接收人</span>
                  <p className="yjdel4">
                    {
                      this.state.comp>0?this.props.yssp.yspdetl.userName:this.props.yssp.yspdetl.creatName
                    }
                  </p>
                </li>
                <li>
                  <span className="addsp">状态</span>
                  <p className="addet5">
                    {
                      this.props.yssp.yspdetl.enab==1?"启用":"禁用"
                    }
                  </p>
                </li>
                <li>
                  <span className="addsp">有效期</span>
                  {
                    this.props.yssp.yspdetl.isVip == 1 ?
                      <p className="yjdel4">会员展示至{moment(this.props.yssp.yspdetl.vipTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
                <li>
                  <span className="addsp"> </span>
                  {
                    this.props.yssp.yspdetl.isPlat == 1 ?
                      <p className="yjdel4">平台展示至{moment(this.props.yssp.yspdetl.platTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
                <li>
                  <span className="addsp"> </span>
                  {
                    this.props.yssp.yspdetl.isPush == 1 ?
                      <p className="yjdel4">已自动推送时间至{moment(this.props.yssp.yspdetl.pushTime).format('YYYY.MM.DD')}</p>:undefined
                  }
                </li>
              </ul>
              <div className="yjdel3">
                <div className="yjdel10">
                  <span className="addsp">外标注</span>
                  {
                    (this.state.userid==this.props.yssp.yspdetl.user||this.state.userid==this.props.yssp.yspdetl.creator)?
                      <textarea
                        value={this.state.bz}
                        maxLength="100"
                        placeholder={this.props.yssp.yspdetl.labe=='null'?'':this.props.yssp.yspdetl.labe}
                        onChange={(e)=>{return this.setState({bz:e.target.value})}}
                      ></textarea>:<p>{this.props.yssp.yspdetl.labe}</p>
                  }
                </div>
                {
                  this.state.comp>0?
                    <div className="yjdel10">
                      <span className="addsp">内标注</span>
                      {
                        (this.state.userid==this.props.yssp.yspdetl.user||this.state.userid==this.props.yssp.yspdetl.creator)?
                          <textarea
                            value={this.state.nbz}
                            maxLength="100"
                            placeholder={this.props.yssp.yspdetl.inLabe=='null'?'':this.props.yssp.yspdetl.inLabe}
                            onChange={(e)=>{return this.setState({nbz:e.target.value})}}
                          ></textarea>:<p>{this.props.yssp.yspdetl.inLabe}</p>
                      }
                    </div>
                    :undefined
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
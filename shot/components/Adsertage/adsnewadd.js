/**
 * Created by Zing on 2016/8/17.
 */
import React,{Component} from 'react';
import {Select,message,Modal} from 'antd';
import { VelocityTransitionGroup} from 'velocity-react';
import Adtsfw from '../ccom/adtsfw';
const Option = Select.Option;
const OptGroup = Select.OptGroup;
let timeout;
const confirm = Modal.confirm;

export default class Adsnewadd extends Component {
  constructor(props) {
    super(props);
    this.handch=this.handch.bind(this);
    this.handchange=this.handchange.bind(this);
    this.handcn=this.handcn.bind(this);
    this.handcns=this.handcns.bind(this);
    this.handists=this.handists.bind(this);
    this.handistsc=this.handistsc.bind(this);
    let admiAcco='';
    let comp=sessionStorage.getItem("SESSIONCOMP");
    if(comp!=0) {
      admiAcco = sessionStorage.getItem("SESSIONADMIACCO");
    }
    this.state={
      fw:'',
      jtfw:'',
      kan:undefined,
      jsr:this.props.text.user.name,
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:comp,
      admiAcco:admiAcco,
      bz:'',
      nbz:'',
      qydn:'',
      ists:false
    }
  }
  handists(){
    this.setState({
      ists:true
    })
  }
  handistsc(){
    this.setState({
      ists:false
    })
  }
  handcn(v){
    this.setState({
      qydn:v
    });
    let userName = this.state.userName;
    let token = this.state.token;
    let serv=this.state.fw;
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
    timeout = setTimeout(() => {
      if(v){
        this.props.actions.getkanf(userName,token,serv,v);
      }
    }, 300);
  }
  handcns(v,o){
    let kan=o.props.date;
    this.setState({ kan:kan });
  }
  handchange(v){
    this.setState({fw:v,jtfw:''});
    this.props.actions.getyssjtfw(this.state.userName,this.state.token,v);//获取具体服务条件
    this.props.actions.getyssports(this.state.userName,this.state.token,v);//获取港口服务条件
    this.props.actions.getysfwzj(this.state.userName,this.state.token,v);//获取港口最近
    this.props.actions.gethotpof(this.state.userName,this.state.token,v);//获取港口热门
  }
  handch(){
    let ser=this.state.fw;
    let jtfw=this.state.jtfw;
    let kan=this.state.kan==undefined?'':this.state.kan;
    let user=this.state.comp!=0?this.state.jsr==this.props.text.user.name?this.props.text.user.user:this.state.jsr:this.props.yssfw.yssusers.user;
    let labe=this.state.bz;
    let inLabe=this.state.nbz;
    if(ser==''||jtfw==''||kan==''||user==''){
      message.error("请填写完整再提交");
    }else{
      //判断是否复制优势
      let This=this;
      confirm({
        title: '您是否确认',
        cancelText:"确认并复制该优势",
        onOk() {
          //确认该优势
          This.props.actions.postyssnew(This.state.userName,This.state.token,ser,jtfw,kan,user,labe,inLabe);
          This.props.handnewc(This.props.yssfw.isshow);
        },
        onCancel() {
          //确认并复制该优势
          This.props.actions.postyssnew(This.state.userName,This.state.token,ser,jtfw,kan,user,labe,inLabe);
        }
      });
    }
  }
  render() {
    return (
      <div className="adsnad">
        <div className="adsnad1">
          <div className="adsnad2">
            <div className="adsnad3">
              <span>新增服务优势</span>
              <ul>
                <li><img className="adsnad30" src={require('../../src/image/ystxl.png')} onClick={this.handists}/></li>
                <li><a href='javascript:void(0);' onClick={this.handch}>确定</a></li>
                <li><a href='javascript:void(0);' onClick={this.props.handnewc}>关闭</a></li>
              </ul>
            </div>
            <div className="adsnad4">
              <ul>
                <li className="adnadli">
                  <span className="adsnad6">服务</span>
                  <Select showSearch
                          value={this.state.fw}
                          style={{ width: 180 }}
                          className="adselect"
                          optionFilterProp="children"
                          notFoundContent="无法找到"
                          placeholder="服务"
                          onChange={this.handchange}
                  >
                    {
                      this.props.yssfw.yssser.map(s => <Option key={s.serv}>{s.servName}</Option>)
                    }
                  </Select>
                  <i className="btcolor1">*</i>
                </li>
                <li className="adnadli">
                  <span className="adsnad6">具体服务</span>
                  <Select showSearch
                          value={this.state.jtfw}
                          style={{ width: 180 }}
                          className="adselect"
                          optionFilterProp="children"
                          notFoundContent="请先选择服务或未找到"
                          placeholder="具体服务"
                          onChange={(v)=>{return this.setState({jtfw:v})}}
                  >
                    {
                      this.props.yssfw.yssjtfw.map(s => <Option key={s.servOpti}>{s.name}</Option>)
                    }
                  </Select>
                  <i className="btcolor1">*</i>
                </li>
                <li className="adnadli">
                  <span className="adsnad6">发布人</span>
                  <p>{this.props.yssfw.yssusers.name}</p>
                </li>
                <li className="adnadli">
                  <span className="adsnad6">接收人</span>
                  {
                    this.state.comp!=0?
                      <Select showSearch
                              value={this.state.jsr}
                              style={{ width: 180 }}
                              optionFilterProp="children"
                              notFoundContent="无法找到"
                              className="adselect"
                              placeholder="接收人"
                              onChange={(v)=>{return this.setState({jsr:v})}}
                      >
                        {
                          this.props.yssfw.yssfbr.map(s => {
                            if(this.props.text.priv.admi!=0){
                              return <Option key={s.user}>{s.name}</Option>
                            }else{
                              if(s.userAcco!=this.state.admiAcco){
                                return <Option key={s.user}>{s.name}</Option>
                              }else{
                                return <Option style={{display:'none'}} key={s.user} >{s.name}</Option>
                              }
                            }
                          })
                        }
                      </Select>:<p>{this.props.yssfw.yssusers.name}</p>
                  }
                  {
                    this.state.comp!=0?<i className="btcolor1">*</i>:undefined
                  }
                </li>
                <li className="adnadli">
                  <span className="adsnad6">口岸</span>
                  <Select combobox
                          value={this.state.qydn}
                          style={{ width: 180 }}
                          className="adselect"
                          notFoundContent=""
                          defaultActiveFirstOption={false}
                          showArrow={false}
                          filterOption={false}
                          placeholder="请输入口岸并选择"
                          onChange={this.handcn}
                          onSelect={this.handcns}
                  >
                    <OptGroup label="所有">
                      {
                        this.props.yssfw.kanf.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                    </OptGroup>
                    <OptGroup label="最近">
                      {
                        this.props.yssfw.ysfwzj.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                    </OptGroup>
                    <OptGroup label="热门">
                      {
                        this.props.yssfw.hotpof.map(s => <Option key={s.port} date={s.port} value={s.portName+'/'+s.chsName}>{s.portName+'/'+s.chsName}</Option>)
                      }
                    </OptGroup>
                  </Select>
                  <i className="btcolor1">*</i>
                </li>
              </ul>
            </div>
          </div>
          <div className="adsnad9">
            <div className="adsnad10">非必选</div>
            <div className="adsnad11">
              <span>外标注</span>
              <textarea
                value={this.state.bz}
                maxLength="100"
                placeholder="该处内容为公司外其他用户所见"
                onChange={(e)=>{return this.setState({bz:e.target.value})}}
              ></textarea>
            </div>
            {
              this.state.comp>0?
                <div className="adsnad11">
                  <span>内标注</span>
                  <textarea
                    value={this.state.nbz}
                    maxLength="100"
                    placeholder="该处内容公司员工可见"
                    onChange={(e)=>{return this.setState({nbz:e.target.value})}}
                  ></textarea>
                </div>
                :undefined
            }
          </div>
          <VelocityTransitionGroup enter={{animation: "fadeIn",duration:100}} leave={{animation: "fadeOut"}}>
            {
              this.state.ists?<Adtsfw handistsc={this.handistsc}/>:undefined
            }
          </VelocityTransitionGroup>
        </div>
      </div>
    );
  }
}
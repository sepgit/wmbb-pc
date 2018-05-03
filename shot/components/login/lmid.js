/**
 * Created by Zing on 2016/6/22.
 */
import React,{Component} from 'react';
import Accjh from './accjh';
import Footinfo from './footinfo';
import {message,Input,Popover} from 'antd';
import { Link, browserHistory } from 'react-router'
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Lmid extends Component {
  constructor(props) {
    super(props);
    this.handdl = this.handdl.bind(this);
    this.handzh = this.handzh.bind(this);
    this.handjh = this.handjh.bind(this);
    this.handzcc = this.handzcc.bind(this);
    this.handczmm = this.handczmm.bind(this);
    this.handxf=this.handxf.bind(this);
    this.handxfc=this.handxfc.bind(this);
    this.handmdtop=this.handmdtop.bind(this);
    this.handmdpt=this.handmdpt.bind(this);
    this.handmdzs=this.handmdzs.bind(this);
    this.handmdys=this.handmdys.bind(this);
    this.handmdlx=this.handmdlx.bind(this);
    this.handck=this.handck.bind(this);
    this.handsx=this.handsx.bind(this);
    this.state={
      zh:'',
      ma:'',
      errmsg:'请输入账号密码',
      isjh:false,
      isxf:false
    }
  }
  handsx(){
    //重新获取
    //获取最近询盘列表
    this.props.actions.getdlxp();
    //获取最近咨询列表
    this.props.actions.getdlzx();
    //获取最近运价优势列表
    this.props.actions.getdlyj();
    //获取最近服务优势列表
    this.props.actions.getdlfw();
  }
  handck(){
    document.getElementById("md_top").scrollIntoView();
    message.error("请先登录！");
  }
  handmdtop(){
    document.getElementById("md_top").scrollIntoView();
  }
  handmdpt(){
    document.getElementById("md_pt").scrollIntoView();
  }
  handmdzs(){
    document.getElementById("md_zs").scrollIntoView();
  }
  handmdys(){
    document.getElementById("md_ys").scrollIntoView();
  }
  handmdlx(){
    document.getElementById("md_lx").scrollIntoView();
  }
  handxf(){
    this.setState({
      isxf:true
    })
  }
  handxfc(){
    this.setState({
      isxf:false
    })
  }
  componentDidMount() {
    //获取url参数
    let acco = this.props.Lacco;
    let rkey = this.props.Lrkey;
    if(acco!=undefined&&rkey!=undefined){
      this.props.actions.putloginurl(acco,rkey);
    }
    //获取最近询盘列表
    this.props.actions.getdlxp();
    //获取最近咨询列表
    this.props.actions.getdlzx();
    //获取最近运价优势列表
    this.props.actions.getdlyj();
    //获取最近服务优势列表
    this.props.actions.getdlfw();
  }
  handzh(e){
    let errmsg='';
    var myreg = /(^1[0-9]{10}$)|(^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/;
    if(!myreg.test(e.target.value)){
      errmsg='请输入正确的邮箱或正确的手机号';
    }
    this.setState({
      zh:e.target.value,
      errmsg:errmsg
    })
  }
  handczmm(){
    let name=this.state.zh;
    if(name){
      browserHistory.push({
        pathname:'/Fogotma',
        query:{
          a:name
        }
      });
    }else{
      browserHistory.push({
        pathname:'/Fogotma'
      });
    }

  }
  handdl(){
    let name=this.state.zh;
    let pad=this.state.ma;
    this.props.actions.putlogin(name,pad);
  }
  handjh(){
    if(this.state.zh==''){
      message.error('请输入账号再激活');
    }else{
      this.props.actions.postjhyj(this.state.zh);
    }
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      isjh: nextProps.user.signjh
    })
  }
  handzcc(){
    this.setState({
      isjh:false
    });
    this.props.user.signjh=false;
  }
  render() {
    const texts1=(<span>询盘与回盘</span>);
    const content1 = (<div><p>提升业务询盘回盘效率，可在同一界面查看并比较价格和服务，为用户带来便利。</p></div>);
    const texts2=(<span>咨询与回复</span>);
    const content2 = (<div><p>提升业务咨询回复效率，可在同一界面查看并比较价格和服务，为用户带来便利。</p></div>);
    const texts3=(<span>供应商管理</span>);
    const content3 = (<div><p>健全和完善的供应商管理体系，整合公司的供应商资源，为公司开展不同业务提供保障。</p></div>);
    const texts4=(<span>优势管理系统</span>);
    const content4 = (<div><p>免费添加运价优势和服务优势，展现给所有平台用户，可以有效地开发客户资源。</p></div>);
    return (
      <div className="lmid">
        <div className="toper6">
          <ul className="toimgul">
            <li>
              <Popover placement="top" content={content1} title={texts1} trigger="hover">
                <img className="toimg1" src={require('../../src/image/xp1.png')}/>
              </Popover>
            </li>
            <li>
              <Popover placement="top" content={content2} title={texts2} trigger="hover">
                <img className="toimg1" src={require('../../src/image/zx1.png')}/>
              </Popover>
            </li>
            <li>
              <Popover placement="top" content={content3} title={texts3} trigger="hover">
                <img className="toimg1" src={require('../../src/image/gys1.png')}/>
              </Popover>
            </li>
            <li>
              <Popover placement="top" content={content4} title={texts4} trigger="hover">
                <img className="toimg1" src={require('../../src/image/ys1.png')}/>
              </Popover>
            </li>
          </ul>
          <div className="logink">
            <ul className="logul">
              <li>
                <h5>登    录</h5>
              </li>
              <li>
                <Input
                  value={this.state.zh}
                  className="inp"
                  placeholder="邮箱或者绑定的手机"
                  onChange={this.handzh}
                />
                <a href="javascript:void(0);" className="logina" title="新账号需要先激活" onClick={this.handjh}>激活账号</a>
              </li>
              <li>
                <Input
                  value={this.state.ma}
                  className="inp"
                  type="password"
                  placeholder="密码"
                  onChange={(e)=>{return this.setState({ma:e.target.value})}}
                />
                <label className="errmsg">{this.state.errmsg}</label>
                <a href="javascript:void(0);" className="logina" title="重置密码" onClick={this.handczmm}>重置密码</a>
              </li>
              <li>
                <a href="javascript:void(0);" className="formbnt" onClick={this.handdl}>登录</a>
                <Link to="/Regist" className="formbnt">注册</Link>
              </li>
            </ul>
            <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
              {
                this.state.isjh?<Accjh handzcc={this.handzcc}
                                       uaczh={this.state.zh}
                                       user={this.props.user}
                                       actions={this.props.actions}/>:undefined
              }
            </VelocityTransitionGroup>
          </div>
        </div>
        <div className="toper7">
          <div className="toper7a">
            <div className="toper7b" id="md_pt">
              <h1>平台最近交易-询盘</h1>
            </div>
            <div className="toper7b">
              <a href="javascript:void(0);" className="toper7e" onClick={this.handsx}>
                <span>立即刷新</span>
                <img className="toper7img" src={require('../../src/image/sxh.png')}/>
              </a>
              <a href="javascript:void(0);" className="toper7e" onClick={this.handck}>
                查看更多
              </a>
            </div>
            <ul className="toper7c">
              <li className="toper7ch">
                <span>
                  询盘类型
                </span>
                <span>
                  询盘公司
                </span>
                <span>
                  港口(起运港-目的港)
                </span>
              </li>
              {
                this.props.user.dlxp.map((s,index) =>
                  <li className="toper7ch" key={index}>
                    <div className="toper7d">
                      {s.servName}
                    </div>
                    <div className="toper7d">
                      {s.compAlia}
                    </div>
                    <div className="toper7d">
                     {s.depaPort+'-'+s.destPort}
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
          <div className="toper7a">
            <div className="toper7b">
              <h2>平台最近交易-咨询</h2>
            </div>
            <div className="toper7b">
              <a href="javascript:void(0);" className="toper7f" onClick={this.handck}>
                查看更多
              </a>
              <a href="javascript:void(0);" className="toper7f" onClick={this.handsx}>
                <span>立即刷新</span>
                <img className="toper7img" src={require('../../src/image/sxh.png')}/>
              </a>
            </div>
            <ul className="toper7g">
              <li className="toper7ch">
                <span>
                  咨询类型
                </span>
                <span>
                  咨询公司
                </span>
                <span>
                  口岸
                </span>
              </li>
              {
                this.props.user.dlzx.map((s,index)=>
                  <li className="toper7ch" key={index}>
                    <div className="toper7d">
                      {s.servName+'-'+s.servOptiName}
                    </div>
                    <div className="toper7d">
                      {s.compAlia}
                    </div>
                    <div className="toper7d">
                      {s.portName}
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className="toper8">
          <div className="toper8a">
            <div className="toper8b" id="md_zs">
              <h1>最近服务展示</h1>
            </div>
            <div className="toper8b">
              <a href="javascript:void(0);" className="toper8e" onClick={this.handsx}>
                <span>立即刷新</span>
                <img className="toper8img" src={require('../../src/image/sxb.png')}/>
              </a>
              <a href="javascript:void(0);" className="toper8e" onClick={this.handck}>
                查看更多
              </a>
            </div>
            <ul className="toper8c">
              <li className="toper8ch">
                <span>
                  服务类型
                </span>
                <span>
                  公司名称
                </span>
                <span>
                  口岸
                </span>
              </li>
              {/*<li className="toper8ch">
               <div className="toper8d">
               RORO-具体服务
               </div>
               <div className="toper8d">
               国际物流服务有限公司
               </div>
               <div className="toper8d">
               宁波
               </div>
               </li>*/}
            </ul>
          </div>
          <div className="toper8a">
            <div className="toper8b">
              <h2>最近舱位展示</h2>
            </div>
            <div className="toper8b">
              <a href="javascript:void(0);" className="toper8f" onClick={this.handck}>
                查看更多
              </a>
              <a href="javascript:void(0);" className="toper8f" onClick={this.handsx}>
                <span>立即刷新</span>
                <img className="toper8img" src={require('../../src/image/sxb.png')}/>
              </a>
            </div>
            <ul className="toper8g">
              <li className="toper8ch">
                <span>
                  服务类型
                </span>
                <span>
                  公司名称
                </span>
                <span>
                  港口(起运港-目的港)
                </span>
              </li>
              {/*<li className="toper8ch">
               <div className="toper8d">
               码头
               </div>
               <div className="toper8d">
               国际物流服务有限公司
               </div>
               <div className="toper8d">
               宁波-大连
               </div>
               </li>*/}
            </ul>
          </div>
        </div>
        <div className="toper7">
          <div className="toper7a">
            <div className="toper7b" id="md_ys">
              <h1>平台最新优势-运价</h1>
            </div>
            <div className="toper7b">
              <a href="javascript:void(0);" className="toper7e" onClick={this.handsx}>
                <span>立即刷新</span>
                <img className="toper7img" src={require('../../src/image/sxh.png')}/>
              </a>
              <a href="javascript:void(0);" className="toper7e" onClick={this.handck}>
                查看更多
              </a>
            </div>
            <ul className="toper7c">
              <li className="toper7ch">
                <span>
                  服务类型
                </span>
                <span>
                  公司名称
                </span>
                <span>
                  港口(起运港-目的港)
                </span>
              </li>
              {
                this.props.user.dlyj.map((s,index) =>
                  <li className="toper7ch" key={index}>
                    <div className="toper7d">
                      {s.servName}
                    </div>
                    <div className="toper7d">
                      {s.compAlia}
                    </div>
                    <div className="toper7d">
                      {s.depaPort+'-'+s.destPort}
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
          <div className="toper7a">
            <div className="toper7b" id="md_lx">
              <h2>平台最新优势-服务</h2>
            </div>
            <div className="toper7b">
              <a href="javascript:void(0);" className="toper7f" onClick={this.handck}>
                查看更多
              </a>
              <a href="javascript:void(0);" className="toper7f" onClick={this.handsx}>
                <span>立即刷新</span>
                <img className="toper7img" src={require('../../src/image/sxh.png')}/>
              </a>
            </div>
            <ul className="toper7g">
              <li className="toper7ch">
                <span>
                  服务类型
                </span>
                <span>
                  公司名称
                </span>
                <span>
                  口岸
                </span>
              </li>
              {
                this.props.user.dlfw.map((s,index) =>
                  <li className="toper7ch" key={index}>
                    <div className="toper7d">
                      {s.servName+'-'+s.servOptiName}
                    </div>
                    <div className="toper7d">
                      {s.compAlia}
                    </div>
                    <div className="toper7d">
                      {s.portName}
                    </div>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
        <div className="topxtk" onMouseEnter={this.handxf} onMouseLeave={this.handxfc}>
          <img className="topxfimg" src={require('../../src/image/jt.png')}/>
          {
            this.state.isxf?
            <ul className="topxful">
              <li>
                <a href="javascript:void(0);" onClick={this.handmdtop}>top</a>
              </li>
              <li>
                <a href="javascript:void(0);" onClick={this.handmdpt}>平台交易</a>
              </li>
              <li>
                <a href="javascript:void(0);" onClick={this.handmdzs}>平台展示</a>
              </li>
              <li>
                <a href="javascript:void(0);" onClick={this.handmdys}>最新优势</a>
              </li>
              <li>
                <a href="javascript:void(0);" onClick={this.handmdlx}>联系我们</a>
              </li>
            </ul>:undefined
          }
        </div>
        <Footinfo />
      </div>
    );
  }
}
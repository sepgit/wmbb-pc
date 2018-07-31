/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import NewxpL from './newxpl';
import NewzxL from './newzxl';
import NewgysL from './newgysl';
import NewysL from './newysl';
import NewskbL from './newskbl';
import NewCab from './newcab';
import Problemwin from './../home/problemwin';
import Newserver from './newserver';

export default class NewL extends Component {
  constructor(props) {
    super(props);
    this.handcjyw=this.handcjyw.bind(this);
    this.handcjywc=this.handcjywc.bind(this);
    this.handswzy=this.handswzy.bind(this);
    this.state={
      isyw:false
    }
  }
  handswzy(){
    //设为主页
    let homePage='http://www.wumaobang.com';
    try{
      document.body.style.behavior='url(#default#homepage)';
      document.body.setHomePage(homePage);
    }catch(e){
      if(window.netscape){
        try{
          netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
        }catch (e){
          alert( "该操作被浏览器拒绝，如果想启用该功能，请在地址栏内输入 about:config,然后将项 signed.applets.codebase_principal_support 值该为true" );
        }
      }else{
        try{
          let prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components. interfaces.nsIPrefBranch);
          prefs.setCharPref('browser.startup.homepage',homePage);
        }catch (e){
          alert('您的浏览器不支持自动设置首页, 请使用浏览器菜单手动设置!');
        }
      }
    }
  }
  handcjyw(){
   this.setState({
     isyw:true
   })
  }
  handcjywc(){
    this.setState({
      isyw:false
    })
  }
  render() {
    return (
      <div className="newl">
        <div className="newl4">
          <h5>致力于打造物贸信用平台---物贸帮帮</h5>
          <span>欢迎各地代理洽谈合作 联系人:张先生 手机(微信):13505741577</span>
        </div>
        <ul className='newl1'>
          <NewxpL actions={this.props.actions}
                  text={this.props.text}
                  getdetil={this.props.getdetil}
                  getnewlist={this.props.getnewlist}
                  cabnew={this.props.cabnew}
          />
          <NewzxL actions={this.props.actions}
                  text={this.props.text}
                  zxinfo={this.props.zxinfo}
          />
          <NewgysL actions={this.props.actions}
                   text={this.props.text}
                   rsup={this.props.rsup}
          />
          <NewysL actions={this.props.actions}
                  text={this.props.text}
                  ysrdu={this.props.ysrdu}
                  yssfw={this.props.yssfw}
                  yssp={this.props.yssp}
          />
          <NewskbL actions={this.props.actions}
                   text={this.props.text}
                   pays={this.props.pays}
          />
          <NewCab actions={this.props.actions}
                   text={this.props.text}
                   cabmynew={this.props.cabmynew}
          />
          <Newserver  
            actions={this.props.actions} 
            text={this.props.text} 
            publicState={this.props.publicState}
          />
        </ul>
        <div className='newla' onClick={this.handcjyw}>
          <span>
            常见疑问
          </span>
        </div>
        <div className='newlb' onClick={this.handswzy}>
          <span>
            设为主页
          </span>
        </div>
        {
          this.state.isyw?<Problemwin handcjywc={this.handcjywc} />:undefined
        }
      </div>
    );
  }
}
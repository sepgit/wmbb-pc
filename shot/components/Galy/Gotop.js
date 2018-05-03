/**
 * Created by Zing on 2017/11/28.
 */
import {Popover} from 'antd';
import React,{Component} from 'react';
let timer = null;

export default class Gotop extends Component {
  constructor(props) {
    super(props);
    this.handtop=this.handtop.bind(this);
    this.handqq=this.handqq.bind(this);
    this.state={
      isqq:false
    }
  }
  handqq(){
    this.setState({
      isqq:!this.state.isqq
    })
  }
  handtop(){
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn(){
      let oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if(oTop > 0){
        document.body.scrollTop = document.documentElement.scrollTop = oTop - 200;
        timer = requestAnimationFrame(fn);
      }else{
        cancelAnimationFrame(timer);
      }
    })
  }
  render() {
    const texts=(
      <div>
        <p className="gotop3" onClick={this.handqq}>换一组</p>
      </div>
    );
    const content = (
      <div className="gotop4">
        {
          this.state.isqq?
            <div className="gotop5">
              {/*<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=10977182&site=qq&menu=yes">
                <h5 className="gotop6">4.</h5>
                <span className="gotop7">(主要服务:优势咨询)</span>
              </a>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=10977182&site=qq&menu=yes">
                <h5 className="gotop6">5.</h5>
                <span className="gotop7">(主要服务:询盘回盘)</span>
              </a>
              <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=10977182&site=qq&menu=yes">
                <h5 className="gotop6">6.</h5>
                <span className="gotop7">(主要服务:保函)</span>
              </a>*/}
            </div>:
          <div className="gotop5">
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=10977182&site=qq&menu=yes">
              <h5 className="gotop6">1.客服QQ:10977182</h5>
              <span className="gotop7">(主要服务:优势咨询)</span>
            </a>
            {/*<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=10977182&site=qq&menu=yes">
              <h5 className="gotop6">2.</h5>
              <span className="gotop7">(主要服务:询盘回盘)</span>
            </a>
            <a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=10977182&site=qq&menu=yes">
              <h5 className="gotop6">3.</h5>
              <span className="gotop7">(主要服务:保函)</span>
            </a>*/}
          </div>
        }
      </div>
    );
    return (
      <div className="gotop">
        <Popover placement="left" content={content} title={texts} trigger="hover">
          <div className="gotop1">
            在线客服
          </div>
        </Popover>
        <a href="#app" className="gotop2">
            <div className="gotop-in"> </div>
            {/*<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=247949305&site=qq&menu=yes">
              <img src="http://wpa.qq.com/pa?p=2:247949305:52" alt="点击这里给我发消息" title="点击这里给我发消息"/>
            </a>*/}
        </a>
      </div>
    );
  }
}
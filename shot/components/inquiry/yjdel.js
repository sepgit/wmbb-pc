/**
 * Created by Zing on 2016/8/17.
 */
import React,{Component} from 'react';
import {Checkbox} from 'antd';

export default class Yjdel extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      comp:sessionStorage.getItem("SESSIONCOMP")
    }
  }
  handleClick(){
    //改变详情动画
    this.props.handxqc(this.props.servType);
  }
  render() {
    let zjdc,yj,sq,cw;
    if(this.props.getnewlist.yjdel.booking==1){
      zjdc=true;
    }else{
      zjdc=false
    }
    if(this.props.getnewlist.yjdel.freight==1){
      yj=true;
    }else{
      yj=false
    }
    if(this.props.getnewlist.yjdel.qing==1){
      sq=true;
    }else{
      sq=false
    }
    if(this.props.getnewlist.yjdel.shipSpace==1){
      cw=true;
    }else{
      cw=false
    }
    return (
      <div className="addet">
        <div className="addxpgys">
          <div className="addxpgys1">
            <div className="addxpgys2">
              <span>运价优势详情</span>
              <ul>
                <li>
                  <a href="javascript:void(0);" onClick={this.handleClick}>关闭</a>
                </li>
              </ul>
            </div>
            <div className="addxpgys3">
              <ul>
                <li>
                  <span className="addxpgys4">服务</span>
                  <p className="addxpgys5">{this.props.getnewlist.yjdel.servName}</p>
                </li>
                <li>
                  <span className="addxpgys4">承运商</span>
                  <p className="addxpgys5">{this.props.getnewlist.yjdel.carrName}</p>
                </li>
                <li>
                  <span className="addxpgys4">起运地</span>
                  <p className="addxpgys5">{this.props.getnewlist.yjdel.depaPortName}</p>
                </li>
                <li>
                  <span className="addxpgys4">目的地</span>
                  <p className="addxpgys5">{this.props.getnewlist.yjdel.destPortName}</p>
                </li>
                <li>
                  <span className="addxpgys4">状态</span>
                  <p className="addet5">
                    {
                      this.props.getnewlist.yjdel.enab==1?"启用":"禁用"
                    }
                  </p>
                </li>
                <li className="addsp1">
                  <Checkbox checked={zjdc}>直接订舱</Checkbox>
                  <Checkbox checked={yj}>运价</Checkbox>
                  <Checkbox checked={sq}>双清</Checkbox>
                  <Checkbox checked={cw}>舱位</Checkbox>
                </li>
              </ul>
              <div className="addxpgys6">
                <span className="addxpgys4">标注</span>
                <p className="addxpgys7">{this.props.getnewlist.yjdel.labe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
/**
 * Created by Zing on 2016/12/27.
 */
import React,{Component} from 'react';
import { Checkbox,Radio } from 'antd';
const RadioGroup = Radio.Group;

export default class Adplxgjq extends Component {
  constructor(props) {
    super(props);
    this.handqd=this.handqd.bind(this);
    this.handcz=this.handcz.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      qy:'1'
    }
  }
  handqd(){
    let userName=this.state.userName;
    let token=this.state.token;
    let advas="["+this.props.plxgdate+"]";
    let enab=this.state.qy==='1'?1:0;
    this.props.actions.putplxgjq(userName,token,advas,enab);
    this.props.handcz();//父组件重置
    this.props.handc();
  }
  handcz(){
    this.setState({
      qy:'1'
    })
  }
  render() {
    return (
      <div className="adplxg">
        <div className="adplxg1">
          <div className="adplxg2">
            <span>批量修改</span>
            <ul>
              <li><a className="bntact" href='javascript:void(0);' onClick={this.handqd}>确定</a></li>
              <li><a className="bntact" href='javascript:void(0);' onClick={this.handcz}>重置</a></li>
              <li><a className="bntact" href='javascript:void(0);' onClick={this.props.handc}>取消</a></li>
            </ul>
          </div>
          <div className="adplxg3">
            <RadioGroup onChange={(e)=>{this.setState({qy:e.target.value})}} value={this.state.qy} style={{marginLeft:20,width:300}}>
              <Radio value='1'>启用</Radio>
              <Radio value='0'>禁用</Radio>
            </RadioGroup>
          </div>
        </div>
      </div>
    );
  }
}
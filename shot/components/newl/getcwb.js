/**
 * Created by Zing on 2018/2/26.
 */
import React,{Component} from 'react';
import {Select,message} from 'antd';
const Option = Select.Option;

export default class Getcwb extends Component {
  constructor(props) {
    super(props);
    this.handce=this.handce.bind(this);
    this.handse=this.handse.bind(this);
    this.cwbqr=this.cwbqr.bind(this);
    this.cwbgb=this.cwbgb.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      ser:'',
      servName:''
    }
  }
  handce(v){
    this.setState({
      ser:v
    });
  }
  handse(v,e){
    let vary;
    vary=e.props.date.split('-');
    this.setState({
      ser:vary[0],
      servName:vary[1]
    });
  }
  cwbqr(){
    if(this.state.ser!=''){
      this.props.fonClick(this.state.ser,this.state.servName);
      this.props.linkcwbc();
    }else{
      message.error('请先选择服务种类！');
    }
  }
  cwbgb(){
    this.props.linkcwbc();
  }
  componentDidMount(){
    this.props.actions.getfwlxcwb(this.state.userName,this.state.token);
  }
  render() {
    let newArr=this.props.cabmynew.fwlxarycwb.filter(function (s,i) {
      if(s.servName=='FCL'||s.servName=='DG'||s.servName=='FR'||s.servName=='HG'||s.servName=='OT'){
        return s;
      }
    });
    return (
      <div className="getxp">
        <div className="getxp1">
          <a className="getxp2" href='javascript:void(0);' onClick={this.props.linkskbc}>X</a>
          <div className="getxp3">
            <div className="getxp4">
              <h4>请选择服务种类</h4>
              <Select showSearch
                      value={this.state.ser}
                      style={{ width: 200 }}
                      className="getxp4-s"
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      onChange={this.handce}
                      onSelect={this.handse}
              >
                {
                  newArr.map((s)=> {
                    let sr= s.serv + '-' + s.servName;
                    return <Option date={sr} key={s.serv}>{s.servName}</Option>
                  })
                }
              </Select>
            </div>
            <div className="getxp5">
              <a className="getxp6" href='javascript:void(0);' onClick={this.cwbqr}>确认</a>
              <a className="getxp6" href='javascript:void(0);' onClick={this.cwbgb}>关闭</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
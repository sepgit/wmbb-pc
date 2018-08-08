/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import {Select,Checkbox,message} from 'antd';
const Option = Select.Option;

export default class Getser extends Component {
  constructor(props) {
    super(props);
    // this.skbqr=this.skbqr.bind(this);
    this.getlists = this.getlists.bind(this);
    this.clickAgree = this.clickAgree.bind(this);
    this.clickClose = this.clickClose.bind(this);
    this.handSerID =this.handSerID.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      serID:0,
    }
  }
  
  componentDidMount(){
    this.props.actions.getSerLists(this.state.userName,this.state.token,2);//获取保函服务
    this.getlists()
  }
  getlists() {
    // console.log(this.props.publicState)
  }
  clickAgree() {
      if (this.state.serID == 0) {
        message.error('请选择服务种类！',1.5);
      }else {
        let serID= this.state.serID
        this.props.clickAgree(serID)
      }
  }
  clickClose() {
      this.props.clickClose('close')
  }
  handSerID (v) {
    // console.log(v);
    this.setState({
        serID:v
    }) 
  }
  render() {
    // console.log(this.props.publicState)
    let serLisers = [],mapT=false;
    if (this.props.publicState.serLists.length>0) {
        serLisers = this.props.publicState.serLists;
        mapT=true;
    }
    return (
        <div className="newL-choose-bg">
            <div className="bg-content">
                <a className="bg-content-close" href="javascript:void(0)" onClick={this.clickClose}>X</a>
                <h4 className="bg-content-tit">请选择服务种类</h4>
                <div className="bg-content-sel">
                    <Select
                        className="theSel"
                        style={{width:200}}
                        // optionFilterProp="children"
                        // range={false}
                        onChange={this.handSerID}
                    >
                        {
                            mapT ?
                            serLisers.map((datas) => {
                                return <Option  key={datas.serv}>{datas.servName}</Option>
                            }):undefined
                            
                        }
                        {/* <Option className="theSel-options" value="lucy" style={{position:relative}}>Lucy</Option> */}
                    </Select>
                </div>
                <div className="bg-content-btn">
                    <span onClick={this.clickAgree}>确认</span>
                    <span onClick={this.clickClose}>关闭</span>
                </div>
            </div>
        </div> 
    )
  }
}

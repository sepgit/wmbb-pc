/**
 * Created by Zing on 2017/2/28.
 */
import React,{Component} from 'react';
import {Select,Checkbox,message} from 'antd';
const Option = Select.Option;

export default class Getskb extends Component {
  constructor(props) {
    super(props);
    this.skbqr=this.skbqr.bind(this);
    this.skbgb=this.skbgb.bind(this);
    this.handce=this.handce.bind(this);
    this.handse=this.handse.bind(this);
    this.lvChange=this.lvChange.bind(this);
    this.lvcl=this.lvcl.bind(this);
    this.lvclc=this.lvclc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      comp:sessionStorage.getItem("SESSIONCOMP"),
      ser:'',
      servName:'',
      checked:true,
      islv:false
    }
  }
  lvcl(){
    this.setState({
      islv:true
    })
  }
  lvclc(){
    this.setState({
      islv:false
    })
  }
  lvChange(e){
      this.setState({
        checked:e.target.checked
      })
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
  skbqr(){
      if(this.state.checked){
        if(this.state.ser!=''){
          this.props.handqr(this.state.ser,this.state.servName);
          this.props.linkskbc();
        }else{
          message.error('请先选择服务种类！');
        }
      }else {
        message.error('请先阅读相关文件！');
      }
  }
  skbgb(){
    this.props.linkskbc();
  }
  componentDidMount(){
    this.props.actions.getbhfw(this.state.userName,this.state.token);//获取保函服务
    this.props.actions.getbhr(this.state.userName,this.state.token,this.state.userid,this.state.comp);//获取收款列表收款人.
  }
  render() {
    // console.log(this.props.text);
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
                          this.props.pays.bhfw.map((s)=> {
                            let sr = s.serv + '-' + s.servName;
                            return <Option date={sr} key={s.serv}>{s.servName}</Option>
                          })
                        }
                      </Select>
                  </div>
                  <div className="getxp7">
                      <div className="getxp8">
                         <a href="javascript:void(0);" onClick={this.lvcl}>请先浏览《履约收款须知》</a>
                      </div>
                      <div className="getxp9">
                          <Checkbox checked={this.state.checked}
                                    onChange={this.lvChange}
                          >
                           我已阅读，并接受。
                          </Checkbox>
                      </div>
                  </div>
                  <div className="getxp5">
                      <a className="getxp6" href='javascript:void(0);' onClick={this.skbqr}>确认</a>
                      <a className="getxp6" href='javascript:void(0);' onClick={this.skbgb}>关闭</a>
                  </div>
              </div>
            {
              this.state.islv?
                <div className="getxp10">
                    <div className="getxp11">
                        <h2>履约收款须知</h2>
                        &nbsp;&nbsp;&nbsp;&nbsp;1.平台服务费按书面约定的为准。平台的业务的收款权事宜与贵方友好协商已达成书面协议，贵方如非约定业务相关收款权，平台有权拒绝支付，由此产生的所有责任、风险由贵方承担。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;2.贵方对在物贸帮帮网站（www.wumaobang.com,以下简称“物贸帮帮网”）上注册并由管理员确认的所有账号的的相关操作均为贵方公司真实意思表示并承担相应法律责任。贵方的公司管理员账号为合同内约定帐号或者更换过的帐号。
                        贵方的管理员帐号为：{this.props.text.user.admiAcco}<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;3.贵方承诺在物贸帮帮网上的提供的贸易物流行为和服务及所提供数据真实有效。如贵方使用虚假贸易服务数据，平台有权拒绝履行支付义务。如因此造成平台损失的，平台有权追究贵方的相应责任，如涉及金融诈骗或者骗保，平台将移交有关司法行政等部门处理。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;4.贵方在向付款方发起“收付款保函”业务时，应填写准确的付款方在物贸帮帮网上的指定帐号，在付款方授信余额范围内准确填写押款金额，并填写完善所有真实的贸易物流数据，并录入履约指标和付款期限。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;5.在付款方的“收付款保函”里的流程记录中，一旦付款方对贵方的履约服务“确认”后或者默认“确认”后，意味着付款方已承诺在付款期限内付款。因此贵方不管什么原因，都不得卡扣该业务下付款方的提单、运单及货物等，平台有权要求贵方将提单寄送平台或者直接寄给付款方。同时贵方应及时点击物贸帮帮网上的“申请平台支付”按纽，并应及时向平台开具发票，发票上必须注名提单号或者运单号、对应的收付款保函号。如付款方确认贵方未履约或者提出异议，平台将不予支付押款金额给贵方，且对此平台不承担相应的责任，贵方可以另行通过司法程序或者其他协商手段与对应的付款方直接解决。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;6.．贵方应及时在物贸帮帮网上点击“申请平台支付”按纽和开具发票，以便平台及时安排付款。平台将在贵方与付款方约定期限的当月25日之前，把平台线上约定的款项支付给贵方。如因贵方延迟点击“申请平台支付”按纽或者延迟开具发票，造成平台延迟支付款项给贵方，平台不承担相应责任。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;7.平台在支付前，有权要求贵方提供以下有效的资料，包括但不限于贵方与付款方的合同、提单复印件（运单复印件）、证明已履约的资料、证明为该项服务支付的所有费用的书面资料等，贵方应在一个工作日内按要求提供相应的资料，如贵方逾期不提供，由此引起的后果平台不承担责任，如发现贵方提供资料存在虚假情况，平台可停止支付。如贵方的付款方在平台线上费用确认和履约确认完成后，贵方出现提单遗失，被卡、货物遗失、货物被卡等特殊情况时，平台如确认情况属实，将暂停到期该支付贵方的款项。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;8.贵方承诺，一旦平台支付该业务下的款项给贵方后，物贸帮帮网平台该业务下对实际付款方的债权即全部转让给平台，包括应付款及相应的利息、违约金收益等权利。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;9.因本协议执行发生纠纷的，由双方协商解决，如协商不成，由平台总部所在地人民法院管辖，由此产生的诉讼费、保全费、律师费、利息等均由败诉方承担。<br/><br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;10.未尽事宜，双方友好解决，在双方协商一致情况下可签订补充协议，补充协议视为本协议的组成部分。物贸帮帮网站内在以上未列明之处，由平台解释为准。
                    </div>
                    <a className="getxp12" href='javascript:void(0);' onClick={this.lvclc}>关闭</a>
                </div>:undefined
            }
          </div>
      </div>
    );
  }
}
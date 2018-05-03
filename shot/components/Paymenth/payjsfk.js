/**
 * Created by Zing on 2016/12/5.
 */
import React,{Component} from 'react';
import { Checkbox } from 'antd';

export default class Payjsfk extends Component {
  constructor(props) {
    super(props);
    this.fkcl=this.fkcl.bind(this);
    this.fkclc=this.fkclc.bind(this);
    this.fkChange=this.fkChange.bind(this);
    this.hanjqr=this.hanjqr.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      isfk:false,
      jsfk:true
    }
  }
  hanjqr(){
    this.props.handjs(this.state.jsfk);
  }
  fkChange(e){
    this.setState({
      jsfk:e.target.checked
    })
  }
  fkcl(){
    this.setState({
      isfk:true
    })
  }
  fkclc(){
    this.setState({
      isfk:false
    })
  }
  render() {
    return (
      <div className="paydel1">
        <div className="paydel2">确认接受收付款保函</div>
        <div className="paydel3">
          <div className="paydel4">
            <a href="javascript:void(0);" onClick={this.fkcl}>请先浏览《付款保证须知》</a>
          </div>
          <div className="paydel5">
            <Checkbox checked={this.state.jsfk}
                      onChange={this.fkChange}
            >
              我已阅读，并接受。
            </Checkbox>
          </div>
        </div>
        <div className="paydel6">
          <a className="paydel7" href='javascript:void(0);' onClick={this.hanjqr}>确认</a>
          <a className="paydel7" href='javascript:void(0);' onClick={this.props.hisjsc}>关闭</a>
        </div>
        {
          this.state.isfk?
            <div className="paydel8">
              <div className="paydel9">
                <h2>付款保证须知</h2>
                <p>一、贵方权利和义务：</p>
                &nbsp;&nbsp;&nbsp;&nbsp;1.
                贵方有权利使用物贸帮帮网站（www.wumaobang.com，以下简称“物贸帮帮网”）的各项非收费功能，平台将为贵方开通相应权限。
                并把授信金额体现在平台，并可进行循环使用。平台最高授信金额以与贵方的书面合同为准，如贵方后期需要调高授信，
                则需贵方在物贸帮帮网上有效合法的EMAIL发送给平台的书面邮件申请调高授信，并经平台同意后，将调高后的授信金额体现在物贸帮帮网的平台后为准。
                贵方担保人对授信承担担保责任。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;2.
                贵方在平台担保下，将简化与贵方的供应商（以下简称收款方）的合作流程，避免如付款买单等带来的时间拖沓，节省贵方的内部流程，提高操作效率。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;3.
                贵方在与收款方的付款周期内有权使用担保金额内平台提供的信用担保。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;4.
                贵方对在物贸帮帮网(www.wumaobang.com)上注册并由管理员确认的所有账号的相关操作均贵方公司真实意思表示并承担相应法律责任。
                贵方的公司管理员账号为：{this.props.text.user.admiAcco}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;5.
                贵方承诺在物贸帮帮网上接受的贸易物流行为及数据全部真实有效。
                如贵方使用虚假贸易服务数据，平台有权拒绝履行支付义务。如因此造成平台损失的，平台有权追究贵方的相应责任，涉及金融诈骗或者骗保的，
                平台将移交有关司法行政等部门处理。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;6.
                贵方应对每票“收付款保函”里的收款方出具的付款信息、包括付款金额、期限及相应的贸易物流信息和收款方履约情况进行及时确认，
                如收款方未履约，请及时点击“提出异议”按键并注明原因，否则10天后系统自动默认为贵方已确认收款方履约。一旦贵方确认收款方已履约。
                则代表贵方就该笔业务已经完成了费用确认并承诺在约定时间内向平台付款，贵方应在指定付款期限内将款项汇入平台指定账户。
                贵方的法定代表人（或者贵方的经营人或者担保人）对上述付款义务承担连带责任，在与贵方的书面协议中已签署。
                <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;7.
                贵方在付款时应当注明提单号或者运单号，以及该票的收付款保函号，并将水单的扫描件上传至物贸帮帮网的流程记录中。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;8.
                一旦贵方确认收款方已履约。则代表贵方就该笔业务已经完成了费用确认并承诺在约定时间内向平台付款。
                该付款义务不以贵方和收款方还有其他债权债务为借口，贵方必须按约定时间支付给平台。<br/><br/>
                <p>二、平台权利和义务：</p>
                &nbsp;&nbsp;&nbsp;&nbsp;1.
                平台有权收取第一条第6项下款项，包括贸易物流费、服务费、如贵方逾期支付，平台将向贵方收取自应付之日起每天千分之二的违约金，
                同时平台有权将贵方拉入平台黑名单，中止贵方信用额度的使用，并告知其他合作方，直至贵方完全履行支付义务，黑名单才予以撤消，
                信用余额才予以恢复。贵方一旦支付违约，平台并有权扣压贵方相关的提单和货物，直至贵方履行完支付义务。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;2.
                如贵方使用虚假贸易服务数据，平台有权不履行相应支付义务，如因此造成平台损失的，平台有权追究贵方的相应责任，
                涉及金融诈骗或者骗保的，平台将移交有关司法行政等部门处理。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;3.
                如贵方出现下列情况：<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.
                严重债务危机或者被司机机关和征信部门列入预警企业；<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.
                超过付款期15天尚未支付款项给平台；<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.
                三次出现履约滞后等。<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;平台可暂停贵方的可用信用金额，并列入黑名单和告知所有关联业务的联系人。<br/><br/>
                <p>三、争议解决</p>
                &nbsp;&nbsp;&nbsp;&nbsp;因本协议执行发生纠纷的，由双方协商解决，如协商不成，
                由平台所在地人民法院管辖，因诉讼产生的包括诉讼费、保全费、律师费等费用及损失均由败诉方承担。<br/><br/>
                <p>四、附则</p>
                &nbsp;&nbsp;&nbsp;&nbsp;未尽事宜，双方友好解决，在双方协商一致情况下可签订补充协议，补充协议视为本协议的组成部分。
                物贸帮帮网站内在以上未列明之处，由平台解释为准。<br/>
              </div>
              <a className="paydel10" href='javascript:void(0);' onClick={this.fkclc}>关闭</a>
            </div>:undefined
        }
      </div>
    );
  }
}
/**
 * Created by Chen on 2017/12/19.
 */
import React,{Component} from 'react';
import { Select,message,Checkbox } from 'antd';
const Option = Select.Option;

export default class Cabpbuy extends Component {
  constructor(props) {
    super(props);
    this.buyonClick=this.buyonClick.bind(this);				//货币事件
    this.lvChange = this.lvChange.bind(this);
    this.lvcl = this.lvcl.bind(this);
    this.lvclc = this.lvclc.bind(this);
    this.state={
      userName:sessionStorage.getItem("SESSIONUSERACC"),
      token:sessionStorage.getItem("SESSIONTOKEN"),
      userid:sessionStorage.getItem("SESSIONUSER"),
      nlfs:'',
      checked: true,
      islv: false
    }
  }
  componentDidMount (){
    let userName = this.state.userName;
    let token = this.state.token;
    this.props.actions.getcabDepos(userName,token,0);   //获取余额
    this.props.actions.getnlfwlx(userName,token);
  }
  buyonClick() {
    let userName = this.state.userName;
    let token = this.state.token;
    let inldType = this.state.nlfs;
    let cabDisp = this.props.rows.cabDisp;
    let dj=this.props.rows.allDepo;
    let rye=this.props.cabnewr.residual;
    let mye=this.props.cabnewr.resiUsd;
    if (this.state.checked) {
      if(this.props.rows.curr==1){
        if(dj>rye){//人民币定金大于余额
          message.error("余额不足请去平台充值后购买!");
        }else{
          this.props.actions.putcabDispsbuy(userName, token, cabDisp, inldType);   //购买舱位
          this.props.buyonClose();
        }
      }else{
        if(dj>mye){//美元定金大于余额
          message.error("余额不足请去平台充值后购买!");
        }else{
          this.props.actions.putcabDispsbuy(userName, token, cabDisp, inldType);   //购买舱位
          this.props.buyonClose();
        }
      }
    }else {
      message.error('请先阅读相关文件！');
    }
    // if(this.props.rows.curr==1){
    //   if(dj>rye){//人民币定金大于余额
    //     message.error("余额不足请去平台充值后购买!");
    //   }else{
    //     this.props.actions.putcabDispsbuy(userName, token, cabDisp, inldType);   //购买舱位
    //     this.props.buyonClose();
    //   }
    // }else{
    //   if(dj>mye){//美元定金大于余额
    //     message.error("余额不足请去平台充值后购买!");
    //   }else{
    //     this.props.actions.putcabDispsbuy(userName, token, cabDisp, inldType);   //购买舱位
    //     this.props.buyonClose();
    //   }
    // }
  }
  lvChange(e) {
    this.setState({
      checked: e.target.checked
    })
  }
  lvcl() {
    this.setState({
      islv: true
    })
  }
  lvclc() {
    this.setState({
      islv: false
    })
  }
  render() {
    return (
      <div className="cabzzc">
        <div className="cabbuy">
          <div className="cabtile">
            <span>购买供舱舱位-{this.props.rows.cabDisp}</span>
            <a href="javascript:void(0);" className="cabbuy1" onClick={this.props.buyonClose}>取消</a>
            <a href="javascript:void(0);" className="cabbuy2" onClick={this.buyonClick}>确认购买</a>
          </div>
          <div className="cabbuy3">
            <h4>内陆运输方式</h4>
            <Select showSearch
                    value={this.state.nlfs}
                    className="cabbuy4"
                    optionFilterProp="children"
                    notFoundContent="无法找到"
                    placeholder="请选择内陆方式"
                    onChange={(v)=>{return this.setState({nlfs:v})}}
            >
              {
                this.props.cabnewr.nlfw.map(s => <Option key={s.serv}>{s.servName}</Option>)
              }
            </Select>
          </div>
          <div className="cabbuy3">
            <h4>定金:</h4>
            <p>{this.props.rows.curr==1?'¥':'$'} {this.props.rows.allDepo}</p>
          </div>
          <div className="cabbuy3">
            <h4>账户余额:</h4>
            <div className="cabbuy6">
              <div className="cabbuy7">
                ¥{this.props.cabnewr.residual}
              </div>
              <div className="cabbuy7">
                ${this.props.cabnewr.resiUsd}
              </div>
            </div>
          </div>
          <div className="getxp7s">
            <div className="getxp7">
              <div className="getxp8">
                  <a href="javascript:void(0);" onClick={this.lvcl}>请先浏览《求舱协议》</a>
              </div>
              <div className="getxp9">
                  <Checkbox checked={this.state.checked}
                            onChange={this.lvChange}
                  >
                    我已阅读，并接受。
                  </Checkbox>
              </div>
            </div>
          </div>
          {
            this.state.islv ?
              <div className="getxp10s">
                <div className="getxp11">
                  <h2>为解决货运舱位的不确定，完善行业内信用体制。 请遵守以下协议：</h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;1.贵方所有帐号在物贸帮帮网站上的所有动作均代表贵方企业意愿并承担相应法律责任。贵方公司管理员账号是与贵方签订的书面协议里的账号，如有变更公司管理员，以新的公司管理员为准。 <br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2.贵方需预充一定金额的资金给甲方，用于与贵方供舱方的舱位保函定金，以及平台费用。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;3.贵方供舱方的内陆运输方式为“求舱方安排车队”时，贵方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方不利。车队提不到空箱的认定条件为：如提不到空箱，需立即与贵方供舱方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方供舱方确认无空箱，则贵方未违约。如贵方有提箱需求的书面信息给贵方供舱方，供舱方未回复的。由平台进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;4.贵方供舱方的内陆运输方式为“供舱方安排车队”时，贵方供舱方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方供舱方不利。车队提不到空箱的认定条件为：如提不到空箱，贵方供舱方需立即与贵方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方确认无空箱，则贵方供舱方未违约。如贵方供舱方有提箱需求的书面信息给贵方，贵方未回复的。由平台进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;5.贵方通过线上产品求购舱位后，与贵方供舱方形成有效的舱位保函协议。双方在平台押入了相同金额的定金，舱位保函在求购成功后有效。贵方在两个小时内，可无责点击“退关”，无违约费用。如超过两小时之后，在最晚退关时间之前点击“退关”，贵方将产生30人民币的平台服务费。当超过最晚退关时间点击“退关”或者违约时，贵方视为违约。当求供舱双方有一方违约时，违约一方将押款的80%交于未违约方作为补偿，20%交于平台作为平台服务费用。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;6.当求供舱双方都确认对方履约后，则平台自动退回所押定金返还给双方。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;7.当贵方多次出现违约情况，平台将予以警告，并酌情考虑其是否继续使用该产品。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;8.当贵方在平台上的充值余额不足时，请及时充入，确保业务的顺利开展。<br /><br />
                        <h2>特别说明：</h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;1.选择“货物进仓”的内陆运输方式：如遇货物查验或者运输工具临时取消时，以及仓库提不到空箱，则视为特殊情况，求供舱双方互不违约。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2.选择“求舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，求供舱双方互不违约。如选择供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于贵方供舱方违约。但贵方必须在提不到箱子时候第一时间联系贵方供舱方，如两个小时内供舱方不能解决空箱提取，则视为贵方供舱方违约。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;3.选择“供舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，求供舱双方互不违约。如选择供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于贵方供舱方违约。<br /><br />
                
                  &nbsp;&nbsp;&nbsp;&nbsp;4.履约条件是“货物上运输工具”，即意味着供舱方必须保证箱子和舱位，任意一项违约即为供舱方违约。除非在免责条款里说明的事项。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;5.货物查验或者运输工具临时取消发生的违约，属于求供舱双方互不违约。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;6.平台对违约以及各项条款有最终解释权。<br /><br />
                </div>
                <a className="getxp12" href='javascript:void(0);' onClick={this.lvclc}>关闭</a>
              </div> : undefined
          }
        </div>
        
      </div>
    )
  }
}
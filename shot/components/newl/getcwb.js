/**
 * Created by Zing on 2018/2/26.
 */
import React, { Component } from 'react';
import { Select, message, Checkbox } from 'antd';
const Option = Select.Option;

export default class Getcwb extends Component {
  constructor(props) {
    super(props);
    this.handce = this.handce.bind(this);
    this.handse = this.handse.bind(this);
    this.cwbqr = this.cwbqr.bind(this);
    this.cwbgb = this.cwbgb.bind(this);
    this.lvChange = this.lvChange.bind(this);
    this.lvcl = this.lvcl.bind(this);
    this.lvclc = this.lvclc.bind(this);
    this.state = {
      userName: sessionStorage.getItem("SESSIONUSERACC"),
      token: sessionStorage.getItem("SESSIONTOKEN"),
      ser: '',
      servName: '',
      checked: true,
      islv: false
    }
  }
  handce(v) {
    this.setState({
      ser: v
    });
  }
  handse(v, e) {
    let vary;
    vary = e.props.date.split('-');
    this.setState({
      ser: vary[0],
      servName: vary[1]
    });
  }
  lvChange(e) {
    this.setState({
      checked: e.target.checked
    })
  }
  cwbqr() {
    if (this.state.checked) {
      if (this.state.ser != '') {
        this.props.fonClick(this.state.ser, this.state.servName);
        this.props.linkcwbc();
      } else {
        message.error('请先选择服务种类！');
      }
    } else {
      message.error('请先阅读相关文件！');
    }
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
  cwbgb() {
    this.props.linkcwbc();
  }
  componentDidMount() {
    this.props.actions.getfwlxcwb(this.state.userName, this.state.token);
    this.props.actions.getbhr(this.state.userName, this.state.token, this.state.userid, this.state.comp);//获取收款列表收款人.
  }
  render() {
    let newArr = this.props.cabmynew.fwlxarycwb.filter(function (s, i) {
      if (s.servName == 'FCL' || s.servName == 'DG' || s.servName == 'FR' || s.servName == 'HG' || s.servName == 'OT') {
        return s;
      }
    });
    console.log(this.props.text);
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
                  newArr.map((s) => {
                    let sr = s.serv + '-' + s.servName;
                    return <Option date={sr} key={s.serv}>{s.servName}</Option>
                  })
                }
              </Select>
            </div>
            <div className="getxp7">
              <div className="getxp8">
                <a href="javascript:void(0);" onClick={this.lvcl}>请先浏览《供舱方协议》</a>
                {/* 供舱方发起的 供舱方协议 */}
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
              <a className="getxp6" href='javascript:void(0);' onClick={this.cwbqr}>确认</a>
              <a className="getxp6" href='javascript:void(0);' onClick={this.cwbgb}>关闭</a>
            </div>
          </div>
          {
            this.state.islv ?
              <div className="getxp10">
                <div className="getxp11">
                  <h2>为解决货运舱位的不确定，完善行业内信用体制。 请遵守以下协议：</h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;1.贵方所有帐号在物贸帮帮网站上的所有动作均代表贵方企业意愿并承担相应法律责任。贵方公司管理员账号是与贵方签订的书面协议里的账号，如有变更公司管理员，以新的公司管理员为准。 <br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2.贵方需提供一定金额的押金给平台，用于与贵方求舱方的舱位保函的定金，每次的定金数额由贵方来定。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;3.贵方发布现成舱位，包含箱型、运价、定金、运价有效期、船期等有效信息后，发布在平台，在有效期内，其他求舱方用户可以求购。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;4.如贵方在选择内陆运输为“求舱方安排车队”后，则贵方求舱方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方求舱方不利。车队提不到空箱的认定条件为：如提不到空箱，贵方求舱方需立即与贵方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方确认无空箱，则贵方求舱方未违约。如贵方求舱方有提箱需求的书面信息给贵方，贵方未回复的。由平台进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;5.如供舱方在选择内陆运输为“供舱方安排车队”后，贵方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方不利。车队提不到空箱的认定条件为：如提不到空箱，需立即与贵方求舱方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方求舱方确认无空箱，则贵方未违约。如贵方有提箱需求的书面信息给贵方求舱方，贵方求舱方未回复的。由平台进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;6.贵方求舱方在保函成立之时，两个小时内，可无责点击“退关”，无违约费用。如超过两小时之后，在最晚退关时间之前点击“退关”，贵方求舱方将产生平台服务费。当超过最晚退关时间点击“退关”或者违约时，贵方求舱方视为违约，则贵方求舱方的定金罚没。平台将贵方求舱方的80%的定金补偿给贵方。如贵方违约，贵方的定金将被罚没，20%交于甲方作为平台费用。80%补偿给贵方求舱方。当双方都违约，或者遇到第三方等非人为所控的因素造成违约，平台也视为求供舱双方不违约。。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;7.当求供舱双方顺利完成交易，确认对方都已履约后，则平台自动退回所押定金给双方。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;8.当贵方多次出现违约情况，平台将予以警告，并酌情考虑其是否继续使用该产品。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;9.通过平台所做的舱位保函，如贵方选择“货物进仓”，则贵方或者贵方的求舱方必须使用平台指定的仓库。仓库费用是由平台与贵方或者贵方求舱方结算。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;10.一旦舱位保函成立，贵方不得无故随意变动价格，价格变动必须经贵方求舱方接受。否则经贵方求舱方投诉后，贵方将会按违约处理，情节严重将列入平台黑名单。<br /><br />
                        <h2>特别说明：</h2>
                  &nbsp;&nbsp;&nbsp;&nbsp;1.选择“货物进仓”的内陆方式：如遇货物查验或者运输工具临时取消时，以及仓库提不到空箱，则视为特殊情况，双方互不违约。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;2.选择“求舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，双方互不违约。如求舱方选择供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于供舱方违约。但求舱方必须在提不到箱子时候第一时间联系供舱方，如两个小时内供舱方不能解决空箱提取，则视为供舱方违约。选择“求舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，双方互不违约。如求舱方选择供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于供舱方违约。但求舱方必须在提不到箱子时候第一时间联系供舱方，如两个小时内供舱方不能解决空箱提取，则视为供舱方违约。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;3.选择“供舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，双方互不违约。如求舱方选择供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于供舱方违约。<br /><br />
                
                  &nbsp;&nbsp;&nbsp;&nbsp;4.履约条件是“货物上运输工具”，即意味着供舱方必须保证箱子和舱位，任意一项违约即为供舱方违约。除非在免责条款里说明的事项。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;5.货物查验或者运输工具临时取消发生的违约，属于求供舱双方互不违约。<br /><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;6.平台对违约以及各项条款有最终解释权。<br /><br />
                </div>
                <a className="getxp12" href='javascript:void(0);' onClick={this.lvclc}>关闭</a>
              </div> : undefined
          }
        </div>
      </div>
    );
  }
}
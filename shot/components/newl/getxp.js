/**
 * Created by Zing on 2017/2/28.
 */
import React, { Component } from 'react';
import { Select, Checkbox, message } from 'antd';
import { Link } from 'react-router';
const Option = Select.Option;

export default class Getxp extends Component {
    constructor(props) {
        super(props);
        this.xpqr = this.xpqr.bind(this);
        this.xpgb = this.xpgb.bind(this);
        this.handce = this.handce.bind(this);
        this.handse = this.handse.bind(this);

        this.lvcl = this.lvcl.bind(this);
        this.lvclc = this.lvclc.bind(this);
        this.lvChange = this.lvChange.bind(this);
        
        this.state = {
            userName: sessionStorage.getItem("SESSIONUSERACC"),
            token: sessionStorage.getItem("SESSIONTOKEN"),
            userid: sessionStorage.getItem("SESSIONUSER"),
            comp: sessionStorage.getItem("SESSIONCOMP"),
            ser: '',
            servName: '',
            servType: '',
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
            servName: vary[1],
            servType: vary[2]
        });
    }
    xpqr() {
        if(this.state.checked) {
            this.props.handqr(this.state.ser, this.state.servName, this.state.servType);
            this.props.linkxpc();
        }else {
            message.error('请先阅读相关文件！');
        }
    }
    xpgb() {
        this.props.linkxpc();
    }
    componentDidMount() {
        this.props.actions.getser(this.state.userName, this.state.token, 1);//获取服务
        this.props.actions.getxpeo(this.state.userName, this.state.token, this.state.userid, this.state.comp);//获取询盘人列表
        this.props.actions.getports(this.state.userName, this.state.token);//获取港口
        this.props.actions.getccto(this.state.userName, this.state.token, this.state.comp);//获取抄送
        this.props.actions.getwtuo(this.state.userName, this.state.token, this.state.comp);//获取委托人
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
    lvChange(e) {
        this.setState({
          checked: e.target.checked
        })
      }
    render() {
        return (
            <div className="getxp">
                <div className="getxp1">
                    <a className="getxp2" href='javascript:void(0);' onClick={this.props.linkxpc}>X</a>
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
                                    this.props.getdetil.xser.map((s) => {
                                        let sr = s.serv + '-' + s.servName + '-' + s.servType;
                                        return <Option date={sr} key={s.serv}>{s.servName}</Option>
                                    })
                                }
                            </Select>
                        </div>
                        <div className="getxp5">
                            <a className="getxp6" href='javascript:void(0);' onClick={this.xpqr}>确认</a>
                            <a className="getxp6" href='javascript:void(0);' onClick={this.xpgb}>关闭</a>
                        </div>
                        <div className="getxp7">
                            <div className="getxp8">
                                <a href="javascript:void(0);" onClick={this.lvcl}>请先浏览《求舱方协议》</a>
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
                            <div className="getxp10">
                                <div className="getxp11">
                                    <h2>为解决货运舱位的不确定，完善行业内信用体制。 请遵守以下协议：</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;1.贵方所有帐号在物贸帮帮网站上的所有动作均代表贵方企业意愿并承担相应法律责任。贵方公司管理员账号是与贵方签订的书面协议里的账号，如有变更公司管理员，以新的公司管理员为准。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;2.贵方需预充一定金额的资金给平台，用于与贵方供舱方的舱位保函定金，以及平台费用。 <br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;3.贵方在选择内陆运输为“求舱方安排车队”后，需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方不利。车队提不到空箱的认定条件为：如提不到空箱，需立即与贵方供舱方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方供舱方确认无空箱，则求舱方未违约。如贵方有提箱需求的书面信息给贵方供舱方，贵方供舱方未回复的。由甲方进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;4.贵方在选择内陆运输为“供舱方安排车队”后，贵方供舱方需要录入准确的车牌号和司机手机号，否则日后如有纠纷，对贵方供舱方不利。车队提不到空箱的认定条件为：如提不到空箱，需立即与贵方发送手机短信、EMAIL、微信等书面信息，并打电话确认是否无空箱，如贵方确认无空箱，则贵方供舱方未违约。如贵方供舱方有提箱需求的书面信息给贵方，贵方未回复的。由平台进行调查，确定是否违约。贵方如有不服，可向平台所在地仲裁。（供舱方履约条件为“货物上运输工具”的除外）<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;5.贵方通过线上产品发出“确保舱位要求”后，当有供舱方回复并报以价格，贵方可点中标与其形成有效的舱位保函协议。则双方在平台押入相同金额的定金。贵方在两个小时内，可无责点击“退关”，无违约费用。如超过两小时之后，在最晚退关时间之前点击“退关”，贵方将产生30人民币的平台服务费。当超过最晚退关时间点击“退关”或者违约时，贵方视为违约。当求供双方有一方违约时，违约一方将押款的80%交于未违约方作为补偿，20%交于平台作为平台服务费用。当双方都违约，或者遇到第三方等非人为所控的因素造成违约，平台也视为求供舱双方不违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;6.当贵方与贵方供舱方都确认对方履约后，则平台自动退回所押定金。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;7.当贵方多次出现违约情况，平台将予以警告，并酌情考虑其是否继续使用该产品<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;8.当贵方在甲方的平台上的充值余额不足时，请及时充入，确保业务的顺利开展。<br /><br />
                                    
                                    <h2>特别说明：</h2>
                                    &nbsp;&nbsp;&nbsp;&nbsp;1.选择“货物进仓”的内陆方式：如遇货物查验或者运输工具临时取消时，以及仓库提不到空箱，则视为特殊情况，求供舱双方互不违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;2.选择“求舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，双方互不违约。如贵方选择贵方供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于贵方供舱方违约。但贵方必须在提不到箱子时候第一时间联系供舱方，如两个小时内贵方供舱方不能解决空箱提取，则视为贵方供舱方违约。<br /><br />
                                    &nbsp;&nbsp;&nbsp;&nbsp;3.选择“供舱方安排车队”的内陆方式：如遇货物查验或者运输工具临时取消时，以及车队提不到空箱，则视为特殊情况，求供舱双方互不违约。如贵方选择贵方供舱方履约条件为“货物上运输工具”，车队提不到空箱不能视为特殊情况，属于贵方供舱方违约。<br /><br />

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
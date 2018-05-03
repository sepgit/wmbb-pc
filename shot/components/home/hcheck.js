/**
 * Created by Zing on 2017/10/24.
 */
import React,{Component} from 'react';

export default class Hcheck extends Component {
    constructor(props) {
        super(props);
        this.handgr= this.handgr.bind(this);
        this.handgrc= this.handgrc.bind(this);
        this.state={
            isgr:0
        }
    }
    handgr(){
        this.setState({
            isgr:1
        })
    }
    handgrc(){
        this.setState({
            isgr:2
        })
    }
    render() {
        return (
            <div className="hckall">
                <div className="hcklogo">
                    <img src={require('../../src/image/logoimg.png')} />
                </div>
                <div className="hcktitle">物贸帮帮</div>
                <div className="hcktitle_one">认证会员权益</div>
                <div className="hckexplain">
                    <div className="hckphone">
                        <span>如有任何疑问，请联系平台客服 ：谢 彬 13780008543</span>
                    </div>
                    <div className="hckcontent_one">
                        <div className="hcktitle_two">个人认证会员及其权益</div>
                        <ul>
                            <li>a.免费开通询盘和咨询的自动平台匹配功能，可以让平台内有优势的供应商收到您的需求；</li>
                            <li>b.免费查询物贸BAIDU里的搜索信息，包括普通运价优势，特种运价优势，以及服务优势；</li>
                            <li>c.当询盘和咨询时，免费获得自动推送的优势，高效查询和管理供应商及客户信息；</li>
                            <li>d.免费帮会员在平台展示一组优势，优先展示给所有用户；</li>
                            <li>e.WMBB客服开设VIP通道为会员提供各种对接和咨询服务、以及法律、纠纷方面的咨询，认证会员可查看所有已认证公司和个人的信息；</li>
                            <li>f.在与会员的企业签定合同后，可免费开通收款宝的权限；</li>
                            <li>g.可免费选一组优势作为平台自动推送，在其他用户询盘或者咨询时，自动发送推广；</li>
                            <li>h.享受WMBB的平台供应商，可免费挑选一组优势，作为该优势的平台供应商，平台供应商可在平台上收到该优势的所有询盘或者咨询，方便接触到潜在客户；</li>
                            <li>I.可参与每次俱乐部活动，实行AA制。</li>
                        </ul>
                    </div>
                    <div className="hckcontent_one">
                        <div className="hcktitle_two">公司认证会员及其权益</div>
                        <ul>
                            <li>a.免费开通询盘和咨询的自动平台匹配功能，可以让平台内有优势的供应商收到您的需求；</li>
                            <li>b.免费查询物贸BAIDU里的搜索信息，包括普通运价优势，特种运价优势，以及服务优势；</li>
                            <li>c.当询盘和咨询时，免费获得自动推送的优势，高效查询和管理供应商及客户信息；</li>
                            <li>d.免费帮会员在平台展示一组优势，优先展示给所有用户；</li>
                            <li>e.WMBB客服开设VIP通道为会员提供各种对接和咨询服务、以及法律、纠纷方面的咨询，认证会员可查看所有已认证公司和个人的信息，并赠送公司会员十个公司内认证账号；</li>
                            <li>f.在与会员的企业签定合同后，可免费开通收款宝的权限；</li>
                            <li>g.可免费选一组优势作为平台自动推送，在其他用户询盘或者咨询时，自动发送推广；</li>
                            <li>h.享受WMBB的平台供应商，可免费挑选一组优势，作为该优势的平台供应商，平台供应商可在平台上收到该优势的所有询盘或者咨询，方便接触到潜在客户；</li>
                            <li>I.可参与每次俱乐部活动，实行AA制。</li>
                        </ul>
                    </div>
                </div>
                <div className="hckpayment_information">
                    <div className="hcktitle_three">请确认付款信息</div>
                    <div className="hckline"> </div>
                    <div className="hcktitle_two">请选择认证类型：</div>
                    <div>
                        <span className="hckbutton_one"><button className="hckbutton" onClick={this.handgr}>个人认证</button></span>
                        <span className="hckbutton_one"><button className="hckbutton" onClick={this.handgrc}>公司认证</button></span>
                        {
                            this.state.isgr==1?
                                <div className="hckprice_one">
                                    <span className="hckbutton_two"><button className="hckbutton">￥40 / 月</button></span>
                                    <span className="hckbutton_two"><button className="hckbutton">￥100 / 季度</button></span>
                                    <span className="hckbutton_two"><button className="hckbutton">￥268 / 年</button></span>
                                </div>:this.state.isgr==2?
                                <div className="hckprice_two">
                                    <span className="hckbutton_two"><button className="hckbutton">￥1688 / 月</button></span>
                                    <span className="hckbutton_two"><button className="hckbutton">￥2888 / 季度</button></span>
                                    <span className="hckbutton_two"><button className="hckbutton">￥6888 / 年</button></span>
                                </div>:undefined
                        }
                    </div>
                    <div className="hckline"> </div>
                    <div className="hcktitle_two">支付方式</div>
                    <div>
                        <span className="hckbutton_one"><button className="hckbutton">微信支付</button></span>
                    </div>
                    <div className="hckcode">
                        <img src={require('../../src/image/erweima.png')}/>
                    </div>
                    <div className="hcktitle_four">
                        支付时，请注明公司或者联系方式！
                    </div>
                    <div className="hcktitle_four">
                        <span onClick={this.props.handckqyc}>关闭</span>
                    </div>
                </div>
                <div className="hckphone_two">
                    如有任何疑问，请联系平台客服 ：谢 彬 13780008543
                </div>
            </div>
        );
    }
}
/**
 * Created by Zing on 2016/12/30.
 */
import React,{Component} from 'react';
import Xptsfwli from './xptsfwli';
import Addgysfw from './addgysfw';
import Fwdel from './fwdel';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Xptsfw extends Component {
    constructor(props) {
        super(props);
        this.handtsc=this.handtsc.bind(this);
        this.handxq=this.handxq.bind(this);
        this.handxqc=this.handxqc.bind(this);
        this.handgys=this.handgys.bind(this);
        this.handgysc=this.handgysc.bind(this);
        this.state={
            fwxq:false,
            fwgys:false
        }
    }
    handxq(){
        this.setState({
            fwxq:true
        })
    }
    handxqc(v){
        this.setState({
            fwxq:false
        })
    }
    handgys(){
        this.setState({
            fwgys:true
        })
    }
    handgysc(){
        this.setState({
            fwgys:false
        })
    }
    handtsc(){
        this.props.actions.getgbtsfw();//关闭推送
    }
    render() {
        return (
            <div className="xpts">
                <div className="xpts1">
                    <a href="javascript:void(0);" onClick={this.handtsc}>x</a>
                </div>
                <div className="xpts2">
                    <div className="xpts3">
                        <img src={require('../../src/image/yes.png')}/>
                        <h1>咨询发送成功</h1>
                    </div>
                </div>
                {
                    this.props.text.user.pushCont == 1 ?
                        <div className="xpts4">
                            您可能需要的供应商,价格（服务）按“详情”马上参考
                        </div>:undefined
                }
                {
                    this.props.text.user.pushCont == 1 ?
                        <div className="xpts5">
                            <ul>
                                <VelocityTransitionGroup enter={{animation: "fadeIn", duration: 1000}}
                                                         leave={{animation: "fadeOut"}}>
                                    {
                                        this.props.zxinfo.fwys.map((item, index) => {
                                            return <Xptsfwli key={index}
                                                             keys={index}
                                                             rows={item}
                                                             handxq={this.handxq}
                                                             handgys={this.handgys}
                                                             actions={this.props.actions}
                                                             zxinfo={this.props.zxinfo}
                                            />
                                        })
                                    }
                                </VelocityTransitionGroup>
                            </ul>
                        </div>:<div className="xpts5">您如想平台给您推荐供应商，请联系平台客服张先生 手机（微信）：13505741577</div>
                }
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.fwxq? <Fwdel handxqc={this.handxqc}
                                                actions={this.props.actions}
                                                zxinfo={this.props.zxinfo}/>:undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.fwgys? <Addgysfw handgysc={this.handgysc}
                                                actions={this.props.actions}
                                                zxinfo={this.props.zxinfo}/>:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}
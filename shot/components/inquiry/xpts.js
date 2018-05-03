/**
 * Created by Zing on 2016/12/30.
 */
import React,{Component} from 'react';
import Xptsli from './xptsli';
import Yjdel from './yjdel';
import Tzhdel from './tzhdel';
import Addgys from './addgys';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Xpts extends Component {
    constructor(props) {
        super(props);
        this.handtsc=this.handtsc.bind(this);
        this.handxq=this.handxq.bind(this);
        this.handxqc=this.handxqc.bind(this);
        this.handgys=this.handgys.bind(this);
        this.handgysc=this.handgysc.bind(this);
        this.state={
            yjxq:false,
            tzhxq:false,
            isgys:false,
            userid:0
        }
    }
    handgys(v){
        this.setState({
            isgys:true,
            userid:v
        })
    }
    handgysc(){
        this.setState({
            isgys:false,
            userid:0
        })
    }
    handxq(v){
        if(v==1){
            this.setState({
                yjxq:true
            })
        }else if(v==3){
            this.setState({
                tzhxq:true
            })
        }
    }
    handxqc(v){
        if(v==1){
            this.setState({
                yjxq:false
            })
        }else if(v==3){
            this.setState({
                tzhxq:false
            })
        }
    }
    handtsc(){
        this.props.actions.getgbts();
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
                        <h1>询盘发送成功</h1>
                    </div>
                </div>
                {
                    this.props.text.user.pushAdva==1?
                    <div className="xpts4">
                        您可能需要的供应商,价格（服务）按“详情”马上参考
                    </div>:undefined
                }
                {
                    this.props.text.user.pushAdva == 1 ?
                        <div className="xpts5">
                            <ul>
                                <VelocityTransitionGroup enter={{animation: "fadeIn", duration: 1000}}
                                                         leave={{animation: "fadeOut"}}>
                                    {
                                        this.props.servType == 1 ?
                                            this.props.getnewlist.tspuys.map((item, index) => {
                                                return <Xptsli key={index}
                                                               keys={index}
                                                               rows={item}
                                                               handgys={this.handgys}
                                                               handxq={this.handxq}
                                                               servType={this.props.servType}
                                                               actions={this.props.actions}
                                                               getnewlist={this.props.getnewlist}
                                                />
                                            }) :
                                            this.props.servType == 3 ?
                                                this.props.getnewlist.tstzx.map((item, index) => {
                                                    return <Xptsli key={index}
                                                                   keys={index}
                                                                   rows={item}
                                                                   handgys={this.handgys}
                                                                   handxq={this.handxq}
                                                                   servType={this.props.servType}
                                                                   actions={this.props.actions}
                                                                   getnewlist={this.props.getnewlist}
                                                    />
                                                }) : undefined
                                    }
                                </VelocityTransitionGroup>
                            </ul>
                        </div>:<div className="xpts5">您如想平台给您推荐供应商，请联系平台客服张先生 手机（微信）：13505741577</div>
                }
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.yjxq?
                            <Yjdel actions={this.props.actions}
                                   servType={this.props.servType}
                                   handxqc={this.handxqc}
                                   getnewlist={this.props.getnewlist}/>:undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.tzhxq?
                            <Tzhdel actions={this.props.actions}
                                    servType={this.props.servType}
                                    handxqc={this.handxqc}
                                   getnewlist={this.props.getnewlist}/>:undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.isgys?
                            <Addgys actions={this.props.actions}
                                    handgysc={this.handgysc}
                                    userid={this.state.userid}
                                    getnewlist={this.props.getnewlist}/>:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}
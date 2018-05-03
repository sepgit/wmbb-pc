/**
 * Created by Zing on 2016/8/10.
 */
import React,{Component} from 'react';
import AzxList from './azxli';
import Anewadd from './anewadd';
import Xptsfw from './xptsfw';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class AnewList extends Component {
    constructor(props) {
        super(props);
        this.handright=this.handright.bind(this);
        this.handleft=this.handleft.bind(this);
        this.handadd=this.handadd.bind(this);
        this.handclose=this.handclose.bind(this);
        this.showdate=this.showdate.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            nowLocal:0,
            cwith:9999,
            isshow:false,
            addindex:0,
            tiname:''
        }
    }
    showdate(s){
        this.setState({
            isshow:s
        });
    }
    handclose(){
        this.setState({
            isshow:false
        });
    }
    handadd(e){
        this.setState({
            isshow:true,
            addindex:e.target.getAttribute('value'),
            tiname:e.target.getAttribute('title')
        });
        this.props.actions.getzxportszj(this.state.userName,this.state.token,e.target.getAttribute('value'));//获取最近口岸
        this.props.actions.getzxportsf(this.state.userName,this.state.token,e.target.getAttribute('value'));//获取该服务的口岸
    }
    handleft(){
        let counts=Math.ceil(this.props.zxinfo.zxlist.length/5);
        let allwith=610*counts;
        let n=this.state.nowLocal;
        if(n<0){
            n+=610;
            this.setState({
                nowLocal:n,
                cwith:allwith
            })
        }
    }
    handright(){
        let counts=Math.ceil(this.props.zxinfo.zxlist.length/5);
        let allwith=610*counts;
        let _n=Math.abs(this.state.nowLocal)+610;
        let n=this.state.nowLocal;
        if(_n<allwith){
            n-=610;
            this.setState({
                nowLocal:n,
                cwith:allwith
            })
        }
    }
    render() {
        let re=this.props.zxinfo.zxlist;
        return (
            <div className="adda2">
                <a className="tleft" href="javascript:void(0);" onClick={this.handleft}></a>
                <div className="retuns">
                    <ul className="add2ul" style={{
                        left: this.state.nowLocal,
                        transitionDuration: 1.5 + "s",
                        width: this.state.cwith
                    }}>
                        {
                            re.map((item,index)=>{
                                return <AzxList
                                    key={index}
                                    keys={index}
                                    rows={item}
                                    handadd={this.handadd}
                                    />
                            })
                        }
                    </ul>
                </div>
                <a className="tright" href="javascript:void(0);" onClick={this.handright}></a>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.isshow? <Anewadd
                            text={this.props.text}
                            adindex={this.state.addindex}
                            tiname={this.state.tiname}
                            handclose={this.handclose}
                            showdate={this.showdate}
                            zxinfo={this.props.zxinfo}
                            actions={this.props.actions}
                            /> : undefined
                    }
                </VelocityTransitionGroup>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.props.zxinfo.xptsfw?
                            <Xptsfw actions={this.props.actions}
                                  zxinfo={this.props.zxinfo}
                                />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}
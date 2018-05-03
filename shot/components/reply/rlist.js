/**
 * Created by Administrator on 2016/8/4.
 */
import React,{Component} from 'react';
import Relistall from './rlistall';
import Raddzx from './raddzx';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Replylists extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.renderList=this.renderList.bind(this);
        this.handzf=this.handzf.bind(this);
        this.handzfc=this.handzfc.bind(this);
        this.handbzcz=this.handbzcz.bind(this);
        this.state={
            userName : sessionStorage.getItem("SESSIONUSERACC"),
            token : sessionStorage.getItem("SESSIONTOKEN"),
            Hes:0,
            page:1,
            hhs:[],
            iszf:false
        }
    }
    handbzcz(){
        let re=[];
        this.state.page==1?re=this.props.replays.hflist:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let hfl='hfl'+index;
            THIS.refs[hfl].setState({
                hfbz:false
            })
        })
    }
    handzf(){
        //详情转发
        this.setState({
            iszf:true
        });
    }
    handzfc(){
        //详情转发
        this.setState({
            iszf:false
        });
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        this.props.actions.gethflistc(userName,token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.replays.hflist:re=this.state.hhs;
        if(re.length==0){
            return <li className="replisone">该列表暂无记录，您还没收到任何咨询，请先录入您的优势，并让您的客户在他的供应商列表里添加您。</li>;
        }else {
            return re.map((item, index) => {
                let hfl = 'hfl' + index;
                return <Relistall
                    ref={hfl}
                    key={index}
                    keys={index}
                    rows={item}
                    handzf={this.handzf}
                    text={this.props.text}
                    actions={this.props.actions}
                    replays={this.props.replays}
                    shows={this.props.shows}
                    handbzcz={this.handbzcz}
                    />
            });
        }
    }
    handleScroll(v){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.gethflistgd(userName, token, this.state.page, ...this.props.Fstate);//获取搜索条件
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.replays.hflist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="replylist" onWheel={this.handleScroll}>
                <ul className="replylistul">
                    <li className="reply1">
                        <ul>
                            <li>姓名</li>
                            <li>公司</li>
                            <li>口岸</li>
                            <li>具体服务</li>
                            <li>回复时间</li>
                            <li>状态</li>
                        </ul>
                    </li>
                    <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                        {
                            this.renderList()
                        }
                    </VelocityTransitionGroup>
                    <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                        {
                            this.state.iszf?
                                <Raddzx
                                    actions={this.props.actions}
                                    replays={this.props.replays}
                                    text={this.props.text}
                                    handzfc={this.handzfc}
                                    /> :
                                undefined
                        }
                    </VelocityTransitionGroup>
                </ul>
            </div>
        );
    }
}
/**
 * Created by Zing on 2016/11/22
 */
import React,{Component} from 'react';
import Palistall from './palistall';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Palist extends Component {
    constructor(props) {
        super(props);
        this.renderList=this.renderList.bind(this);
        this.handleScroll=this.handleScroll.bind(this);
        this.handcbc=this.handcbc.bind(this);
        this.state={
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    handcbc() {
        let re=[];
        this.state.page==1?re=this.props.pays.sklist:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let ckl='ckl'+index;
            THIS.refs[ckl].setState({
                iscb:false,
                zt:'',
                EnquStat:''
            })
        })
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        this.props.actions.getsklc(userName,token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.pays.sklist:re=this.state.hhs;
        return re.map((item,index) => {
            let ckl='ckl'+index;
            return <Palistall ref={ckl}
                              key={index}
                              keys={index}
                              rows={item}
                              shows={this.props.shows}
                              actions={this.props.actions}
                              pays={this.props.pays}
                />
        })
    }
    handleScroll(v){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getcklg(userName, token, this.state.page, ...this.props.Fstate);//获取搜索条件
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.pays.sklist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="pali" onWheel={this.handleScroll}>
                <ul className="pali1">
                    <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                        {
                            this.renderList()
                        }
                    </VelocityTransitionGroup>
                </ul>
            </div>
        );
    }
}
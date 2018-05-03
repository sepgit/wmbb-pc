/**
 * Created by Zing on 2016/8/11.
 */
import React,{Component} from 'react';
import Adlistall from './alistall';
import Azfaddnew from './azfaddnew';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Adlists extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.renderList=this.renderList.bind(this);
        this.handcbc=this.handcbc.bind(this);
        this.handzf=this.handzf.bind(this);
        this.handzfc=this.handzfc.bind(this);
        this.handbzcz=this.handbzcz.bind(this);
        this.state={
            Hes:0,
            page:1,
            hhs:[],
            iszf:false
        }
    }
    handbzcz(){
        let re=[];
        this.state.page==1?re=this.props.zxinfo.zxlists:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let zxl='zxl'+index;
            THIS.refs[zxl].setState({
                zxbz:false
            })
        })
    }
    handzf(v){
        this.setState({
            iszf:true
        });
    }
    handzfc(){
        this.setState({
            iszf:false
        });
    }
    handcbc() {
        let re=[];
        this.state.page==1?re=this.props.zxinfo.zxlists:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let zxl='zxl'+index;
            THIS.refs[zxl].setState({
                iscb:false,
                zt:'',
                EnquStat:''
            })
        })
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        this.props.actions.getzxlistc(userName,token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.zxinfo.zxlists:re=this.state.hhs;
        if(re.length==0){
            return <li className="zxlisone">该列表暂无记录，请先咨询留下您的咨询记录。</li>;
        }else {
            return re.map((item, index) => {
                let zxl = 'zxl' + index;
                return <Adlistall ref={zxl}
                                  key={index}
                                  keys={index}
                                  rows={item}
                                  handzf={this.handzf}
                                  shows={this.props.shows}
                                  actions={this.props.actions}
                                  zxinfo={this.props.zxinfo}
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
            this.props.actions.getzxlistgd(userName, token, this.state.page, ...this.props.Fstate);//获取搜索条件
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.zxinfo.zxlists
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="zxvlist" onWheel={this.handleScroll}>
                <ul className="zxvlistul">
                    <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                        {
                            this.renderList()
                        }
                    </VelocityTransitionGroup>
                </ul>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.iszf?
                            <Azfaddnew
                                actions={this.props.actions}
                                zxinfo={this.props.zxinfo}
                                text={this.props.text}
                                handzfc={this.handzfc}
                                /> :
                            undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}
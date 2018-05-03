/**
 * Created by Zing on 2016/8/25.
 */
import React,{Component} from 'react';
import Deplistall from './deplistall';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Deplist extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    componentDidMount(){
        this.props.actions.getdjgl(this.state.userName,this.state.token);//初始化列表
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.depl.djlist:re=this.state.hhs;
        return re.map((item, index) => {
            return <Deplistall
                key={index}
                keys={index}
                rows={item}
                actions={this.props.actions}
                depl={this.props.depl}
            />
        })

    }
    handleScroll(v){
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.getdjgd( this.state.userName, this.state.token, this.state.page);
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.depl.djlist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="dep2" onWheel={this.handleScroll}>
                <ul className="dep3">
                    <li className="dep4">
                        <div className="dep6">
                            使用者
                        </div>
                        <div className="dep6">
                            使用处
                        </div>
                        <div className="dep6">
                            收入/支出
                        </div>
                        <div className="dep6">
                            使用时间
                        </div>
                        <div className="dep6">
                            备注
                        </div>
                        <div className="dep6">
                            舱位编号
                        </div>
                    </li>
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
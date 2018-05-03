/**
 * Created by Zing on 2016/8/31.
 */
import React,{Component} from 'react';
import Blistallfcl from './blistallfcl';
import Blistalllcl from './blistalllcl';
import Blistallair from './blistallair';
import Blistallreefer from './blistallreefer';
import Blistallhang from './blistallhang';
import Blistallfr from './blistallfr';
import Blistalldg from './blistalldg';
import Blistallot from './blistallot';
import Blistallbb from './blistallbb';
import Blistallroro from './blistallroro';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';

export default class Blist extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.handbzcz=this.handbzcz.bind(this);
        this.state={
            userName:sessionStorage.getItem("SESSIONUSERACC"),
            token:sessionStorage.getItem("SESSIONTOKEN"),
            comp:sessionStorage.getItem("SESSIONCOMP"),
            Hes:0,
            page:1,
            hhs:[]
        }
    }
    handbzcz(){
        let re=[];
        this.state.page==1?re=this.props.bck.hplists:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let detlc='detlc'+index;
            THIS.refs[detlc].setState({
                hpbz:false
            })
        })
    }
    componentDidMount(){
        this.props.actions.gethplistc(this.state.userName,this.state.token);
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.bck.hplists:re=this.state.hhs;
        if(re.length==0){
            return <li className="bpltone">该列表暂无记录，您还没收到任何询盘，请先录入您的优势，并让您的客户在他的供应商列表里添加您。</li>;
        }else {
            return re.map((item, index) => {
                let detlc='detlc'+index;
                return item.servName == 'FCL' ?
                    <Blistallfcl
                        ref={detlc}
                        handbzcz={this.handbzcz}
                        key={index}
                        keys={index}
                        rows={item}
                        text={this.props.text}
                        actions={this.props.actions}
                        bck={this.props.bck}
                        shows={this.props.shows}
                        cabnew={this.props.cabnew}
                        cabrnew={this.props.cabrnew}
                        hl={this.props.hl}
                        /> : item.servName == 'LCL' ? <Blistalllcl
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    cabnew={this.props.cabnew}
                    cabrnew={this.props.cabrnew}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    hl={this.props.hl}
                    /> : item.servName == 'AIR' ? <Blistallair
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    cabnew={this.props.cabnew}
                    cabrnew={this.props.cabrnew}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    hl={this.props.hl}
                    /> : item.servName == 'HG' ? <Blistallhang
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    cabnew={this.props.cabnew}
                    cabrnew={this.props.cabrnew}
                    hl={this.props.hl}
                    /> : item.servName == 'RF' ? <Blistallreefer
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    hl={this.props.hl}
                    /> : item.servName == 'FR' ? <Blistallfr
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    cabnew={this.props.cabnew}
                    cabrnew={this.props.cabrnew}
                    hl={this.props.hl}
                    /> : item.servName == 'DG' ? <Blistalldg
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    cabnew={this.props.cabnew}
                    cabrnew={this.props.cabrnew}
                    hl={this.props.hl}
                    /> : item.servName == 'OT' ? <Blistallot
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    cabnew={this.props.cabnew}
                    cabrnew={this.props.cabrnew}
                    hl={this.props.hl}
                    /> : item.servName == 'BB' ? <Blistallbb
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    hl={this.props.hl}
                    /> : item.servName == 'RORO' ? <Blistallroro
                    key={index}
                    ref={detlc}
                    handbzcz={this.handbzcz}
                    keys={index}
                    rows={item}
                    text={this.props.text}
                    actions={this.props.actions}
                    bck={this.props.bck}
                    shows={this.props.shows}
                    hl={this.props.hl}
                    /> : undefined
            });
        }
    }
    handleScroll(v){
        let bodyheight = document.body.clientHeight;// 获取可见区域高
        let sohe=v.deltaY;//每次滚动高
        this.state.Hes+=sohe;//每次滚动叠加
        if((bodyheight-this.state.Hes)<=(bodyheight/2)){
            this.state.page++;
            this.props.actions.gethplistgd(this.state.userName, this.state.token, this.state.page, ...this.props.Fstate);//获取搜索数据
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.bck.hplists
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="blists" onWheel={this.handleScroll}>
                <ul>
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
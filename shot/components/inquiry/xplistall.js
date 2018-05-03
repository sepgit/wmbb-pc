/**
 * Created by Zing on 2016/7/25.
 */
import React,{Component} from 'react';
import Xplistsc from './../inquiry/xplistsc';
import {VelocityComponent, VelocityTransitionGroup} from 'velocity-react';
import Xzffcl from './xzffcl';
import Xzflcl from './xzflcl';
import Xzfair from './xzfair';
import Xzfhang from './xzfhang';
import Xzfreefer from './xzfreefer';
import Xzffr from './xzffr';
import Xzfdg from './xzfdg';
import Xzfot from './xzfot';
import Xzfbb from './xzfbb';
import Xzfroro from './xzfroro';

export default class Xplistall extends Component {
    constructor(props) {
        super(props);
        this.handleScroll=this.handleScroll.bind(this);
        this.renderList=this.renderList.bind(this);
        this.handisnew=this.handisnew.bind(this);
        this.handisnewc=this.handisnewc.bind(this);
        this.handcbc=this.handcbc.bind(this);
        this.handbzcz=this.handbzcz.bind(this);
        this.state={
            Hes:0,
            page:1,
            hhs:[],
            isnew:false,
            isnewidnex:'',
            serindex:0
        }
    }
    handbzcz(){
        let re=[];
        this.state.page==1?re=this.props.getdetil.xlist:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let detlc='detlc'+index;
            THIS.refs[detlc].setState({
                xpbz:false
            })
        })
    }
    handcbc() {
        let re=[];
        this.state.page==1?re=this.props.getdetil.xlist:re=this.state.hhs;
        let THIS=this;
        re.map((item,index) => {
            let detlc='detlc'+index;
            THIS.refs[detlc].setState({
                iscb:false,
                zt:'',
                EnquStat:''
            })
        })
    }
    handisnew(v,k){
        this.setState({
            isnew:true,
            isnewidnex:v,
            serindex:k

        })
    }
    handisnewc(v){
        this.setState({
            isnew:false,
            isnewidnex:v,
            serindex:0
        })
    }
    componentDidMount(){
        let userName = sessionStorage.getItem("SESSIONUSERACC");
        let token = sessionStorage.getItem("SESSIONTOKEN");
        this.props.actions.getxplistc(userName,token);//获取数据
    }
    renderList(){
        let re=[];
        this.state.page==1?re=this.props.getdetil.xlist:re=this.state.hhs;
        if(re.length==0){
            return <li className="bpltone">该列表暂无记录，请先询盘留下您的询盘记录。</li>;
        }else{
            return re.map((item,index) => {
                let detlc='detlc'+index;
                return <Xplistsc ref={detlc}
                                 handisnew={this.handisnew}
                                 key={index}
                                 keys={index}
                                 rows={item}
                                 actions={this.props.actions}
                                 shows={this.props.shows}
                                 getdetil={this.props.getdetil}
                                 handbzcz={this.handbzcz}
                                 getnewlist={this.props.getnewlist}
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
            this.props.actions.getxloadg(userName, token, this.state.page, ...this.props.Fstate);//获取搜索数据
            this.setState({
                hhs:[
                    ...this.state.hhs,
                    ...this.props.getdetil.xlist
                ]
            });
            this.state.Hes=0;
        }
    }
    render() {
        return (
            <div className="xplistsc" onWheel={this.handleScroll}>
                <ul className="xplistul">
                    <VelocityTransitionGroup enter={{animation: "fadeIn",duration:1000}} leave={{animation: "fadeOut"}}>
                    {
                        this.renderList()
                    }
                    </VelocityTransitionGroup>
                </ul>
                <VelocityTransitionGroup enter={{animation: "fadeIn"}} leave={{animation: "fadeOut"}}>
                    {
                        this.state.isnew&&this.state.isnewidnex=='FCL'?
                            <Xzffcl text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                cabnew={this.props.cabnew}
                                handisnewc={this.handisnewc}
                        />:this.state.isnew&&this.state.isnewidnex=='LCL'?
                            <Xzflcl text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                handisnewc={this.handisnewc}
                        />:this.state.isnew&&this.state.isnewidnex=='AIR'?
                            <Xzfair text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                handisnewc={this.handisnewc}
                        />:this.state.isnew&&this.state.isnewidnex=='HG'?
                            <Xzfhang text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                handisnewc={this.handisnewc}
                                cabnew={this.props.cabnew}
                        />:this.state.isnew&&this.state.isnewidnex=='RF'?
                            <Xzfreefer text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                handisnewc={this.handisnewc}
                        />:this.state.isnew&&this.state.isnewidnex=='FR'?
                            <Xzffr text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                handisnewc={this.handisnewc}
                                cabnew={this.props.cabnew}
                        />:this.state.isnew&&this.state.isnewidnex=='DG'?
                            <Xzfdg text={this.props.text}
                                actions={this.props.actions}
                                getdetil={this.props.getdetil}
                                getnewlist={this.props.getnewlist}
                                sclss={this.state.serindex}
                                handisnewc={this.handisnewc}
                                cabnew={this.props.cabnew}
                        />:this.state.isnew&&this.state.isnewidnex=='OT'?
                            <Xzfot text={this.props.text}
                               actions={this.props.actions}
                               getdetil={this.props.getdetil}
                               getnewlist={this.props.getnewlist}
                               sclss={this.state.serindex}
                               handisnewc={this.handisnewc}
                               cabnew={this.props.cabnew}
                        />:this.state.isnew&&this.state.isnewidnex=='BB'?
                            <Xzfbb text={this.props.text}
                               actions={this.props.actions}
                               getdetil={this.props.getdetil}
                               getnewlist={this.props.getnewlist}
                               sclss={this.state.serindex}
                               handisnewc={this.handisnewc}
                        />:this.state.isnew&&this.state.isnewidnex=='RORO'?
                            <Xzfroro text={this.props.text}
                               actions={this.props.actions}
                               getdetil={this.props.getdetil}
                               getnewlist={this.props.getnewlist}
                               sclss={this.state.serindex}
                               handisnewc={this.handisnewc}
                        />:undefined
                    }
                </VelocityTransitionGroup>
            </div>
        );
    }
}
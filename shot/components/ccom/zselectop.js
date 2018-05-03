/**
 * Created by Zing on 2017/2/8.
 */
import React,{Component} from 'react';
let TempArrs=[];
let TempArrszj=[];
let TempArrsrm=[];

export default class Zselectop extends Component {
    constructor(props) {
        super(props);
        this.handf=this.handf.bind(this);
        this.handin=this.handin.bind(this);
        this.handch=this.handch.bind(this);
        this.handot=this.handot.bind(this);
        this.handcz=this.handcz.bind(this);
        this.state={
            TempArr:[],
            opi:[],
            TempArrzj:[],
            opizj:[],
            TempArrrm:[],
            opirm:[],
            va:'',
            se:false
        }
    }
    handcz(){
        this.setState({
            va:''
        })
    }
    handot(){
        this.setState({
            se:false
        });
    }
    componentDidMount(){
        TempArrs=[];//清空
        TempArrszj=[];
        TempArrsrm=[];
        let THIS = this;
       document.addEventListener("click",function clicktwo(e){
            if(e.target.getAttribute('class')!='zs-inp'){
                //初始化style
                let eles = document.getElementsByName('SELLL');
                for (var i = eles.length; i--;) {
                    eles[i].style.display = 'none';
                }
                TempArrs=[];
                TempArrszj=[];
                TempArrsrm=[];
            }
        }); //通过侦听事件处理相应的函数
    }
    handf(e){
        TempArrs=[];//清空
        TempArrszj=[];
        TempArrsrm=[];
        //获得焦点事件
        this.setState({
            se:true
        });
        //初始化数据热门
        for (let i = 0; i < this.props.opirm.length; i++) {
            TempArrsrm.push({
                value: this.props.opirm[i].port,
                text: this.props.opirm[i].portName + '/' + this.props.opirm[i].chsName
            });
        }
        //初始化数据最近
        for (let i = 0; i < this.props.opizj.length; i++) {
            TempArrszj.push({
                value: this.props.opizj[i].port,
                text: this.props.opizj[i].portName + '/' + this.props.opizj[i].chsName
            });
        }
        //初始化数据
        for (let i = 0; i < this.props.opi.length; i++) {
            TempArrs.push({
                value: this.props.opi[i].port,
                text: this.props.opi[i].portName + '/' + this.props.opi[i].chsName
            });
        }
        this.setState({
            TempArr:TempArrs,
            opi:TempArrs,
            TempArrzj:TempArrszj,
            opizj:TempArrszj,
            TempArrrm:TempArrsrm,
            opirm:TempArrsrm
        });
        //初始化style
        let els= e.target.nextSibling||e.target.nextElementSibling;
        if(els!=null){
            els.style.display='block';
        }
    }
    handin(this_){
        this.setState({
            va:this_.target.value
        });
        //筛选热门
        let TempArrstrm=[];
        for (let i = 0; i < this.state.opirm.length; i++) {
            if(this.state.opirm[i].text.indexOf(this_.target.value.toLocaleUpperCase())<0){

            }else{
                TempArrstrm.push(this.state.opirm[i]);
            }
        }
        //筛选最近
        let TempArrstzj=[];
        for (let i = 0; i < this.state.opizj.length; i++) {
            if(this.state.opizj[i].text.indexOf(this_.target.value.toLocaleUpperCase())<0){

            }else{
                TempArrstzj.push(this.state.opizj[i]);
            }
        }
        //筛选所有
        let TempArrst=[];
        for (let i = 0; i < this.state.opi.length; i++) {
            if(this.state.opi[i].text.indexOf(this_.target.value.toLocaleUpperCase())<0){

            }else{
                TempArrst.push(this.state.opi[i]);
            }
        }
        this.setState({
            TempArr:TempArrst,
            TempArrzj:TempArrstzj,
            TempArrrm:TempArrstrm
        })
    }
    handch(v){
        let str=v.target.value.split('-');
        //改变事件
        this.setState({
            va:str[1],
            se:false
        });
        this.props.handleChangev(str[0]);
    }
    render() {
        let cls=this.props.className;
        return (
            <div className={cls}>
                <input type="text" value={this.state.va}
                       onFocus ={this.handf}
                       onInput={this.handin}
                       className="zs-inp"
                       placeholder="请输入口岸并选择"
                    />
                {
                    this.state.se?
                        <select name="SELLL" className="zs-blok" onChange ={this.handch} size="10">
                            <optgroup label="最近">
                                {
                                    this.state.TempArrzj.map(s => <option key={s.value} value={s.value+'-'+s.text}>{s.text}</option>)
                                }
                            </optgroup>
                            <optgroup label="热门">
                                {
                                    this.state.TempArrrm.map(s => <option key={s.value} value={s.value+'-'+s.text}>{s.text}</option>)
                                }
                            </optgroup>
                            <optgroup label="所有">
                            {
                                this.state.TempArr.map(s => <option key={s.value} value={s.value+'-'+s.text}>{s.text}</option>)
                            }
                            </optgroup>
                        </select>:undefined
                }

            </div>
        );
    }
}
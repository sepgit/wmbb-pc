/**
 * Created by Zing on 2017/2/24.
 */
import React,{Component} from 'react';
let TempArrs=[];
let TempArrszj=[];

export default class Zselectopzf extends Component {
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
            va:'',
            se:false
        }
    }
    handcz(){
        this.setState({
            va:this.props.vas
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
        let THIS = this;
        document.addEventListener("click",function clicktwo(e){
            if(e.target.getAttribute('class')!='zs-inp'){
                let eles = document.getElementsByName('SELLLL');
                for (var i = eles.length; i--;) {
                    eles[i].style.display = 'none';
                }
                TempArrs=[];
                TempArrszj=[];
            }
        }); //通过侦听事件处理相应的函数
        this.setState({
            va:this.props.vas
        });
    }
    handf(e){
        TempArrs=[];//清空
        TempArrszj=[];
        //获得焦点事件
        this.setState({
            se:true
        });
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
            opizj:TempArrszj
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
            TempArrzj:TempArrstzj
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
                        <select name="SELLLL" className="zs-blok" onChange ={this.handch} size="10">
                            <optgroup label="最近">
                                {
                                    this.state.TempArrzj.map(s => <option key={s.value} value={s.value+'-'+s.text}>{s.text}</option>)
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
/**
 * Created by Zing on 2017/2/4.
 */
import React,{Component} from 'react';
let TempArrs=[];

export default class Zselectgrxx extends Component {
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
            va:'',
            se:false
        }
    }
    handcz(){
        this.setState({
            va:''
        });
    }
    handot(){
        this.setState({
            se:false
        });
    }
    componentDidMount(){
        let THIS = this;
        TempArrs=[];//清空
        document.addEventListener("click",function clickone(e){
            if(e.target.getAttribute('class')!='zs-inp'){
                //初始化style
                let eles = document.getElementsByName('SELL');
                for (var i = eles.length; i--;) {
                    eles[i].style.display = 'none';
                }
                TempArrs=[];
            }
        }); //通过侦听事件处理相应的函数
    }
    handf(e){
        TempArrs=[];//清空
        //获得焦点事件
        this.setState({
            se:true
        });
        //初始化数据
        for (let i = 0; i < this.props.opi.length; i++) {
            TempArrs.push({
                value: this.props.opi[i].port,
                text: this.props.opi[i].portName + '/' + this.props.opi[i].chsName
            });
        }
        this.setState({
            TempArr:TempArrs,
            opi:TempArrs
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
        let TempArrst=[];
        for (let i = 0; i < this.state.opi.length; i++) {
            if(this.state.opi[i].text.indexOf(this_.target.value.toLocaleUpperCase())<0){

            }else{
                TempArrst.push(this.state.opi[i]);
            }
        }
        this.setState({
            TempArr:TempArrst
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
                       placeholder={this.props.portName}
                />
                {
                    this.state.se?
                        <select name="SELL" className="zs-blok" onChange ={this.handch} size="10">
                            {
                                this.state.TempArr.map(s => <option key={s.value} value={s.value+'-'+s.text}>{s.text}</option>)
                            }
                        </select>:undefined
                }

            </div>
        );
    }
}
/**
 * Created by Zing on 2016/1/04.
 */
import React,{Component} from 'react';

export default class Tzhdel extends Component {
  constructor(props) {
    super(props);
    this.handleClick=this.handleClick.bind(this);
    this.state={
      comp:sessionStorage.getItem("SESSIONCOMP")
    }
  }

  handleClick(){
    //改变详情动画
    this.props.handxqc(this.props.servType);
  }
  render() {
    return (
      <div className="addet">
        <div className="addxpgys">
          <div className="addxpgys1">
            <div className="addxpgys2">
              <span>特种货运价优势详情</span>
              <ul>
                <li>
                  <a href="javascript:void(0);" onClick={this.handleClick}>关闭</a>
                </li>
              </ul>
            </div>
            <div className="addxpgys3">
              <ul>
                <li>
                  <span className="addxpgys4">服务</span>
                  <p className="addxpgys5">{this.props.getnewlist.yjdel.servName}</p>
                </li>
                <li>
                  <span className="addxpgys4">口岸</span>
                  <p className="addxpgys5">{this.props.getnewlist.yjdel.depaPortName}</p>
                </li>
                <li>
                  <span className="addxpgys4">状态</span>
                  <p className="addet5">
                    {
                      this.props.getnewlist.yjdel.enab==1?"启用":"禁用"
                    }
                  </p>
                </li>
                <li>
                </li>
              </ul>
              <div className="addxpgys6">
                <span className="addxpgys4">标注</span>
                <p className="addxpgys7">{this.props.getnewlist.yjdel.labe}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
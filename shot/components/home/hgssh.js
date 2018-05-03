/**
 * Created by Zing on 2017/11/30.
 */
import React,{Component} from 'react';

export default class Hgssh extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="gsxxsh">
        <div className="gsxxsh1">
          <span>申请已发送</span>
          <p>请等待后台审核</p>
        </div>
        <div className="gsxxsh2">
          <h5>联系方式：13505741577</h5>
        </div>
        <div className="gsxxsh3">
          <a href="javascript:void(0);" onClick={this.props.handshc}>关闭</a>
        </div>
      </div>
    );
  }
}
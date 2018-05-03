/**
 * Created by Zing on 2017/12/13.
 */
import React,{Component} from 'react';

export default class Adtsfw extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      < div className="adtsfw1">
        <p>
          注：接收人为展示厅里展现给平台其他用户的联系人，请选择熟悉该优势的人员进行登记，方便为本公司承接业务。
        </p>
        <a href="javascript:void(0);" className="adtsfw2" onClick={this.props.handistsc}>知道了</a>
      </div>
    );
  }
}
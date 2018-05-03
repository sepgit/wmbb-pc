/**
 * Created by Zing on 2017/12/13.
 */
import React,{Component} from 'react';

export default class Adts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      < div className="adts1">
        <p>
          您可以对所有优势进行管理，以普通优势的方式展现在平台，或者以会员展示的方式展现在平台，会员展示会比普通展示靠前展示。
          另外您也可以向平台申请最优展示，最优展示排名比会员靠前。
        </p>
        <a href="javascript:void(0);" className="adts2" onClick={this.props.handistsc}>知道了</a>
      </div>
    );
  }
}
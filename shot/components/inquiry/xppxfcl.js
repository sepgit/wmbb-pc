/**
 * Created by Zing on 2016/7/19.
 */
import React,{Component} from 'react';
import Xphplists from './xphplist';

export default class Xppxfcl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let re=this.props.rows;
    return (
      <ul className="xppx">

        {
          re.map((item,index) => {
            return <Xphplists
              key={index}
              keys={index}
              rows={item}
              handyspj={this.props.handyspj}
              actions={this.props.actions}
              getdetil={this.props.getdetil}
              handxz={this.props.handxz}
              handzbin={this.props.handzbin}
              hpindex={this.props.hpindex}/>
          })
        }
      </ul>
    );
  }
}
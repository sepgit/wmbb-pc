/**
 * Created by Zing on 2016/8/2.
 */
import React,{Component} from 'react';
import Xphplistslcl from './xphplistlcl';

export default class Xppxlcl extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let re=this.props.rows;
    return (
      <ul className="xppx">
        {
          re.map((item,index) => {
            return <Xphplistslcl
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
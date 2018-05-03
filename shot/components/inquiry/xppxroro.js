/**
 * Created by Zing on 2016/11/24.
 */
import React,{Component} from 'react';
import Xphplistroro from './xphplistroro';

export default class Xppxroro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let re=this.props.rows;
    return (
      <ul className="xppx">
        {
          re.map((item,index) => {
            return <Xphplistroro
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
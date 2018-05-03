/**
 * Created by Zing on 2016/11/24.
 */
import React,{Component} from 'react';

export default class Xpsxroro extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <ul>
              <li>最长:{this.props.rows.leng}m</li>
              <li>最宽:{this.props.rows.widt}m</li>
              <li>最高:{this.props.rows.high}m</li>
              <li>重量:{this.props.rows.wate}T</li>
          </ul>
        );
    }
}
/**
 * Created by Zing on 2017/6/9.
 */
import React,{Component} from 'react';
import Zxbzall from './Zxbzall';
import Zxbzallk from './Zxbzallk';

export default class Zxbzlist extends Component {
    constructor(props) {
        super(props);
    }
    renderList(){
        let re=this.props.zxinfo.bzlistz;
        return re.map((item, index) => {
            return <Zxbzall key={index}
                            keys={index}
                            rows={item}
                            consid={this.props.rows.cons}
                            actions={this.props.actions}
                            zxinfo={this.props.zxinfo}
            />
        });
    }
    render() {
        let re=this.props.zxinfo.bzlistz;
        return (
            <ul className="xpah">
                {
                    this.renderList()
                }
                {
                    re.length==0?
                        <Zxbzallk consid={this.props.rows.cons}
                                  actions={this.props.actions}
                                  zxinfo={this.props.zxinfo}
                        />:undefined
                }
            </ul>
        );
    }
}
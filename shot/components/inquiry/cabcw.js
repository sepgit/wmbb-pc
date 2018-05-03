/**
 * Created by Zing on 2017/4/27.
 */
import React,{Component} from 'react';
import {Input,Radio,Select,message} from 'antd';
const RadioGroup = Radio.Group;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

export default class Cabcw extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let djs=this.props.bz=='1'?this.props.cabnew.residual:this.props.cabnew.resiUsd;
    let djxy='充值余额:'+djs;
    return (
      <div className="xnew31">
        <div className="xnew32">
          <ul>
            <li>
              <h4>定金金额</h4>
              <Select
                value={this.props.bz}
                style={{ width: 60}}
                className="xaddddr"
                onChange={this.props.handbz}
              >
                <Option key='1' value="1">CNY</Option>
                <Option key='2' value="2">USD</Option>
              </Select>
              <Input
                value={this.props.djye}
                placeholder={djxy}
                style={{width:120}}
                className="xaddddr"
                onChange={this.props.hdjye}
              />
            </li>
            <li> </li>
            <li>
              <h4>求舱履约指标</h4>
              <Select showSearch
                      value={this.props.qclv}
                      className="xaddmngr"
                      style={{ width: 150}}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="请选择"
                      onChange={this.props.hqclv}
              >
                <Option key='货物进仓'>货物进仓</Option>
                <Option key='货物备妥'>货物备妥</Option>
                <Option key='货物进港'>货物进港</Option>
                <Option key='货物报关放行'>货物报关放行</Option>
              </Select>
            </li>
            <li>
              <h4>供舱履约指标</h4>
              <Select showSearch
                      value={this.props.gclv}
                      className="xaddmngr"
                      style={{ width: 150}}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="请选择"
                      onChange={this.props.hgclv}
              >
                <Option key='S/O签发'>S/O签发</Option>
                <Option key='放箱签发'>放箱签发</Option>
                <Option key='货物上运输工具'>货物上运输工具</Option>
              </Select>
            </li>
          </ul>
        </div>
        <div className="xnew33">
          <h4>内陆方式</h4>
          <RadioGroup value={this.props.ptgys} onChange={this.props.hptgys} >
            <Radio className="xnew34" value='1'>
              <Select showSearch
                      value={this.props.gys1}
                      className="xnew35"
                      style={{ width: 150}}
                      optionFilterProp="children"
                      notFoundContent="无法找到"
                      placeholder="请选择内陆方式"
                      onChange={this.props.hgys1}
              >
                {
                  this.props.cabnew.gysfw.map(s => <Option key={s.serv}>{s.servName}</Option>)
                }
              </Select>
              <div className="xnew66">
                <h4>内陆费用</h4>
                {
                  this.props.cabFee > 0 ?<h5>:{this.props.bz == '1' ? 'CNY' : 'USD'} {this.props.cabFee > 0 ? this.props.cabFee : 0}</h5>:<h5></h5>
                }
              </div>
              {/*<Select showSearch
               value={this.props.gys2}
               className="xnew35"
               style={{ width: 150}}
               optionFilterProp="children"
               notFoundContent="无法找到"
               placeholder="平台供应商子内容"
               onChange={this.props.hgys2}
               >
               {
               this.props.cabnew.gysl.map(s => <Option key={s.cabProv}>{s.compAlia}</Option>)
               }
               </Select>*/}
            </Radio>
            {/* <Radio className="xnew36" value='2'>
             <Input
             value={this.props.gys3}
             placeholder="请输入保函号"
             style={{ width: 150}}
             className="xnew35"
             onChange={this.props.hgys3}
             />
             </Radio>*/}
          </RadioGroup>
          <div className="xnew68">
            如选择"平台车队",请与平台客服书面确认车队费用后,再点"中标"键去锁定有效的舱位保函,否则引起的违约风险则由求舱方承担.
          </div>
        </div>
      </div>
    );
  }
}
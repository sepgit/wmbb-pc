/**
 * Created by Zing on 2017/9/22.
 */
import React,{Component} from 'react';

export default class Problemwin extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="pwin">
        <div className="pwina">
          <div className="pwin1">
            <span>常见疑问解答</span>
            <a href="javascript:void(0);" className="pwin3" onClick={this.props.handcjywc}>关闭</a>
          </div>
          <div className="pwin2">
            <p>
              1.如果升级到公司，以及升级到公司有什么好处？<br />
              答：免费添加子员工账号，可以共享公司资源。<br /><br />

              2.如何添加各种优势？<br />
              答：在页面的黄色副导航中，免费添加我的优势（根据界面内容填写）。<br /><br />


              3.如何利用好平台的询盘回盘，咨询回复来记录公司的整体业务，以便以后数据分析查询。<br />
              答：公司账户下，每一条询盘回盘都留有记录保存，包括成交与未成交的。便于公司留存记录以便后期数据分析。<br /><br />

              3.如何利用好平台的询盘回盘，咨询回复来记录公司的整体业务，以便以后数据分析查询。<br />
              公司账户下，每一条询盘回盘都留有记录保存，包括成交与未成交的。便于公司留存记录以便后期数据分析。<br /><br />

              4.如何管理好供应商？<br />
              答：在新增每个供应商时，进行服务分组区分。在已建的供应商列表中，可以进行选择是否启用当前的供应商。<br /><br />

              5.如何保障收款，如何使用“收款宝”？<br />
              答：通过在副导航中发起收款宝，双方会共同抵押一定的定金，当双方完成履约要求之后，由收款方确认无误，<br />
              则双方定金退回。如若在履约期限内，付款方未完成履约，可以向平台递交第三方支付申请，由平台审核通过之<br />
              后，第三方支付收款方金额与补偿，对付款方没收定金并予以惩罚。<br /><br />

              6 如何保障舱位，使用好“舱位宝”？<br />
              答：在发起询盘的时候，可以直接申请“舱位宝”。由双方提交定金抵押在平台中，如若其中一方违约，平台将<br />
              根据实际情况给与违约方惩罚，并且补偿未违约方。<br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
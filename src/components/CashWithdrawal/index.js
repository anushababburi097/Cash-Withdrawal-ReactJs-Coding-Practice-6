// Write your code here
import './index.css'
import {Component} from 'react'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    // const name = 'Sarah Williams'
    // const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="cash-withdrawal-container">
          <div className="name-content">
            <p className="s-logo">S</p>
            <h className="heading">Sarah Williams</h>
          </div>
          <div className="balance-content">
            <h1 className="sub-heading">Your Balance</h1>
            <h1 className="balance-count">
              {balance}
              <br />
              <span className="rupees">In Rupees</span>
            </h1>
          </div>
          <div>
            <h1 className="heading">Withdraw</h1>
            <p className="para">CHOOSE SUM(IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  updateBalance={this.updateBalance}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal

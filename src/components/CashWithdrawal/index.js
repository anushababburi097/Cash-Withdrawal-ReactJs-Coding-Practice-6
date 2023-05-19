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
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="cash-withdrawal-container">
          <div className="name-content">
            <p className="s-logo">S</p>
            <p className="heading">{initial}</p>
          </div>
          <div className="balance-content">
            <p className="sub-heading">Your Balance</p>
            <p className="balance-count">
              {balance}
              <br />
              <span className="rupees">In Rupees</span>
            </p>
          </div>
          <div>
            <p className="heading">Withdraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)"</p>
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

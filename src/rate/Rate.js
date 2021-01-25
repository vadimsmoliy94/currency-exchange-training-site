import React from 'react';
import './Rate.css';
import Calc from '../calc/Calc';

class Rate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'date': '',
            'currencyRate': {},
        }
        this.currency = ['USD', 'PHP', 'CAD', 'BRL'];

    }
    componentDidMount() {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(data => {
                return data.json();
            })
            .then(data => {
                this.setState({ date: data.date });
                let rezalt = {};
                for (let i = 0; i < this.currency.length; i++) {
                    rezalt[this.currency[i]] = data.rates[this.currency[i]];
                }
                this.setState({ currencyRate: rezalt });
            })
    }
    render() {
        return (
            <div className="rate">
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map(item =>
                        (
                            <div className="block flex-item" key={item}>
                                <div className="currency-name">{item}</div>
                                <div className="currency-in">{this.state.currencyRate[item].toFixed(2)}*</div>
                                <p>*Мона купити за 1 EUR</p>
                            </div>
                        )
                    )}

                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }
}
export default Rate;
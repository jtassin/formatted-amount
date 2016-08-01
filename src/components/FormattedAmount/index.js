import React, { PropTypes, Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class FormattedAmount extends Component {

  static propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let result = '';
    const styles = {
      negative: {
        color: 'red',
      },
    };
    if (this.props.amount) {
      if (this.props.amount > 0) {
        result = <span>{(this.props.amount / 100).toFixed(2)} {this.props.currency}</span>;
      } else {
        result = (<span style={styles.negative}>
            ({(-this.props.amount / 100).toFixed(2)} {this.props.currency})
        </span>);
      }
    } else {
      result = <span>0.00 €</span>;
    }
    return result;
  }
}

export default FormattedAmount;

import React from 'react';
import ReactDOM from 'react-dom';
import FormattedAmount from '../index.js';

ReactDOM.render(<FormattedAmount amount={552} currency={'€'} />, document.getElementById('euro-positive-container'));

import React from 'react';
import ReactDOM from 'react-dom';
import FormattedAmount from '../index.js';

ReactDOM.render(<FormattedAmount amount={1337} currency={'€'} />, document.getElementById('euro-positive-container'));

ReactDOM.render(<FormattedAmount amount={-1337} currency={'$'} />, document.getElementById('dol-negative-container'));

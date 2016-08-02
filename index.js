'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../../lib/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_react2.default.createElement(_index2.default, { amount: 1337, currency: '€' }), document.getElementById('euro-positive-container'));

_reactDom2.default.render(_react2.default.createElement(_index2.default, { amount: -1337, currency: '$' }), document.getElementById('dol-negative-container'));
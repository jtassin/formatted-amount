import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FormattedAmount from '../FormattedAmount';

describe('FormattedAmount', () => {

  it('0 pad amount and add € symbol', () => {
    let wrapper = shallow(
      <FormattedAmount amount={200} />
    );
    expect(wrapper.html()).to.equal('<span>2.00 €</span>');
    wrapper = shallow(
      <FormattedAmount amount={210} />
    );
    expect(wrapper.html()).to.equal('<span>2.10 €</span>');
    wrapper = shallow(
      <FormattedAmount amount={211} />
    );
    expect(wrapper.html()).to.equal('<span>2.11 €</span>');
    wrapper = shallow(
      <FormattedAmount amount={211.1} />
    );
    expect(wrapper.html()).to.equal('<span>2.11 €</span>');

  });
});

import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import FormattedAmount from '../../FormattedAmount';

describe('FormattedAmount', () => {

  it('0 pad amount and add the correct currency symbol', () => {
    let wrapper = shallow(
      <FormattedAmount amount={200} currency='€'/>
    );
    expect(wrapper.html()).to.equal('<span>2.00 €</span>');
    
    wrapper = shallow(
      <FormattedAmount amount={210} currency='$'/>
    );
    expect(wrapper.html()).to.equal('<span>2.10 $</span>');
    
    wrapper = shallow(
      <FormattedAmount amount={211} currency='€'/>
    );
    expect(wrapper.html()).to.equal('<span>2.11 €</span>');
    
    wrapper = shallow(
      <FormattedAmount amount={211.1} currency='€'/>
    );
    expect(wrapper.html()).to.equal('<span>2.11 €</span>');

  });

  it('display the amount in red with parenthesis if negative amount', () => {
    let wrapper = shallow(
        <FormattedAmount amount={-200} currency='€'/>
    );
    expect(wrapper.html()).to.equal('<span style="color:red;">(2.00 €)</span>');
    
    
  });

  it('display 0 amount like positive amounts', () => {
    let wrapper = shallow(
        <FormattedAmount amount={0} currency='USD'/>
    );
    expect(wrapper.html()).to.equal('<span>0.00 USD</span>');


  });
});

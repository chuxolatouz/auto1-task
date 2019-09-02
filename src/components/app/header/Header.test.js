// ETA: 1 Hour
import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import '../../../setupTest'

describe('<Header />', () => {
    const wrapper = shallow(<Header />)
    
    it('should render <Logo />', () => {
        
        expect(wrapper).toBe(true);
    });

    it('should render "My Orders" <Link to="/favorites" />', () => {
        // Change this test
        expect(wrapper.contains(<span> My Order </span>)).toBe(true);
    });
});

// @flow
import * as React from 'react';

import LoadingIndicatorWrapper from '../LoadingIndicatorWrapper';

describe('components/loading-indicator/LoadingIndicatorWrapper', () => {
    test('should render with default properties intact', () => {
        const wrapper = shallow(<LoadingIndicatorWrapper />);

        expect(wrapper).toMatchSnapshot();
    });

    test('should render with children in default properties', () => {
        const child = <div>child</div>;
        const wrapper = shallow(<LoadingIndicatorWrapper>{child}</LoadingIndicatorWrapper>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should render loader properly when specificed', () => {
        const child = <div>child</div>;
        const wrapper = shallow(<LoadingIndicatorWrapper isLoading="true">{child}</LoadingIndicatorWrapper>);

        expect(wrapper).toMatchSnapshot();
    });

    test('should allow custom classnames on wrapper', () => {
        const child = <div>child</div>;
        const wrapper = shallow(
            <LoadingIndicatorWrapper className="test-name" isLoading="true">
                {child}
            </LoadingIndicatorWrapper>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should take in crawler position top', () => {
        const child = <div>child</div>;
        const wrapper = shallow(
            <LoadingIndicatorWrapper className="test-name" crawlerPosition="top" isLoading="true">
                {child}
            </LoadingIndicatorWrapper>,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should pass thru any rest properties', () => {
        const wrapper = shallow(
            <LoadingIndicatorWrapper className="test-name" data-resin-target="test" isLoading="true" />,
        );

        expect(wrapper).toMatchSnapshot();
    });

    test('should hide content', () => {
        const wrapper = shallow(<LoadingIndicatorWrapper className="test-name" hideContent isLoading="true" />);

        expect(wrapper).toMatchSnapshot();
    });
});

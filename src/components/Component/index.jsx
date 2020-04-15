import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { getDataAction } from './actions';
import { makeSelectData } from './selectors';
import styles from './style.less';

const cx = classNames.bind(styles);

function Partners({ getDataDispatch, data }) {
    useEffect(() => {
        getDataDispatch();
    }, []);

    return (
        <div className={cx('root')}>{data}</div>
    );
}

const mapStateToProps = createStructuredSelector({
    data: makeSelectData(),
});

const mapDispatchToProps = {
    getDataDispatch: getDataAction,
};

Partners.propTypes = {
    getDataDispatch: PropTypes.func.isRequired,
    data: PropTypes.string,
};

Partners.defaultProps = {
    data: 'Hello!',
};

export default connect(mapStateToProps, mapDispatchToProps)(Partners);

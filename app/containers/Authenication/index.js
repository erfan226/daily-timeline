/**
 *
 * Authenication
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import Login from '../../components/Login';
import makeSelectAuthenication from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function Authenication() {
  useInjectReducer({ key: 'authenication', reducer });
  useInjectSaga({ key: 'authenication', saga });

  return (
    <React.Fragment>
      <Login />
    </React.Fragment>
  );
}

Authenication.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authenication: makeSelectAuthenication(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Authenication);

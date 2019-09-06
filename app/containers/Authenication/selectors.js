import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the authenication state domain
 */

const selectAuthenicationDomain = state => state.authenication || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Authenication
 */

const makeSelectAuthenication = () =>
  createSelector(
    selectAuthenicationDomain,
    substate => substate,
  );

export default makeSelectAuthenication;
export { selectAuthenicationDomain };

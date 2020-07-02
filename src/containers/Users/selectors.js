import { createSelector } from 'reselect'
import { get } from 'lodash';
const usersStateSelector = state => state.userReducer;

export const staffsSelector = createSelector(
  usersStateSelector,
  ({users}) => users.staff,
)

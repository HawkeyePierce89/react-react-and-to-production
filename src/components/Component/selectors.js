import { createSelector } from 'reselect';

const selectData = (state) => state.data;

/*
This is bad practice. Do not use selectors for cases like this
 */
const makeSelectData = () => createSelector(
    selectData,
    (data) => data,
);

export {
    makeSelectData,
};

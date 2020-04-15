import { all } from 'redux-saga/effects';

import DataSagas from '~components/Component/sagas';

export default function* rootSaga() {
    yield all([
        ...DataSagas,
    ]);
}

import { GET_DATA_START, GET_DATA_SUCCESS, GET_DATA_FAIL } from './constants';

export default function pollReducer(state = {}, { type, payload }) {
    switch (type) {
        case GET_DATA_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_DATA_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: payload,
            };
        }
        case GET_DATA_FAIL: {
            return {
                ...state,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}

const CHANGE_TEXT = 'CHANGE_TEXT';
const COUNT_FILTERED_ARRAY_LENGTH = 'COUNT_FILTERED_ARRAY_LENGTH';

interface filterState {
    filterText: string;
    filteredArrayLength: number;
}

const defaultState: filterState = {
    filterText: '',
    filteredArrayLength: 0
}

interface filterAction {
    type: string,
    payload: any
}

export const filterReducer = (state = defaultState, action: filterAction): filterState => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {...state, filterText: action.payload}
        case COUNT_FILTERED_ARRAY_LENGTH:
            return {...state, filteredArrayLength: action.payload}
        default:
            return state
    }
};

export const changeFilterText = (payload: string) => ({type: CHANGE_TEXT, payload})
export const changeFilteredArrayLength = (payload: number) => ({type: COUNT_FILTERED_ARRAY_LENGTH, payload})
const CHANGE_TEXT = 'CHANGE_TEXT';

interface filterState {
    filterText: string;
}

const defaultState: filterState = {
    filterText: ''
}

interface filterAction {
    type: string,
    payload: string
}

export const filterReducer = (state = defaultState, action: filterAction): filterState => {
    switch (action.type) {
        case CHANGE_TEXT:
            return {filterText: action.payload}
        default:
            return state
    }
};

export const changeFilterText = (payload: string) => ({type: CHANGE_TEXT, payload})
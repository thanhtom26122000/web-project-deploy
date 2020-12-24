import * as Types from "../actions/type"
const initState = {
    loading: false,
    error: null,
    listRealEstate: [],
    listFavorites: []
}
const realEstateReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_LIST_LADNING_PAGE: {
            return { ...state, loading: true }
        }
        case Types.GET_LIST_LADNING_PAGE_SUCCESS: {
            return { ...state, listRealEstate: [...action.listRealEstate], loading: false }
        }
        case Types.GET_LIST_LADNING_PAGE_FAILED: {
            return { ...state, error: action.error, loading: false }
        }
        case Types.ADD_FAVORITES: {
            return { ...state, loading: true }
        }
        case Types.ADD_FAVORITES_SUCCESS: {
            let id = action.id;
            let tempArr = [...state.listFavorites];
            tempArr.push(id);
            return { ...state, loading: false, listFavorites: [...tempArr] }
        }
        case Types.ADD_FAVORITES_FAILED: {
            return { ...state, loading: false, error: action.error }
        }
        case Types.GET_LIST_FAVORITES: {
            return { ...state, loading: true }
        }
        case Types.GET_LIST_FAVORITES_SUCCESS: {
            return { ...state, loading: false, listRealEstate: [...action.listRealEstate] }
        }
        case Types.GET_LIST_FAVORITES_FAILED: {
            return { ...state, loading: false, error: action.error }
        }
        default: return state
    }
}
export default realEstateReducer
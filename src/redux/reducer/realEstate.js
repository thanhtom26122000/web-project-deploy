import * as Types from "../actions/type"
const initState = {
    loading: false,
    error: null,
    listRealEstate: [],
}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case Types.GET_LIST_LADNING_PAGE: {
            return { ...state, loading: true }
        }
        case Types.SET_IS_AUTH: {
            return { ...state, isLogin: action.isAuth, loading: false, error: null, isLoaded: true }
        }
        case Types.SET_IMAGE_PATH_AND_STATUS: {
            return { ...state, imagePath: action.imagePath, status: action.status }
        }
        default: return state
    }
}
export default authReducer
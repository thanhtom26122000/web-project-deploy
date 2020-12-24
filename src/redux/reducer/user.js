import * as Types from "../actions/type";
const initState = {
    infoUser: null,
    loading: false,
    error: null,
    imagePath: "",
    status: "",
    typeAccount: null,
    listAccout: [],
}
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case (Types.GET_USER_INFO): {
            return { ...state, loading: true }
        }
        case (Types.GET_USER_INFO_SUCCESS): {
            return { ...state, infoUser: { ...action.userInfo }, loading: false, error: null }
        }
        case (Types.GET_USER_INFO_FAILED): {
            return { ...state, error: action.error }
        }
        case Types.SET_IMAGE_PATH_AND_STATUS: {
            return { ...state, imagePath: action.imagePath, status: action.status, loading: false, typeAccount: action.typeAccount }
        }
        case Types.GET_LIST_ACCOUNT: {
            return { ...state, loading: true }
        }
        case Types.GET_LIST_ACCOUNT_SUCCESS: {
            return { ...state, loading: false, error: null, listAccout: [...action.listAccout] }
        }
        case Types.GET_LIST_ACCOUNT_FAILED: {
            return { ...state, loading: false, error: action.error, }
        }
        default: return state
    }
}
export default userReducer
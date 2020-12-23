import * as Types from "./type"
export const checkIsLogIn = () => {
    return {
        type: Types.CHECK_IS_LOG_IN
    }
}
export const setIsAuth = (isAuth) => {
    return {
        type: Types.SET_IS_AUTH,
        isAuth: isAuth
    }
}
export const setImagePathAndStatus = (object) => {
    return {
        type: Types.SET_IMAGE_PATH_AND_STATUS,
        imagePath: object.imagePath ? object.imagePath : "",
        status: object.activeStatus
    }
}
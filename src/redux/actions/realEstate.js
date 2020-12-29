import * as Types from "./type"
export const getListLandingPage = () => {
    return {
        type: Types.GET_LIST_LADNING_PAGE
    }
}
export const getListLandingPageSuccess = (listRealEstate) => {
    return {
        type: Types.GET_LIST_LADNING_PAGE_SUCCESS,
        listRealEstate: listRealEstate
    }
}
export const getListLandingPageFailed = (error) => {
    return {
        type: Types.GET_LIST_LADNING_PAGE_FAILED,
        error: error
    }
}
export const addFavorites = (id) => {
    return {
        type: Types.ADD_FAVORITES,
        id: id
    }
}
export const addFavoritesSuccess = (id) => {
    return {
        type: Types.ADD_FAVORITES_SUCCESS,
        id: id
    }
}
export const addFavoritesFailed = (error) => {
    return {
        type: Types.ADD_FAVORITES_FAILED,
        errorr: error
    }
}
export const getListFavorites = () => {
    return {
        type: Types.GET_LIST_FAVORITES
    }
}
export const getListFavoritesFailed = (error) => {
    return {
        type: Types.GET_LIST_FAVORITES_FAILED,
        error: error
    }
}
export const getListFavoritesSuccess = (listRealEstate) => {
    return {
        type: Types.GET_LIST_FAVORITES_SUCCESS,
        listRealEstate: listRealEstate
    }
}
export const getListRealEstate = () => {
    return {
        type: Types.GET_LIST_REAL_ESTATES,
    }
}
export const getListRealEstateSuccess = (listRealEstates) => {
    return {
        type: Types.GET_LIST_REAL_ESTATES_SUCCESS,
        listRealEstate: listRealEstates
    }
}
export const getListRealEstateFailed = (error) => {
    return {
        type: Types.GET_LIST_REAL_ESTATES_FAILED,
        error: error
    }
}
export const getProperty = (id) => {
    return {
        type: Types.GET_PROPERTY,
        id: id
    }
}
export const getPropertySuccess = (property) => {
    return {
        type: Types.GET_PROPERTY_SUCCESS,
        property: property
    }
}
export const getPropertyFailed = (error) => {
    return {
        type: Types.GET_PROPERTY_FAILED,
        error: error
    }
}
export const searchProperty = (query) => {
    return {
        type: Types.SEARCH_PROPERTY,
        query: query
    }
}
export const searchPropertySuccess = (listRealEstate) => {
    return {
        type: Types.SEARCH_PROPERTY_SUCCESS,
        listRealEstate: listRealEstate
    }
}
export const searchPropertyFailed = (error) => {
    return {
        type: Types.SEARCH_PROPERTY_FAILED,
        error: error
    }
}
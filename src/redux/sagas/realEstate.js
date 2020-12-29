import { call, put, take } from 'redux-saga/effects';
import * as Types from "../actions/type";
import { callApi } from "../../axios/index"
import { addFavoritesFailed, addFavoritesSuccess, getListFavoritesFailed, getListFavoritesSuccess, getListLandingPageFailed, getListLandingPageSuccess, getListRealEstateFailed, getListRealEstateSuccess, getPropertyFailed, getPropertySuccess, searchPropertyFailed, searchPropertySuccess } from '../actions/action';
function getListLandingPageApi() {
    return callApi({ url: "/api/real-estate/get-list-landingpage", method: "get" })
}
function addFavoritesApi(token, id) {
    return callApi({ url: "/api/user/add-favorites", token: token, checkAuth: true, data: { id: id } })
}
function getListFavoritesApi(token) {
    return callApi({ url: "/api/real-estate/get-list-favorites", token: token, checkAuth: true })
}
function getListRealEstateApi(token) {
    return callApi({ url: "/api/real-estate/get-list-not-approve", checkAuth: true, token: token })
}
function getPropertyApi(id) {
    return callApi({ url: "/api/real-estate/get-property", data: { id: id } })
}
function searchPropertyApi(query) {
    return callApi({ url: "/api/real-estate/search-property", data: query })
}
function* getListLandingPageSaga() {
    while (true) {
        try {
            let action = yield take(Types.GET_LIST_LADNING_PAGE);
            let listRealEstate = yield call(getListLandingPageApi);
            if (listRealEstate) {
                yield put(getListLandingPageSuccess(listRealEstate))
            }
        }
        catch (e) {
            yield put(getListLandingPageFailed(e))
        }
    }
}
function* addFavorites() {
    while (true) {
        try {
            let action = yield take(Types.ADD_FAVORITES);
            let id = action.id
            console.log("id", id)
            let token = localStorage.getItem("_user");
            if (id && token) {
                let response = yield call(addFavoritesApi, token, id)
                if (response === "success") {
                    yield put(addFavoritesSuccess(id))
                }
            }
        }
        catch (e) {
            yield put(addFavoritesFailed(e))
        }
    }
}
function* getListFavorites() {
    while (true) {
        try {
            let action = yield take(Types.GET_LIST_FAVORITES);
            let token = localStorage.getItem("_user");
            let response = yield call(getListFavoritesApi, token)
            if (response && response.length > 0) {
                yield put(getListFavoritesSuccess(response))
            }
        }
        catch (error) {
            yield put(getListFavoritesFailed(error))
        }
    }
}
function* getListRealEstate() {
    while (true) {
        try {
            let action = yield take(Types.GET_LIST_REAL_ESTATES);
            let token = localStorage.getItem("_user");
            let response = yield call(getListRealEstateApi, token)
            if (response && response.length > 0) {
                yield put(getListRealEstateSuccess(response))
            }
        }
        catch (error) {
            yield put(getListRealEstateFailed(error))
        }
    }
}
function* getPropertySaga() {
    while (true) {
        try {
            let action = yield take(Types.GET_PROPERTY);
            let response = yield call(getPropertyApi, action.id);
            if (response) {
                yield put(getPropertySuccess(response))
            }
        }
        catch (error) {
            yield put(getPropertyFailed(error))
        }
    }
}
function* searchPropertySaga() {
    while (true) {
        try {
            let action = yield take(Types.SEARCH_PROPERTY);
            console.log(action.query, "xx query")
            let response = yield call(searchPropertyApi, action.query);
            if (response) {
                yield put(searchPropertySuccess(response))
            }
        }
        catch (error) {
            yield put(searchPropertyFailed(error))
        }
    }
}
export const realEstateSaga = [
    getListLandingPageSaga(),
    addFavorites(),
    getListFavorites(),
    getListRealEstate(),
    getPropertySaga(),
    searchPropertySaga()
]
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  GET_FAVORITES,
  UPDATE_FAVORITES,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REMOVE_FAVORITE
} from "../actions/types"

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  favorites: []
}

export default function (state = initialState, action) {

  const { type, payload } = action

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      }
    case GET_FAVORITES:
      return {
        ...state,
        favorites: payload,
        loading: false
      }
    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites, payload],
        loading: false
      }
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.address !== payload.profile.address),
        loading: false
      }
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token)
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      }
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
      localStorage.removeItem("token")
      return {
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null,
        favorites: []
      }
    default:
      return state
  }

}
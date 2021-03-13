import axios from "axios"
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_FAVORITES,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE
} from "../actions/types"

import setAuthToken from "../utils/setAuthToken"

export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token)
  }

  try {
    const res = await axios.get("/api/auth")

    dispatch({
      type: USER_LOADED,
      payload: res.data
    })

  } catch (err) {
    console.error(err)

    dispatch({
      type: AUTH_ERROR
    })
  }
}

export const favoritesData = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me")

    dispatch({
      type: GET_FAVORITES,
      payload: res.data
    })
  } catch (err) {
    console.error(err)
  }
}

// Add home to favorites
export const addFavorites = (data) => async dispatch => {

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await axios.post("/api/profile/me", data, config)

    dispatch({
      type: UPDATE_FAVORITES,
      payload: res.data
    })

  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      console.error(errors)
    }
  }
}

// Remove home from favorites
export const removeFavorite = (address) => async dispatch => {

  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    }

    const res = await axios.delete(`/api/profile/me/${address}`, config)

    dispatch({
      type: REMOVE_FAVORITE,
      payload: res.data
    })

  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      console.error(errors)
    }
  }
}

// Register
export const register = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post("/api/users", body, config)

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      console.error(errors)
    }

    dispatch({
      type: REGISTER_FAIL
    })
  }
}

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  }

  const body = JSON.stringify({ email, password })

  try {
    const res = await axios.post(`/api/auth`, body, config)

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    })

    dispatch(loadUser())
  } catch (err) {
    const errors = err.response.data.errors

    if (errors) {
      console.error(errors)
    }

    dispatch({
      type: LOGIN_FAIL
    })
  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT })
}
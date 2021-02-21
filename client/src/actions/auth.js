import axios from "axios"
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  GET_FAVORITES
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

export const logout = () => async dispatch => {
  try {
    dispatch({
      type: LOGOUT
    })

  } catch (err) {
    console.error(err.response.data.errors)
  }
}
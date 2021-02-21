import { SEARCH_ITEMS, NEWEST_FILTER, HOMETYPE_FILTER, ROOMS_FILTER, PRICE_FILTER, FILTERED_ITEMS, SHOW_MORE, GET_DATA, GET_CITY_DATA } from "./types"
import axios from "axios"

export const getHomeData = () => async dispatch => {
  try {
    const res = await axios.get("/api/posts")

    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  } catch (err) {
    console.error(err)
  }
}

export const getCityData = () => async dispatch => {
  try {
    const res = await axios.get("/api/cities")

    dispatch({
      type: GET_CITY_DATA,
      payload: res.data
    })
  } catch (err) {
    console.error(err)
  }
}

export const searchItems = (string) => dispatch => {
  dispatch({
    type: SEARCH_ITEMS,
    payload: string
  })
}

export const filteredItems = (data) => dispatch => {
  dispatch({
    type: FILTERED_ITEMS,
    payload: data
  })
}

export const filterByPrice = (selectPrice) => dispatch => {
  dispatch({
    type: PRICE_FILTER,
    payload: selectPrice
  })
}

export const filterByRooms = (number) => dispatch => {
  dispatch({
    type: ROOMS_FILTER,
    payload: number
  })
}

export const filterByHomeType = (event) => dispatch => {
  dispatch({
    type: HOMETYPE_FILTER,
    payload: event
  })
}

export const sortByNewest = (value) => dispatch => {
  dispatch({
    type: NEWEST_FILTER,
    payload: value
  })
}

export const currentPage = (number) => dispatch => {
  dispatch({
    type: NEWEST_FILTER,
    payload: number
  })
}

export const addPosts = (number) => dispatch => {
  dispatch({
    type: SHOW_MORE,
    payload: number
  })
}




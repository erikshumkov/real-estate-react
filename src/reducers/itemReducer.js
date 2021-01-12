import { SEARCH_ITEMS, FILTER_ITEMS, NEWEST_FILTER, HOMETYPE_FILTER, ROOMS_FILTER, PRICE_FILTER, FILTERED_ITEMS, SHOW_MORE } from "../actions/types"

const initialState = {
  settings: {
    villa: false,
    apartment: false,
    radhus: false,
    fritidshus: false
  },
  sort: "newest",
  rooms: "all",
  price: "none",
  search: "",
  filteredData: [],
  currentPage: 1,
  postsShowing: 9
}

export default (state = initialState, action) => {

  const { type, payload } = action

  switch (type) {
    case FILTERED_ITEMS:
      return {
        ...state,
        filteredData: payload
      }
    case NEWEST_FILTER:
      return {
        ...state,
        sort: payload
      }
    case HOMETYPE_FILTER:
      const { name, value } = payload
      return {
        ...state,
        settings: {
          ...state.settings,
          [name]: value
        }
      }
    case ROOMS_FILTER:
      return {
        ...state,
        rooms: payload
      }
    case PRICE_FILTER:
      return {
        ...state,
        price: payload
      }
    case FILTER_ITEMS:
      return state
    case SEARCH_ITEMS:
      return {
        ...state,
        search: payload
      }
    case SHOW_MORE:
      return {
        ...state,
        postsShowing: payload
      }
    default:
      return state
  }
}
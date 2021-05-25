const {useReducer} = React;

export const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_INIT":
        return {
          ...state,
          loading: true,
        }
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          hasNext: !!action.payload.next,
          planets: [...state.planets, ...action.payload.results],
        }
      case "FETCH_FAILURE":
        return {
          ...state,
          error: action.payload,
        }
      case "NEXT_PAGE":
        return {
          ...state,
          page: state.page + 1,
        }
      default:
        throw new Error(`Unsupported action type ${action.type}`)
    }
  }

const initialState = {
    fetching: false,
    fetched: false,
    error: null,
    rooms : [],
    room: {}
}

const roomData = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_ROOM_PENDING":
            return {
                ...state,
                fetching: true
            }
        case "FETCH_ROOM_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                rooms: action.payload.data.data
            }
        case "FETCH_ROOM_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        
        default:
            return state
    }
}

export default roomData

export function favouriteReducer(state, action) {
    switch (action.type) {

        case "TOGGLE_FAVOURITE":
            const exists = state.includes(action.payload);

            if (exists) {
                return state.filter((id) => id != action.payload);
            } else {
                return [...state, action.payload];
            }
        default:
            return state;
    }
}


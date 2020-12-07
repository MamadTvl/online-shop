export const initialStates = {
    filterValues: {
        from: 0,
        to: 15000000,
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'priceFilter':
            return {
                ...state,
                filterValues: action.filterValues,
            }

    }
}
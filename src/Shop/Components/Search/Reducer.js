export const initialStates = {
    filterValues: {
        from: 0,
        to: 1500000,
    },
    changed: 0,
    products: [],
    categories: [],
    hasDiscount: false,

}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'priceFilter':
            return {
                ...state,
                filterValues: action.filterValues,
            }
        case 'setProducts':
            return {
                ...state,
                products: action.products,
            }
        case 'setCategories':
            return {
                ...state,
                categories: action.categories,
            }
        case 'selectCategory':
            let index = state.categories.findIndex(x => x.id === action.categoryId)
            state.categories[index].checked = action.value

            return {
                ...state,
                categories: state.categories,
            }
        case 'discount':
            return {
                ...state,
                hasDiscount: !state.hasDiscount
            }


        default:
            break
    }
}
import productImage from "../../../img/img.png";

function createProductData(name, price, img, hasDiscount, discount, newPrice) {
    return {name, price, img, hasDiscount, discount, newPrice}
}


const initialProducts = [
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, true, '۱۵', '۲٫۴۵۹٫۰۰۰'),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
    createProductData('کتانی نایک اسموکی Nike Smooky مدل لاین ۲۰۲۰ کد ۱۹۴۸۷', '۲٫۶۵۹٫۰۰۰', productImage, false),
]

export const initialStates = {
    // todo: get Products & category from api and set into initialStates
    filterValues: {
        from: 0,
        to: 1500000,
    },
    changed: 0,
    products: initialProducts,
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
        case 'setCategories':
            return{
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
import productImage from "../../../img/img.png";

function createProductData(name, price, img, hasDiscount, discount, newPrice) {
    return {name, price, img, hasDiscount, discount, newPrice}
}

function createCategoryData(id, name, checked) {
    return {id, name, checked}
}

const initialCategories = [
    createCategoryData(1,'پوشاک', false),
    createCategoryData(2,'پوشاک', false),
    createCategoryData(3,'پوشاک', false),
    createCategoryData(4,'پوشاک', false),
    createCategoryData(5,'پوشاک', false),
    createCategoryData(6,'پوشاک', false),
    createCategoryData(7,'پوشاک', false),
    createCategoryData(8,'پوشاک', false),
    createCategoryData(9,'پوشاک', false),
    createCategoryData(10,'پوشاک', false),
    createCategoryData(11,'پوشاک', false),
    createCategoryData(12,'پوشاک', false),
    createCategoryData(13,'پوشاک', false),
    createCategoryData(14,'پوشاک', false),
    createCategoryData(15,'پوشاک', false),
    createCategoryData(16,'پوشاک', false),
    createCategoryData(17,'پوشاک', false),
    createCategoryData(18,'پوشاک', false),
    createCategoryData(19,'پوشاک', false),
    createCategoryData(20,'پوشاک', false),
    createCategoryData(21,'پوشاک', false),
    createCategoryData(22,'پوشاک', false),

]

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
        to: 15000000,
    },
    changed: 0,
    products: initialProducts,
    categories: initialCategories,
    hasDiscount: false,

}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'priceFilter':
            return {
                ...state,
                filterValues: action.filterValues,
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
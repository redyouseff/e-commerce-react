import {combineReducers} from "redux"
import CategoryReducer from "./CategoryReducer"
import brandReducer from "./BrandReducer"
import SubCategoryReducer from "../Reducers/subCategoryReducer"
import productReducer from "./productReducer"
import AuthReducer from "./AuthReducer"


export default combineReducers({
    AllCategore:CategoryReducer,
    AllBrand:brandReducer,
    SubCategory:SubCategoryReducer,
    allProduct:productReducer,
    AuthReducer:AuthReducer
    
})



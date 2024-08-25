import ShopProductsPage from "./Page/products/ShopProductsPage";
import Footer from "./Components/uitilty/Footer";
import NavBarLogin from "./Components/uitilty/NavBarLogin";
import Login from "./Page/Auth/LoginPage";
import RegisterPage from "./Page/Auth/RegisterPage";
import AllBrandPage from "./Page/Brand/AllBrandPage";
import AllCategore from "./Page/Categore/AllCategore";
import HomePage from "./Page/Home/HomePage";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import ProductDetailsPage from "./Page/products/ProductDetailsPage";
import CartPage from "./Page/Cart/CartPage";
import ChoosePayMethodPage from "./Page/Checkout/ChoosePayMethodPage";
import AdminAllProductPage from "./Page/Admin/AdminAllProductPage";
import AdminAllOrdersPage from "./Page/Admin/AdminAllOrdersPage.";
import AdminOrderDetailsPage from "./Page/Admin/AdminOrderDetailsPage";
import AdminAddBrandPage from "./Page/Admin/AdminAddBrandPage";
import AdminAddCategoryPage from "./Page/Admin/AdminAddCategoryPage";
import AdminAddSubCategoryPage from "./Page/Admin/AdminAddSubCategoryPage";
import AdminAddProductPage from "./Page/Admin/AdminAddProductPage";
import UserAllOrdersPage from "./Page/user/UserAllOrdersPage";
import UserFavoriteProductsPage from "./Page/user/UserFavoriteProductsPage";
import UserAddressesPage from "./Page/user/UserAddressesPage";
import UserAddAddressPage from "./Page/user/UserAddAddressPage";
import UserEditAddressPage from "./Page/user/UserEditAddressPage";
import UserProfilePage from "./Page/user/UserProfilePage";
import AdminEditProductPage from "./Page/Admin/AdminEditProductPage";
import ForgetPasswordPage from "./Page/Auth/ForgetPasswordPage";
import VerifyPasswordPage from "./Page/Auth/VerifyPasswordPage";
import ResetPasswordPage from "./Page/Auth/ResetPasswordPage";

function App() {
  return (
    <div>
        <NavBarLogin></NavBarLogin>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} ></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<RegisterPage></RegisterPage>}></Route>
          <Route path="/allcategore" element={<AllCategore></AllCategore>}></Route>
          <Route path="/allbrand" element={<AllBrandPage></AllBrandPage>}></Route>
          <Route path="/products"element={<ShopProductsPage></ShopProductsPage>}></Route>
          <Route path="products/:id"element={<ProductDetailsPage></ProductDetailsPage>}></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="/order/paymethoud" element={<ChoosePayMethodPage></ChoosePayMethodPage>}></Route>
          <Route path="/admin/allproducts" element={<AdminAllProductPage></AdminAllProductPage>}></Route>
          <Route path="/admin/allorders" element={<AdminAllOrdersPage></AdminAllOrdersPage>} ></Route>
          <Route path="/admin/orders/:id" element={<AdminOrderDetailsPage></AdminOrderDetailsPage>}></Route>
          <Route path="/admin/addbrand" element={<AdminAddBrandPage></AdminAddBrandPage>}></Route>
          <Route path="/admin/addcategory" element={<AdminAddCategoryPage></AdminAddCategoryPage>}></Route>
          <Route path="/admin/addsubcategory" element={<AdminAddSubCategoryPage></AdminAddSubCategoryPage>}></Route>
          <Route path="/admin/addproduct" element={<AdminAddProductPage></AdminAddProductPage>}></Route>
          <Route path="/user/allorders" element={<UserAllOrdersPage></UserAllOrdersPage>}></Route>
          <Route path="/user/favoriteproducts" element={<UserFavoriteProductsPage></UserFavoriteProductsPage>}></Route>
          <Route path="/user/addresses" element={<UserAddressesPage></UserAddressesPage>}></Route>
          <Route path="/user/add-address" element={<UserAddAddressPage></UserAddAddressPage>}></Route>
          <Route path="/user/edit-address/" element={<UserEditAddressPage></UserEditAddressPage>}></Route>
          <Route path="/user/profile" element={<UserProfilePage></UserProfilePage>}></Route>
          <Route path="/admin/editproduct/:id" element={<AdminEditProductPage></AdminEditProductPage>}></Route>
          <Route path="/user/forgetpassword" element={<ForgetPasswordPage></ForgetPasswordPage>}></Route>
          <Route path="/user/verifycode" element={<VerifyPasswordPage></VerifyPasswordPage>}></Route>
          <Route path="/user/resetpassword" element={<ResetPasswordPage></ResetPasswordPage>}></Route>
          



        </Routes>
        </BrowserRouter>
    
    <Footer></Footer>
    </div>
  );
}

export default App;

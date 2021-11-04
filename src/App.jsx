import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import AboutUs from "./pages/AboutUs";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import Profile from "./pages/Profile";
import Riwayat from "./pages/Riwayat";
import Seller from "./pages/Seller";
import SellerEdit from "./pages/SellerEdit";
import Help from "./pages/Help";
import Notifikasi from "./pages/Notifikasi";

const App = () => {
    const user = useSelector((state) => state.user.currentUser);

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/products/:category">
                    <ProductList />
                </Route>
                <Route path="/product/:id">
                    <Product />
                </Route>

                <Route path="/about">
                    <AboutUs />
                </Route>
                <Route path="/help">
                    <Help />
                </Route>

                <Route path="/success">
                    <Success />
                </Route>
                <Route path="/login">
                    {user ? <Redirect to="/" /> : <Login />}
                </Route>
                <Route path="/register">
                    {user ? <Redirect to="/" /> : <Register />}
                </Route>
                <Route path="/notifications">
                    <Notifikasi />
                </Route>
                {user ? (
                    <>
                        <Route path="/cart">
                            <Cart />
                        </Route>

                        <Route path="/checkout/:id">
                            <Checkout />
                        </Route>

                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/history">
                            <Riwayat />
                        </Route>
                        <Route path="/seller/:id">
                            <SellerEdit />
                        </Route>
                        <Route path="/seller">
                            <Seller />
                        </Route>
                    </>
                ) : (
                    <Redirect to="/" />
                )}
            </Switch>
        </Router>
    );
};

export default App;

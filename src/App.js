import React, { Suspense } from "react";
import Header from "./components/Header/Header";
import { Switch, Route } from "react-router-dom";
import Loading from "./components/UI/Loading";
import Footer from "./components/Footer/Footer";

const CallBackModal = React.lazy(() => import('./components/Modal/CallBackModal'))
const Pizza = React.lazy(() => import('./components/pages/Pizza/Pizza'))
const Main = React.lazy(()=> import('./components/pages/Main/Main'))
const Cart = React.lazy(()=> import('./components/pages/Cart/Cart'))
const Drinks = React.lazy(()=> import('./components/pages/Drinks/Drinks'))
const Promo = React.lazy(()=> import('./components/pages/Promo/Promo'))

const App = () => {

  return (
    <>
      <Header />
      <Suspense fallback={<Loading/>}>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/pizza' exact>
            <Pizza/>
          </Route>
          <Route path='/cart' exact>
            <Cart/>
          </Route>
          <Route path='/drinks' exact>
            <Drinks/>
          </Route>
          <Route path='/promo' exact>
            <Promo/>
          </Route>
        </Switch>
        <CallBackModal/>
      </Suspense>
      <Footer/>
    </>
  );
};

export default App;

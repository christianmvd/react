import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter, Redirect } from "react-router-dom";
import { NavBar } from "./components/NavBar/navBar";
import { Footer } from "./components/Footer/footer";
import { CartVista } from "./components/CartVista/CartVista";
import { Checkout } from "./components/Checkout/Checkout";
import { CartProvider } from "./components/context/CartContext";
import {UIProvider} from "./components/context/UIContext";
import { BuySuccess } from "./components/BuySuccess/BuySuccess"

function App() {
  
  
  
  return (
    <>
      <UIProvider>
      <CartProvider>

     
   
       <BrowserRouter>
          <div className="App">
        
            <p className="titulo">  Informatica Moderna</p>
            <div>
            <NavBar/>

            

            <Switch>
              <Route exact path="/">     
             
                <ItemListContainer aviso="Cargando Informatica Moderna......" />
              </Route>

              <Route exact path="/productos/:categoryId">
                <ItemListContainer aviso="Cargando....." />
              </Route>

              <Route exact path="/detail/:itemId">
                <ItemDetailContainer mensaje="Cargando Item....." />
              </Route>

              <Route exact path="/cart">
                <CartVista mensaje="Cargando carrito......" />
              </Route>

              <Route exact path="/Checkout">
                <Checkout mensaje="Cargando Finzalizacion....." />
              </Route>

              <Route exact path="/orden/:datosCliente">
                <BuySuccess mensaje="Cargando Orden Exitosa......"></BuySuccess>
              </Route>

              <Route path="*">
                <Redirect to="/"/>
              </Route>


            </Switch>
            
            <Footer />
           </div>
          
          </div>
         
        
        </BrowserRouter>
        </CartProvider>
       </UIProvider>
      
    
    </>
  );
}

export default App;

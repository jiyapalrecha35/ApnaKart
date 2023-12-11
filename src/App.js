import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer'
import React, { useState } from 'react'
import Additem from './components/Additem';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const products = [{ price: 79999, name: "IPhone 14", quantity: 0 }, { price: 189900, name: "Iphone 14 pro max", quantity: 0 }, { price: 32000, name: " Vivo V25", quantity: 0 }, { price: 150000, name: "Samsung flip", quantity: 0 }, { price: 59400, name: "OnePlus 10-T", quantity: 0 }]


  const [productList, setproductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const increment = (index) => {
    let newproductlist = [...productList]
    let newtotalamount = totalAmount;
    newtotalamount += newproductlist[index].price
    newproductlist[index].quantity++;
    setTotalAmount(newtotalamount);
    setproductList(newproductlist);
  }
  const decrement = (index) => {
    let newproductlist = [...productList];
    let newtotalamount = totalAmount;
    if (newproductlist[index].quantity > 0) {
      newproductlist[index].quantity--;
      newtotalamount -= newproductlist[index].price;
    }
    setTotalAmount(newtotalamount);
    setproductList(newproductlist);
  }
  const Reset = () => {
    let newproductlist = [...productList];
    newproductlist.map((products) => products.quantity = 0);
    setproductList(newproductlist);
    setTotalAmount(0);
  }
  const Remove = (index) => {
    let newproductlist = [...productList];
    let newtotalamount = totalAmount;
    newtotalamount -= newproductlist[index].price * newproductlist[index].quantity;
    newproductlist.splice(index, 1);
    setproductList(newproductlist);
    setTotalAmount(newtotalamount);
  };
  const addItem = (name, price) => {
    let newproductList = [...productList];
    newproductList.push({
      price: price,
      name: name,
      quantity: 0,
    });
    setproductList(newproductList);
  };
  return (
    <>
      <Router>
        <Switch>

          <Route path="/apnakart">
          <h3 className="py-5 m-0 text-center" style={{backgroundColor:'#fc95a8',color:'white'}}>Apna Kart</h3>
            <Navbar />
            <main className='container my-5'>
              <Additem addItem={addItem} />
              <ProductList
                productList={productList}
                increment={increment}
                decrement={decrement}
                Remove={Remove}/>
            </main>
            <Footer totalAmount={totalAmount} Reset={Reset} />
          </Route>
         
          <Route path="/">
          <h3 className="py-5 m-0 text-center" style={{backgroundColor:'#fc95a8',color:'white'}}>Apna Kart</h3>
            <Navbar />
            <Home />
          </Route>
        </Switch>
      </Router>

    </>
  );
}

export default App;


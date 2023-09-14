/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import CartProvider from './store/CartProvider';

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme"): "synthwave")
  const [checked, setChecked] = useState(localStorage.getItem("theme") === "synthwave" ? false : true);

  useEffect(()=>{
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme",localTheme);
    //setChecked(!checked);
  },[theme])

  const toggleTheme = (e) => {
    e.target.checked ? setTheme("aqua") : setTheme("synthwave");
    setChecked(!checked);
  }


  return (
    <CartProvider>
      <Header onToggle = {toggleTheme} checked = {checked}/>
      <section className='bg-hero-pattern'>
        <Hero/>
      </section>
    </CartProvider>
  )
};

export default App;
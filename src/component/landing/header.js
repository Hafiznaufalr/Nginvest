import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Login from '../login/Login'



class Header extends Component {
  render() {
    return (
      <header >
        <br/>
        <h1>Nginvest</h1>
        <p>Ayo Bantu UMKM Lokal dan Dapatkan Keuntungan!</p>
        <div>
          <button type="button">Coba Sekarang!</button>
        </div>
        <img alt="gambar"  src="./assets/header.png" />

      </header>
    );
  }
}

export default Header;

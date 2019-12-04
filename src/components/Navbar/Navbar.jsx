import React  from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import '../App.css'
import Logo from '../img/logo.png'
import Home from './Home'
import UserProfil from './UsersRegister'
import Products from './Products'
  export default function Navbar() {

    return (
        <Router>
        <div class="navbar">
            <NavLink activeClassName="activeNavLink" to="/">Home</NavLink>
            <div class="dropdown">
                <NavLink to="/product" class="dropbtn">Men
                    <i class="fa fa-caret-down"></i>
                </NavLink>
                <div class="dropdown-content">
                    <div class=" dropdown-content row">
                        <div class="column">
                            <h3>Vêtements</h3>
                            <NavLink activeClassName="activeNavLink" to="/product/pull">Pulls & Sweats</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/blouson">Bloousons & Manteaux</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/jeans">Jeans</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/pantalon">Pantalon & Bermudas</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/chemise">Chemises</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/costume">Costume</NavLink>
                        </div>
                        <div class="column">
                            <h3>Accessoires</h3>
                            <NavLink activeClassName="activeNavLink" to="/product/chaussure">Chaussures</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/cravate">Cravates</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/chaussette">Chaussettes</NavLink>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="dropdown">
                <button class="dropbtn">Women
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <div class=" dropdown-content row">
                        <div class="column">
                            <h3>Vêtements</h3>
                            <NavLink activeClassName="activeNavLink" to="/product/pull">Pulls & Sweats</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/blouson">Bloousons & Manteaux</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/jeans">Jeans</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/pantalon">Pantalon & Bermudas</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/chemise">Chemises</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/costume">Costume</NavLink>
                        </div>
                        <div class="column">
                            <h3>Accessoires</h3>
                            <NavLink activeClassName="activeNavLink" to="/product/chaussure">Chaussures</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/cravate">Cravates</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/chaussette">Chaussettes</NavLink>
                        </div>
                    </div>
                </div>
            </div> 
                  <NavLink activeClassName="activeNavLink" to="/userprofil">User Profil</NavLink>
            <Switch>
          <Route path="/userprofil">
            <UserProfil />
          </Route>
          <Route path="/product">
            <Products />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        </div>
        </Router>
            
    )
                        
}


  

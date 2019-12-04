import React  from 'react'
import {    
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
  
import Home from '../pages/HomePage'
import UserProfil from '../pages/ProfilPage'
import Products from '../pages/ProductsPage'
  export default function Navbar() {

    return (
        
        <div class="navbar">
            <NavLink activeClassName="activeNavLink" to="/">Home</NavLink>
            <div class="dropdown">
                <button to="/product" class="dropbtn">Men
                    <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                    <div class=" dropdown-content row">
                        <div class="column">
                            <h3>Vêtements</h3>
                            <NavLink activeClassName="activeNavLink" to="/product/pull">Pulls & Sweats</NavLink>
                            <NavLink activeClassName="activeNavLink" to="/product/blouson">Blousons & Manteaux</NavLink>
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
                <NavLink activeClassName="activeNavLink" to="/profil">User Profil</NavLink>
            <Switch>
            <Route path="/profil">
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
        
            
    )
                        
}


  

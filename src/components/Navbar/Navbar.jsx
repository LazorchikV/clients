import React from "react";
import s from './Navbar.module.css';



const Navbar = () => {
    return (      
       <div className={s.reg}>
         <button class="menu-toggle js-activate-off-canvas-menu">
             <span aria-label="site navigation">&#9776;</span> MENU
        </button> 
        <div className={s.fon}>
          <a href="/registrations" className={s.links}>Регистрация</a> 
          </div>
        <div className={s.fon}>
           <a href="/list" className={s.links}>Список клиентов</a>
        </div>
        <div className={s.fon}> 
        <a href="/aboute" className={s.links}>Об авторе</a> 
        </div>  
    </div>
    )
};

export default Navbar;

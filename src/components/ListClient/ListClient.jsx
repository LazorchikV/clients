import React from "react";
import s from "./List.module.css";
import Client from "./Client";
import clients from "../clients";

const ListClient = ({clients}) => {
  console.log(clients);
        return (
      <div className={s.forms}>
       <Client />    
    <div className={s.fon}>
             
          <a href="/registrations" className={s.links}>Регистрация</a> 
          </div>
       </div>
    )
};
export default ListClient;
import s from "./Registrations.module.css";
import React, { Component } from "react";  
import Cart from "./Cart";
import ApiService from "../API/API";
  
class Registrations extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {
     date: new Date(), 
     firstName: "", 
     lastName: "", 
     gender: "",  
     state: ""         
    };  
    this.onChangeHandler = this.onChangeHandler.bind(this);  
    this.handleSubmit = this.handleSubmit.bind(this);  
  }  
  handleSubmit(){
  }
  onChangeHandler(e) {  
    this.setState({  
      [e.target.name]: e.target.value  
    });  
  }  
  render() { 
    let   button;
    if (this.state.state === "cart") {
        button = <Cart />;
    } 
    return (  
      <div className={s.registr}>  
        <h3>Форма регистрации</h3>  
        <br />  
        <form method='POST' action='/' onClick={this.handleSubmit}>         
          <label>Имя: </label>  
          <input  
            type="text"  
            value={this.state.firstName} 
            name="firstName"  
            placeholder="Введите Ваше имя"  
            onChange={this.onChangeHandler}  
          />  
          <br />  
          <label>Фамилия: </label>  
          <input  
            type="text"  
            value={this.state.lastName} 
            name="lastName"  
            placeholder="Введите Вашу фамилию"  
            onChange={this.onChangeHandler}  
          />  
          <br />  
          <label>Пол: </label>  
          <label>Мужчина</label>  
          <input  
            type="radio"  
            name="gender"  
            value="male"  
            checked={this.state.gender === "male"}  
            onChange={this.onChangeHandler}  
          />  
          <label>Женщина</label>  
          <input  
            type="radio"  
            name="gender"  
            value="female"  
            checked={this.state.gender === "female"}  
            onChange={this.onChangeHandler}  
          />  
          <br />  
          <label>Программа лояльности: </label>  
          <select  
            name="state"  
            value={this.state.state}  
            onChange={this.onChangeHandler}>  
            <option value="close">Недоступно</option>  
            <option selected value="cart">Пластиковая карта</option>           
            <option value="mobileapp">Мобильное приложение</option>                         
          </select>    
          <button>Сохранить</button>                                           
        </form>  
        {button}   
        <br />
        <br />
        <br />
        <pre>{JSON.stringify(this.state, null, 2)}</pre> 
        <br />      
        <ApiService />
        </div> 
    );  
  }  
}  
  
export default Registrations;
import React from 'react'
import { Button, Card, Container, Row, Col, Form, Carousel, ButtonToolbar, Tabs, Tab, Sonnet, Table, FormControl, InputGroup, Modal } from 'react-bootstrap';
import './style.css';
import { Link,Redirect } from 'react-router-dom'
import api from '../../services/api'
import Header from '../components/header/header'
import FormRegister from './form/form'
import NavBar from './NavBar'


export default class Register extends React.Component {

    render(){
        return(
            <div id = 'contentForm'>
                  <div>   
                    {/* <Header/> */}
                    <NavBar/>
                 </div>  
                 <div id = 'leftSideT'>
                  {/* <h1 id = 'titleForm'>Cadastro de Escola</h1> */}
                      <div id = 'formsT'> 
                         <FormRegister/> 
                    </div> 

                </div>
            </div>
        )
    }
}
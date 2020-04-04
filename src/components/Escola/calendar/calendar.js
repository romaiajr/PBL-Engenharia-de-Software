import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import './style.css';
import ptBr from '@fullcalendar/core/locales/pt-br'
import { formatDate } from '@fullcalendar/core'
import Agendamento from '../visit/agendamento'
import { Modal,Alert}  from 'react-bootstrap';


export default class Calendar extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      control: false,
      date1: ''
    }
  }

  //método responsável por receber a data onde o usuário clicou.
  handleDateClick = (arg) => { 
    var date = formatDate(arg.dateStr, {
      month: 'numeric',
      year: 'numeric',
      day: 'numeric',
      locale: 'pt-br'
    })
    this.setState({control: true,date1: date})
  }


  render() {
    return (
        <div>
          <Modal
                size="lg"
                show={this.state.control}
                onHide={() => this.setState({ control: false })}
                aria-labelledby="example-modal-sizes-title-lg"
                id='modal'
            >
                <Modal.Header closeButton id='header'>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Agendamento de visita
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Agendamento date2 = {`${this.state.date1}`}/>
                </Modal.Body>
            </Modal>
          <Alert variant= 'primary'>
              Escolha um dia para agendar a sua visita.
          </Alert>
          <FullCalendar
            weekends={false} 
          
            dateClick={this.handleDateClick} 

            locale = {ptBr} id='calendar' 

            defaultView="dayGridMonth" 

            height = {600}
            
            columnHeaderFormat = {{weekday: 'long' }}
            
            plugins={[ dayGridPlugin, interactionPlugin ]}         
          />
        </div>
    )
  }

}
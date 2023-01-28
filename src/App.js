import './App.css';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from "react-modal";
import moment from 'moment';
Modal.setAppElement("#root");


function App() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isOpen, setOpen] = React.useState(false);
  const [isEditable, setEditable] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);
  let currDate = new Date();
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  const handleEventSubmit = () => {
    toggleModal();
    if (eventName !== '' && eventDate !== '') {
      setEvents([...events, { title: eventName, start: eventDate }]);
      setEventName('');
      setEventDate('');
      setIsValid(true);
    }
  }

  function toggleModal() {
    setOpen(!isOpen);
    setEditable(!isEditable);
  }

  const validate = () => {
    // code to validate date and string inputs
    let itemDate = moment(eventDate).toDate();
    itemDate.setHours(23,59,59,999);
    if (eventDate !== '' && eventName !== '' && (itemDate >= currDate)){
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }

  const handleEventClick = (event) => {
    console.log(event);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", () => {
      const updatedEvents = events.filter(e => e.title !== event.event.title && e.start !== event.event.start);
      setEvents(updatedEvents);
    });
    event.el.appendChild(deleteButton);
  }

  return (
    <div>
    <Modal className="myModal" overlayClassName="Overlay" isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Add new Item">
      <p class ="Text">Enter Product Name:</p>
        <input class="inputBox" placeholder="Product" value={eventName} onChange={(e) => setEventName(e.target.value)} onBlur={validate}  /><br></br><br></br>
      <p class="Text">Enter Expiry Date:</p>
        <input class="inputBox" placeholder="Expiry Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} type="date" onBlur={validate}  /><br></br>
        <button class="SubmitButton" hidden={isValid} onClick={handleEventSubmit}>Add Event</button>
        <p hidden={!isValid} >Please Enter a valid Name and Date</p>
        </Modal>
      <div hidden={isEditable}>
       
        <FullCalendar
        contentHeight={500}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        initialView = 'dayGridWeek'
        eventClick={handleEventClick}
        dateClick={(e) => {
          setEventDate(e.dateStr);
          toggleModal();
        }}
      />
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title} on {event.start}</li>
        ))}
      </ul>
      <button  class= "addButton" variant="outlined" color="primary" onClick={toggleModal}>Add Item</button>  
      </div>
    </div>
  );
}

export default App;
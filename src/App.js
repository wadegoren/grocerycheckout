import './App.css';

import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Modal from "react-modal";
Modal.setAppElement("#root");


function App() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isOpen, setOpen] = React.useState(false);
  const [isEditable, setEditable] = React.useState(false);

  const handleEventSubmit = () => {
    toggleModal();
    if (eventName !== '' && eventDate !== '') {
      setEvents([...events, { title: eventName, start: eventDate }]);
      setEventName('');
      setEventDate('');
    }
    
  }

  function toggleModal() {
    setOpen(!isOpen);
    setEditable(!isEditable);
  }

  return (
    <div>
    <Modal className="myModal" overlayClassName="Overlay" isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Add new Item">
        <input class="inputBox" placeholder="Product" value={eventName} onChange={(e) => setEventName(e.target.value)} /><br></br>
        <input placeholder="Expiry Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} type="date" /><br></br>
        <button class="addButton" onClick={handleEventSubmit}>Add Event</button>
        </Modal>
      <div hidden={isEditable}>
      <button  class= "addButton" variant="outlined" color="primary" onClick={toggleModal}>Add Item</button>  
        <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        initialView = 'dayGridWeek'
        dateClick={(e) => {
          setEventDate(e.dateStr);
        }}
      
      />
      <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title} on {event.start}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from "react-modal";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';

const linkStyle = {
  width: '60%',
  // position: 'absolute',
  bottom: '0px',
  height: '100%',
  margin: '40px',
  backgroundColor: '#53646d',
  textAlign: 'center',
  lineHeight: '200px',
  color: '#fff',
  boxShadow: '0 0 10px #333',
  borderRadius: '10px',
  borderColor: '#53646d',
  zIndex:'0',
};

function Dashboard() {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [isOpen, setOpen] = React.useState(false);
  const [isEditable, setEditable] = React.useState(false);
  const [isValid, setIsValid] = React.useState(true);
  let currDate = new Date();
  const [isValidDate, setIsValidDate] = React.useState(false);
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
    if (eventDate !== '' && eventName !== '' && itemDate > currDate){
      setIsValid(false);
      setIsValidDate(false);
    } else {
      setIsValid(true);
    }
    if(itemDate < currDate){
      setIsValidDate(true);
      setIsValid(false);
    }
  }

  const handleEventClick = (event) => {
    console.log(event);
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", () => {
      const updatedEvents = events.filter(e => e.title !== event.event.title && e.start !== event.event.start);
      setEvents(updatedEvents);
    });
    event.el.appendChild(deleteButton);
  }

  function eventRender(info) {
    info.el.style.height = "100px";
  }

  return (
    <div className="dashboard">
      <div className="header">Grocery Checkout</div>
    
      {/* <Link to="/calendar" className="btn btn-primary" style={linkStyle}>  */}
        {/* <button className="panel2" >Panel 4</button> */}
        <div class='width'>
    <Modal className="myModal" overlayClassName="Overlay" isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Add new Item">
      <p class ="Text">Enter Product Name:</p>
        <input class="inputBox" placeholder="Product" value={eventName} onChange={(e) => setEventName(e.target.value)} onBlur={validate}  /><br></br><br></br>
      <p class="Text">Enter Expiry Date:</p>
        <input class="inputBox" placeholder="Expiry Date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} type="date" onBlur={validate}  /><br></br>
        <button class="SubmitButton" hidden={isValid} onClick={handleEventSubmit}>Add Event</button>
        <p hidden={!isValidDate} class="redtext">Note: Your Product is expired!</p>
        </Modal>
      <div hidden={isEditable}>
        <FullCalendar
        style={linkStyle}
        contentHeight={300}
        plugins={[dayGridPlugin, interactionPlugin]}
        events={events}
        initialView = 'dayGridWeek'
        eventClick={handleEventClick}
        eventClassNames={(event) => {
          return "my-event-height";
        }}
        dateClick={(e) => {
          setEventDate(e.dateStr);
          toggleModal();
        }}
      />
      {/* <ul>
        {events.map((event, index) => (
          <li key={index}>{event.title} on {event.start}</li>
        ))}
      </ul> */}
      <button  class= "addButton" variant="outlined" color="primary" onClick={toggleModal}>Add Item</button>  
      </div>
    </div>
      {/* </Link> */}
        {/* <div className="panel3">Panel 5</div> */}
      <div className="panels1">
      <div className="panel1">
          <h6 class='head6'>Already Expired Items</h6>
        {events
           .filter(event => moment(event.start).startOf('day') < moment(new Date()).startOf('day'))
          .map((event, index) => (
            <p class='innerText' key={index}>{event.title} on {event.start}</p>
          ))}
</div>
<div className="panel1">
          <h6 class='head7'>Expires Today</h6>
          {events
            .filter(event => moment(event.start).toDate().toDateString() === new Date().toDateString())
            .map((event, index) => (
              <p class='innerText' key={index}>{event.title}</p>
            ))}
        </div>
        <div className="panel4">
        <h6 class='head8'>Suggested Recipes</h6>
        <ul class="test">
          <li class="list">4 pound (2kg) whole chicken, at room temperature giblets and neck removed from cavity*</li>
          <li class="list">1/4 cup unsalted butter, melted</li>
          <li class="list">3 tablespoons olive oil</li>
          <li class="list">1/4 cup white wine, (OPTIONAL) -- use a dry wine like a Sauv blanc or Chardonnay</li>
          <li class="list">1 lemon, halved</li>
          <li class="list">Salt and freshly ground pepper, to taste</li>
          <li class="list">2 tablespoons fresh chopped parsley</li>
          <li class="list">4 garlic cloves, minced</li>
          <li class="list">1 head of garlic roughly peeled and cut in half horizontally through the middle crosswise</li>
          <li class="list">3 fresh whole rosemary sprigs</li>
          <a href="https://cafedelites.com/garlic-herb-butter-roast-chicken/"></a>

        </ul>
        </div>
      </div>
    </div>
  );
}
// let itemDate = moment(eventDate).toDate();
// itemDate.setHours(23,59,59,999);
export default Dashboard;
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Card, Button} from "react-bootstrap";
import { deleteContact } from '../JS/Actions/contact';


const ContactCard = ({contact}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
       <Card style={{ width: '18rem', margin: "5%" }}>
      <Card.Img variant="top" src="data:image/png;base64,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" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>{contact.email}</Card.Text>
        <Card.Text>{contact.phone}</Card.Text>
        <Button variant="primary" 
        onClick={()=>navigate(`/edit/${contact._id}`)}
        style={{margin:"2%"}}>
          Edit
          </Button>
        <Button variant="primary" 
        onClick={()=>dispatch(deleteContact(contact._id))}
        style={{margin:"2%"}}>
          Delete
          </Button>
      </Card.Body>
    </Card> 
    </div>
  )
}

export default ContactCard

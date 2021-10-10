import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap'

const Cards = (props) => {
    const [age, setAge] = useState(false);
    const [nationality, setNat] = useState(false);
    return (
        <div>
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>Contact Card of {props.name}</Card.Title>
                    <Card.Text>
                        <p>Name: {props.name}</p>
                        <p>Email: {props.email}</p>
                        <p>Gender : {props.gender}</p>
                        <p>Nationality : {props.nat}</p>
                        {age && <p>Age: {props.age}</p>}
                    </Card.Text>
                       <Button variant="primary" onClick={() => setAge(!age)}>Show Age</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Cards;
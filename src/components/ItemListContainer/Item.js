import React from 'react'
import {Button, Card} from 'react-bootstrap'
import "./ItemListContainer.css"
import { Link } from 'react-router-dom'

export const Item = ( {id, nombre, precio, img, descripcion, categoria} ) => {


    return (

        <Card style={{ width: '18rem' }} className="m-3">
            <Card.Img variant="top" src={img}  />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <Card.Text>Precio: ${precio}</Card.Text>
                <Card.Text>Categoria: <br/> {categoria}</Card.Text>
                <Link to={`/detail/${id}`}>
                    <Button variant="primary">Comprar</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}
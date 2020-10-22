import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import {ButtonContainer} from "./Button";
import {Link} from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import ProductList from './ProductList';

export default function Home() {
    return (
        <>
            <Jumbotron>
                <div className="jumbotron-text text-center">
                <h1>The Adventure Station</h1>
                    <p><strong>Your First Stop on Your Way To Adventure!</strong></p>
                <p>
                <Link to="/products" className="ml-auto d">
                        <ButtonContainer>
                            View Adventures
                        </ButtonContainer>
                    </Link>
                    </p>
                    </div>
            </Jumbotron>
            <CardDeck className="mx-2 card-deck">
            <Card>
                    <Card.Body>
                    <Card.Title>The Adventure Station</Card.Title>
                        <Card.Text>
                            The adventure station was founded in 2020 as a way to get people outside in small groups. View our upcoming adventures to meet new friends, learn new skills, and get outside!
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card>
                    <Card.Body>
                        <Card.Title>Adventure Options</Card.Title>
                            <Card.Text>
                                The adventure station offers trips for beginners up to experts. The goal of our trips is to get outside, meet new people, and find new hobbies. We offer adventures in hiking, paddling, biking, and much more!
                            </Card.Text>
                    </Card.Body>
            </Card>
            <Card>
                    <Card.Body>
                    <Card.Title>How do I register?</Card.Title>
                        <Card.Text>
                            Add an adventure to your cart and check out to get all registered for your upcoming adventure!
                        </Card.Text>
                    </Card.Body>    
            </Card>
            </CardDeck>
            <ProductList    />
        </>
    )
}
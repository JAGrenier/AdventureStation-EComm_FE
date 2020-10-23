import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'

export default function Home() {
    return (
        <>
            <Jumbotron className="fluid"> 
                <div className="jumbotron-text text-center">
                <h1>The Adventure Station</h1>
                    <h2>Your First Stop on Your Way To Adventure!</h2>
                <p>
                {/* <Link to="/products" className="ml-auto d">
                        <ButtonContainer>
                            View Adventures
                        </ButtonContainer>
                    </Link> */}
                    </p>
                    </div>
            </Jumbotron>
            <h2>Offered Activities</h2>
            <CardDeck className="mx-2 card-deck text-center">
            <Card>
                    <Card.Body>
                    <Card.Title>Cycling</Card.Title>
                        <Card.Text>
                            <i className="fas fa-biking"></i>
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card>
                    <Card.Body>
                    <Card.Title>Hiking</Card.Title>
                        <Card.Text>
                            <i className="fas fa-hiking"></i>
                        </Card.Text>
                    </Card.Body>
            </Card> 
            <Card>
                    <Card.Body>
                    <Card.Title>Photo</Card.Title>
                        <Card.Text>
                        <i className="fas fa-camera"></i>
                        </Card.Text>
                    </Card.Body>
            </Card>
            <Card>
                    <Card.Body>
                        <Card.Title>Paddling</Card.Title>
                            <Card.Text>
                            <i className="fas fa-water"></i>
                            </Card.Text>
                    </Card.Body>
            </Card> 
            <Card>
                    <Card.Body>
                    <Card.Title>Relaxing</Card.Title>
                        <Card.Text>
                        <i className="fas fa-mountain"></i>
                        </Card.Text>
                    </Card.Body>    
            </Card>
            </CardDeck>
            <p className="text-muted text-small" >Photo by <a href="https://unsplash.com/@anastasia_p">Anastasia Petrova</a> on Unsplash</p>
        </>
    )
}
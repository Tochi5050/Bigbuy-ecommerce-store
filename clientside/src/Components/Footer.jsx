import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Footer = () => {

const year = new Date().getFullYear()

  return (
    
    <footer>
    <Container>
        <Row>
            <Col className="py-3">
                <p className='custom-footer'>BigBuy &copy; {year} All rights reserved</p>
            </Col>
        </Row>
    </Container>
    </footer>
   
  )
}

export default Footer
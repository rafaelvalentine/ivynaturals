import React, { Component } from 'react'
import { Button, Card, Container, Row, Col, Tabs, Tab } from 'react-bootstrap'
import './Products.css'

const ProductCard = (props) => {
  const {img, title, text, amount} = props
  return (
    <Col xs={12} md={6} lg={4}>
      <Card className='product-card'>
        <Card.Img variant='top' src={img}  alt={`image of ${title}`}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
              {text}
          </Card.Text>
          <Card.Text className='naira'>
              &#8358; {amount}
          </Card.Text>
          {/* <Button className='product-card_button' variant='primary'>Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </Col>
  )
}

export default class Products extends Component {
  static defaultProps = {
    lotions:[
      {
        img:'assets/img/lotion.png',
        title:'Ivy Lotion',
        text:'Let our all natural lotion hydrate your skin',
        amount:'1,135'
      },
      {
        img:'assets/img/lotion.png',
        title:'Ivy Lotion',
        text:'Let our all natural lotion hydrate your skin',
        amount:'1,135'
      },
      {
        img:'assets/img/lotion.png',
        title:'Ivy Lotion',
        text:'Let our all natural lotion hydrate your skin',
        amount:'1,135'
      },
      {
        img:'assets/img/lotion.png',
        title:'Ivy Lotion',
        text:'Let our all natural lotion hydrate your skin',
        amount:'1,135'
      },
      {
        img:'assets/img/lotion.png',
        title:'Ivy Lotion',
        text:'Let our all natural lotion hydrate your skin',
        amount:'1,135'
      },
      {
        img:'assets/img/lotion.png',
        title:'Ivy Lotion',
        text:'Let our all natural lotion hydrate your skin',
        amount:'1,135'
      }
    ],
    creams:[
      {
        img:'assets/img/cream.jpg',
        title:'Ivy Cream',
        text:'Let our all natural cream refresh your skin',
        amount:'2,375'
      },
      {
        img:'assets/img/cream.jpg',
        title:'Ivy Cream',
        text:'Let our all natural cream refresh your skin',
        amount:'2,375'
      },
      {
        img:'assets/img/cream.jpg',
        title:'Ivy Cream',
        text:'Let our all natural cream refresh your skin',
        amount:'2,375'
      },
      {
        img:'assets/img/cream.jpg',
        title:'Ivy Cream',
        text:'Let our all natural cream refresh your skin',
        amount:'2,375'
      },
      {
        img:'assets/img/cream.jpg',
        title:'Ivy Cream',
        text:'Let our all natural cream refresh your skin',
        amount:'2,375'
      },
      {
        img:'assets/img/cream.jpg',
        title:'Ivy Cream',
        text:'Let our all natural cream refresh your skin',
        amount:'2,375'
      }
    ],
    soaps:[
      {
        img:'assets/img/soap.jpg',
        title:'Ivy Soap',
        text:'Let our all natural soap recreate your skin',
        amount:'1,775'
      },
      {
        img:'assets/img/soap.jpg',
        title:'Ivy Soap',
        text:'Let our all natural soap recreate your skin',
        amount:'1,775'
      },
      {
        img:'assets/img/soap.jpg',
        title:'Ivy Soap',
        text:'Let our all natural soap recreate your skin',
        amount:'1,775'
      },
      {
        img:'assets/img/soap.jpg',
        title:'Ivy Soap',
        text:'Let our all natural soap recreate your skin',
        amount:'1,775'
      },
      {
        img:'assets/img/soap.jpg',
        title:'Ivy Soap',
        text:'Let our all natural soap recreate your skin',
        amount:'1,775'
      },
      {
        img:'assets/img/soap.jpg',
        title:'Ivy Soap',
        text:'Let our all natural soap recreate your skin',
        amount:'1,775'
      }
    ]
  }
  render () {
    const lotionCard = this.props.lotions.map((product, index)=>(
      <ProductCard key={index} {...product}/>
    ))
    const creamCard = this.props.creams.map((product, index)=>(
      <ProductCard key={index} {...product}/>
    ))
    const soapCard = this.props.soaps.map((product, index)=>(
      <ProductCard key={index} {...product}/>
    ))
    return (
      <div>
        <Container>
          <Tabs defaultActiveKey='lotion' id='product-tab'>
            <Tab eventKey='lotion' title='Lotions'>
            <Row>
            {lotionCard}
            </Row>
              
            </Tab>
            <Tab eventKey='cream' title='Creams'>
            <Row>
            {creamCard}
            </Row>
            </Tab>
            <Tab eventKey='soap' title='Soaps'>
            <Row>
            {soapCard}
            </Row>
            </Tab>
            {/* <Tab eventKey='profile3' title='Profile'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </Tab>
            <Tab eventKey='profile4' title='Profile'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
            </Tab>
            <Tab eventKey='contact' title='Contact' disabled /> */}
          </Tabs>
        </Container>
      </div>
    )
  }
}

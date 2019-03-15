import React, { Component } from 'react'
import { Jumbotron, Button, Card, Container, Row, Col } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import bannerImage from '../../Img/model-two.jpg'
import Products from './Products/Products'
import './Home.css'

const ValueList = (props) => {
  const { text, title, number, img } = props
  return (

    <Col xs={12}>
      <div className='values-content_items'>
        <img src={img} alt={img} />
        <div className='values-content_items_bottom'>
          <div className='number'>{number}</div>
          <div className='title'>{title}</div>
          <div className='text'>{text}</div>
        </div>
      </div>
    </Col>
  )
}

// const BenefitList = (props) => {
//   const { text, title, number, img } = props
//   return (

//     <Col xs={12}>
//       <div className=''>
//         <img src={img} alt={img} />
//         <div className=''>
//           <div className='number'>{number}</div>
//           <div className='title'>{title}</div>
//           <div className='text'>{text}</div>
//         </div>
//       </div>
//     </Col>
//   )
// }
export default class Home extends Component {
 static defaultProps = {
 values:[
   {
    img:'assets/img/skin.jpeg',
    number:'1',
    title:'Enrich your skin',
    text:'Let of our brand of naturally derived products rejuvinate you'
   },
   {
    img:'assets/img/ingredients.jpeg',
    number:'2',
    title:'Made from nature',
    text:'From the best known natural skin care ingredients on earth, the Skin Genome Project, with 20,238 ingredients'
   },
   {
    img:'assets/img/product.jpeg',
    number:'3',
    title:'Designed for you',
    text:'Custom-made for you by our a in-house Dermatologist.'
   }
 ],
 benefits:[
  {
   img:'assets/img/intelligence.svg',
   title:'Enrich your skin',
   text:'Let of our brand of naturally derived products rejuvinate you'
  },
  {
    img:'assets/img/fingerprints.svg',
    title:'Enrich your skin',
    text:'Let of our brand of naturally derived products rejuvinate you'
   },
   {
    img:'assets/img/badge.svg',
    title:'Enrich your skin',
    text:'Let of our brand of naturally derived products rejuvinate you'
   }
]
  }
  render () {
    const values = this.props.values.map((value, index)=>(
        <ValueList key={index} {...value}/>
    ))
    const benefits = this.props.benefits.map((value, index)=>(
      <ValueList key={index} {...value}/>
  ))
    return (
      <div>
        <Helmet>
          <title>Home | Ivy Naturals</title>
          <meta name='description' content='Helmet application' />
        </Helmet>
        {/*
         ==========================================================================
          Banner
         ==========================================================================
        */}
        <section className='banner'>
          <Jumbotron style={{ backgroundImage: 'url(' + bannerImage + ')' }} className='banner-jumbotron'>
            <div>
              <h4>welcome to,</h4>
              <h1>Ivy Natural</h1>
              <p>
              Beauty and Skin Care that's Grown For You!
              </p>
              <p>
                <Button className='banner_button' variant='primary'>Let's Get Started <i class='fas fa-caret-down' /></Button>
              </p>
            </div>
          </Jumbotron>
        </section>

        {/*
         ==========================================================================
          Values
         ==========================================================================
        */}

        <section id='values' className='values'>
        <div className='header'>
          <h2>
            why choose us
          </h2>
          <hr/>
        </div>
          <div className='values-content'>
            <Container>
              <Row>
                {values}
              </Row>
            </Container>
          </div>
        </section>


          {/*
         ==========================================================================
          Products
         ==========================================================================
        */}

        <section id='products' className='products'>
        <div className='header'>
          <h2>
            Products
          </h2>
          <hr/>
        </div>
          <div className='products-content'>
              <Products/>
          </div>
        </section>

         {/*
         ==========================================================================
          Products
         ==========================================================================
        */}

        <section id='benefits' className='benefits'>
        <div className='header'>
          <h2>
            Ivy's Benefits
          </h2>
          <hr/>
        </div>
          <div className='benefits-content'>
              <Row>
                  {benefits}
              </Row>
          </div>
        </section>

        {/*
         ==========================================================================
          Team
         ==========================================================================
        */}

<section id='team' className='team'>
        <div className='header'>
          <h2>
            meet the Crème de la Crème
          </h2>
          <hr/>
        </div>
          <div className='team-content'>
                  <Card style={{ width: '18rem' }}>
                    <Card.Img className='team-img' variant="top" src="assets/img/ivy_owner.jpg" />
                    <Card.Body>
                      <Card.Title>Barr. Ifeoma Mmamelu</Card.Title>
                      <Card.Text className='team-text'>
                      Before founding Ivy Natural, Barr. Ifeoma was a fully time law attorney. She has a Masters in Property Law from Stanford.
                      </Card.Text>
                      <Card.Text className='team-text'>
                      She is also a mother and health enthusiast. 
                      </Card.Text>
                    </Card.Body>
                  </Card>
          </div>
        </section>
      </div>
    )
  }
}

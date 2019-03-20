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

const Testimony = (props) => {
  const { text, author, date } = props
  return (
      <Col xs={12} md={6} lg={6}>
      <div className='testimony'>
        <div className='testimony-card'>
          <p className='text'>"{text}"</p>
          <p className='author'> - {author}</p>
          <p className='date'>{date}</p>
        </div>
      </div>
    </Col>
  )
}
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
],
testimony:[
  {
   date:'February 2019',
   author:'Beauty Nigeria',
   text:'One skin care brand that stands out in the sea of swag: Ivy Natural.'
  },
  {
    date:'January 2019',
    author:'Fashion house et Nigeria',
    text:" I don't actually need the 27 other skincare products dominating my #shelfie any more. Consider me woke"
   }
]
  }
  componentDidMount(){
    window.onscroll = ()=>{
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        document.getElementById("scroll").style.opacity = ".75";
        document.getElementById("scroll").style.transform = "translateX(0)";
        // document.getElementById("scroll").style.display = "flex";
      } else {
        document.getElementById("scroll").style.opacity = "0";
        document.getElementById("scroll").style.transform = "translateX(50px)";
      }
    }
  
    // if ( window.scrollTop > 20 || document.body.scrollTop > 20) {
    //   document.getElementById("scroll").style.display = "block";
    // } else {
    //   document.getElementById("scroll").style.display = "none";
    // }
    console.log('exampleComponent mounted');
  }
  render () {
    const values = this.props.values.map((value, index)=>(
        <ValueList key={index} {...value}/>
    ))
    const benefits = this.props.benefits.map((value, index)=>(
      <ValueList key={index} {...value}/>
  ))
    return (
      <div id='home'>
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
                <Button className='banner_button' variant='primary'>Let's Get Started <i className='fas fa-caret-down' /></Button>
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

            {/*
         ==========================================================================
          Testimonies
         ==========================================================================
        */}

        <section id='testimonies' className='testimonies'>
                  <div className='testimonies-content'>
                  <Row>
                  <Testimony 
                        text={this.props.testimony[0].text} 
                        author={this.props.testimony[0].author}
                        date={this.props.testimony[0].date}
                          />
                          <div  className='col-lg-4 vertical-line'/>
                          <hr/>

                          <Testimony 
                        text={this.props.testimony[1].text} 
                        author={this.props.testimony[1].author}
                        date={this.props.testimony[1].date}
                          />
                  </Row>
                     
                  </div>
          </section>
              {/*
         ==========================================================================
          Scroll Top
         ==========================================================================
        */}
        <div onClick={()=>(
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
        )} id="scroll">
        <i className="fas fa-sort-up"></i>
        </div>
      </div>
    )
  }
}

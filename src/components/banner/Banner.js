import React from 'react'
import { nokia, text } from '../../static/Index'
import "./Banner.css"
import { img } from '../../static/Index'
import { img_text } from '../../static/Index'
import { site_bar,site_barText,photo } from '../../static/Index'
import { PRODUCTS } from '../../static/Index'
import { PRODUCT } from '../../static/Index'
import { PRODUC } from '../../static/Index'
import { PRODU } from '../../static/Index'
import { also_text } from '../../static/Index'
import { BannerIcons } from '../../static/Index'
import { footer } from '../../static/Index'
function Banner() {
  return (
    <div>
      <div className="site_text">
        {
          text.map((item,index) => {
            return (
              <p>{item}</p>
            )
          })

        
        }
        
      </div>
        <img className='img' src={img} alt="" />
        <h1 className='img_text'>{img_text}</h1>
        <div className="site_bar">
          <div className="site_barText">
          <h1>{site_bar}</h1>
          <p>{site_barText}</p>
          </div>
          <div className="site_barImg">
        <img  src={photo} alt="" />
        
        </div>

        </div>

        <div className="card">
          <h1>Choose your industry</h1>
          <p>Explore how networks can help amplify your capabilities and strengthen your digital transformation success.</p>
          <div className="big">
          {
            PRODUCTS.map((item,index) => {
              return(
                <div className="alone">
                <img  src={item.url[0]} alt="" />
                 <h1>{item.title}</h1>
                 </div>
              )
            })
          }
          </div>
          


          <div className="big">
          {
            PRODUCT.map((item,index) => {
              return(
                <div className="alone">
                <img  src={item.url[0]} alt="" />,
                 <h1>{item.title}</h1>
                 </div>
              )
            })
          }
          </div>
          

          <div className="big">
          {
            PRODUC.map((item,index) => {
              return(
                <div className="alone">
                <img  src={item.url[0]} alt="" />,
                 <h1>{item.title}</h1>
                 </div>
              )
            })
          }
          </div>
          
        </div>

        <h1 className='title'>Explore working with us</h1>

        <div className="big">
          {
            PRODU.map((item,index) => {
              return(
                <div className="alone">
                <img  src={item.url[0]} alt="" />
                 <h1>{item.title}</h1>
                 <p>{item.category}</p>
                 </div>
              )
            })
          }
          </div>
          <img className='nokio' src={nokia} alt="" />
          <hr className='solid' />
          <div className="also_text">
            <h3>Looking for Nokia licensed products support?</h3>
            <p>Sustainability</p>
            <p>Standardization</p>
            <p>Experience centers</p>
          </div>
          <hr className='solid' />

          <div className="div">
            {
              also_text.map((item,index) => {
                return (
                  <h2 className='con'>{item}</h2>
                )
              })
            }
            <button>Subscribe for our latest news</button>
            <div className="Banner_icons">
            {
              BannerIcons.map((item,index) => {
                return (
                  <h2>{item}</h2>
                )
              })
            }
            </div>
          </div>
          <hr className='solid' />

          <div className="footer">
{
  footer.map((item,index) => {
    return (
      <p>{item}</p>
    )
  })
}
          </div>

    </div>
  )
}

export default Banner
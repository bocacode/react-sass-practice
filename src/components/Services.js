import React from 'react'
import services1 from './../assets/services1.png'

const Services = () => {
  return (
    <section className="services">
      <div className="services__item">
        <img className="services__item--img" src={services1} />
        <p className="services__item--p">
          img elements must have an alt prop, either with meaningful text, or an
          empty string for decorative images jsx-a11y/alt-text
        </p>
      </div>
      <div className="services__item">
        <img className="services__item--img" src={services1} />
        <p className="services__item--p">
          img elements must have an alt prop, either with meaningful text, or an
          empty string for decorative images jsx-a11y/alt-text
        </p>
      </div>
      <div className="services__item">
        <img className="services__item--img" src={services1} />
        <p className="services__item--p">
          img elements must have an alt prop, either with meaningful text, or an
          empty string for decorative images jsx-a11y/alt-text
        </p>
      </div>
    </section>
  )
}

export default Services

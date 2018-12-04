import React, {Component } from 'react';

import image1 from '../../styles/img/service01.jpg';
import image2 from '../../styles/img/service02.jpg';
import image3 from '../../styles/img/service03.jpg';
import image4 from '../../styles/img/service04.jpg';

export default class SkillComponent extends Component {
  render() {
    return(
    <section className="main-section my-services">
      <h1 className="my-services__title">My services</h1>
      <h1 className="my-services__subtitle">What I can do & more...</h1>
      <div className="my-services__container">
        <div className="service row" style={{backgroundImage: `url(${image1})`}}>
          <div className="service__img col-auto" style={{backgroundImage: `url(${image1})`}}></div>
          <div className="service-text col-auto">
            <div className="service__title">My service # 1</div>
            <div className="service__description">This is my service description, remember remove default text from here.</div>
          </div>
        </div>
        <div className="service row" style={{backgroundImage: `url(${image2})`}}>
          <div className="service__img col-auto" style={{backgroundImage: `url(${image2})`}}></div>
          <div className="service-text col-auto">
            <div className="service__title">My service # 2</div>
            <div className="service__description">This is my service description, remember remove default text from here.</div>
          </div>
        </div>
        <div className="service row" style={{backgroundImage: `url(${image3})`}}>
          <div className="service__img col-auto" style={{backgroundImage: `url(${image3})`}}></div>
          <div className="service-text col-auto">
            <div className="service__title">My service # 3</div>
            <div className="service__description">This is my service description, remember remove default text from here.</div>
          </div>
        </div>
        <div className="service row" style={{backgroundImage: `url(${image4})`}}>
          <div className="service__img col-auto" style={{backgroundImage: `url(${image4})`}}></div>
          <div className="service-text col-auto">
            <div className="service__title">My service # 4</div>
            <div className="service__description">This is my service description, remember remove default text from here.</div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
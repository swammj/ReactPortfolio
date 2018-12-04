import React, { Component } from 'react';

import image2 from '../../styles/img/work02.jpg';

export default class WorkComponent extends Component {
  render() {
    return(
      <section className="main-section my-work">
      <h1 className="my-work__title">My work</h1>
      <h1 className="my-work__subtitle">What I have done...</h1>
      <div className="my-work__container row">
        <a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}}>
          <div className="work-text">
            <div className="work__title">My work # 1</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 2</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 3</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 4</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 5</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 6</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 7</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 8</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 9</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 10</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work # 11</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a><a className="work col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{backgroundImage: `url(${image2})`}} >
          <div className="work-text">
            <div className="work__title">My work #12</div>
            <div className="work__description">This is my work description, remember remove default text from here.</div>
          </div></a></div>
    </section>
    )
  }
}
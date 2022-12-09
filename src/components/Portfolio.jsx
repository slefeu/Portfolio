import React, { Component } from 'react';

function displayProject(item) {
  return (
    <div key={item.name} className="item-box">
      <div className="image">
        <img src={`${item.imgurl}`} />
      </div>
      <div className="content">
        <h5>{item.name}</h5>
        <p>{item.description}</p>
        {
          item.link == "" ? "" :
            <a href={item.link.url} target="_blank"><i className={item.link.icon == "" ? "" : `${item.link.icon} social-padding`}></i>{item.link.name}</a>
        }
      </div>
    </div>
  );
}

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h1 className="title">Check Out My Projects:</h1>
        <h1 className="title-small">Projects:</h1>
        <div className="project">
          {
            resumeData.portfolio.map((item) => {
              return (displayProject(item))
            })
          }
        </div>
      </section>
    );
  }
}
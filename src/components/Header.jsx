import React, { Component, Fragment } from 'react';
import { ParallaxLayer } from "@react-spring/parallax";

import "../css/default.css"
import "../css/fonts.css"
import "../css/layout.css"
import "../css/media-queries.css"

export default function DisplayHeader(data) {
  return (
    <ParallaxLayer
      offset={0}
      speed={0.5}
      factor={3}
      style={{
        backgroundImage: `url("images/homebg.jpg")`,
        backgroundPosition: 'center',
      }}>
      <Header resumeData={data.data} />
    </ParallaxLayer>
  );
}

class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <Fragment>
          <header id="home">
            <div className="row banner">
              <div className="banner-text">
                <h1 className="responsive-headline">{resumeData.name}</h1>
                <hr />
                <h3 className="responsive-text">{resumeData.roleDescription}</h3>
                <h3 className="responsive-text">{resumeData.passions}</h3>
                <hr />
                <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                      return (
                        <li className="width-svg" key={item.name}>
                          <a href={item.url} target="_blank"><i className={`${item.className} padding-socials`}></i></a>
                        </li>
                      )
                    }
                    )
                  }
                </ul>
              </div>
            </div>
          </header>
      </Fragment>
    );
  }
}
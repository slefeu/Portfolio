import React, { Component } from 'react';
import { HiMailOpen } from 'react-icons/hi';

export default class About extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">
               <div className="three column">
                  <img className="profile-pic" src="images/profilepic.jpg" alt="" />
               </div>

               <div className="nine columns main-col">
                  <h2>About Me</h2>
                  <p>{resumeData.aboutme}</p>
                  <h3><span>Contact</span></h3>
                  <div className="row-contact">
                     <a href={"https://www.linkedin.com/in/solene-lefeu/"} target="_blank"><i className="fa fa-linkedin"></i></a>
                     <p>LinkedIn</p>
                  </div>
                  <div className="row-contact">
                     <div className="settings">
                        <HiMailOpen />
                     </div>
                     <p>solene.lefeu@epitech.eu</p>
                  </div>
               </div>
            </div>
         </section>
      );
   }
}
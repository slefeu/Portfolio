import React, { Component } from 'react';
import { SlCloudDownload } from 'react-icons/sl';

export default class Resume extends Component {
  constructor(props) {
    super(props)
    this.data = this.props.resumeData;
    this.showEducation = this.showEducation.bind(this);
    this.showCertifications = this.showCertifications.bind(this);
    this.showExperiences = this.showExperiences.bind(this);
    this.showSkills = this.showSkills.bind(this);
  }

  showEducation(item) {
    return (
      <div key={item.specialization} className="row item">
        <div className="twelve columns">
          <h3>{item.specialization}</h3>
          <p className="info" >
            {item.UniversityName}
            <span>&bull;</span> <em className="date" >{item.YearOfPassing}</em></p>
        </div>
      </div>
    );
  }

  showExperiences(item) {
    return (
      <div key={item.CompanyName} className="row item">
        <div className="twelve columns">
          <h3 >{item.specialization}</h3>
          <p className="info" >
            {item.CompanyName}
            <span>&bull;</span> <em className="date" >{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
          <p key="{item}">
            {item.Achievements}
          </p>
        </div>
      </div>
    );
  }

  showCertifications(item) {
    return (
      <div key={item.name} className="row item">
        <div className="twelve columns">
          <h3>{item.name}</h3>
          <p className="info" >
            {item.description}
            <span>&bull;</span> <em className="date" >{item.YearOfPassing}</em></p>
        </div>
      </div>
    );
  }

  showSkills(item) {
    return (
      <li key={item.skillname}>
        <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
        </span><em >{item.skillname}</em>
      </li>
    );
  }

  render() {
    let data = this.props.resumeData;
    return (
      <section id="resume">
        <div className="header">
          <a className="download-format" href={'./documents/CurriculumVitae.pdf'} download="CV_Solène_Lefeu" target='_blank'>
            <SlCloudDownload />Download (French)
          </a>
          <a className="downloadformat-small" href={'./documents/CurriculumVitae.pdf'} download="CV_Solène_Lefeu" target='_blank'>
            <SlCloudDownload />
          </a>

        </div>
        <h2><span>Resume</span></h2>
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              data.education.map((item) => {
                return (this.showEducation(item));
              })
            }
          </div>
        </div>
        <div className="row certification">
          <div className="three columns header-col">
            <h1><span>Certifications</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              data.certification.map((item) => {
                return (this.showCertifications(item));
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experiences</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              data.work.map((item) => {
                return (this.showExperiences(item));
              })
            }
          </div>
        </div>
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">
                {
                  data.skills.map((item) => {
                    return (this.showSkills(item));
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
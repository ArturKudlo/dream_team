import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { directorsData } from '../../assets/data';
import { authors } from '../../assets/authors';
import { languagesData } from '../../assets/languagesData';

import './home.scss';


const Information = function (props) {
  return (
    <article> 
      <h3>{props.h3}</h3>
      <p>{props.paragrapf}</p>
    </article>
  );
}

const Authors = function (props) {
  return (
    <article>
        <img src={props.src} alt={props.alt}/>
        <h3>{props.name}</h3>
        <a href={props.gitHubLink} target="blank"><div>{props.gitHubName}</div></a>
    </article>
  );
}

class Home extends Component {
  state = {
    directors: directorsData,
    authorInfo: authors,
    directorOftheDayId : this.getDirectorOftheDayId()
  }

  getDirectorOftheDayId() {
    return Math.floor(Math.random() * Math.floor(directorsData.length));
  }

  render() {
    const { language } = this.props;

    return ( 
      <div>
        <section className="home_informaion">
          <h1>{languagesData[language]['MAIN_HEADER']}</h1> 
          <Information h3={languagesData[language]['HISTORY']} paragrapf={languagesData[language]['HISTORY_INFO']}/>
          <Information h3={languagesData[language]['THEATER_DIRECTOR']} paragrapf={languagesData[language]['THEATER_DIRECTOR_INFO']}/>
        </section>
        <section className="home_director_of_the_day">
          <h2>{languagesData[language]['DIREKTOR_DAY']}</h2> 
          <article>
            <img src={this.state.directors[this.state.directorOftheDayId].photos[0]} alt={this.state.directors[this.state.directorOftheDayId].name}/>
            <h3>{this.state.directors[this.state.directorOftheDayId].name}</h3>
            <p>{this.state.directors[this.state.directorOftheDayId].city}</p>
            <Link to={'/directors/' + this.state.directors[this.state.directorOftheDayId].id} className="header-link">
              <div>{languagesData[language]['MORE']}</div>
            </Link>
          </article>
        </section>
        <section className="home_about_authors">
          <h2>{languagesData[language]['AUTHOR_INFO']}</h2> 
          <Authors src={this.state.authorInfo[0].photoSrc} alt={this.state.authorInfo[0].imgAlt} name={this.state.authorInfo[0].name} gitHubLink={this.state.authorInfo[0].gitHubLink} gitHubName={this.state.authorInfo[0].gitHubName}/>
          <Authors src={this.state.authorInfo[1].photoSrc} alt={this.state.authorInfo[1].imgAlt} name={this.state.authorInfo[1].name} gitHubLink={this.state.authorInfo[1].gitHubLink} gitHubName={this.state.authorInfo[1].gitHubName}/>
          <Authors src={this.state.authorInfo[2].photoSrc} alt={this.state.authorInfo[2].imgAlt} name={this.state.authorInfo[2].name} gitHubLink={this.state.authorInfo[2].gitHubLink} gitHubName={this.state.authorInfo[2].gitHubName}/>
        </section>
      </div>
    );
  }
}
 
export default Home;
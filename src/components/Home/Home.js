import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { directorsData } from '../../assets/data';
import { homePageData } from '../../assets/homePageData';
import { authors } from '../../assets/authors';

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
    homeData: homePageData,
    authorInfo: authors,
    directorOftheDayId : this.getDirectorOftheDayId()
  }

  getDirectorOftheDayId() {
    return Math.floor(Math.random() * Math.floor(directorsData.length));
  }

  render() {
    return ( 
      <div>
        <section className="home_informaion">
          <h1>Режиссеры театра Беларуси</h1> 
          <Information h3={this.state.homeData[0].h3} paragrapf={this.state.homeData[0].paragrapf}/>
          <Information h3={this.state.homeData[1].h3} paragrapf={this.state.homeData[1].paragrapf}/>
        </section>
        <section className="home_director_of_the_day">
          <h2>Режиссер дня</h2> 
          <article>
            <img src={this.state.directors[this.state.directorOftheDayId].photos[0]} alt={this.state.directors[this.state.directorOftheDayId].name}/>
            <h3>{this.state.directors[this.state.directorOftheDayId].name}</h3>
            <p>{this.state.directors[this.state.directorOftheDayId].city}</p>
            <Link to={'/directors/' + this.state.directors[this.state.directorOftheDayId].id} className="header-link">
              <div>Узнать больше</div>
            </Link>
          </article>
        </section>
        <section className="home_about_authors">
          <h2>Информация об авторах</h2> 
          <Authors src={this.state.authorInfo[0].photoSrc} alt={this.state.authorInfo[0].imgAlt} name={this.state.authorInfo[0].name} gitHubLink={this.state.authorInfo[0].gitHubLink} gitHubName={this.state.authorInfo[0].gitHubName}/>
          <Authors src={this.state.authorInfo[1].photoSrc} alt={this.state.authorInfo[1].imgAlt} name={this.state.authorInfo[1].name} gitHubLink={this.state.authorInfo[1].gitHubLink} gitHubName={this.state.authorInfo[1].gitHubName}/>
          <Authors src={this.state.authorInfo[2].photoSrc} alt={this.state.authorInfo[2].imgAlt} name={this.state.authorInfo[2].name} gitHubLink={this.state.authorInfo[2].gitHubLink} gitHubName={this.state.authorInfo[2].gitHubName}/>
        </section>
      </div>
    );
  }
}
 
export default Home;
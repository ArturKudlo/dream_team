import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { directorsData } from '../../assets/data';

import './home.scss';

class Home extends Component {
  state = {
    directors: directorsData,
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
          <article> 
            <h3>Немного истории</h3>
            <p> Белорусская театральная история насчитывает не одно столетие. Белорусский профессиональный театр развился из древних народных обрядов, творчества бродячих музыкантов, придворных трупп белорусских магнатов, деятельности любительских коллективов рубежа XIX-XX веков.</p>
            <p> Театральное искусство Беларуси берет свое начало во всевозможных народных верованиях, ритуалах и обрядах. Сначала в них принимали участие все желающие. Первыми профессиональными актерами стали скоморохи. В их творчестве соединились все виды сценического искусства - драматическое, музыкальное, танцевальное, цирковое. Но на белорусской земле бродячие артисты не просто выступали, а постигали азы профессионального мастерства. Известно, что в Сморгони до середины XIX века существовала единственная в Европе медвежья академия. Отловленных в лесах медвежат учили танцевать, а потом скоморохи отправлялись с ними на ярмарки в Россию, Польшу, Венгрию, Германию.</p>
          </article>
          <article> 
            <h3>Кто такой режиссёр театра?</h3>
            <p> Режиссёр драматического театра, на основе собственной интерпретации литературного первоисточника руководящий работой коллектива, определяющий ту общую задачу, ради которой произведение ставится на сцене, объединяющий усилия актёров, художника-декоратора, композитора и других участников спектакля, является режиссёром-постановщиком (иногда именуется просто постановщиком).</p>
            <p> Режиссёром называется ближайший творческий помощник режиссёра-постановщика, который в пределах разработанного им плана постановки ведёт повседневную репетиционную работу. </p>
            <p> Менее ответственные задания режиссёра-постановщика в процессе подготовки спектакля выполняет режиссёр-ассистент, или ассистент режиссёра. </p>
            <p> Роль режиссёра-постановщика в оперном театре, как и в балете, обычно намного скромнее, чем в театре драматическом, поскольку интерпретатором оперы, как музыкально-драматического произведения, является дирижёр, а балет, где содержание воплощается в хореографических образах, ставит прежде всего балетмейстер.</p>
          </article>
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
          <article>
            <img src="https://avatars3.githubusercontent.com/u/22112975?s=400&v=4" alt="Трацевский Илья"/>
            <h3>Трацевский Илья</h3>
            <a href="https://github.com/IlyaTrat" target="blank"><div>IlyaTrat</div></a>
          </article>
          <article>
            <img src="https://avatars1.githubusercontent.com/u/43146025?s=400&v=4" alt="Геннадий Мудревский"/> 
            <h3>Мудревский Геннадий</h3>
            <a href="https://github.com/Mudreuski" target="blank"><div>Mudreuski</div></a>
          </article>
          <article>
            <img src="https://avatars2.githubusercontent.com/u/36402717?s=400&v=4" alt="Геннадий Мудревский"/> 
            <h3>Кудло Артур</h3>
            <a href="https://github.com/ArturKudlo" target="blank"><div>ArturKudlo</div></a>
          </article>
        </section>
      </div>
      



    );
  }
}
 
export default Home;
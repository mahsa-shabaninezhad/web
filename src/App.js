import React, { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Link from './components/Link/Link';
import NavBar from './components/NavBar/NavBar';
import Section from './components/Section/Section';
import Sprites from './Sprites.svg';

function App() {
  const [activeCard, setActiveCard] = useState("2")

  const handleActiveCard = (e, id) =>{
      e.preventDefault()
      setActiveCard(id)
  }

  return (
    <div className="App">
      <NavBar />
      <Section headerText="مزایای پیوستن به ما">
        <Card icon={`${Sprites}#icon-leaf`} title="اسراف کمتر" classes="icon-round"/>
        <Card icon={`${Sprites}#icon-users`} title="مشتریان جدید" classes="icon-round"/>
        <Card icon={`${Sprites}#icon-coins`} title="درآمد بیشتر" classes="icon-round"/>
      </Section>
      <Section headerText="بهترین همراهان ما" theme='section--gray'>
        <Link id="1" address='#' role="card-link" activeItem={activeCard} onClick={handleActiveCard}>
            <Card  icon={`${Sprites}#icon-breads`} title="نانوایی و قنادی" />
        </Link>
        <Link id="2" address='#' role="card-link" activeItem={activeCard} onClick={handleActiveCard}>
            <Card  icon={`${Sprites}#icon-restaurant-2`} title="رستوران و کافه" />
        </Link>
        <Link id="3" address='#' role="card-link" activeItem={activeCard} onClick={handleActiveCard}>
            <Card  icon={`${Sprites}#icon-hote`} title="هتل" />
        </Link>
        <Link id="4" address='#' role="card-link" activeItem={activeCard} onClick={handleActiveCard}>
            <Card  icon={`${Sprites}#icon-fruits`} title="سوپر مارکت" />
        </Link>
      </Section>
    </div>
  );
}


export default App;

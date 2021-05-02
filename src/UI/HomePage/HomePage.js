import React from 'react';
import Button from '../Button'
import MainSection from './MainSection'
import Navigation from './Navigation'
import DisplaySection from './DisplaySection'
import Section from './Section'
import Footer from '../Footer'
import bigCard from '../../resources/img/big-card.png'
import bayernCard from '../../resources/img/bayern-card.png'
import realmadridCard from '../../resources/img/realmadrid-card.png'
import facebookCard from '../../resources/img/facebook-logo.png'
import emailCard from '../../resources/img/email-logo.jpg'
import trophyCard from '../../resources/img/trofeo.png'

const HomePage = () => (
    <React.Fragment>
        <MainSection>
            <div className='mainSection__title-box'>
                <span className='mainSection__title'>Memorize</span>
                <span className='mainSection__subtitle'>Train your memory skills with cards</span>
            </div>
            <div>
                <img className='mainSection__card' src={ bigCard } alt='Example Card' />
            </div>
            <div className='mainSection__button'>
                <Button text='Start Game' icon='arrow-right' />
            </div>
        </MainSection>

        <Navigation>
            <a href="#how-to-play">How to play</a>
            <a href="#high-scores">High-scores</a>
            <a href="#contact">Contact</a>
        </Navigation>

        <Section text='How to play'/>

        <DisplaySection section='howToPlay' sectionId='how-to-play'>
            <div className='howToPlay__imageBox'>
                <img className='howToPlay__img' src={bayernCard}/>
                <img className='howToPlay__img' src={realmadridCard}/>
            </div>
            <div className='howToPlay__textBox'>
                <p>
                    You will see a grid full of cards with the same design <br/>
                    you will have to flip two cards over and see if both cards are <br/>
                    exactly the same, if you found a match, you'll received some points as a reward.
                </p>
                <p>No rewards are given if you did not find a match.</p>
                <p>Continue finding matches to empty the grid.</p>
            </div>
        </DisplaySection>

        <Section text='High-scores'/>

        <DisplaySection section='highScores' sectionId='high-scores'>
            <div className='highScores__chartBox'>
                <table className='highScores__table' >
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Points</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Raul Oliva</td>
                            <td>521</td>
                        </tr>
                        <tr>
                            <td>Jorge Sandoval</td>
                            <td>312</td>
                        </tr>
                        <tr>
                            <td>Alex Sandro</td>
                            <td>105</td>
                        </tr>
                        <tr>
                            <td>Mariano Diaz</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>Juan jesus villegas</td>
                            <td>83</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='highScores__imageBox'>
                <img src={ trophyCard }/>
            </div>
        </DisplaySection>

        <Section text='Contact'/>

        <DisplaySection section='contact' sectionId='contact'>
            <div className='contact__box'>
                <p>Please feel free to send me feedback</p>
                <div className='contact__imageBox'>
                    <a href='https://www.facebook.com/raul.oliva.castillo.28' target='_blank'>
                        <img className='contact__image' src={ facebookCard }/>
                    </a>
                    <p>Raul Oliva</p>
                </div>
                <div className='contact__imageBox'>
                    <a href='mailto:oliva.raul12@gmail.com'>
                        <img className='contact__image' src={ emailCard }/>
                    </a>
                    <p>oliva.raul12@gmail.com</p>
                </div>
            </div>
        </DisplaySection>

        <Footer />
    </React.Fragment>
)

export default HomePage
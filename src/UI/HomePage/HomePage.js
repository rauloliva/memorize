import React from 'react';
import Button from '../Button'
import Container from './Container'
import BigCard from '../../resources/img/big-card.png'

const HomePage = () => (
    <Container>
        <div className='container__title-box'>
            <span className='container__title'>Memorize</span>
            <span className='container__subtitle'>Train your memory skills with cards</span>
        </div>
        <div>
            <img className='container__card' src={ BigCard } />
        </div>
        <div className='container__button'>
            <Button text='Start Game' icon='arrow-right' />
        </div>
    </Container>
)

export default HomePage
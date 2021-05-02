import React from 'react';

const Navigation = props => (
    <div className='navigation'>
        <nav className='navigation__nav'>
            { props.children }
        </nav>
    </div>
)

export default Navigation
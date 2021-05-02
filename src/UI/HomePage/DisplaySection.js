import React from 'react';

const HowToPlaySection = props => {
    const { section, sectionId } = props
    return (
        <div className={ section } id={ sectionId }>
            { props.children }
        </div>
    )
}

export default HowToPlaySection
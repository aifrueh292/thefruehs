import React from 'react'


const SectionTitle = (props) => {
    return(
        <div className="wpo-section-title">
            <span>{props.subTitle}</span>
            <h2>{props.MainTitle}</h2>
        </div>
    )
}

export default SectionTitle;
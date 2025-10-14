import React from 'react';
import TimeCountDown from '../countdown'

const WeddingTime = (props) => {

    return (
        <section className="wpo-wedding-date-s3 section-padding">
            <h2 className="d-none">hidden</h2>
            <div className="container">
                <div className="wedding-date-wrap">
                    <div className="clock-grids">
                        <TimeCountDown />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeddingTime;
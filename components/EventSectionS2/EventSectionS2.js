import React from 'react'
import LocationMap from '../Modal'
import SectionTitle from '../SectionTitle'
import sImg1 from '/public/images/event/4.jpg'
import sImg2 from '/public/images/event/5.jpg'
import sImg3 from '/public/images/event/6.jpg'
import Image from 'next/image'


const Events = [
    {
        title: 'The Rehearsal',
        li1: 'Friday, August 14, 2026',
        li2: 'Location:TBD',
        sImg: sImg1,
    },
    {
        title: 'The Wedding',
        li1: 'Saturday, August 15, 2026',
        li2: 'Location:TBD',
        sImg: sImg2,
    },
    {
        title: 'The Taco Truck',
        li1: 'Saturday, August 15, 2026',
        li2: 'Location:TBD',
        sImg: sImg3,
    },

]

const EventSectionS2 = (props) => {
    return (
        <section className={`wpo-event-section-s2 section-padding ${props.eClass}`} id="event">
            <div className="container">
                <SectionTitle subTitle={'Our Wedding'} MainTitle={'When & Where'} />
                <div className="wpo-event-wrap">
                    <div className="row">
                        {Events.map((event, eitem) => (
                            <div className="col col-lg-4 col-md-6 col-12" key={eitem}>
                                <div className="wpo-event-item">
                                    <div className="wpo-event-img">
                                        <div className="wpo-event-img-inner">
                                            <Image src={event.sImg} alt="" />
                                        </div>
                                    </div>
                                    <div className="wpo-event-text">
                                        <h2>{event.title}</h2>
                                        <ul>
                                            <li>{event.li1}</li>
                                            <li>{event.li2}</li>
                                            <li>{event.li3}</li>
                                            <li><LocationMap /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EventSectionS2;
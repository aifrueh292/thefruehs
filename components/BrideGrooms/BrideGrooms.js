import React from "react";
import SectionTitle from "../SectionTitle";
import timg1 from '/public/images/team/img-1.jpg'
import timg2 from '/public/images/team/img-2.jpg'
import timg3 from '/public/images/team/img-3.jpg'
import timg4 from '/public/images/team/img-4.jpg'
import Image from "next/image";


const brideGrooms = [
  {
    id:'1',
    tImg:timg1,
    name:'Leslie Alexander',
    title:'Brides Brother',     
 },
 {
    id:'2',
    tImg:timg2,
    name:'Jenny Wilson',
    title:'Brides Sister',     
 },
 {
    id:'3',
    tImg:timg3,
    name:'Robert Fox',
    title:'Brides Brother',     
 },
 {
    id:'4',
    tImg:timg4,
    name:'Jerome Bell',
    title:'Groom’s Sister',     
 },
]


const BrideGrooms = (props) => {

  return (
      <section className={`wpo-team-section section-padding ${props.tClass}`}>
        <div className="container">
          <SectionTitle subTitle={'Our Guest'} MainTitle={'Bridesmaids & Groomsmen'} />
          <div className="wpo-team-wrap">
            <div className="row">
              {brideGrooms.map((brideGroom, tm) => (
                <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={tm}>
                    <div className="wpo-team-item">
                        <div className="wpo-team-img">
                            <div className="wpo-team-img-inner">
                                <Image src={brideGroom.tImg} alt="" />
                            </div>
                        </div>
                        <div className="wpo-team-text">
                            <h3>{brideGroom.name}</h3>
                            <span>{brideGroom.title}</span>
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

export default BrideGrooms;
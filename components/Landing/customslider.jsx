
import Slider from "react-slick";
import React,{ useCallback } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
export const CustomSlider = ()=>{
    let sliderOnClick = null;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows:false,
      dotsClass: `slick-dots custom-slick-dots`,
    responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:true,
          }
        }
      ],
    appendDots: (dots) => (
      <div>
      <div
      className="d-md-flex"
        style={{
            margin:"-80px 0",
          display: "flex",
          justifyContent: "end",
          alignItems: "center"
        }}
      >
        
        <button type="button" 
          onClick={() => sliderOnClick.slickPrev()} className="btn btn-light rounded-circle mr-3 p-2 d-flex">
          
        <HiChevronLeft
          className="chevronLeft"
          style={{ cursor: "pointer"}}
          size="30"
        />      
            </button>
        <button type="button" 
          onClick={() => sliderOnClick.slickNext()} className="btn bg-orange rounded-circle p-2 d-flex">
        <HiChevronRight
          className="chevronRight"
          style={{ cursor: "pointer", color:"white" }}
          size="30"
        />
            </button>
      </div></div>
      )
    };

    const RevCard=({objImg=null,title="Pizza",place="Gambir, Jakarta Pusat"})=>(
        <>
        <div className="kategori p-2 text-dark mr-5 text-left"
        style={{
            height:'fit-content',
            borderRadius:'17px !important'
        }}
        >
            <img className="mb-3 img-fluid w-100" src={objImg}/>
        <div className="p-2">
        <h6 className="mb-3 font-weight-bold">{title}</h6>
        <p>{place}</p>
        </div>
        </div>
        </>
      )
        const data = [
            {
                objImg:'img/objdst/monas.png',
                title:'Nikmati Keindahan Objek Wisata Monas Di Jakarta',
                place:"Gambir, Jakarta Pusat"
            },
            {
                objImg:'img/objdst/candi.png',
                title:'Nikmati Keindahan dan Kekayaan Indonesia di Candi Prambanan',
                place:"Kranggan, Yogyakarta"
            },
            {
                objImg:'img/objdst/raja-ampat.png',
                title:'Nikmati Keindahan dan Kekayaan Indonesia di Kepulauan Raja Ampat',
                place:"Raja Ampat, Papua Barat"
            },
            {
                objImg:'img/objdst/monas.png',
                title:'Nikmati Keindahan Objek Wisata Monas Di Jakarta',
                place:"Gambir, Jakarta Pusat"
            },
            {
                objImg:'img/objdst/raja-ampat.png',
                title:'Nikmati Keindahan dan Kekayaan Indonesia di Kepulauan Raja Ampat',
                place:"Raja Ampat, Papua Barat"
            },
            {
                objImg:'img/objdst/candi.png',
                title:'Nikmati Keindahan dan Kekayaan Indonesia di Candi Prambanan',
                place:"Kranggan, Yogyakarta"
            },
        ]
    return(<>
        <style>
            {`
            .custom-slick-dots{
                top:0;
            }
            `}
        </style>
        <Slider
        className="review-slider position-relative" ref={(c) => (sliderOnClick = c)} {...settings}>
           { data.map((dataprop,idx)=>(
               <div key={idx}>
               <RevCard {...dataprop}/></div>
           ))}
        </Slider>
        </>
    )
}
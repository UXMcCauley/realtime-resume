'use client';

import { useState, useEffect } from 'react';
import { X, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import "./../app/globals.css";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon
} from 'react-share';

export function Badges({ employee }: { employee: { badges: { name: string; img: string; primaryColor: string; value: number; date: string; note: string; earned: boolean; }[]; } }) {
  const [selectedBadge, setSelectedBadge] = useState<{ name: string; img: string; primaryColor: string; value: number; date: string; note: string; } | null>(null);
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if (selectedBadge) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [selectedBadge]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = selectedBadge ?
    `Check out my ${selectedBadge.name} badge! ${selectedBadge.note}` : '';

  return (
    <div>
      <h2 className=" section-title">Badges</h2>
      <div className="swiper-container-bg">
        {!isStart && (
          <button className="swiper-button-prev">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}

        {!isEnd && (
          <button className="swiper-button-next">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}

        <div className="overflow-visible">
          <Swiper
            modules={[Navigation]}
            spaceBetween={4}
            slidesPerView={8}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
            onSlideChange={(swiper) => {
              setIsStart(swiper.isBeginning);
              setIsEnd(swiper.isEnd);
            }}
            className="!px-4"
          >
            {employee.badges.map((badge) => (
              <SwiperSlide key={badge.name} className="!w-[105px]">
                <div
                  onClick={() => {
                    // console.log(badge)
                    setSelectedBadge(badge)
                  }}
                  className={`swiper-image ${badge.earned ? '' : 'inactive'}`}
                >
                  <div className="w-[105px] h-[105px] flex items-center justify-center">
                    <img
                      src={badge.img}
                      alt={badge.name}
                      className="w-12 h-12 text-white"
                    />
                  </div>
                  {badge.value > 1 && (
                    <div
                      className="badge-overlay-number"
                      style={{
                        backgroundColor: badge.primaryColor,
                        border: '2px solid white',
                        boxShadow: '0 12px 14px rgba(0,0,0,0.2)'
                      }}
                    >
                      {badge.value}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Full Screen Overlay */}
      {selectedBadge && (
        <div
          className="badge-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedBadge(null);
            }
          }}
        >
          <div className=" w-full max-w-6xl px-4" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedBadge(null)} className="badge-overlay-close">
              <X size={20} className="w-[20px] h-[20px]" />
            </button>

            <div className="flex text-left md:flex-row items-center h-full">
              <div className="w-full md:w-1/2 flex justify-center">
                <div
                  className="w-96 h-96 rounded-2xl flex items-center justify-center"
                  // style={{ backgroundColor: selectedBadge.primaryColor }}
                >
                  <img
                    src={selectedBadge.img}
                    alt={selectedBadge.name}
                    className="w-96 h-96"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col items-start gap-5 text-left md:items-start">
                <h3 className="text-4xl font-bold mb-4 text-white">
                  {selectedBadge.name}
                </h3>

                <p className="text-xl text-gray-300 mb-6">
                  Awarded on {formatDate(selectedBadge.date)}
                </p>

                <p className="text-2xl text-gray-100 mb-12">
                  {selectedBadge.note}
                </p>

                <div className="flex flex-col items-start gap-4">
                  <span className="text-white flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share this achievement
                  </span>
                  <div className="flex gap-4">
                    <FacebookShareButton url={shareUrl} title={shareTitle}>
                      <FacebookIcon size={40} round />
                    </FacebookShareButton>
                    <TwitterShareButton url={shareUrl} title={shareTitle}>
                      <TwitterIcon size={40} round />
                    </TwitterShareButton>
                    <LinkedinShareButton url={shareUrl} summary={shareTitle}>
                      <LinkedinIcon size={40} round />
                    </LinkedinShareButton>
                    <WhatsappShareButton url={shareUrl} title={shareTitle}>
                      <WhatsappIcon size={40} round />
                    </WhatsappShareButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

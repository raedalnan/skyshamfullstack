'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface FilmStripSliderProps {
  months: string[];
  selectedMonth: string;
  onMonthSelect: (month: string) => void;
}

export const FilmStripSlider = ({ months, selectedMonth, onMonthSelect }: FilmStripSliderProps) => {
  // Group months by season
  const getSeasonImage = (month: string) => {
    const seasons = {
      winter: ['December', 'January', 'February'],
      spring: ['March', 'April', 'May'],
      summer: ['June', 'July', 'August'],
      autumn: ['September', 'October', 'November']
    };

    for (const [season, monthsList] of Object.entries(seasons)) {
      if (monthsList.includes(month)) {
        return `/images/seasons/${season}.jpg`;
      }
    }
    return '/images/seasons/default.jpg';
  };

  return (
    <div className="relative w-full">
      <div className="h-[400px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="relative h-full w-full">
            <div
              className="h-full w-full bg-cover bg-center transition-all duration-500"
              style={{
                backgroundImage: `url(${getSeasonImage(selectedMonth)})`,
              }}
            >
              <div className="absolute inset-0 bg-black/40" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="relative h-full">
          <div className="container mx-auto px-4 py-12">
            <h2 className="mb-12 text-center text-4xl font-bold text-white">
              Choose Your Perfect Time to Travel
            </h2>

            {/* Month Selector */}
            <div className="relative mt-8">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={4}
                navigation
                loop={true}
                autoplay={false}
                centeredSlides={true}
                slideToClickedSlide={true}
                initialSlide={months.indexOf(selectedMonth)}
                onSlideChange={(swiper: SwiperType) => {
                  const activeIndex = swiper.realIndex;
                  onMonthSelect(months[activeIndex]);
                }}
                pagination={{ 
                  clickable: true,
                  el: '.custom-pagination'
                }}
                breakpoints={{
                  640: { slidesPerView: 2, centeredSlides: true },
                  768: { slidesPerView: 3, centeredSlides: true },
                  1024: { slidesPerView: 4, centeredSlides: true },
                  1280: { slidesPerView: 5, centeredSlides: true }
                }}
                className="month-slider"
              >
                {months.map((month) => (
                  <SwiperSlide key={month}>
                    <button
                      className={`group relative w-full rounded-xl backdrop-blur-sm transition-all duration-300
                        ${
                          selectedMonth === month
                            ? 'bg-white/30 shadow-xl'
                            : 'bg-white/10 hover:bg-white/20'
                        }`}
                    >
                      <div className="relative p-8">
                        <h3 className={`text-center font-serif text-2xl transition-all
                          ${
                            selectedMonth === month
                              ? 'text-white scale-140 px-8'
                              : 'text-gray-200 group-hover:text-white'
                          }`}
                        >
                          {month}
                        </h3>
                      </div>
                    </button>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="custom-pagination mt-8 flex justify-center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
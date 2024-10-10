'use client';

import { useState, useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const getColorByType = (type: string) => {
  switch (type) {
    case 'Projects':
      return 'bg-blueuni';
    case 'News':
      return 'bg-reduni';
    case 'Members':
      return 'bg-bluelight';
    default:
      return 'bg-gray-500';
  }
};

const MyCarousel = () => {
  const [navigationCount, setNavigationCount] = useState(0);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the JSON data from the public folder
    fetch('/jsons/coen/updates.json')
      .then((response) => response.json())
      .then((jsonData) => {
        // Sort the data by date in descending order
        const sortedData = jsonData.sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
        setData(sortedData.slice(0, 11)); // Limita a 12 elementos
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching JSON data:', error);
        setLoading(false);
      });
  }, []);

  const handleSlideChange = (swiper: any) => {
    if (navigationCount < 3) {
      setNavigationCount(navigationCount + 1);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Exibe um loader enquanto os dados são carregados
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-2xl font-normal mb-10">See Last Updates</h2>
      <div className="relative w-[80%] h-auto px-10 pb-4">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          initialSlide={0}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            disabledClass: navigationCount >= 3 ? 'swiper-button-disabled' : 'swiper-button-enabled',
          }}
          pagination={{ clickable: true, el: '.swiper-pagination' }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              slidesPerGroup: 4,
              spaceBetween: 50,
            },
          }}
          style={{ paddingLeft: '20px', paddingRight: '10px', paddingTop: '10px' }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="shadow-lg rounded-lg h-48 w-72 bg-white shadow-2xl shadow-black mb-10 transition-transform duration-300 transform hover:scale-110">
                <div className={`p-2 ${getColorByType(item.type)} text-white rounded-t-lg`}>
                  <span className="text-sm font-semibold">{item.type}</span>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">Date: {item.date}</p>
                  <p className="mt-2 text-gray-800">{item.shortDescription}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <Link href="/updates">
              <div className="shadow-lg shadow-2xl shadow-black rounded-lg h-48 w-72 bg-white flex items-center justify-center mb-10 transition-transform duration-300 transform hover:scale-110">
                <div className="flex flex-col items-center justify-center p-4">
                  <span className="text-black text-2xl font-normal">
                    See More
                  </span>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination mt-1"></div>
        <div className={`swiper-button-prev custom-swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 'swiper-button-disabled' : 'swiper-button-enabled'}`}></div>
        <div className={`swiper-button-next custom-swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 'swiper-button-disabled' : 'swiper-button-enabled'}`}></div>
      </div>
    </div>
  );
};

export default MyCarousel;

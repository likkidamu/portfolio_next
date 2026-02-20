// work slider data
export const workSlider = {
  slides: [
    {
      path: '/thumb1.jpg',
      url: 'https://damodhar-ecommerce-fullstack.netlify.app/',
    },
    {
      path: '/thumb3.jpg',
      url: 'https://gymtracker-sand.vercel.app',
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

// icons
import { BsArrowRight } from 'react-icons/bs';
// next image
import Image from 'next/image';

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex items-center justify-center cursor-pointer'>
              <div className='relative rounded-lg overflow-hidden flex items-center justify-center group'>
                <div className='flex items-center justify-center relative overflow-hidden group'>
                  {/* image */}
                  <Image src={slide.path} width={500} height={300} alt='' />
                  {/* overlay gradient */}
                  <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  {/* title */}
                  <a
                    href={slide.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                        <BsArrowRight />
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

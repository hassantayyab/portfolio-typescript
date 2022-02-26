import { SwiperOptions } from 'swiper'

export const SWIPER_OPTIONS: SwiperOptions = {
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 2.65,
      spaceBetween: 64,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 64,
    },
    768: {
      slidesPerView: 2.01,
      spaceBetween: 64,
    },
    550: {
      slidesPerView: 1.5,
      spaceBetween: 32,
    },
    0: {
      slidesPerView: 1.01,
      spaceBetween: 20,
    },
  },
}

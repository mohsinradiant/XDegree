/*
  NOTE: local change vs the original design build.
  Swiper's loop mode rearranges slides and needs at least slidesPerView * 2
  of them; with fewer it leaves blank gaps in the track. The section now
  repeats the categories to clear that threshold (see the section's Liquid),
  which is what keeps the loop free of empty space - note that raising
  `loopAdditionalSlides` above the default actually reintroduces the gap here.
  Because those repeats are real slides, Swiper would render a bullet per
  repeat, so
  pagination bullets are rendered/highlighted against the number of real
  categories (data-xd-unique) instead.
*/
var xdCategoriesEl = document.querySelector(".categories-slider");
var xdUniqueCategories = xdCategoriesEl
  ? parseInt(xdCategoriesEl.getAttribute("data-xd-unique"), 10) || 0
  : 0;

var CategoriesSlider = new Swiper(".categories-slider", {
    slidesPerView: 4.5,
    spaceBetween: 18,
    loop: true,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.destinationPagination',
    clickable: true,
    renderBullet: function (index, className) {
      if (xdUniqueCategories && index >= xdUniqueCategories) return '';
      return '<span class="' + className + '"></span>';
    },
  },
  on: {
    // Map the looped position back onto the real categories.
    slideChange: function () {
      if (!xdUniqueCategories) return;
      var bullets = this.pagination && this.pagination.bullets;
      if (!bullets || !bullets.length) return;
      var active = this.realIndex % xdUniqueCategories;
      bullets.forEach(function (b, i) {
        b.classList.toggle('swiper-pagination-bullet-active', i === active);
      });
    },
  },


    breakpoints: {
        0: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.4,
        },
        768: {
            slidesPerView: 2.6,
        },
        1200: {
            slidesPerView: 3.1,
        },
        1400: {
            slidesPerView: 4.5,
        },
        1600: {
            slidesPerView: 4.5,
        }
    }
});


var TrendingSlider = new Swiper(".trending-slider", {
    slidesPerView: 4,
    spaceBetween: 18,
    loop: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: { el: '.TrendingPagination', clickable: true },


    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
        1600: {
            slidesPerView: 4,
        }
    }
});

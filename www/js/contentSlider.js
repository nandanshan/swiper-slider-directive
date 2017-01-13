(function() {
  "use strict"
  angular.module("starter")
    .directive("contentSlider", ["$timeout","$window", function($timeout,$window) {
      return {
        restrict: "E",
        scope: {
          slideArray: "=data",
          showNavButtons: '='
        },
        templateUrl: "templates/contentSlider.html",
        controller: function($scope) {

          $scope.sliderOption = {
            initialSlide: 0,
            direction: "horizontal", //or vertical
            speed: 300,
            loop: false,
            freeMode: true,
            // autoHeight:true,
            spaceBetween: 20,
            slidesPerView: 3,
            // calculateHeight: true,
            // showPager: true,
            // showNavButtons: false,
            pagination: false,
            // paginationHide:true,
            // centeredSlides: true,
              // nextButton: '.swiper-button-next',
              // prevButton: '.swiper-button-prev',
            freeModeSticky: true,
            // simulateTouch:false,
            // resistance: true,
            // resistanceRatio: 0.30,
            slidesOffsetBefore: 0,

            // slidesOffsetAfter:30
            // threshold:"10px",
            // slideActiveClass:"aaa",
            // slideNextClass:"",
            // onSlideChangeEnd: onslide
            breakpoints: {
              // when window size is <= 768px
              768: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                slidesOffsetBefore:20,
                // nextButton:false,
                // prevButton:false,
                // simulateTouch:false
              }
              // 1080:{
              //   slidesPerView: 4,
              //   spaceBetween: 10,
              //   slidesOffsetBefore:20,
              //   // nextButton:false,
              //   // prevButton:false,
              //   simulateTouch:false
              // }
            }
          };
        },
        link: function($scope, element, attribute, ctrl) {



        }
      }
    }])
})();

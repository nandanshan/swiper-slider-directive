(function() {
  "use strict"
  angular.module("starter")
    .directive("bannerSlider", ['$timeout', function($timeout) {
      return {
        restrict: "AE",
        scope: {
          slideArray: "=data"
        },
        templateUrl: "templates/bannerSlider.html",
        controller: function($scope) {

          $scope.sliderOption = {
            initialSlide: 0,
            direction: "horizontal", //or vertical
            speed: 300,
            loop: true,
            // freeMode: true,
            // autoHeight:true,
            spaceBetween: 40,
            slidesPerView: 1.25,
            // calculateHeight: true,
            // showPager: true ,
            // showNavButtons:false,
            pagination: false,
            // paginationHide:true,
            centeredSlides: true,
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev',
            // freeModeSticky: true,
            // resistance: true,
            // resistanceRatio: 0.30,
            // slidesOffsetBefore:30,
            // slidesOffsetAfter:30
            // threshold:"10px",
            // slideActiveClass:"aaa",
            // slideNextClass:"",
            // onSlideChangeEnd: onslide
          };


        },
        link: function(scope, element, attribute, ctrl) {}
      }
    }]);
})();

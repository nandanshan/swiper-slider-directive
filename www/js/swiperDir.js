(function() {
  angular.module("starter")
    .directive('swiperSlides', [
      '$animate',
      '$timeout',
      '$compile',
      function($animate, $timeout, $compile) {
        return {
          restrict: 'E',
          transclude: true,
          scope: {
            options: '=',
            showNavButtons:'='
            // slider: '='
          },
          templateUrl: "templates/swiperDir.html",
          controller: ['$scope', '$element', function($scope, $element) {
            var _this = this;
            $scope._next = false;
            $scope._previous = true;

            this.update = function() {
              $timeout(function() {
                if (!_this.__slider) {
                  return;
                }

                _this.__slider.update();
                if (_this._options.loop) {
                  _this.__slider.createLoop();
                }

                var slidesLength = _this.__slider.slides.length;

                // Don't allow pager to show with > 10 slides
                // if (slidesLength > 10) {
                //   $scope.showPager = false;
                // }

                // When slide index is greater than total then slide to last index
                if (_this.__slider.activeIndex > slidesLength - 1) {
                  _this.__slider.slideTo(slidesLength - 1);
                }
              });
            };

            this.rapidUpdate = ionic.debounce(function() {
              _this.update();
            }, 50);

            this.getSlider = function() {
              return _this.__slider;
            };

            var options = $scope.options || {};

            var newOptions = angular.extend({
              pagination: $element.children().children()[1],
              paginationClickable: true,
              lazyLoading: true,
              preloadImages: false
            }, options);

            this._options = newOptions;

            $timeout(function() {
              var slider = new ionic.views.Swiper($element.children()[0], newOptions, $scope, $compile);

              $scope.$emit("$ionicSlides.sliderInitialized", {
                slider: slider
              });

              _this.__slider = slider;
              $scope.slider = _this.__slider;

              $scope.$on('$destroy', function() {
                slider.destroy();
                _this.__slider = null;
              });
            });

            $timeout(function() {
              // if it's a loop, render the slides again just incase
              _this.rapidUpdate();
            }, 200);

          }],

          link: function($scope) {

            $scope.moveForward = function(){
              $scope.slider.slideNext(false, 300);
              console.log($scope.slider.activeIndex);
              $scope._next = $scope.slider.isEnd;
              $scope._previous = $scope.slider.isBeginning;
            }

            $scope.moveBackward = function(){
              $scope.slider.slidePrev(false, 300);
              $scope._previous = $scope.slider.isBeginning;
              $scope._next = $scope.slider.isEnd;
            }

            // Disable ngAnimate for slidebox and its children
            //$animate.enabled(false, $element);
          }
        };
      }
    ])
    .directive('swiperSlide', [function() {
      return {
        restrict: 'E',
        require: '?^swiperSlides',
        transclude: true,
        replace: true,
        template: '<div class="swiper-slide" ng-transclude></div>',
        link: function($scope, $element, $attr, ionSlidesCtrl) {
          ionSlidesCtrl.rapidUpdate();

          $scope.$on('$destroy', function() {
            ionSlidesCtrl.rapidUpdate();
          });
        }
      };
    }]);
})();

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var app = angular.module('app', [
	    'ng',
	    'ngAnimate',
	    'ngSanitize',
	    'ngAudio',
	    'ngTouch',
	    'ui.router',
	    'pascalprecht.translate',
	    'ngCookies',
	    'swipe',
	    'monospaced.mousewheel'
	]);

	app.config([
	    '$stateProvider',
	    '$urlRouterProvider',
	    '$locationProvider',
	    '$translateProvider',
	    function($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
	        var chapter1Counter = 14;
	        var chapter2Counter = 16;
	        var chapter3Counter = 7;
	        var chapter4Counter = 7;
	        var chapter5Counter = 13;
	        var chapter6Counter = 9;

	        $stateProvider
	            .state('app', {
	                abstract: true,
	                url: '/{locale}',
	                views: {
	                    '': {
	                        templateUrl: 'views/main.html',
	                        controller: 'AppController'
	                    },
	                    'header@app': {
	                        templateUrl: 'views/components/header.html',
	                        controller: 'HeaderController'
	                    },
	                    'footer@app': {
	                        templateUrl: 'views/components/footer.html',
	                        controller: 'FooterController'
	                    }
	                }
	            })
	            .state('app.chapter1', {
	                url: '/chapter-1',
	                abstract: true,
	                controller: 'Chapter1Controller',
	                templateUrl: 'views/chapter.html'
	            })
	            .state('app.chapter2', {
	                url: '/chapter-2',
	                abstract: true,
	                controller: 'Chapter2Controller',
	                templateUrl: 'views/chapter.html'
	            })
	            .state('app.chapter3', {
	                url: '/chapter-3',
	                abstract: true,
	                controller: 'Chapter3Controller',
	                templateUrl: 'views/chapter.html'
	            })
	            .state('app.chapter4', {
	                url: '/chapter-4',
	                abstract: true,
	                controller: 'Chapter4Controller',
	                templateUrl: 'views/chapter.html'
	            })
	            .state('app.chapter5', {
	                url: '/chapter-5',
	                abstract: true,
	                controller: 'Chapter5Controller',
	                templateUrl: 'views/chapter.html'
	            })
	            .state('app.chapter6', {
	                url: '/chapter-6',
	                abstract: true,
	                controller: 'Chapter6Controller',
	                templateUrl: 'views/chapter.html'
	            });


	        for (var i = 1; i < chapter1Counter + 1; i++) {
	            var stateName = 'app.chapter1.scene_' + i,
	                controller = 'Scene1_' + i + 'Controller',
	                url = '/scene-' + i,
	                isLast = i === chapter1Counter;

	            $stateProvider.state(stateName, {
	                url: url,
	                controller: controller,
	                page: {
	                    title: '',
	                    name: 'scene-' + i,
	                    chapter: 1,
	                    scene: i,
	                    isLast: isLast
	                },
	                templateUrl: !isLast ? 'views/chapter-1/scene-' + i + '.html' : 'views/last.html'
	            });
	        };

	        for (var i = 1; i < chapter2Counter + 1; i++) {
	            var stateName = 'app.chapter2.scene_' + i,
	                url = '/scene-' + i,
	                isLast = i === chapter2Counter;

	            $stateProvider.state(stateName, {
	                url: url,
	                page: {
	                    title: '',
	                    name: 'scene-' + i,
	                    chapter: 2,
	                    scene: i,
	                    isLast: isLast
	                },
	                templateUrl: !isLast ? 'views/chapter-2/scene-' + i + '.html' : 'views/last.html'
	            });
	        };

	        for (var i = 1; i < chapter3Counter + 1; i++) {
	            var stateName = 'app.chapter3.scene_' + i,
	                url = '/scene-' + i,
	                isLast = i === chapter3Counter;

	            $stateProvider.state(stateName, {
	                url: url,
	                page: {
	                    title: '',
	                    name: 'scene-' + i,
	                    chapter: 3,
	                    scene: i,
	                    isLast: isLast
	                },
	                templateUrl: !isLast ? 'views/chapter-3/scene-' + i + '.html' : 'views/last.html'
	            });
	        };

	        for (var i = 1; i < chapter4Counter + 1; i++) {
	            var stateName = 'app.chapter4.scene_' + i,
	                url = '/scene-' + i,
	                isLast = i === chapter4Counter;

	            $stateProvider.state(stateName, {
	                url: url,
	                page: {
	                    title: '',
	                    name: 'scene-' + i,
	                    chapter: 4,
	                    scene: i,
	                    isLast: isLast
	                },
	                templateUrl: !isLast ? 'views/chapter-4/scene-' + i + '.html' : 'views/last.html'
	            });
	        };

	        for (var i = 1; i < chapter5Counter + 1; i++) {
	            var stateName = 'app.chapter5.scene_' + i,
	                url = '/scene-' + i,
	                isLast = i === chapter5Counter;

	            $stateProvider.state(stateName, {
	                url: url,
	                page: {
	                    title: '',
	                    name: 'scene-' + i,
	                    chapter: 5,
	                    scene: i,
	                    isLastChapter: true,
	                    isLast: isLast
	                },
	                templateUrl: !isLast ? 'views/chapter-5/scene-' + i + '.html' : 'views/last.html'
	            });
	        };

	        for (var i = 1; i < chapter6Counter + 1; i++) {
	            var stateName = 'app.chapter6.scene_' + i,
	                url = '/scene-' + i,
	                isLast = i === chapter6Counter;

	            $stateProvider.state(stateName, {
	                url: url,
	                page: {
	                    title: '',
	                    name: 'scene-' + i,
	                    chapter: 6,
	                    scene: i,
	                    isLastChapter: true,
	                    isLast: isLast
	                },
	                templateUrl: !isLast ? 'views/chapter-6/scene-' + i + '.html' : 'views/last.html'
	            });
	        };

	        var lang = localStorage.getItem('NG_TRANSLATE_LANG_KEY') ? localStorage.getItem('NG_TRANSLATE_LANG_KEY') : 'hy';

	        $urlRouterProvider.when('/', '/' + lang + '/chapter-1/scene-1');
	        $urlRouterProvider.when('/' + lang + '/chapter-1', '/' + lang + '/chapter-1/scene-1');
	        $urlRouterProvider.when('/' + lang + '/chapter-2', '/' + lang + '/chapter-2/scene-1');
	        $urlRouterProvider.when('/' + lang + '/chapter-3', '/' + lang + '/chapter-3/scene-1');
	        $urlRouterProvider.when('/' + lang + '/chapter-4', '/' + lang + '/chapter-4/scene-1');
	        $urlRouterProvider.when('/' + lang + '/chapter-5', '/' + lang + '/chapter-5/scene-1');
	        $urlRouterProvider.when('/' + lang + '/chapter-6', '/' + lang + '/chapter-6/scene-1');

	        $urlRouterProvider.otherwise('/' + lang + '/404');
	        $locationProvider.html5Mode(true);

	        // Multilangage
	        $translateProvider
	            .preferredLanguage('hy')
	            .useLocalStorage()
	            .useMissingTranslationHandlerLog()
	            .useSanitizeValueStrategy(null);
	    }
	]).run(function($rootScope, $state, $log) {
	    var lang = localStorage.getItem('NG_TRANSLATE_LANG_KEY');

	    $rootScope.$log = $log;
	    $rootScope.$state = $state;
	    $rootScope.lang = lang || 'hy';
	    if (!("ontouchstart" in document.documentElement)) {
	        document.documentElement.className += " no-touch";
	        $rootScope.isTouchDevice = false;
	    } else {
	        document.documentElement.className += " touch";
	        $rootScope.isTouchDevice = true;
	    }

	    if (window.innerWidth > 768) {
	        $rootScope.isMobView = true;
	    } else {
	        $rootScope.isMobView = false;
	    }
	});

	app.constant('config', __webpack_require__(1));

	//////////////////////////////////////////////////////
	///////////////////// SERVICES ///////////////////////
	//////////////////////////////////////////////////////

	__webpack_require__(2);

	//////////////////////////////////////////////////////
	///////////////////// Filters ////////////////////////
	//////////////////////////////////////////////////////

	// require('./filters/splitText.filter');


	//////////////////////////////////////////////////////
	///////////////////// Directives /////////////////////
	//////////////////////////////////////////////////////

	__webpack_require__(3);
	__webpack_require__(4);

	//////////////////////////////////////////////////////
	///////////////////// CONTROLLERS ////////////////////
	//////////////////////////////////////////////////////

	__webpack_require__(5);

	__webpack_require__(6);
	__webpack_require__(7);

	__webpack_require__(8);

	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	__webpack_require__(12);
	__webpack_require__(13);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(17);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);
	__webpack_require__(21);
	__webpack_require__(22);

	__webpack_require__(23);
	__webpack_require__(24);
	__webpack_require__(25);
	__webpack_require__(26);
	__webpack_require__(27);



	//////////////////////////////////////////////////////
	///////////////////// FACTORY ////////////////////
	//////////////////////////////////////////////////////
	__webpack_require__(28);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	angular
	    .module('app')
	    .service('SoundService', SoundService);

	SoundService.$inject = ['$rootScope', 'ngAudio'];

	function SoundService($rootScope, ngAudio) {
	    var waves, portal, nature, metamorph;
	    var sounds = {
	        waves: '/sounds/waves.mp3',
	        nature: '/sounds/nature.mp3',
	        portal: '/sounds/portal.mp3',
	        metamorph: '/sounds/metamorph.mp3'
	    }

	    var vol = 0;
	    var maxVol = 1;
	    var minVol = 0.05;

	    var ambienceVol = 0.8;
	    var metamorphVol = 1;
	    var ambienceMin = 0.05;



	    var increaseVol = function(sound, vol1, vol2) {
	        sound.setMuting($rootScope.mutted);
	        if (!$rootScope.mutted) {
	            var stopInterval = function() {
	                clearInterval(interval);
	            };
	            var max = vol2 || maxVol;
	            var interval = setInterval(function() {
	                vol1 += 0.1;
	                if (vol1 >= max) {
	                    stopInterval();
	                } else {
	                    sound.volume = vol1;
	                }
	            }, 300);
	        }
	    };

	    var decreaseVol = function(sound, vol1, vol2) {
	        sound.setMuting($rootScope.mutted);

	        if (!$rootScope.mutted) {
	            var stopInterval = function(pause) {
	                clearInterval(interval);
	                if (pause) {
	                    sound.pause();
	                }
	            };

	            if (!vol2) {
	                var interval = setInterval(function() {
	                    vol1 -= 0.1;
	                    if (vol1 < 0.02) {
	                        stopInterval(true);
	                    } else {
	                        console.log("sound.volume", sound.volume);
	                        console.log("vol2", vol2);
	                        console.log("vol1", vol1);

	                        if (sound.volume >= vol2) {
	                            sound.volume = vol1;
	                        }
	                    }
	                }, 300);
	            } else {
	                var interval = setInterval(function() {
	                    vol1 -= 0.1;
	                    if (vol1 <= minVol) {
	                        stopInterval(false)
	                    } else {
	                        sound.volume = vol1;
	                    }
	                }, 300);
	            }
	        }
	    };

	    var playSound = function(sound, vol2) {
	        sound.volume = 0;
	        sound.play();
	        increaseVol(sound, 0, vol2);
	    };

	    var stopSound = function(sound, vol) {
	        decreaseVol(sound, vol);
	    };


	    return {
	        playAmbience: function(decreased) {
	            if (decreased) {
	                ambienceVol = ambienceMin;
	            }
	            waves = ngAudio.load(sounds.waves);
	            nature = ngAudio.load(sounds.nature);

	            waves.loop = true;
	            nature.loop = true;


	            var play = function() {
	                playSound(waves, ambienceVol);
	                playSound(nature, ambienceVol);
	            };

	            return play();
	        },
	        decreaseAmbienceVol: function() {
	            function decrease() {
	                decreaseVol(waves, ambienceVol, ambienceMin);
	                decreaseVol(nature, ambienceVol, ambienceMin);
	            };

	            return decrease();
	        },
	        playMetamorph: function() {
	            if (!metamorph) {
	                metamorph = ngAudio.load(sounds.metamorph);
	                metamorph.loop = true;
	            }

	            var play = function() {
	                playSound(metamorph, metamorphVol);
	            };

	            return play();
	        },
	        playPortal: function() {
	            portal = ngAudio.load(sounds.portal);
	            portal.setMuting($rootScope.mutted);
	            portal.play();
	        },

	        stopPortal: function() {
	            if (portal) {
	                portal.pause();
	            }
	        },

	        toggleVolume: function() {
	            var muteAll = function() {
	                if (waves) {
	                    waves.setMuting(!$rootScope.mutted);
	                }
	                if (nature) {
	                    nature.setMuting(!$rootScope.mutted);
	                }
	                if (portal) {
	                    portal.setMuting(!$rootScope.mutted);
	                }
	                if (metamorph) {
	                    metamorph.setMuting(!$rootScope.mutted);
	                }
	            }

	            return muteAll();
	        }
	    }
	}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app')
	    .directive('parallax', ['$document', function($document) {
	        return {
	            link: function(scope, element, attr) {
	                // var scene = element[0];
	                // if (!("ontouchstart" in document.documentElement)) {
	                // 	var parallax = new Parallax(scene);
	                // }
	            }
	        };
	    }])


/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app')
	    .directive('pathclick', ['$document', '$rootScope', function($document, $rootScope) {
	        return {
	            link: function(scope, element, attr) {
	                angular.element(element).on('click touchstart', function(){
	                	$rootScope.$broadcast("pathClicked", attr.pathclick);
	                });
	            }
	        };
	    }])


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('AppController', AppController);
	AppController.$inject = [
	    '$rootScope',
	    '$scope',
	    '$state',
	    '$stateParams',
	    '$window',
	    '$document',
	    '$translate',
	    'preloader'
	];

	function AppController($rootScope, $scope, $state, $stateParams, $window, $document, $translate, preloader) {
	    $scope.slideDir = 'to-next';
	    $rootScope.mutted = false;
	    var lastAnimation = 0;
	    var animationTime = 1000; // in ms
	    var quietPeriod = 500; // in ms, time after animation to ignore mousescroll
	    var deltaOfInterest;

	    $scope.toPrev = function() {
	        if ($state.current.page.scene != 1) {
	            var toState = 'app.chapter' + $state.current.page.chapter + '.scene_' + ($state.current.page.scene - 1);
	            $state.go(toState);
	        }
	    };

	    $scope.toNext = function() {
	        if (!$state.current.page.isLast) {
	            var toState = 'app.chapter' + $state.current.page.chapter + '.scene_' + ($state.current.page.scene + 1);
	            $state.go(toState);
	        }
	    };

	    $scope.goToNextChapter = function() {
	        var toState = 'app.chapter' + ($state.current.page.chapter + 1) + '.scene_1';

	        if (!$state.current.page.isLastChapter) {
	            $state.go(toState);
	        };
	    }

	    function wheelTo(delta, event) {
	        var timeNow = new Date().getTime();

	        deltaOfInterest = delta;

	        if (deltaOfInterest == 0) {
	            event.preventDefault();
	            return;
	        }

	        if (timeNow - lastAnimation < quietPeriod + animationTime) {
	            event.preventDefault();
	            return;
	        }

	        if (deltaOfInterest < 0) {
	            $scope.toNext();
	            lastAnimation = timeNow;
	        } else {
	            $scope.toPrev();
	            lastAnimation = timeNow;
	        }

	    }
	    if (!$rootScope.isTouchDevice) {
	        function getDelta(e) {
	            var evt = window.event || e; //equalize event object
	            var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta; //check for detail first so Opera uses that instead of wheelDelta

	            wheelTo(delta, evt);
	        }
	        var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x

	        if (document.attachEvent) //if IE (and Opera depending on user setting)
	            document.attachEvent("on" + mousewheelevt, getDelta)
	        else if (document.addEventListener) //WC3 browsers
	            document.addEventListener(mousewheelevt, getDelta, false)
	    }

	    $scope.changeLanguage = function(langKey) {
	        $translate.use(langKey);
	        $state.go($state.current.name, {
	            'locale': langKey
	        });
	    };

	    var locale = $stateParams.locale;
	    var lsLocale = localStorage.getItem('NG_TRANSLATE_LANG_KEY');

	    $rootScope.lang = locale;
	    $translate.use(locale);


	    // event, next, current
	    $rootScope.$on('$locationChangeStart', function() {
	        $translate.use(locale);
	    });

	    $rootScope.$on('$translateChangeStart', function(event, data) {
	        var lang = data.language;
	        $rootScope.lang = lang;
	    });

	    if (locale !== 'hy' && locale !== 'en') {
	        $state.go($state.current.name, {
	            'locale': lsLocale ? lsLocale : 'hy'
	        });
	    }
	}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('FooterController', FooterController);

	FooterController.$inject = ['$scope', '$state', '$rootScope'];

	function FooterController($scope, $state, $rootScope) {

	}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('HeaderController', HeaderController);

	HeaderController.$inject = ['$scope', '$state', '$stateParams', '$translate'];

	function HeaderController($scope, $state, $stateParams, $translate) {


	    $scope.changeLanguage = function(langKey) {
	        $translate.use(langKey);
	        $state.go($state.current.name, {
	            'locale': langKey
	        });
	    };
	}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('Chapter1Controller', Chapter1Controller);
	Chapter1Controller.$inject = [
	    '$scope',
	    'preloader'
	];

	function Chapter1Controller($scope, preloader) {

	    $scope.isLoading = true;
	    $scope.isSuccessful = false;

	    var currentSceneImages = [
	        './images/chapter-1/scene-1/antar-left.png',
	        './images/chapter-1/scene-1/antar-right.png',
	        './images/chapter-1/scene-1/hand-book.png',
	        './images/chapter-1/scene-1/book_hy.png',
	        './images/chapter-1/scene-1/nav.png',
	        './images/chapter-1/scene-1/prpur.png',
	        './images/chapter-1/scene-1/taxtak-left.png',
	        './images/chapter-1/scene-1/taxtak-right.png',
	        './images/chapter-1/scene-1/wave-001.png',
	        './images/chapter-1/scene-1/wave-001_1.png',
	        './images/chapter-1/scene-1/wave-002.png',
	        './images/chapter-1/scene-1/wave-003.png',
	        './images/chapter-1/scene-1/wave-004.png',
	        './images/chapter-1/scene-1/wave-005.png',
	        './images/chapter-1/scene-1/wave-006.png',
	        './images/chapter-1/scene-1/wave-007.png',
	        './images/chapter-1/scene-1/wave-008.png'
	    ];

	    preloader.preloadImages(currentSceneImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            $scope.isLoading = false;
	            $scope.isSuccessful = true;
	        },
	        function handleReject(imageLocation) {
	            $scope.isLoading = false;
	            $scope.isSuccessful = false;
	        },
	        function handleNotify(event) {
	            $scope.percentLoaded = event.percent;
	        }
	    );

	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_1Controller', Scene1_1Controller);

	Scene1_1Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_1Controller($scope, $rootScope, $state, preloader) {
	    $scope.isLoading = true;
	    $scope.isSuccessful = false;


	    var nextScenImages = [
	        './images/chapter-1/scene-2/amp-left.png',
	        './images/chapter-1/scene-2/amp-right.png',
	        './images/chapter-1/scene-2/apm.png',
	        './images/chapter-1/scene-2/characters.png',
	        './images/chapter-1/scene-2/erkinq.jpg',
	        './images/chapter-1/scene-2/prpur.png',
	        './images/chapter-1/scene-2/shenqer.png',
	        './images/chapter-1/scene-2/taxtak.png',
	        './images/chapter-1/scene-2/txt-papik_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-2/txt-sevan_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-2/wave-001.png',
	        './images/chapter-1/scene-2/wave-002.png',
	        './images/chapter-1/scene-2/wave-003.png',
	        './images/frame_top.png',
	        './images/frame_bottom.png',
	        './images/frame_left.png',
	        './images/frame_right.png',
	        './images/frame_center.png'
	    ];



	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-2");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {}
	    );

	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_2Controller', Scene1_2Controller);

	Scene1_2Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_2Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-3/scene-3-1.jpg',
	        './images/chapter-1/scene-3/scene-3-2.jpg',
	        './images/chapter-1/scene-3/text-1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-3/text-2_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-3/text-3_'+ $rootScope.lang +'.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-3");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_3Controller', Scene1_3Controller);

	Scene1_3Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_3Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-4/scene-4-1.jpg',
	        './images/chapter-1/scene-4/scene-4-2_'+ $rootScope.lang +'.jpg',
	        './images/chapter-1/scene-4/text-1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-4/text-2_'+ $rootScope.lang +'.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-4");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_4Controller', Scene1_4Controller);

	Scene1_4Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_4Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-5/scene-5-1.jpg',
	        './images/chapter-1/scene-5/scene-5-2.jpg',
	        './images/chapter-1/scene-5/text-1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-5/text-2_'+ $rootScope.lang +'.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-5");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_5Controller', Scene1_5Controller);

	Scene1_5Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_5Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-6/scene-6-1.jpg',
	        './images/chapter-1/scene-6/scene-6-2_'+ $rootScope.lang +'.jpg',
	        './images/chapter-1/scene-6/text-1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-6/text-2_'+ $rootScope.lang +'.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-6");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 14 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_6Controller', Scene1_6Controller);

	Scene1_6Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_6Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-7/all.png',
	        './images/chapter-1/scene-7/prpur.png',
	        './images/chapter-1/scene-7/text_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-7/wave-001.png',
	        './images/chapter-1/scene-7/wave-002.png',
	        './images/chapter-1/scene-7/wave-003.png',
	        './images/chapter-1/scene-7/wave-004.png',
	        './images/chapter-1/scene-7/wave-005.png',
	        './images/chapter-1/scene-7/wave-006.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-7");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_7Controller', Scene1_7Controller);

	Scene1_7Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_7Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-8/back-img_'+ $rootScope.lang +'.jpg',
	        './images/chapter-1/scene-8/s8-text_'+ $rootScope.lang +'.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-8");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_8Controller', Scene1_8Controller);

	Scene1_8Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_8Controller($scope, $rootScope, $state, preloader) {
		var nextScenImages = [
	        './images/chapter-1/scene-9/back-img_'+ $rootScope.lang +'.jpg',
	        './images/chapter-1/scene-9/scenegifi.gif',
	        './images/chapter-1/scene-9/scenegif.gif',
	        './images/chapter-1/scene-9/s9-img2.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-9");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 17 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_9Controller', Scene1_9Controller);

	Scene1_9Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_9Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-10/back-img.png',
	        './images/chapter-1/scene-10/topic_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet2_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet3_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet4_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet5_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet6_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text/k-txet7_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg1.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg2.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg3.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg4.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg5.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg6.png',
	        './images/chapter-1/scene-10/kxzi-text-bg/k-text-bg7.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-10");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );

	    // SoundService.playPortal();
	}


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_10Controller', Scene1_10Controller);

	Scene1_10Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader', '$timeout'];

	function Scene1_10Controller($scope, $rootScope, $state, preloader, $timeout) {
	    $scope.cloudVisible = [];
	    var nextScenImages = [
	        './images/chapter-1/scene-11/back-img_'+ $rootScope.lang +'.jpg',
	        './images/chapter-1/scene-11/s11-gif.gif',
	        './images/chapter-1/scene-11/text1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-11/text2_'+ $rootScope.lang +'.png',
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-11");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );

	    var last;

	    $scope.showTextCloud = function(id) {
	        if (last == id) {
	            $scope.cloudVisible[id] = !$scope.cloudVisible[id];
	        } else {
	            $scope.cloudVisible = [];
	            $scope.cloudVisible[id] = true;
	        }

	        last = id;

	        $timeout(function() {
	            $scope.cloudVisible[id] = false;
	        }, 8000)
	    };

	    $rootScope.$on("pathClicked", function(event, args) {
	        $scope.showTextCloud(args);
	        $scope.$apply();
	    });
	}


/***/ }),
/* 19 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_11Controller', Scene1_11Controller);

	Scene1_11Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_11Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-12/scene-12-1.jpg',
	        './images/chapter-1/scene-12/scene-12-2.jpg',
	        './images/chapter-1/scene-12/text-1_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-12/text-2_'+ $rootScope.lang +'.png',
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-12");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );

	    // SoundService.playPortal();
	}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_12Controller', Scene1_12Controller);

	Scene1_12Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_12Controller($scope, $rootScope, $state, preloader) {
	    var nextScenImages = [
	        './images/chapter-1/scene-13/all.png',
	        './images/chapter-1/scene-13/prpur.png',
	        './images/chapter-1/scene-13/text_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-13/wave-001.png',
	        './images/chapter-1/scene-13/wave-002.png',
	        './images/chapter-1/scene-13/wave-003.png',
	        './images/chapter-1/scene-13/wave-004.png',
	        './images/chapter-1/scene-13/wave-005.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-13");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_13Controller', Scene1_13Controller);

	Scene1_13Controller.$inject = ['$scope', '$rootScope', '$state', 'preloader'];

	function Scene1_13Controller($scope, $rootScope, $state, preloader) {
		var nextScenImages = [
	        './images/chapter-1/scene-14/text_'+ $rootScope.lang +'.png',
	        './images/chapter-1/scene-14/link.png'
	    ];

	    preloader.preloadImages(nextScenImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            console.info("Preload Successful Scene-14");
	        },
	        function handleReject(imageLocation) {
	            // Loading failed on at least one image.
	            console.error("Image Failed", imageLocation);
	            console.info("Preload Failure");
	        },
	        function handleNotify(event) {

	        }
	    );
	}


/***/ }),
/* 22 */
/***/ (function(module, exports) {

	'use strict';

	angular
	    .module('app')
	    .controller('Scene1_14Controller', Scene1_14Controller);

	Scene1_14Controller.$inject = ['$scope', '$rootScope', '$state'];

	function Scene1_14Controller($scope, $rootScope, $state) {

	}


/***/ }),
/* 23 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('Chapter2Controller', Chapter2Controller);
	Chapter2Controller.$inject = [
	    '$scope',
	    'preloader',
	    '$rootScope'
	];

	function Chapter2Controller($scope, preloader, $rootScope) {
	    $scope.isLoading = true;
	    $scope.isSuccessful = false;

	    var currentSceneImages = [
	        './images/chapter-2/scene-1/cover.png',
	        './images/chapter-2/scene-1/title_'+ $rootScope.lang +'.png',
	        './images/chapter-2/scene-1/shadow_'+ $rootScope.lang +'.png',
	        './images/chapter-2/scene-2/scene1.png',
	        './images/chapter-2/scene-2/scene2.png',
	        './images/chapter-2/scene-3/scene1.png',
	        './images/chapter-2/scene-3/scene2.png',
	        './images/chapter-2/scene-4/scene1.png',
	        './images/chapter-2/scene-4/scene2.png',
	        './images/chapter-2/scene-5/scene1.png',
	        './images/chapter-2/scene-6/scene1.png',
	        './images/chapter-2/scene-7/scene1.png',
	        './images/chapter-2/scene-7/scene2.png',
	        './images/chapter-2/scene-8/scene1.png',
	        './images/chapter-2/scene-9/scene1.png',
	        './images/chapter-2/scene-9/scene2.png',
	        './images/chapter-2/scene-10/scene1.png',
	        './images/chapter-2/scene-10/scene2.png',
	        './images/chapter-2/scene-11/scene1.png',
	        './images/chapter-2/scene-12/scene1.png',
	        './images/chapter-2/scene-12/scene2.png',
	        './images/chapter-2/scene-13/scene1.png',
	        './images/chapter-2/scene-13/scene2.png',
	        './images/chapter-2/scene-14/scene1.png',
	        './images/chapter-2/scene-14/scene2.png',
	        './images/chapter-2/scene-15/scene1.png',
	        './images/chapter-2/scene-15/scene2.png'
	    ];

	    preloader.preloadImages(currentSceneImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            $scope.isLoading = false;
	            $scope.isSuccessful = true;
	        },
	        function handleReject(imageLocation) {
	            $scope.isLoading = false;
	            $scope.isSuccessful = false;
	        },
	        function handleNotify(event) {
	            $scope.percentLoaded = event.percent;
	        }
	    );

	}


/***/ }),
/* 24 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('Chapter3Controller', Chapter3Controller);
	Chapter3Controller.$inject = [
	    '$scope',
	    'preloader'
	];

	function Chapter3Controller($scope, preloader) {
	    $scope.isLoading = true;
	    $scope.isSuccessful = false;

	    var currentSceneImages = [
	        './images/chapter-3/frame.png',
	        './images/chapter-3/bg.png',
	        './images/chapter-3/scene-1/rain.png',
	        './images/chapter-3/scene-1/scene.png',
	        './images/chapter-3/scene-1/scene.jpg',
	        './images/chapter-3/scene-1/topic_en.png',
	        './images/chapter-3/scene-1/topic_glow_en.png',
	        './images/chapter-3/scene-1/topic_glow_hy.png',
	        './images/chapter-3/scene-1/topic_hy.png',
	        './images/chapter-3/scene-2/bg_full.png',
	        './images/chapter-3/scene-2/bg.jpg',
	        './images/chapter-3/scene-2/bg1.jpg',
	        './images/chapter-3/scene-2/papik.png',
	        './images/chapter-3/scene-2/portal-1-char.png',
	        './images/chapter-3/scene-2/portal-2-char.png',
	        './images/chapter-3/scene-2/portal-1.png',
	        './images/chapter-3/scene-2/portal-1.gif',
	        './images/chapter-3/scene-2/portal-2.gif',
	        './images/chapter-3/scene-2/portal.gif',
	        './images/chapter-3/scene-2/portal-2.png',
	        './images/chapter-3/scene-4/portal.gif',
	        './images/chapter-3/scene-4/bg1.jpg',
	        './images/chapter-3/scene-4/bg2.jpg',
	        './images/chapter-3/scene-4/ampik-1.png',
	        './images/chapter-3/scene-4/ampik-2.png',
	        './images/chapter-3/scene-4/ampik-3.png',
	        './images/chapter-3/scene-4/ampik-4.png',
	        './images/chapter-3/scene-3/portal.gif',
	        './images/chapter-3/scene-3/bg1.jpg',
	        './images/chapter-3/scene-3/bg2.jpg',
	        './images/chapter-3/scene-3/bg2.png',
	        './images/chapter-3/scene-3/sev-amper.png',
	        './images/chapter-3/scene-3/ampik-1.png',
	        './images/chapter-3/scene-3/ampik-2.png',
	        './images/chapter-3/scene-3/ampik-3.png',
	        './images/chapter-3/scene-3/ampik-4.png',
	        './images/chapter-3/scene-3/ampik-5.png',
	        './images/chapter-3/scene-5/bg1.jpg',
	        './images/chapter-3/scene-5/bg2.jpg',
	        './images/chapter-3/scene-5/ampik-1.png',
	        './images/chapter-3/scene-5/ampik-2.png',
	        './images/chapter-3/scene-5/ampik-3.png'
	    ];

	    preloader.preloadImages(currentSceneImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            $scope.isLoading = false;
	            $scope.isSuccessful = true;
	        },
	        function handleReject(imageLocation) {
	            $scope.isLoading = false;
	            $scope.isSuccessful = false;
	        },
	        function handleNotify(event) {
	            $scope.percentLoaded = event.percent;
	        }
	    );

	}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('Chapter4Controller', Chapter4Controller);
	Chapter4Controller.$inject = [
	    '$scope',
	    'preloader'
	];

	function Chapter4Controller($scope, preloader) {
	    $scope.isLoading = true;
	    $scope.isSuccessful = false;

	    var currentSceneImages = [
	        './images/chapter-3/bg.png',
	        './images/chapter-4/scene-1/bg.jpg',
	        './images/chapter-4/scene-1/ampik-1.png',
	        './images/chapter-4/scene-1/ampik-2.png',
	        './images/chapter-4/scene-1/ampik-3.png',
	        './images/chapter-4/scene-1/ampik-4.png',
	        './images/chapter-4/scene-1/ampik-5.png',
	        './images/chapter-4/scene-2/bg.jpg',
	        './images/chapter-4/scene-2/ampik-1.png',
	        './images/chapter-4/scene-2/ampik-2.png',
	        './images/chapter-4/scene-2/ampik-3.png',
	        './images/chapter-4/scene-2/ampik-4.png',
	        './images/chapter-4/scene-3/bg.jpg',
	        './images/chapter-4/scene-3/ampik-1.png',
	        './images/chapter-4/scene-3/ampik-2.png',
	        './images/chapter-4/scene-3/chicken.png',
	        './images/chapter-4/scene-4/bg.jpg',
	        './images/chapter-4/scene-4/ampik-1.png',
	        './images/chapter-4/scene-4/ampik-2.png',
	        './images/chapter-4/scene-4/ampik-3.png',
	        './images/chapter-4/scene-4/ampik-4.png',
	        './images/chapter-4/scene-5/bg.jpg',
	        './images/chapter-4/scene-5/ampik-1.png',
	        './images/chapter-4/scene-5/ampik-2.png',
	        './images/chapter-4/scene-5/ampik-3.png',
	        './images/chapter-4/scene-5/ampik-4.png',
	        './images/chapter-4/scene-5/ampik-5.png',
	        './images/chapter-4/scene-5/ampik-6.png',
	        './images/chapter-4/scene-5/ampik-7.png',
	        './images/chapter-4/scene-5/ampik-8.png',
	        './images/chapter-4/scene-5/tati-1.png',
	        './images/chapter-4/scene-5/tati-2.png',
	        './images/chapter-4/scene-5/tati-3.png',
	        './images/chapter-4/scene-5/tati-4.png',
	        './images/chapter-4/scene-5/tati-5.png',
	        './images/chapter-4/scene-5/tati-6.png',
	    ];

	    preloader.preloadImages(currentSceneImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            $scope.isLoading = false;
	            $scope.isSuccessful = true;
	        },
	        function handleReject(imageLocation) {
	            $scope.isLoading = false;
	            $scope.isSuccessful = false;
	        },
	        function handleNotify(event) {
	            $scope.percentLoaded = event.percent;
	        }
	    );

	}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('Chapter5Controller', Chapter5Controller);
	Chapter5Controller.$inject = [
	    '$scope',
	    'preloader'
	];

	function Chapter5Controller($scope, preloader) {
	    $scope.isLoading = true;
	    $scope.isSuccessful = false;

	    var currentSceneImages = [
	        './images/chapter-5/bg.png',
	        './images/chapter-5/cover/cover-gif_hy.gif',
	        './images/chapter-5/cover/cover-gif_en.gif',
	        './images/chapter-5/scene-1/scene-1-gif_hy.gif',
	        './images/chapter-5/scene-1/scene-1-gif_en.gif',
	        './images/chapter-5/scene-2/scene-2-gif_hy.gif',
	        './images/chapter-5/scene-2/scene-2-gif_en.gif',
	        './images/chapter-5/scene-3/scene-3-gif_hy.gif',
	        './images/chapter-5/scene-3/scene-3-gif_en.gif',
	        './images/chapter-5/scene-5/scene-5-gif_hy.gif',
	        './images/chapter-5/scene-5/scene-5-gif_en.gif',
	        './images/chapter-5/scene-8/scene-8-gif.gif',
	        './images/chapter-5/scene-9/scene-9-gif_en.gif',
	        './images/chapter-5/scene-10/scene-10-gif_en.gif',
	    ];

	    preloader.preloadImages(currentSceneImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            $scope.isLoading = false;
	            $scope.isSuccessful = true;
	        },
	        function handleReject(imageLocation) {
	            $scope.isLoading = false;
	            $scope.isSuccessful = false;
	        },
	        function handleNotify(event) {
	            $scope.percentLoaded = event.percent;
	        }
	    );

	}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').controller('Chapter6Controller', Chapter6Controller);
	Chapter6Controller.$inject = [
	    '$scope',
	    'preloader'
	];

	function Chapter6Controller($scope, preloader) {
	    $scope.isLoading = true;
	    $scope.isSuccessful = false;

	    var currentSceneImages = [
	        './images/chapter-5/bg.png',
	    ];

	    preloader.preloadImages(currentSceneImages).then(
	        function handleResolve(imageLocations) {
	            // Loading was successful.
	            $scope.isLoading = false;
	            $scope.isSuccessful = true;
	        },
	        function handleReject(imageLocation) {
	            $scope.isLoading = false;
	            $scope.isSuccessful = false;
	        },
	        function handleNotify(event) {
	            $scope.percentLoaded = event.percent;
	        }
	    );

	}

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	angular.module('app').factory('preloader', function($q, $rootScope) {
	    // I manage the preloading of image objects. Accepts an array of image URLs.
	    function Preloader(imageLocations) {
	        // I am the image SRC values to preload.
	        this.imageLocations = imageLocations;
	        // As the images load, we'll need to keep track of the load/error
	        // counts when announing the progress on the loading.
	        this.imageCount = this.imageLocations.length;
	        this.loadCount = 0;
	        this.errorCount = 0;
	        // I am the possible states that the preloader can be in.
	        this.states = {
	            PENDING: 1,
	            LOADING: 2,
	            RESOLVED: 3,
	            REJECTED: 4
	        };
	        // I keep track of the current state of the preloader.
	        this.state = this.states.PENDING;
	        // When loading the images, a promise will be returned to indicate
	        // when the loading has completed (and / or progressed).
	        this.deferred = $q.defer();
	        this.promise = this.deferred.promise;
	    }
	    // ---
	    // STATIC METHODS.
	    // ---
	    // I reload the given images [Array] and return a promise. The promise
	    // will be resolved with the array of image locations.
	    Preloader.preloadImages = function(imageLocations) {
	        var preloader = new Preloader(imageLocations);
	        return preloader.load();
	    };
	    // ---
	    // INSTANCE METHODS.
	    // ---
	    Preloader.prototype = {
	        // Best practice for "instnceof" operator.
	        constructor: Preloader,
	        // ---
	        // PUBLIC METHODS.
	        // ---
	        // I determine if the preloader has started loading images yet.
	        isInitiated: function isInitiated() {
	            return this.state !== this.states.PENDING;
	        },
	        // I determine if the preloader has failed to load all of the images.
	        isRejected: function isRejected() {
	            return this.state === this.states.REJECTED;
	        },
	        // I determine if the preloader has successfully loaded all of the images.
	        isResolved: function isResolved() {
	            return this.state === this.states.RESOLVED;
	        },
	        // I initiate the preload of the images. Returns a promise.
	        load: function load() {
	            // If the images are already loading, return the existing promise.
	            if (this.isInitiated()) {
	                return this.promise;
	            }
	            this.state = this.states.LOADING;
	            for (var i = 0; i < this.imageCount; i++) {
	                this.loadImageLocation(this.imageLocations[i]);
	            }
	            // Return the deferred promise for the load event.
	            return this.promise;
	        },
	        // ---
	        // PRIVATE METHODS.
	        // ---
	        // I handle the load-failure of the given image location.
	        handleImageError: function handleImageError(imageLocation) {
	            this.errorCount++;
	            // If the preload action has already failed, ignore further action.
	            if (this.isRejected()) {
	                return;
	            }
	            this.state = this.states.REJECTED;
	            this.deferred.reject(imageLocation);
	        },
	        // I handle the load-success of the given image location.
	        handleImageLoad: function handleImageLoad(imageLocation) {
	            this.loadCount++;
	            // If the preload action has already failed, ignore further action.
	            if (this.isRejected()) {
	                return;
	            }
	            // Notify the progress of the overall deferred. This is different
	            // than Resolving the deferred - you can call notify many times
	            // before the ultimate resolution (or rejection) of the deferred.
	            this.deferred.notify({
	                percent: Math.ceil(this.loadCount / this.imageCount * 100),
	                imageLocation: imageLocation
	            });
	            // If all of the images have loaded, we can resolve the deferred
	            // value that we returned to the calling context.
	            if (this.loadCount === this.imageCount) {
	                this.state = this.states.RESOLVED;
	                this.deferred.resolve(this.imageLocations);
	            }
	        },
	        // I load the given image location and then wire the load / error
	        // events back into the preloader instance.
	        // --
	        // NOTE: The load/error events trigger a $digest.
	        loadImageLocation: function loadImageLocation(imageLocation) {
	            var preloader = this;
	            // When it comes to creating the image object, it is critical that
	            // we bind the event handlers BEFORE we actually set the image
	            // source. Failure to do so will prevent the events from proper
	            // triggering in some browsers.
	            var image = $(new Image()).load(function(event) {
	                // Since the load event is asynchronous, we have to
	                // tell AngularJS that something changed.
	                $rootScope.$apply(function() {
	                    preloader.handleImageLoad(event.target.src);
	                    // Clean up object reference to help with the
	                    // garbage collection in the closure.
	                    preloader = image = event = null;
	                });
	            }).error(function(event) {
	                // Since the load event is asynchronous, we have to
	                // tell AngularJS that something changed.
	                $rootScope.$apply(function() {
	                    preloader.handleImageError(event.target.src);
	                    // Clean up object reference to help with the
	                    // garbage collection in the closure.
	                    preloader = image = event = null;
	                });
	            }).prop('src', imageLocation);
	        }
	    };
	    // Return the factory instance.
	    return Preloader;
	});


/***/ })
/******/ ]);
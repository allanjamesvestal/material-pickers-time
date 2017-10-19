(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TimePicker"] = factory();
	else
		root["TimePicker"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimePicker = undefined;

var _timepicker = __webpack_require__(1);

var _timepicker2 = _interopRequireDefault(_timepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.TimePicker = _timepicker2.default;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(2);

var _template2 = _interopRequireDefault(_template);

var _assign = __webpack_require__(3);

var _assign2 = _interopRequireDefault(_assign);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class TimePicker
 *
 * @prop {string} template - TimePicker template
 * @prop {object} defaultOptions - Default config options
 * @prop {string} defaultOptions.timeFormat - 12 or 24 hour format ['standard', 'military']
 * @prop {bool} defaultOptions.autoNext - Auto-next on time element select
 * @prop {object} cachedEls - Cached elements in template
 * @prop {HTMLElement} cachedEls.body - document.body
 * @prop {HTMLElement} cachedEls.overlay - Overlay element ('.mtp-overlay')[0]
 * @prop {HTMLElement} cachedEls.wrapper - Wrapper element ('.mtp-wrapper')[0]
 * @prop {HTMLElement} cachedEls.picker - Selection elements wrapper ('.mtp-picker')[0]
 * @prop {HTMLElement} cachedEls.meridiem - Meridiem selection elements wrapper ('.mtp-meridiem')[0]
 * @prop {HTMLCollection} cachedEls.meridiemSpans - Meridiem selection elements meridiem('span')
 * @prop {HTMLElement} cachedEls.displayHours - Selected hour display element ('.mtp-display__hours')[0]
 * @prop {HTMLElement} cachedEls.displayMinutes - Selected minutes display element ('.mtp-display__minutes')[0]
 * @prop {HTMLElement} cachedEls.displayMerdiem - Selected meridiem display element ('.mtp-display__meridiem')[0]
 * @prop {HTMLElement} cachedEls.buttonCancel - Cancel button element ('.mtp-actions__cancel')[0]
 * @prop {HTMLElement} cachedEls.buttonBack - Back button element ('.mtp-actions__back')[0]
 * @prop {HTMLElement} cachedEls.buttonNext - Next button element ('.mtp-actions__next')[0]
 * @prop {HTMLElement} cachedEls.buttonFinish - Finish button element ('.mtp-actions__finish')[0]
 * @prop {HTMLElement} cachedEls.clockHours - Hour elements display wrapper ('.mtp-clock__hours')[0]
 * @prop {HTMLElement} cachedEls.clockMinutes - Minute elements display wrapper ('.mtp-clock__minutes')[0]
 * @prop {HTMLElement} cachedEls.clockMilitaryHours - Military hour elements display wrapper ('.mtp_clock__hours--military')[0]
 * @prop {HTMLElement} cachedEls.clockHand - Clock hand display ('.mtp-clock__hand')[0]
 * @prop {HTMLCollection} cachedEls.clockHoursLi - Hour list elements clockHours('li')
 * @prop {HTMLCollection} cachedEls.clockMinutesLi - Minute list elements clockMinutes('li')
 * @prop {HTMLCollection} cachedEls.clockMilitaryHoursLi - Military Hour li elements clockMilitaryHours('li')
 */
var TimePicker = function () {

  /**
     * Initialize new TimePicker instance
     *
     * @return {TimePicker} New TimePicker instance
     */
  function TimePicker() {
    _classCallCheck(this, TimePicker);

    this.template = _template2.default;
    this.defaultOptions = {
      timeFormat: 'standard',
      autoNext: false
    };
    this.cachedEls = {};

    this.events = new _events2.default();

    this.setupTemplate();

    this.cachedEls.body = document.body;
    var _cachedEls$body$getEl = this.cachedEls.body.getElementsByClassName('mtp-overlay');

    var _cachedEls$body$getEl2 = _slicedToArray(_cachedEls$body$getEl, 1);

    this.cachedEls.overlay = _cachedEls$body$getEl2[0];

    var _cachedEls$overlay$ge = this.cachedEls.overlay.getElementsByClassName('mtp-wrapper');

    var _cachedEls$overlay$ge2 = _slicedToArray(_cachedEls$overlay$ge, 1);

    this.cachedEls.wrapper = _cachedEls$overlay$ge2[0];

    var _cachedEls$wrapper$ge = this.cachedEls.wrapper.getElementsByClassName('mtp-picker');

    var _cachedEls$wrapper$ge2 = _slicedToArray(_cachedEls$wrapper$ge, 1);

    this.cachedEls.picker = _cachedEls$wrapper$ge2[0];

    var _cachedEls$wrapper$ge3 = this.cachedEls.wrapper.getElementsByClassName('mtp-meridiem');

    var _cachedEls$wrapper$ge4 = _slicedToArray(_cachedEls$wrapper$ge3, 1);

    this.cachedEls.meridiem = _cachedEls$wrapper$ge4[0];

    this.cachedEls.meridiemSpans = this.cachedEls.meridiem.getElementsByTagName('span');
    var _cachedEls$wrapper$ge5 = this.cachedEls.wrapper.getElementsByClassName('mtp-display__hours');

    var _cachedEls$wrapper$ge6 = _slicedToArray(_cachedEls$wrapper$ge5, 1);

    this.cachedEls.displayHours = _cachedEls$wrapper$ge6[0];

    var _cachedEls$wrapper$ge7 = this.cachedEls.wrapper.getElementsByClassName('mtp-display__minutes');

    var _cachedEls$wrapper$ge8 = _slicedToArray(_cachedEls$wrapper$ge7, 1);

    this.cachedEls.displayMinutes = _cachedEls$wrapper$ge8[0];

    var _cachedEls$wrapper$ge9 = this.cachedEls.wrapper.getElementsByClassName('mtp-display__meridiem');

    var _cachedEls$wrapper$ge10 = _slicedToArray(_cachedEls$wrapper$ge9, 1);

    this.cachedEls.displayMeridiem = _cachedEls$wrapper$ge10[0];

    var _cachedEls$picker$get = this.cachedEls.picker.getElementsByClassName('mtp-actions__cancel');

    var _cachedEls$picker$get2 = _slicedToArray(_cachedEls$picker$get, 1);

    this.cachedEls.buttonCancel = _cachedEls$picker$get2[0];

    var _cachedEls$picker$get3 = this.cachedEls.picker.getElementsByClassName('mtp-actions__back');

    var _cachedEls$picker$get4 = _slicedToArray(_cachedEls$picker$get3, 1);

    this.cachedEls.buttonBack = _cachedEls$picker$get4[0];

    var _cachedEls$picker$get5 = this.cachedEls.picker.getElementsByClassName('mtp-actions__next');

    var _cachedEls$picker$get6 = _slicedToArray(_cachedEls$picker$get5, 1);

    this.cachedEls.buttonNext = _cachedEls$picker$get6[0];

    var _cachedEls$picker$get7 = this.cachedEls.picker.getElementsByClassName('mtp-actions__finish');

    var _cachedEls$picker$get8 = _slicedToArray(_cachedEls$picker$get7, 1);

    this.cachedEls.buttonFinish = _cachedEls$picker$get8[0];

    var _cachedEls$picker$get9 = this.cachedEls.picker.getElementsByClassName('mtp-clock__hours');

    var _cachedEls$picker$get10 = _slicedToArray(_cachedEls$picker$get9, 1);

    this.cachedEls.clockHours = _cachedEls$picker$get10[0];

    var _cachedEls$picker$get11 = this.cachedEls.picker.getElementsByClassName('mtp-clock__minutes');

    var _cachedEls$picker$get12 = _slicedToArray(_cachedEls$picker$get11, 1);

    this.cachedEls.clockMinutes = _cachedEls$picker$get12[0];

    var _cachedEls$picker$get13 = this.cachedEls.picker.getElementsByClassName('mtp-clock__hours-military');

    var _cachedEls$picker$get14 = _slicedToArray(_cachedEls$picker$get13, 1);

    this.cachedEls.clockMilitaryHours = _cachedEls$picker$get14[0];

    var _cachedEls$picker$get15 = this.cachedEls.picker.getElementsByClassName('mtp-clock__hand');

    var _cachedEls$picker$get16 = _slicedToArray(_cachedEls$picker$get15, 1);

    this.cachedEls.clockHand = _cachedEls$picker$get16[0];

    this.cachedEls.clockHoursLi = this.cachedEls.clockHours.getElementsByTagName('li');
    this.cachedEls.clockMinutesLi = this.cachedEls.clockMinutes.getElementsByTagName('li');
    this.cachedEls.clockMilitaryHoursLi = this.cachedEls.clockMilitaryHours.getElementsByTagName('li');

    this.setEvents();
  }

  /**
     * Bind event to the input element to open when `focus` event is events.triggered
     *
     * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
     * @param {object} options Options to merged with defaults and set to input element object
     * @return {void}
     */


  _createClass(TimePicker, [{
    key: 'bindInput',
    value: function bindInput(inputEl) {
      var _this = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var element = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);

      element.mtpOptions = (0, _assign2.default)({}, this.defaultOptions, options);
      element.addEventListener('focus', function (event) {
        return _this.showEvent(event);
      });
    }

    /**
       * Open picker with the input provided in context without binding events
       *
       * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
       * @param {object} options Options to merged with defaults and set to input element object
       * @return {void}
       */

  }, {
    key: 'openOnInput',
    value: function openOnInput(inputEl) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      this.inputEl = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);
      this.inputEl.mtpOptions = (0, _assign2.default)({}, this.defaultOptions, options);
      this.show();
    }

    /**
       * Setup the template in DOM if not already
       *
       * @return {void}
       */

  }, {
    key: 'setupTemplate',
    value: function setupTemplate() {
      if (!this.isTemplateInDOM()) {
        document.body.insertAdjacentHTML('beforeend', _template2.default);
      }
    }

    /**
       * Set the events on picker elements
       *
       * @return {void}
       */

  }, {
    key: 'setEvents',
    value: function setEvents() {
      var _this2 = this;

      if (!this.hasSetEvents()) {
        // close
        this.cachedEls.overlay.addEventListener('click', function (event) {
          return _this2.hideEvent(event);
        });

        this.cachedEls.buttonCancel.addEventListener('click', function (event) {
          return _this2.hideEvent(event);
        });
        this.cachedEls.buttonNext.addEventListener('click', function () {
          return _this2.showMinutes();
        });
        this.cachedEls.buttonBack.addEventListener('click', function () {
          return _this2.showHours();
        });
        this.cachedEls.buttonFinish.addEventListener('click', function () {
          return _this2.finish();
        })

        // meridiem select events
        ;[].forEach.call(this.cachedEls.meridiemSpans, function (span) {
          span.addEventListener('click', function (event) {
            return _this2.meridiemSelectEvent(event);
          });
        })

        // time select events
        ;[].forEach.call(this.cachedEls.clockHoursLi, function (hour) {
          hour.addEventListener('click', function (event) {
            _this2.hourSelectEvent(event, _this2.cachedEls.clockHours, _this2.cachedEls.clockHoursLi);
          });
        });[].forEach.call(this.cachedEls.clockMilitaryHoursLi, function (hour) {
          hour.addEventListener('click', function (event) {
            _this2.hourSelectEvent(event, _this2.cachedEls.clockMilitaryHours, _this2.cachedEls.clockMilitaryHoursLi);
          });
        });[].forEach.call(this.cachedEls.clockMinutesLi, function (minute) {
          minute.addEventListener('click', function (event) {
            _this2.minuteSelectEvent(event, _this2.cachedEls.clockMinutes, _this2.cachedEls.clockMinutesLi);
          });
        });

        this.cachedEls.wrapper.classList.add('mtp-events-set');
      }
    }

    /**
       * Show the picker in the DOM
       *
       * @return {void}
       */

  }, {
    key: 'show',
    value: function show() {
      var isMilitaryFormat = this.isMilitaryFormat();

      // blur input to prevent onscreen keyboard from displaying (mobile hack)
      this.inputEl.blur();
      this.toggleHoursVisible(true, isMilitaryFormat);
      this.toggleMinutesVisible();
      this.setDisplayTime({
        hours: isMilitaryFormat ? '00' : '12',
        minutes: '0'
      });

      this.cachedEls.body.style.overflow = 'hidden';
      this.cachedEls.displayMeridiem.style.display = isMilitaryFormat ? 'none' : 'inline';
      this.cachedEls.meridiem.style.display = isMilitaryFormat ? 'none' : 'block';
      this.cachedEls.overlay.style.display = 'block';
      this.cachedEls.clockHand.style.height = isMilitaryFormat ? '90px' : '105px';

      this.events.trigger('show');
    }

    /**
       * Event handle for input focus
       *
       * @param {Event} event Event object passed from listener
       * @return {void}
       */

  }, {
    key: 'showEvent',
    value: function showEvent(event) {
      this.inputEl = event.target;
      this.show();
    }

    /**
       * Hide the picker in the DOM
       *
       * @return {void}
       */

  }, {
    key: 'hide',
    value: function hide() {
      this.cachedEls.overlay.style.display = 'none';
      this.cachedEls.body.style.overflow = '';

      this.inputEl.dispatchEvent(new Event('blur'));
      this.resetState();
      this.events.trigger('hide');
    }

    /**
       * Hide the picker element on the page
       *
       * @param {Event} event Event object passed from event listener callback
       * @return {void}
       */

  }, {
    key: 'hideEvent',
    value: function hideEvent(event) {
      event.stopPropagation();

      // only allow event based close if event.target contains one of these classes
      // hack to prevent overlay close event from events.triggering on all elements because
      // they are children of overlay
      var allowedClasses = ['mtp-overlay', 'mtp-actions__cancel'];
      var classList = event.target.classList;

      var isAllowed = allowedClasses.some(function (allowedClass) {
        return classList.contains(allowedClass);
      });

      if (isAllowed) {
        this.hide();
      }
    }

    /**
       * Reset picker state to defaults
       *
       * @return {void}
       */

  }, {
    key: 'resetState',
    value: function resetState() {
      this.currentStep = 0;
      this.toggleHoursVisible(true, this.isMilitaryFormat());
      this.toggleMinutesVisible();
      this.cachedEls.clockHoursLi[0].dispatchEvent(new Event('click'));
      this.cachedEls.clockMinutesLi[0].dispatchEvent(new Event('click'));
      this.cachedEls.clockMilitaryHoursLi[0].dispatchEvent(new Event('click'));
      this.cachedEls.meridiemSpans[0].dispatchEvent(new Event('click'));
    }

    /**
       * Set the displayed time, which will be used to fill input value on completion
       *
       * @param {number|string} hours: Hour display time,
       * @param {number|string} minutes: Minute display time
       * @return {void}
       */

  }, {
    key: 'setDisplayTime',
    value: function setDisplayTime(_ref) {
      var hours = _ref.hours,
          minutes = _ref.minutes;

      if (hours) {
        // .trim() is not allowed if hours is not recognized as a string,
        if (typeof hours === 'string' || hours instanceof String) {
          this.cachedEls.displayHours.innerHTML = hours.trim();
        } else {
          this.cachedEls.displayHours.innerHTML = hours;
        }
      }
      if (minutes) {
        var min = minutes < 10 ? '0' + minutes : minutes;

        // .trim() is not allowed if min is not recognized as a string,
        // ... sometimes (in Safari and Chrome) it is an untrimmable number
        if (typeof min === 'string' || min instanceof String) {
          this.cachedEls.displayMinutes.innerHTML = min.trim();
        } else {
          this.cachedEls.displayMinutes.innerHTML = min;
        }
      }
    }

    /**
       * Rotate the hand element to selected time
       *
       * @param {number} nodeIndex Index of active element
       * @param {number} increment Degree increment elements are on
       * @return {void}
       */

  }, {
    key: 'rotateHand',
    value: function rotateHand() {
      var nodeIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 9;
      var increment = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

      // 0 index is 180 degress behind 0 deg
      var rotateDeg = nodeIndex * increment - 180;
      var styleVal = 'rotate(' + rotateDeg + 'deg)';

      this.cachedEls.clockHand.style.transform = styleVal;
      this.cachedEls.clockHand.style['-webkit-transform'] = styleVal;
      this.cachedEls.clockHand.style['-ms-transform'] = styleVal;
    }
  }, {
    key: 'showHours',
    value: function showHours() {
      var isMilitaryFormat = this.isMilitaryFormat();
      var hourEls = isMilitaryFormat ? this.cachedEls.clockMilitaryHoursLi : this.cachedEls.clockHoursLi;

      this.toggleHoursVisible(true, isMilitaryFormat);
      this.toggleMinutesVisible();
      this.rotateHand(this.getActiveIndex(hourEls));
    }
  }, {
    key: 'showMinutes',
    value: function showMinutes() {
      var minuteEls = this.cachedEls.clockMinutesLi;

      this.toggleHoursVisible();
      this.toggleMinutesVisible(true);
      this.rotateHand(this.getActiveIndex(minuteEls), 6);
      this.cachedEls.clockHand.style.height = '115px';
    }
  }, {
    key: 'finish',
    value: function finish() {
      this.timeSelected();
      this.hide();
    }

    /**
       * Toggle hour (both military and standard) clock visiblity in DOM
       *
       * @param {boolean} isVisible Is clock face toggled visible or hidden
       * @param {boolean} isMilitaryFormat Is using military hour format
       * @return {void}
       */

  }, {
    key: 'toggleHoursVisible',
    value: function toggleHoursVisible() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var isMilitaryFormat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      this.cachedEls.clockHours.style.display = isVisible && !isMilitaryFormat ? 'block' : 'none';
      this.cachedEls.clockMilitaryHours.style.display = isVisible && isMilitaryFormat ? 'block' : 'none';
      this.cachedEls.buttonNext.style.display = !isVisible ? 'inline-block' : 'none';
    }

    /**
       * Toggle minute clock visiblity in DOM
       *
       * @param {boolean} isVisible Is clock face toggled visible or hidden
       * @return {void}
       */

  }, {
    key: 'toggleMinutesVisible',
    value: function toggleMinutesVisible() {
      var isVisible = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      this.cachedEls.clockMinutes.style.display = isVisible ? 'block' : 'none';
      this.cachedEls.buttonBack.style.display = isVisible ? 'inline-block' : 'none';
      this.cachedEls.buttonNext.style.display = !isVisible ? 'inline-block' : 'none';
      this.cachedEls.buttonFinish.style.display = isVisible ? 'inline-block' : 'none';
    }

    /**
       * Get the active time element index
       *
       * @param {HTMLCollection} timeEls Collection of time elements to find active in
       * @return {number} Active element index
       */

  }, {
    key: 'getActiveIndex',
    value: function getActiveIndex(timeEls) {
      var activeIndex = 0;[].some.call(timeEls, function (timeEl, index) {
        if (timeEl.classList.contains('mtp-clock--active')) {
          activeIndex = index;

          return true;
        }

        return false;
      });

      return activeIndex;
    }

    /**
       * Set selected time to input element
       *
       * @return {void}
       */

  }, {
    key: 'timeSelected',
    value: function timeSelected() {
      var hours = this.cachedEls.displayHours.innerHTML;
      var minutes = this.cachedEls.displayMinutes.innerHTML;
      var meridiem = this.isMilitaryFormat() ? '' : this.cachedEls.displayMeridiem.innerHTML;
      var timeValue = hours + ':' + minutes + ' ' + meridiem;

      this.inputEl.value = timeValue.trim();
      this.inputEl.dispatchEvent(new Event('input'));
    }

    /**
       * Set active clock face element
       *
       * @param {Element} containerEl New active elements .parentNode
       * @param {Element} activeEl Element to set active
       * @return {void}
       */

  }, {
    key: 'setActiveEl',
    value: function setActiveEl(containerEl, activeEl) {
      var activeClassName = 'mtp-clock--active';
      var currentActive = containerEl.getElementsByClassName(activeClassName)[0];

      currentActive.classList.remove(activeClassName);
      activeEl.classList.add(activeClassName);
    }

    /**
       * Meridiem select event handler
       *
       * @param {Event} event Event object passed from listener
       * @return {void}
       */

  }, {
    key: 'meridiemSelectEvent',
    value: function meridiemSelectEvent(event) {
      var activeClassName = 'mtp-clock--active';
      var element = event.target;
      var currentActive = this.cachedEls.meridiem.getElementsByClassName(activeClassName)[0];
      var value = element.innerHTML;

      if (!currentActive.isEqualNode(element)) {
        currentActive.classList.remove(activeClassName);
        element.classList.add(activeClassName);
        this.cachedEls.displayMeridiem.innerHTML = value;
      }
    }

    /**
       * Hour select event handler
       *
       * @param {Event} event Event object passed from listener
       * @param {HTMLElement} containerEl Element containing time list elements
       * @param {HTMLCollection} listEls Collection of list elements
       * @return {void}
       */

  }, {
    key: 'hourSelectEvent',
    value: function hourSelectEvent(event, containerEl, listEls) {
      event.stopPropagation();

      var newActive = event.target;
      var parentEl = newActive.parentElement;
      var isInner = parentEl.classList.contains('mtp-clock__hours--inner');

      this.cachedEls.clockHand.style.height = isInner ? '90px' : '105px';
      this.setActiveEl(containerEl, newActive);

      var activeIndex = this.getActiveIndex(listEls);

      this.setDisplayTime({ hours: newActive.innerHTML });
      this.rotateHand(activeIndex);
      this.events.trigger('hourSelected');
    }

    /**
       * Hour select event handler
       *
       * @param {Event} event Event object passed from listener
       * @param {HTMLElement} containerEl Element containing time list elements
       * @param {HTMLCollection} listEls Collection of list elements
       * @return {void}
       */

  }, {
    key: 'minuteSelectEvent',
    value: function minuteSelectEvent(event, containerEl, listEls) {
      event.stopPropagation();

      var newActive = event.target;

      this.setActiveEl(containerEl, newActive);

      var activeIndex = this.getActiveIndex(listEls);

      this.setDisplayTime({ minutes: activeIndex });
      this.rotateHand(activeIndex, 6);
      this.events.trigger('minuteSelected');
    }

    /**
       * Check if picker set to military time mode
       *
       * @return {boolean} Is in military time mode
       */

  }, {
    key: 'isMilitaryFormat',
    value: function isMilitaryFormat() {
      return this.inputEl.mtpOptions.timeFormat === 'military';
    }

    /**
       * Check if picker object has already set events on picker elements
       *
       * @return {boolean} Has events been set on picker elements
       */

  }, {
    key: 'hasSetEvents',
    value: function hasSetEvents() {
      return this.cachedEls.wrapper.classList.contains('mtp-events-set');
    }

    /**
       * Check if template has already been appended to DOM
       *
       * @return {boolean} Is template in DOM
       */

  }, {
    key: 'isTemplateInDOM',
    value: function isTemplateInDOM() {
      return Boolean(document.getElementsByClassName('mtp-overlay')[0]);
    }
  }]);

  return TimePicker;
}();

exports.default = TimePicker;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n<div class=\"mtp-overlay\" style=\"display:none\">\n    <div class=\"mtp-wrapper\">\n        <div class=\"mtp-display\">\n            <span class=\"mtp-display__hours\">12</span>:\n            <span class=\"mtp-display__minutes\">00</span>\n            <span class=\"mtp-display__meridiem\">am</span>\n        </div><!-- END .mtp-display -->\n        <div class=\"mtp-picker\">\n            <div class=\"mtp-meridiem\">\n                <span class=\"mtp-clock--active\">am</span>\n                <span>pm</span>\n            </div><!-- END .mtp-meridiem -->\n            <div class=\"mtp-clock\">\n                <div class=\"mtp-clock__center\"></div>\n                <div class=\"mtp-clock__hand\"></div>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__hours\" style=\"display:none\">\n                    <li class=\"mtp-clock--active\">12</li>\n                    <li>1</li>\n                    <li>2</li>\n                    <li>3</li>\n                    <li>4</li>\n                    <li>5</li>\n                    <li>6</li>\n                    <li>7</li>\n                    <li>8</li>\n                    <li>9</li>\n                    <li>10</li>\n                    <li>11</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__minutes\" style=\"display:none\">\n                    <li class=\"mtp-clock--active\">0</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>5</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>10</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>15</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>20</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>25</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>30</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>35</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>40</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>45</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>50</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>55</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__hours-military\" style=\"display:none\">\n                    <div class=\"mtp-clock__hours--inner\">\n                        <li class=\"mtp-clock--active\">00</li>\n                        <li>13</li>\n                        <li>14</li>\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li>20</li>\n                        <li>21</li>\n                        <li>22</li>\n                        <li>23</li>\n                    </div>\n                    <div class=\"mtp-clock__hours\">\n                        <li>12</li>\n                        <li>1</li>\n                        <li>2</li>\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li>9</li>\n                        <li>10</li>\n                        <li>11</li>\n                    </div>\n                </ul>\n            </div><!-- END .mtp-clock -->\n            <div class=\"mtp-actions\">\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__cancel\">Cancel</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__back\" style=\"display:none\">Back</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__next\">Next</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__finish\" style=\"display:none\">Done</button>\n            </div><!-- END .mtp-actions -->\n        </div><!-- END .mtp-picker -->\n    </div><!-- END .mtp-wrapper -->\n</div><!-- END .mtp-overlay -->\n";

exports.default = template;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-continue */
/**
 * Object.assign polyfill
 *
 * @param {object} target Target object to merge properties onto
 * @param {...object} sources  Source object to merge properties from
 * @return {object} Target object with merged properties
 */
function assign(target) {
  if (target === 'undefined' || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);

  for (var inc = 0; inc < (arguments.length <= 1 ? 0 : arguments.length - 1); inc += 1) {
    var nextSource = arguments.length <= inc + 1 ? undefined : arguments[inc + 1];

    if (nextSource === 'undefined' || nextSource === null) {
      continue;
    }

    nextSource = Object(nextSource);

    var keysArray = Object.keys(nextSource);

    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

      if (desc !== 'undefined' && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }

  return to;
}

exports.default = assign;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Events
 *
 * @prop {object.<string,function>} events - Hash table of events and their assigned handler callbacks
 */
var Events = function () {
  function Events() {
    _classCallCheck(this, Events);

    this.events = {};
  }

  _createClass(Events, [{
    key: "on",


    /**
       * Set handler on event
       *
       * @param {string} event - Event name to set handler to
       * @param {func} handler - Handler function callback
       * @return {void}
       */
    value: function on(event, handler) {
      if (!this.events[event]) {
        this.events[event] = [];
      }

      this.events[event].push(handler);
    }

    /**
       * Remove all event handler for the given event
       *
       * @param {string} event - Event name to remove handler from
       * @return {void}
       */

  }, {
    key: "off",
    value: function off(event) {
      if (this.events[event]) {
        this.events[event] = [];
      }
    }

    /**
       * Trigger event with params
       *
       * @param {string} event - Event to trigger
       * @param {object} params - Parameters to pass to event handler
       * @return {void}
       */

  }, {
    key: "trigger",
    value: function trigger(event, params) {
      if (this.events[event] && this.events[event].length) {
        this.events[event].forEach(function (handler) {
          return handler(params);
        });
      }
    }
  }]);

  return Events;
}();

exports.default = Events;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA2N2Q3ZTM3YzlmMGY2Mzk5MGFkZCIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RpbWVwaWNrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3RlbXBsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiVGltZVBpY2tlciIsInRlbXBsYXRlIiwiZGVmYXVsdE9wdGlvbnMiLCJ0aW1lRm9ybWF0IiwiYXV0b05leHQiLCJjYWNoZWRFbHMiLCJldmVudHMiLCJzZXR1cFRlbXBsYXRlIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm92ZXJsYXkiLCJ3cmFwcGVyIiwicGlja2VyIiwibWVyaWRpZW0iLCJtZXJpZGllbVNwYW5zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkaXNwbGF5SG91cnMiLCJkaXNwbGF5TWludXRlcyIsImRpc3BsYXlNZXJpZGllbSIsImJ1dHRvbkNhbmNlbCIsImJ1dHRvbkJhY2siLCJidXR0b25OZXh0IiwiYnV0dG9uRmluaXNoIiwiY2xvY2tIb3VycyIsImNsb2NrTWludXRlcyIsImNsb2NrTWlsaXRhcnlIb3VycyIsImNsb2NrSGFuZCIsImNsb2NrSG91cnNMaSIsImNsb2NrTWludXRlc0xpIiwiY2xvY2tNaWxpdGFyeUhvdXJzTGkiLCJzZXRFdmVudHMiLCJpbnB1dEVsIiwib3B0aW9ucyIsImVsZW1lbnQiLCJIVE1MRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJtdHBPcHRpb25zIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNob3dFdmVudCIsImV2ZW50Iiwic2hvdyIsImlzVGVtcGxhdGVJbkRPTSIsImluc2VydEFkamFjZW50SFRNTCIsImhhc1NldEV2ZW50cyIsImhpZGVFdmVudCIsInNob3dNaW51dGVzIiwic2hvd0hvdXJzIiwiZmluaXNoIiwiZm9yRWFjaCIsImNhbGwiLCJzcGFuIiwibWVyaWRpZW1TZWxlY3RFdmVudCIsImhvdXIiLCJob3VyU2VsZWN0RXZlbnQiLCJtaW51dGUiLCJtaW51dGVTZWxlY3RFdmVudCIsImNsYXNzTGlzdCIsImFkZCIsImlzTWlsaXRhcnlGb3JtYXQiLCJibHVyIiwidG9nZ2xlSG91cnNWaXNpYmxlIiwidG9nZ2xlTWludXRlc1Zpc2libGUiLCJzZXREaXNwbGF5VGltZSIsImhvdXJzIiwibWludXRlcyIsInN0eWxlIiwib3ZlcmZsb3ciLCJkaXNwbGF5IiwiaGVpZ2h0IiwidHJpZ2dlciIsInRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInJlc2V0U3RhdGUiLCJzdG9wUHJvcGFnYXRpb24iLCJhbGxvd2VkQ2xhc3NlcyIsImlzQWxsb3dlZCIsInNvbWUiLCJjb250YWlucyIsImFsbG93ZWRDbGFzcyIsImhpZGUiLCJjdXJyZW50U3RlcCIsIlN0cmluZyIsImlubmVySFRNTCIsInRyaW0iLCJtaW4iLCJub2RlSW5kZXgiLCJpbmNyZW1lbnQiLCJyb3RhdGVEZWciLCJzdHlsZVZhbCIsInRyYW5zZm9ybSIsImhvdXJFbHMiLCJyb3RhdGVIYW5kIiwiZ2V0QWN0aXZlSW5kZXgiLCJtaW51dGVFbHMiLCJ0aW1lU2VsZWN0ZWQiLCJpc1Zpc2libGUiLCJ0aW1lRWxzIiwiYWN0aXZlSW5kZXgiLCJ0aW1lRWwiLCJpbmRleCIsInRpbWVWYWx1ZSIsInZhbHVlIiwiY29udGFpbmVyRWwiLCJhY3RpdmVFbCIsImFjdGl2ZUNsYXNzTmFtZSIsImN1cnJlbnRBY3RpdmUiLCJyZW1vdmUiLCJpc0VxdWFsTm9kZSIsImxpc3RFbHMiLCJuZXdBY3RpdmUiLCJwYXJlbnRFbCIsInBhcmVudEVsZW1lbnQiLCJpc0lubmVyIiwic2V0QWN0aXZlRWwiLCJCb29sZWFuIiwiYXNzaWduIiwiVHlwZUVycm9yIiwidG8iLCJPYmplY3QiLCJpbmMiLCJuZXh0U291cmNlIiwia2V5c0FycmF5Iiwia2V5cyIsIm5leHRJbmRleCIsImxlbiIsImxlbmd0aCIsIm5leHRLZXkiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsIkV2ZW50cyIsImhhbmRsZXIiLCJwdXNoIiwicGFyYW1zIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REE7Ozs7OztRQUNTQSxVOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0RUOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUE2Qk1BLFU7O0FBUUo7Ozs7O0FBS0Esd0JBQWM7QUFBQTs7QUFBQSxTQVpkQyxRQVljO0FBQUEsU0FYZEMsY0FXYyxHQVhHO0FBQ2ZDLGtCQUFZLFVBREc7QUFFZkMsZ0JBQVU7QUFGSyxLQVdIO0FBQUEsU0FQZEMsU0FPYyxHQVBGLEVBT0U7O0FBQ1osU0FBS0MsTUFBTCxHQUFjLHNCQUFkOztBQUVBLFNBQUtDLGFB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S0FBSy9ILE1BQUwsQ0FBWWtDLEtBQVosQ0FBTCxFQUF5QjtBQUN2QixhQUFLbEMsTUFBTCxDQUFZa0MsS0FBWixJQUFxQixFQUFyQjtBQUNEOztBQUVELFdBQUtsQyxNQUFMLENBQVlrQyxLQUFaLEVBQW1COEYsSUFBbkIsQ0FBd0JELE9BQXhCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7Ozt3QkFNSTdGLEssRUFBTztBQUNULFVBQUksS0FBS2xDLE1BQUwsQ0FBWWtDLEtBQVosQ0FBSixFQUF3QjtBQUN0QixhQUFLbEMsTUFBTCxDQUFZa0MsS0FBWixJQUFxQixFQUFyQjtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs7NEJBT1FBLEssRUFBTytGLE0sRUFBUTtBQUNyQixVQUFJLEtBQUtqSSxNQUFMLENBQVlrQyxLQUFaLEtBQXNCLEtBQUtsQyxNQUFMLENBQVlrQyxLQUFaLEVBQW1CdUYsTUFBN0MsRUFBcUQ7QUFDbkQsYUFBS3pILE1BQUwsQ0FBWWtDLEtBQVosRUFBbUJTLE9BQW5CLENBQTJCO0FBQUEsaUJBQVdvRixRQUFRRSxNQUFSLENBQVg7QUFBQSxTQUEzQjtBQUNEO0FBQ0Y7Ozs7OztrQkF6Q2tCSCxNOzs7Ozs7QUNMckIseUMiLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRpbWVQaWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGltZVBpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2N2Q3ZTM3YzlmMGY2Mzk5MGFkZCIsImltcG9ydCBUaW1lUGlja2VyIGZyb20gJy4vdGltZXBpY2tlcidcbmV4cG9ydCB7IFRpbWVQaWNrZXIgfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleC5qcyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuL2Fzc2lnbidcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgJy4uL3Nhc3MvbWFpbi5zY3NzJ1xuXG4vKipcbiAqIEBjbGFzcyBUaW1lUGlja2VyXG4gKlxuICogQHByb3Age3N0cmluZ30gdGVtcGxhdGUgLSBUaW1lUGlja2VyIHRlbXBsYXRlXG4gKiBAcHJvcCB7b2JqZWN0fSBkZWZhdWx0T3B0aW9ucyAtIERlZmF1bHQgY29uZmlnIG9wdGlvbnNcbiAqIEBwcm9wIHtzdHJpbmd9IGRlZmF1bHRPcHRpb25zLnRpbWVGb3JtYXQgLSAxMiBvciAyNCBob3VyIGZvcm1hdCBbJ3N0YW5kYXJkJywgJ21pbGl0YXJ5J11cbiAqIEBwcm9wIHtib29sfSBkZWZhdWx0T3B0aW9ucy5hdXRvTmV4dCAtIEF1dG8tbmV4dCBvbiB0aW1lIGVsZW1lbnQgc2VsZWN0XG4gKiBAcHJvcCB7b2JqZWN0fSBjYWNoZWRFbHMgLSBDYWNoZWQgZWxlbWVudHMgaW4gdGVtcGxhdGVcbiAqIEBwcm9wIHtIVE1MRWxlbWVudH0gY2FjaGVkRWxzLmJvZHkgLSBkb2N1bWVudC5ib2R5XG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5vdmVybGF5IC0gT3ZlcmxheSBlbGVtZW50ICgnLm10cC1vdmVybGF5JylbMF1cbiAqIEBwcm9wIHtIVE1MRWxlbWVudH0gY2FjaGVkRWxzLndyYXBwZXIgLSBXcmFwcGVyIGVsZW1lbnQgKCcubXRwLXdyYXBwZXInKVswXVxuICogQHByb3Age0hUTUxFbGVtZW50fSBjYWNoZWRFbHMucGlja2VyIC0gU2VsZWN0aW9uIGVsZW1lbnRzIHdyYXBwZXIgKCcubXRwLXBpY2tlcicpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5tZXJpZGllbSAtIE1lcmlkaWVtIHNlbGVjdGlvbiBlbGVtZW50cyB3cmFwcGVyICgnLm10cC1tZXJpZGllbScpWzBdXG4gKiBAcHJvcCB7SFRNTENvbGxlY3Rpb259IGNhY2hlZEVscy5tZXJpZGllbVNwYW5zIC0gTWVyaWRpZW0gc2VsZWN0aW9uIGVsZW1lbnRzIG1lcmlkaWVtKCdzcGFuJylcbiAqIEBwcm9wIHtIVE1MRWxlbWVudH0gY2FjaGVkRWxzLmRpc3BsYXlIb3VycyAtIFNlbGVjdGVkIGhvdXIgZGlzcGxheSBlbGVtZW50ICgnLm10cC1kaXNwbGF5X19ob3VycycpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5kaXNwbGF5TWludXRlcyAtIFNlbGVjdGVkIG1pbnV0ZXMgZGlzcGxheSBlbGVtZW50ICgnLm10cC1kaXNwbGF5X19taW51dGVzJylbMF1cbiAqIEBwcm9wIHtIVE1MRWxlbWVudH0gY2FjaGVkRWxzLmRpc3BsYXlNZXJkaWVtIC0gU2VsZWN0ZWQgbWVyaWRpZW0gZGlzcGxheSBlbGVtZW50ICgnLm10cC1kaXNwbGF5X19tZXJpZGllbScpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5idXR0b25DYW5jZWwgLSBDYW5jZWwgYnV0dG9uIGVsZW1lbnQgKCcubXRwLWFjdGlvbnNfX2NhbmNlbCcpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5idXR0b25CYWNrIC0gQmFjayBidXR0b24gZWxlbWVudCAoJy5tdHAtYWN0aW9uc19fYmFjaycpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5idXR0b25OZXh0IC0gTmV4dCBidXR0b24gZWxlbWVudCAoJy5tdHAtYWN0aW9uc19fbmV4dCcpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5idXR0b25GaW5pc2ggLSBGaW5pc2ggYnV0dG9uIGVsZW1lbnQgKCcubXRwLWFjdGlvbnNfX2ZpbmlzaCcpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5jbG9ja0hvdXJzIC0gSG91ciBlbGVtZW50cyBkaXNwbGF5IHdyYXBwZXIgKCcubXRwLWNsb2NrX19ob3VycycpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5jbG9ja01pbnV0ZXMgLSBNaW51dGUgZWxlbWVudHMgZGlzcGxheSB3cmFwcGVyICgnLm10cC1jbG9ja19fbWludXRlcycpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMgLSBNaWxpdGFyeSBob3VyIGVsZW1lbnRzIGRpc3BsYXkgd3JhcHBlciAoJy5tdHBfY2xvY2tfX2hvdXJzLS1taWxpdGFyeScpWzBdXG4gKiBAcHJvcCB7SFRNTEVsZW1lbnR9IGNhY2hlZEVscy5jbG9ja0hhbmQgLSBDbG9jayBoYW5kIGRpc3BsYXkgKCcubXRwLWNsb2NrX19oYW5kJylbMF1cbiAqIEBwcm9wIHtIVE1MQ29sbGVjdGlvbn0gY2FjaGVkRWxzLmNsb2NrSG91cnNMaSAtIEhvdXIgbGlzdCBlbGVtZW50cyBjbG9ja0hvdXJzKCdsaScpXG4gKiBAcHJvcCB7SFRNTENvbGxlY3Rpb259IGNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaSAtIE1pbnV0ZSBsaXN0IGVsZW1lbnRzIGNsb2NrTWludXRlcygnbGknKVxuICogQHByb3Age0hUTUxDb2xsZWN0aW9ufSBjYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGkgLSBNaWxpdGFyeSBIb3VyIGxpIGVsZW1lbnRzIGNsb2NrTWlsaXRhcnlIb3VycygnbGknKVxuICovXG5jbGFzcyBUaW1lUGlja2VyIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lRm9ybWF0OiAnc3RhbmRhcmQnLFxuICAgIGF1dG9OZXh0OiBmYWxzZSxcbiAgfVxuICBjYWNoZWRFbHMgPSB7fVxuXG4gIC8qKlxuICAgICAqIEluaXRpYWxpemUgbmV3IFRpbWVQaWNrZXIgaW5zdGFuY2VcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge1RpbWVQaWNrZXJ9IE5ldyBUaW1lUGlja2VyIGluc3RhbmNlXG4gICAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cygpXG5cbiAgICB0aGlzLnNldHVwVGVtcGxhdGUoKVxuXG4gICAgdGhpcy5jYWNoZWRFbHMuYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgICA7W3RoaXMuY2FjaGVkRWxzLm92ZXJsYXldID0gdGhpcy5jYWNoZWRFbHMuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ210cC1vdmVybGF5JyxcbiAgICApXG4gICAgO1t0aGlzLmNhY2hlZEVscy53cmFwcGVyXSA9IHRoaXMuY2FjaGVkRWxzLm92ZXJsYXkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtd3JhcHBlcicsXG4gICAgKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMucGlja2VyXSA9IHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtcGlja2VyJyxcbiAgICApXG4gICAgO1t0aGlzLmNhY2hlZEVscy5tZXJpZGllbV0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLW1lcmlkaWVtJyxcbiAgICApXG4gICAgdGhpcy5jYWNoZWRFbHMubWVyaWRpZW1TcGFucyA9IHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgJ3NwYW4nLFxuICAgIClcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUhvdXJzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1kaXNwbGF5X19ob3VycycpXG4gICAgO1tcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNaW51dGVzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1kaXNwbGF5X19taW51dGVzJylcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheU1lcmlkaWVtLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1kaXNwbGF5X19tZXJpZGllbScpXG4gICAgO1tcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkNhbmNlbCxcbiAgICBdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1hY3Rpb25zX19jYW5jZWwnKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMuYnV0dG9uQmFja10gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtYWN0aW9uc19fYmFjaycsXG4gICAgKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMuYnV0dG9uTmV4dF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtYWN0aW9uc19fbmV4dCcsXG4gICAgKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25GaW5pc2gsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtYWN0aW9uc19fZmluaXNoJylcbiAgICA7W3RoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLWNsb2NrX19ob3VycycsXG4gICAgKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXMsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtY2xvY2tfX21pbnV0ZXMnKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ210cC1jbG9ja19faG91cnMtbWlsaXRhcnknLFxuICAgIClcbiAgICA7W3RoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtY2xvY2tfX2hhbmQnLFxuICAgIClcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgJ2xpJyxcbiAgICApXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG4gICAgICAnbGknLFxuICAgIClcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaSA9IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vycy5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdsaScsXG4gICAgKVxuXG4gICAgdGhpcy5zZXRFdmVudHMoKVxuICB9XG5cbiAgLyoqXG4gICAgICogQmluZCBldmVudCB0byB0aGUgaW5wdXQgZWxlbWVudCB0byBvcGVuIHdoZW4gYGZvY3VzYCBldmVudCBpcyBldmVudHMudHJpZ2dlcmVkXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gaW5wdXRFbCBTZWxlY3RvciBlbGVtZW50IHRvIGJlIHF1ZXJpZWQgb3IgZXhpc3RpbmcgSFRNTEVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPcHRpb25zIHRvIG1lcmdlZCB3aXRoIGRlZmF1bHRzIGFuZCBzZXQgdG8gaW5wdXQgZWxlbWVudCBvYmplY3RcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBiaW5kSW5wdXQoaW5wdXRFbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9XG4gICAgICBpbnB1dEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpbnB1dEVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dEVsKVxuXG4gICAgZWxlbWVudC5tdHBPcHRpb25zID0gYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBldmVudCA9PiB0aGlzLnNob3dFdmVudChldmVudCkpXG4gIH1cblxuICAvKipcbiAgICAgKiBPcGVuIHBpY2tlciB3aXRoIHRoZSBpbnB1dCBwcm92aWRlZCBpbiBjb250ZXh0IHdpdGhvdXQgYmluZGluZyBldmVudHNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBpbnB1dEVsIFNlbGVjdG9yIGVsZW1lbnQgdG8gYmUgcXVlcmllZCBvciBleGlzdGluZyBIVE1MRWxlbWVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgdG8gbWVyZ2VkIHdpdGggZGVmYXVsdHMgYW5kIHNldCB0byBpbnB1dCBlbGVtZW50IG9iamVjdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIG9wZW5PbklucHV0KGlucHV0RWwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuaW5wdXRFbCA9XG4gICAgICBpbnB1dEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpbnB1dEVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dEVsKVxuICAgIHRoaXMuaW5wdXRFbC5tdHBPcHRpb25zID0gYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICAvKipcbiAgICAgKiBTZXR1cCB0aGUgdGVtcGxhdGUgaW4gRE9NIGlmIG5vdCBhbHJlYWR5XG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBzZXR1cFRlbXBsYXRlKCkge1xuICAgIGlmICghdGhpcy5pc1RlbXBsYXRlSW5ET00oKSkge1xuICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFNldCB0aGUgZXZlbnRzIG9uIHBpY2tlciBlbGVtZW50c1xuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgc2V0RXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5oYXNTZXRFdmVudHMoKSkge1xuICAgICAgLy8gY2xvc2VcbiAgICAgIHRoaXMuY2FjaGVkRWxzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PlxuICAgICAgICB0aGlzLmhpZGVFdmVudChldmVudCksXG4gICAgICApXG5cbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+XG4gICAgICAgIHRoaXMuaGlkZUV2ZW50KGV2ZW50KSxcbiAgICAgIClcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB0aGlzLnNob3dNaW51dGVzKCksXG4gICAgICApXG4gICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgdGhpcy5zaG93SG91cnMoKSxcbiAgICAgIClcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkZpbmlzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZmluaXNoKCkpXG5cbiAgICAgIC8vIG1lcmlkaWVtIHNlbGVjdCBldmVudHNcbiAgICAgIDtbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMubWVyaWRpZW1TcGFucywgc3BhbiA9PiB7XG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm1lcmlkaWVtU2VsZWN0RXZlbnQoZXZlbnQpKVxuICAgICAgfSlcblxuICAgICAgLy8gdGltZSBzZWxlY3QgZXZlbnRzXG4gICAgICA7W10uZm9yRWFjaC5jYWxsKHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNMaSwgaG91ciA9PiB7XG4gICAgICAgIGhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5ob3VyU2VsZWN0RXZlbnQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnMsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGksXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIDtbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGksIGhvdXIgPT4ge1xuICAgICAgICBob3VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuaG91clNlbGVjdEV2ZW50KFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaSxcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgO1tdLmZvckVhY2guY2FsbCh0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaSwgbWludXRlID0+IHtcbiAgICAgICAgbWludXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMubWludXRlU2VsZWN0RXZlbnQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcyxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbXRwLWV2ZW50cy1zZXQnKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFNob3cgdGhlIHBpY2tlciBpbiB0aGUgRE9NXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBzaG93KCkge1xuICAgIGNvbnN0IGlzTWlsaXRhcnlGb3JtYXQgPSB0aGlzLmlzTWlsaXRhcnlGb3JtYXQoKVxuXG4gICAgLy8gYmx1ciBpbnB1dCB0byBwcmV2ZW50IG9uc2NyZWVuIGtleWJvYXJkIGZyb20gZGlzcGxheWluZyAobW9iaWxlIGhhY2spXG4gICAgdGhpcy5pbnB1dEVsLmJsdXIoKVxuICAgIHRoaXMudG9nZ2xlSG91cnNWaXNpYmxlKHRydWUsIGlzTWlsaXRhcnlGb3JtYXQpXG4gICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSgpXG4gICAgdGhpcy5zZXREaXNwbGF5VGltZSh7XG4gICAgICBob3VyczogaXNNaWxpdGFyeUZvcm1hdCA/ICcwMCcgOiAnMTInLFxuICAgICAgbWludXRlczogJzAnLFxuICAgIH0pXG5cbiAgICB0aGlzLmNhY2hlZEVscy5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5TWVyaWRpZW0uc3R5bGUuZGlzcGxheSA9IGlzTWlsaXRhcnlGb3JtYXRcbiAgICAgID8gJ25vbmUnXG4gICAgICA6ICdpbmxpbmUnXG4gICAgdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uc3R5bGUuZGlzcGxheSA9IGlzTWlsaXRhcnlGb3JtYXQgPyAnbm9uZScgOiAnYmxvY2snXG4gICAgdGhpcy5jYWNoZWRFbHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZS5oZWlnaHQgPSBpc01pbGl0YXJ5Rm9ybWF0ID8gJzkwcHgnIDogJzEwNXB4J1xuXG4gICAgdGhpcy5ldmVudHMudHJpZ2dlcignc2hvdycpXG4gIH1cblxuICAvKipcbiAgICAgKiBFdmVudCBoYW5kbGUgZm9yIGlucHV0IGZvY3VzXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBzaG93RXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLmlucHV0RWwgPSBldmVudC50YXJnZXRcbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgLyoqXG4gICAgICogSGlkZSB0aGUgcGlja2VyIGluIHRoZSBET01cbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5jYWNoZWRFbHMub3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gICAgdGhpcy5jYWNoZWRFbHMuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICcnXG5cbiAgICB0aGlzLmlucHV0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2JsdXInKSlcbiAgICB0aGlzLnJlc2V0U3RhdGUoKVxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2hpZGUnKVxuICB9XG5cbiAgLyoqXG4gICAgICogSGlkZSB0aGUgcGlja2VyIGVsZW1lbnQgb24gdGhlIHBhZ2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBldmVudCBsaXN0ZW5lciBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIGhpZGVFdmVudChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAvLyBvbmx5IGFsbG93IGV2ZW50IGJhc2VkIGNsb3NlIGlmIGV2ZW50LnRhcmdldCBjb250YWlucyBvbmUgb2YgdGhlc2UgY2xhc3Nlc1xuICAgIC8vIGhhY2sgdG8gcHJldmVudCBvdmVybGF5IGNsb3NlIGV2ZW50IGZyb20gZXZlbnRzLnRyaWdnZXJpbmcgb24gYWxsIGVsZW1lbnRzIGJlY2F1c2VcbiAgICAvLyB0aGV5IGFyZSBjaGlsZHJlbiBvZiBvdmVybGF5XG4gICAgY29uc3QgYWxsb3dlZENsYXNzZXMgPSBbJ210cC1vdmVybGF5JywgJ210cC1hY3Rpb25zX19jYW5jZWwnXVxuICAgIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBpc0FsbG93ZWQgPSBhbGxvd2VkQ2xhc3Nlcy5zb21lKGFsbG93ZWRDbGFzcyA9PlxuICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKGFsbG93ZWRDbGFzcyksXG4gICAgKVxuXG4gICAgaWYgKGlzQWxsb3dlZCkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICAgKiBSZXNldCBwaWNrZXIgc3RhdGUgdG8gZGVmYXVsdHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIHJlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5jdXJyZW50U3RlcCA9IDBcbiAgICB0aGlzLnRvZ2dsZUhvdXJzVmlzaWJsZSh0cnVlLCB0aGlzLmlzTWlsaXRhcnlGb3JtYXQoKSlcbiAgICB0aGlzLnRvZ2dsZU1pbnV0ZXNWaXNpYmxlKClcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGlbMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzTGlbMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGlbMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gICAgdGhpcy5jYWNoZWRFbHMubWVyaWRpZW1TcGFuc1swXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgfVxuXG4gIC8qKlxuICAgICAqIFNldCB0aGUgZGlzcGxheWVkIHRpbWUsIHdoaWNoIHdpbGwgYmUgdXNlZCB0byBmaWxsIGlucHV0IHZhbHVlIG9uIGNvbXBsZXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaG91cnM6IEhvdXIgZGlzcGxheSB0aW1lLFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gbWludXRlczogTWludXRlIGRpc3BsYXkgdGltZVxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIHNldERpc3BsYXlUaW1lKHsgaG91cnMsIG1pbnV0ZXMgfSkge1xuICAgIGlmIChob3Vycykge1xuICAgICAgLy8gLnRyaW0oKSBpcyBub3QgYWxsb3dlZCBpZiBob3VycyBpcyBub3QgcmVjb2duaXplZCBhcyBhIHN0cmluZyxcbiAgICAgIGlmICh0eXBlb2YgaG91cnMgPT09ICdzdHJpbmcnIHx8IGhvdXJzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlIb3Vycy5pbm5lckhUTUwgPSBob3Vycy50cmltKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlIb3Vycy5pbm5lckhUTUwgPSBob3Vyc1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobWludXRlcykge1xuICAgICAgY29uc3QgbWluID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXNcblxuICAgICAgLy8gLnRyaW0oKSBpcyBub3QgYWxsb3dlZCBpZiBtaW4gaXMgbm90IHJlY29nbml6ZWQgYXMgYSBzdHJpbmcsXG4gICAgICAvLyAuLi4gc29tZXRpbWVzIChpbiBTYWZhcmkgYW5kIENocm9tZSkgaXQgaXMgYW4gdW50cmltbWFibGUgbnVtYmVyXG4gICAgICBpZiAodHlwZW9mIG1pbiA9PT0gJ3N0cmluZycgfHwgbWluIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNaW51dGVzLmlubmVySFRNTCA9IG1pbi50cmltKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNaW51dGVzLmlubmVySFRNTCA9IG1pblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFJvdGF0ZSB0aGUgaGFuZCBlbGVtZW50IHRvIHNlbGVjdGVkIHRpbWVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXggSW5kZXggb2YgYWN0aXZlIGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5jcmVtZW50IERlZ3JlZSBpbmNyZW1lbnQgZWxlbWVudHMgYXJlIG9uXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgcm90YXRlSGFuZChub2RlSW5kZXggPSA5LCBpbmNyZW1lbnQgPSAzMCkge1xuICAgIC8vIDAgaW5kZXggaXMgMTgwIGRlZ3Jlc3MgYmVoaW5kIDAgZGVnXG4gICAgY29uc3Qgcm90YXRlRGVnID0gbm9kZUluZGV4ICogaW5jcmVtZW50IC0gMTgwXG4gICAgY29uc3Qgc3R5bGVWYWwgPSBgcm90YXRlKCR7cm90YXRlRGVnfWRlZylgXG5cbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVWYWxcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZVZhbFxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gc3R5bGVWYWxcbiAgfVxuXG4gIHNob3dIb3VycygpIHtcbiAgICBjb25zdCBpc01pbGl0YXJ5Rm9ybWF0ID0gdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KClcbiAgICBjb25zdCBob3VyRWxzID0gaXNNaWxpdGFyeUZvcm1hdFxuICAgICAgPyB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaVxuICAgICAgOiB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGlcblxuICAgIHRoaXMudG9nZ2xlSG91cnNWaXNpYmxlKHRydWUsIGlzTWlsaXRhcnlGb3JtYXQpXG4gICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSgpXG4gICAgdGhpcy5yb3RhdGVIYW5kKHRoaXMuZ2V0QWN0aXZlSW5kZXgoaG91ckVscykpXG4gIH1cblxuICBzaG93TWludXRlcygpIHtcbiAgICBjb25zdCBtaW51dGVFbHMgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaVxuXG4gICAgdGhpcy50b2dnbGVIb3Vyc1Zpc2libGUoKVxuICAgIHRoaXMudG9nZ2xlTWludXRlc1Zpc2libGUodHJ1ZSlcbiAgICB0aGlzLnJvdGF0ZUhhbmQodGhpcy5nZXRBY3RpdmVJbmRleChtaW51dGVFbHMpLCA2KVxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZS5oZWlnaHQgPSAnMTE1cHgnXG4gIH1cblxuICBmaW5pc2goKSB7XG4gICAgdGhpcy50aW1lU2VsZWN0ZWQoKVxuICAgIHRoaXMuaGlkZSgpXG4gIH1cblxuICAvKipcbiAgICAgKiBUb2dnbGUgaG91ciAoYm90aCBtaWxpdGFyeSBhbmQgc3RhbmRhcmQpIGNsb2NrIHZpc2libGl0eSBpbiBET01cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIElzIGNsb2NrIGZhY2UgdG9nZ2xlZCB2aXNpYmxlIG9yIGhpZGRlblxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNNaWxpdGFyeUZvcm1hdCBJcyB1c2luZyBtaWxpdGFyeSBob3VyIGZvcm1hdFxuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIHRvZ2dsZUhvdXJzVmlzaWJsZShpc1Zpc2libGUgPSBmYWxzZSwgaXNNaWxpdGFyeUZvcm1hdCA9IGZhbHNlKSB7XG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vycy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGlzVmlzaWJsZSAmJiAhaXNNaWxpdGFyeUZvcm1hdCA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMuc3R5bGUuZGlzcGxheSA9XG4gICAgICBpc1Zpc2libGUgJiYgaXNNaWxpdGFyeUZvcm1hdCA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5idXR0b25OZXh0LnN0eWxlLmRpc3BsYXkgPSAhaXNWaXNpYmxlXG4gICAgICA/ICdpbmxpbmUtYmxvY2snXG4gICAgICA6ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAgICogVG9nZ2xlIG1pbnV0ZSBjbG9jayB2aXNpYmxpdHkgaW4gRE9NXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmlzaWJsZSBJcyBjbG9jayBmYWNlIHRvZ2dsZWQgdmlzaWJsZSBvciBoaWRkZW5cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICB0b2dnbGVNaW51dGVzVmlzaWJsZShpc1Zpc2libGUgPSBmYWxzZSkge1xuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcy5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkJhY2suc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZVxuICAgICAgPyAnaW5saW5lLWJsb2NrJ1xuICAgICAgOiAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5idXR0b25OZXh0LnN0eWxlLmRpc3BsYXkgPSAhaXNWaXNpYmxlXG4gICAgICA/ICdpbmxpbmUtYmxvY2snXG4gICAgICA6ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkZpbmlzaC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlXG4gICAgICA/ICdpbmxpbmUtYmxvY2snXG4gICAgICA6ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAgICogR2V0IHRoZSBhY3RpdmUgdGltZSBlbGVtZW50IGluZGV4XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSB0aW1lRWxzIENvbGxlY3Rpb24gb2YgdGltZSBlbGVtZW50cyB0byBmaW5kIGFjdGl2ZSBpblxuICAgICAqIEByZXR1cm4ge251bWJlcn0gQWN0aXZlIGVsZW1lbnQgaW5kZXhcbiAgICAgKi9cbiAgZ2V0QWN0aXZlSW5kZXgodGltZUVscykge1xuICAgIGxldCBhY3RpdmVJbmRleCA9IDBcbiAgICA7W10uc29tZS5jYWxsKHRpbWVFbHMsICh0aW1lRWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodGltZUVsLmNsYXNzTGlzdC5jb250YWlucygnbXRwLWNsb2NrLS1hY3RpdmUnKSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIHJldHVybiBhY3RpdmVJbmRleFxuICB9XG5cbiAgLyoqXG4gICAgICogU2V0IHNlbGVjdGVkIHRpbWUgdG8gaW5wdXQgZWxlbWVudFxuICAgICAqXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgdGltZVNlbGVjdGVkKCkge1xuICAgIGNvbnN0IGhvdXJzID0gdGhpcy5jYWNoZWRFbHMuZGlzcGxheUhvdXJzLmlubmVySFRNTFxuICAgIGNvbnN0IG1pbnV0ZXMgPSB0aGlzLmNhY2hlZEVscy5kaXNwbGF5TWludXRlcy5pbm5lckhUTUxcbiAgICBjb25zdCBtZXJpZGllbSA9IHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpXG4gICAgICA/ICcnXG4gICAgICA6IHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNZXJpZGllbS5pbm5lckhUTUxcbiAgICBjb25zdCB0aW1lVmFsdWUgPSBgJHtob3Vyc306JHttaW51dGVzfSAke21lcmlkaWVtfWBcblxuICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IHRpbWVWYWx1ZS50cmltKClcbiAgICB0aGlzLmlucHV0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpXG4gIH1cblxuICAvKipcbiAgICAgKiBTZXQgYWN0aXZlIGNsb2NrIGZhY2UgZWxlbWVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXJFbCBOZXcgYWN0aXZlIGVsZW1lbnRzIC5wYXJlbnROb2RlXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBhY3RpdmVFbCBFbGVtZW50IHRvIHNldCBhY3RpdmVcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBzZXRBY3RpdmVFbChjb250YWluZXJFbCwgYWN0aXZlRWwpIHtcbiAgICBjb25zdCBhY3RpdmVDbGFzc05hbWUgPSAnbXRwLWNsb2NrLS1hY3RpdmUnXG4gICAgY29uc3QgY3VycmVudEFjdGl2ZSA9IGNvbnRhaW5lckVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYWN0aXZlQ2xhc3NOYW1lKVswXVxuXG4gICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSlcbiAgICBhY3RpdmVFbC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgICAqIE1lcmlkaWVtIHNlbGVjdCBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBtZXJpZGllbVNlbGVjdEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gJ210cC1jbG9jay0tYWN0aXZlJ1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSxcbiAgICApWzBdXG4gICAgY29uc3QgdmFsdWUgPSBlbGVtZW50LmlubmVySFRNTFxuXG4gICAgaWYgKCFjdXJyZW50QWN0aXZlLmlzRXF1YWxOb2RlKGVsZW1lbnQpKSB7XG4gICAgICBjdXJyZW50QWN0aXZlLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlQ2xhc3NOYW1lKVxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSlcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNZXJpZGllbS5pbm5lckhUTUwgPSB2YWx1ZVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIEhvdXIgc2VsZWN0IGV2ZW50IGhhbmRsZXJcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lclxuICAgICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lckVsIEVsZW1lbnQgY29udGFpbmluZyB0aW1lIGxpc3QgZWxlbWVudHNcbiAgICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBsaXN0RWxzIENvbGxlY3Rpb24gb2YgbGlzdCBlbGVtZW50c1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIGhvdXJTZWxlY3RFdmVudChldmVudCwgY29udGFpbmVyRWwsIGxpc3RFbHMpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgcGFyZW50RWwgPSBuZXdBY3RpdmUucGFyZW50RWxlbWVudFxuICAgIGNvbnN0IGlzSW5uZXIgPSBwYXJlbnRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ210cC1jbG9ja19faG91cnMtLWlubmVyJylcblxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZS5oZWlnaHQgPSBpc0lubmVyID8gJzkwcHgnIDogJzEwNXB4J1xuICAgIHRoaXMuc2V0QWN0aXZlRWwoY29udGFpbmVyRWwsIG5ld0FjdGl2ZSlcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleChsaXN0RWxzKVxuXG4gICAgdGhpcy5zZXREaXNwbGF5VGltZSh7IGhvdXJzOiBuZXdBY3RpdmUuaW5uZXJIVE1MIH0pXG4gICAgdGhpcy5yb3RhdGVIYW5kKGFjdGl2ZUluZGV4KVxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2hvdXJTZWxlY3RlZCcpXG4gIH1cblxuICAvKipcbiAgICAgKiBIb3VyIHNlbGVjdCBldmVudCBoYW5kbGVyXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXJcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJFbCBFbGVtZW50IGNvbnRhaW5pbmcgdGltZSBsaXN0IGVsZW1lbnRzXG4gICAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gbGlzdEVscyBDb2xsZWN0aW9uIG9mIGxpc3QgZWxlbWVudHNcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBtaW51dGVTZWxlY3RFdmVudChldmVudCwgY29udGFpbmVyRWwsIGxpc3RFbHMpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlID0gZXZlbnQudGFyZ2V0XG5cbiAgICB0aGlzLnNldEFjdGl2ZUVsKGNvbnRhaW5lckVsLCBuZXdBY3RpdmUpXG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgobGlzdEVscylcblxuICAgIHRoaXMuc2V0RGlzcGxheVRpbWUoeyBtaW51dGVzOiBhY3RpdmVJbmRleCB9KVxuICAgIHRoaXMucm90YXRlSGFuZChhY3RpdmVJbmRleCwgNilcbiAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdtaW51dGVTZWxlY3RlZCcpXG4gIH1cblxuICAvKipcbiAgICAgKiBDaGVjayBpZiBwaWNrZXIgc2V0IHRvIG1pbGl0YXJ5IHRpbWUgbW9kZVxuICAgICAqXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gSXMgaW4gbWlsaXRhcnkgdGltZSBtb2RlXG4gICAgICovXG4gIGlzTWlsaXRhcnlGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbC5tdHBPcHRpb25zLnRpbWVGb3JtYXQgPT09ICdtaWxpdGFyeSdcbiAgfVxuXG4gIC8qKlxuICAgICAqIENoZWNrIGlmIHBpY2tlciBvYmplY3QgaGFzIGFscmVhZHkgc2V0IGV2ZW50cyBvbiBwaWNrZXIgZWxlbWVudHNcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IEhhcyBldmVudHMgYmVlbiBzZXQgb24gcGlja2VyIGVsZW1lbnRzXG4gICAgICovXG4gIGhhc1NldEV2ZW50cygpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5jbGFzc0xpc3QuY29udGFpbnMoJ210cC1ldmVudHMtc2V0JylcbiAgfVxuXG4gIC8qKlxuICAgICAqIENoZWNrIGlmIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gYXBwZW5kZWQgdG8gRE9NXG4gICAgICpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBJcyB0ZW1wbGF0ZSBpbiBET01cbiAgICAgKi9cbiAgaXNUZW1wbGF0ZUluRE9NKCkge1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1vdmVybGF5JylbMF0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVBpY2tlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RpbWVwaWNrZXIuanMiLCJjb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJtdHAtb3ZlcmxheVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgPGRpdiBjbGFzcz1cIm10cC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtZGlzcGxheVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtZGlzcGxheV9faG91cnNcIj4xMjwvc3Bhbj46XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10cC1kaXNwbGF5X19taW51dGVzXCI+MDA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10cC1kaXNwbGF5X19tZXJpZGllbVwiPmFtPC9zcGFuPlxuICAgICAgICA8L2Rpdj48IS0tIEVORCAubXRwLWRpc3BsYXkgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtcGlja2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLW1lcmlkaWVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtY2xvY2stLWFjdGl2ZVwiPmFtPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnBtPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+PCEtLSBFTkQgLm10cC1tZXJpZGllbSAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtY2xvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19jZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19oYW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19fb3V0ZXIgbXRwLWNsb2NrX19ob3Vyc1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10cC1jbG9jay0tYWN0aXZlXCI+MTI8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT41PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjY8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT44PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjk8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTE8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19fb3V0ZXIgbXRwLWNsb2NrX19taW51dGVzXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXRwLWNsb2NrLS1hY3RpdmVcIj4wPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MjA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MjU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MzA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MzU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NDA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NDU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NTU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19faG91cnMtbWlsaXRhcnlcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19ob3Vycy0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10cC1jbG9jay0tYWN0aXZlXCI+MDA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xNDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjE2PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xNzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTg8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjE5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MjE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjIyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yMzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19ob3Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT40PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT41PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT42PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT43PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT44PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT45PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTE8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+PCEtLSBFTkQgLm10cC1jbG9jayAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtdHAtYWN0aW9uc19fYnV0dG9uIG10cC1hY3Rpb25zX19iYWNrXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtdHAtYWN0aW9uc19fYnV0dG9uIG10cC1hY3Rpb25zX19uZXh0XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fZmluaXNoXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj48IS0tIEVORCAubXRwLWFjdGlvbnMgLS0+XG4gICAgICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtcGlja2VyIC0tPlxuICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtd3JhcHBlciAtLT5cbjwvZGl2PjwhLS0gRU5EIC5tdHAtb3ZlcmxheSAtLT5cbmBcblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKipcbiAqIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gbWVyZ2UgcHJvcGVydGllcyBvbnRvXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyAgU291cmNlIG9iamVjdCB0byBtZXJnZSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm4ge29iamVjdH0gVGFyZ2V0IG9iamVjdCB3aXRoIG1lcmdlZCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0JylcbiAgfVxuXG4gIGNvbnN0IHRvID0gT2JqZWN0KHRhcmdldClcblxuICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBzb3VyY2VzLmxlbmd0aDsgaW5jICs9IDEpIHtcbiAgICBsZXQgbmV4dFNvdXJjZSA9IHNvdXJjZXNbaW5jXVxuXG4gICAgaWYgKG5leHRTb3VyY2UgPT09ICd1bmRlZmluZWQnIHx8IG5leHRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgbmV4dFNvdXJjZSA9IE9iamVjdChuZXh0U291cmNlKVxuXG4gICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMobmV4dFNvdXJjZSlcblxuICAgIGZvciAoXG4gICAgICBsZXQgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDtcbiAgICAgIG5leHRJbmRleCA8IGxlbjtcbiAgICAgIG5leHRJbmRleCArPSAxXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF1cbiAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpXG5cbiAgICAgIGlmIChkZXNjICE9PSAndW5kZWZpbmVkJyAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2Fzc2lnbi5qcyIsIi8qKlxuICogQGNsYXNzIEV2ZW50c1xuICpcbiAqIEBwcm9wIHtvYmplY3QuPHN0cmluZyxmdW5jdGlvbj59IGV2ZW50cyAtIEhhc2ggdGFibGUgb2YgZXZlbnRzIGFuZCB0aGVpciBhc3NpZ25lZCBoYW5kbGVyIGNhbGxiYWNrc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudHMge1xuICBldmVudHMgPSB7fVxuXG4gIC8qKlxuICAgICAqIFNldCBoYW5kbGVyIG9uIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lIHRvIHNldCBoYW5kbGVyIHRvXG4gICAgICogQHBhcmFtIHtmdW5jfSBoYW5kbGVyIC0gSGFuZGxlciBmdW5jdGlvbiBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goaGFuZGxlcilcbiAgfVxuXG4gIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lIHRvIHJlbW92ZSBoYW5kbGVyIGZyb21cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBvZmYoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFRyaWdnZXIgZXZlbnQgd2l0aCBwYXJhbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEV2ZW50IHRvIHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gUGFyYW1ldGVycyB0byBwYXNzIHRvIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICB0cmlnZ2VyKGV2ZW50LCBwYXJhbXMpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdICYmIHRoaXMuZXZlbnRzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihwYXJhbXMpKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2V2ZW50cy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["TimePicker"] = factory();
	else
		root["TimePicker"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(1);

var _template2 = _interopRequireDefault(_template);

var _assign = __webpack_require__(2);

var _assign2 = _interopRequireDefault(_assign);

var _events = __webpack_require__(3);

var _events2 = _interopRequireDefault(_events);

__webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class TimePicker
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
    // ;[
    //   this.cachedEls.displayMeridiem,
    // ] = this.cachedEls.wrapper.getElementsByClassName('mtp-display__meridiem')

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


    this.cachedEls.displayGroups = {};
    var _cachedEls$wrapper$ge9 = this.cachedEls.wrapper.getElementsByClassName('hour-group');

    var _cachedEls$wrapper$ge10 = _slicedToArray(_cachedEls$wrapper$ge9, 1);

    this.cachedEls.displayGroups.hours = _cachedEls$wrapper$ge10[0];

    var _cachedEls$wrapper$ge11 = this.cachedEls.wrapper.getElementsByClassName('minute-group');

    var _cachedEls$wrapper$ge12 = _slicedToArray(_cachedEls$wrapper$ge11, 1);

    this.cachedEls.displayGroups.minutes = _cachedEls$wrapper$ge12[0];

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
  }, {
    key: 'highlightHourDisplayGroup',
    value: function highlightHourDisplayGroup() {
      this.cachedEls.displayGroups.hours.classList.add('active-group');
      this.cachedEls.displayGroups.minutes.classList.remove('active-group');
    }
  }, {
    key: 'highlightMinuteDisplayGroup',
    value: function highlightMinuteDisplayGroup() {
      this.cachedEls.displayGroups.hours.classList.remove('active-group');
      this.cachedEls.displayGroups.minutes.classList.add('active-group');
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

        this.events.on('hoursShown', function () {
          _this2.highlightHourDisplayGroup();
        });

        this.events.on('minutesShown', function () {
          _this2.highlightMinuteDisplayGroup();
        });
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

      if (this.inputEl.value.length > 0) {
        this.setTime(this.inputEl.value);
      } else {
        this.setDisplayTime({
          hours: isMilitaryFormat ? '00' : '12',
          minutes: '0'
        });
      }

      this.cachedEls.body.style.overflow = 'hidden';
      this.cachedEls.meridiem.style.visibility = isMilitaryFormat ? 'none' : 'visible';
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
      this.currentStep = 'hours';
      this.toggleHoursVisible(true, this.isMilitaryFormat());
      this.toggleMinutesVisible();
      this.cachedEls.clockHoursLi[0].dispatchEvent(new Event('click'));
      this.cachedEls.clockMinutesLi[0].dispatchEvent(new Event('click'));
      this.cachedEls.clockMilitaryHoursLi[0].dispatchEvent(new Event('click'));
      this.cachedEls.meridiemSpans[0].dispatchEvent(new Event('click'));
      this.highlightHourDisplayGroup();
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

      if (typeof hours !== 'undefined' && Number.isNaN(hours) === false) {
        // .trim() is not allowed if hours is not recognized as a string,
        if (typeof hours === 'string' || hours instanceof String) {
          this.cachedEls.displayHours.innerHTML = hours.trim();
        } else {
          this.cachedEls.displayHours.innerHTML = hours;
        }
      }

      if (typeof minutes !== 'undefined' && Number.isNaN(minutes) === false) {
        var min = minutes < 10 ? '0' + minutes : minutes;

        // .trim() is not allowed if min is not recognized as a string,
        // ... sometimes (in Safari and Chrome) it is an untrimmable number
        if (typeof min === 'string' || min instanceof String) {
          this.cachedEls.displayMinutes.innerHTML = min.trim();
        } else {
          this.cachedEls.displayMinutes.innerHTML = min;
        }
      }

      // const numericHour = parseInt(hours)
      // const numericMinute = parseInt(minutes)
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

      this.events.trigger('hoursShown');
    }
  }, {
    key: 'showMinutes',
    value: function showMinutes() {
      var minuteEls = this.cachedEls.clockMinutesLi;

      this.toggleHoursVisible();
      this.toggleMinutesVisible(true);
      this.rotateHand(this.getActiveIndex(minuteEls), 6);
      this.cachedEls.clockHand.style.height = '115px';

      this.events.trigger('minutesShown');
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

      if (isVisible) this.currentStep = 'hours';

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

      if (isVisible) this.currentStep = 'minutes';

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
      var meridiem = this.isMilitaryFormat() ? '' : Array.from(this.cachedEls.meridiemSpans).find(function (i) {
        return i.classList.contains('mtp-meridiem--active');
      }).innerText;

      var timeValue = hours + ':' + minutes + ' ' + meridiem;

      this.inputEl.value = timeValue.trim();
      this.inputEl.dispatchEvent(new Event('input'));
      this.events.trigger('timeSelected', {
        hours: hours,
        minutes: minutes,
        meridiem: meridiem,
        value: timeValue
      });
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
      var activeClassName = 'mtp-meridiem--active';
      var element = event.target;
      var currentActive = this.cachedEls.meridiem.getElementsByClassName(activeClassName)[0];

      if (!currentActive.isEqualNode(element)) {
        currentActive.classList.remove(activeClassName);
        element.classList.add(activeClassName);
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
  }, {
    key: 'setTime',
    value: function setTime(timeString) {
      // this.inputEl.mtpOptions.initialValue
      var overallComponents = timeString.split(' ');
      var timeParts = overallComponents[0].split(':').map(function (i) {
        return parseInt(i, 10);
      });

      // First, set the display time (at the top) correctly.
      this.setDisplayTime({ hours: timeParts[0], minutes: timeParts[1] });

      var hoursIndex = timeParts[0];

      if (this.isMilitaryFormat()) {
        hoursIndex = timeParts[0] > 12 ? timeParts[0] - 12 : timeParts[0] + 12;

        if (hoursIndex === 24) hoursIndex = 12;
      } else {
        var activeMeridianClass = 'mtp-meridiem--active';

        var meridiem = overallComponents[1];

        var currentMeridiem = this.cachedEls.meridiem.getElementsByClassName(activeMeridianClass)[0];

        var correctMeridiem = Array.from(this.cachedEls.meridiemSpans).find(function (i) {
          return i.innerText === meridiem;
        });

        currentMeridiem.classList.remove(activeMeridianClass);
        correctMeridiem.classList.add(activeMeridianClass);
      }

      if (hoursIndex === 12) hoursIndex = 0;

      var hoursLI = this.isMilitaryFormat() ? this.cachedEls.clockMilitaryHoursLi : this.cachedEls.clockHoursLi;
      var minutesLI = this.cachedEls.clockMinutesLi;

      // Clear existing active hours, then set the correct hours value.
      Array.from(hoursLI).filter(function (i) {
        return i.classList.contains('mtp-clock--active');
      }).forEach(function (i) {
        return i.classList.remove('mtp-clock--active');
      });
      hoursLI[hoursIndex].classList.add('mtp-clock--active');

      // Clear existing active minutes, then set the correct minute value.
      Array.from(minutesLI).filter(function (i) {
        return i.classList.contains('mtp-clock--active');
      }).forEach(function (i) {
        return i.classList.remove('mtp-clock--active');
      });
      minutesLI[timeParts[1]].classList.add('mtp-clock--active');

      if (this.currentStep === 'hours') {
        this.rotateHand(this.getActiveIndex(hoursLI));
      } else {
        this.rotateHand(this.getActiveIndex(minutesLI));
      }
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var template = "\n<div class=\"mtp-overlay\" style=\"display:none\">\n    <div class=\"mtp-wrapper\">\n        <div class=\"mtp-display\">\n            <span class=\"mtp-time-group\">\n                <span class=\"hour-group active-group\">\n                    <span class=\"mtp-display__hours\">12</span>\n                    <span class=\"mtp-display__spacer\">&hairsp;</span>\n                </span>\n                <span class=\"minute-group\">\n                    <span class=\"mtp-display__separator\">:</span>\n                    <span class=\"mtp-display__spacer\">&hairsp;</span>\n                    <span class=\"mtp-display__minutes\">00</span>\n                </span>\n            </span>\n            <div class=\"mtp-meridiem\">\n                <span class=\"mtp-meridiem--active\">a.m.</span>\n                <span>p.m.</span>\n            </div><!-- END .mtp-meridiem -->\n        </div><!-- END .mtp-display -->\n        <div class=\"mtp-picker\">\n            <div class=\"mtp-clock\">\n                <div class=\"mtp-clock__center\"></div>\n                <div class=\"mtp-clock__hand\"></div>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__hours\" style=\"display:none\">\n                    <li class=\"mtp-clock--active\">12</li>\n                    <li>1</li>\n                    <li>2</li>\n                    <li>3</li>\n                    <li>4</li>\n                    <li>5</li>\n                    <li>6</li>\n                    <li>7</li>\n                    <li>8</li>\n                    <li>9</li>\n                    <li>10</li>\n                    <li>11</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__outer mtp-clock__minutes\" style=\"display:none\">\n                    <li class=\"mtp-clock--active\">0</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>5</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>10</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>15</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>20</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>25</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>30</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>35</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>40</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>45</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>50</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>55</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                    <li>&middot;</li>\n                </ul>\n                <ul class=\"mtp-clock__time mtp-clock__hours-military\" style=\"display:none\">\n                    <div class=\"mtp-clock__hours--inner\">\n                        <li class=\"mtp-clock--active\">00</li>\n                        <li>13</li>\n                        <li>14</li>\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li>20</li>\n                        <li>21</li>\n                        <li>22</li>\n                        <li>23</li>\n                    </div>\n                    <div class=\"mtp-clock__hours\">\n                        <li>12</li>\n                        <li>1</li>\n                        <li>2</li>\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li>9</li>\n                        <li>10</li>\n                        <li>11</li>\n                    </div>\n                </ul>\n            </div><!-- END .mtp-clock -->\n            <div class=\"mtp-actions\">\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__cancel\">Cancel</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__back\" style=\"display:none\">Back</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__next\">Next</button>\n                <button type=\"button\" class=\"mtp-actions__button mtp-actions__finish\" style=\"display:none\">Done</button>\n            </div><!-- END .mtp-actions -->\n        </div><!-- END .mtp-picker -->\n    </div><!-- END .mtp-wrapper -->\n</div><!-- END .mtp-overlay -->\n";

exports.default = template;

/***/ }),
/* 2 */
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
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timepicker = __webpack_require__(0);

var _timepicker2 = _interopRequireDefault(_timepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _timepicker2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyY2E3YTgwN2I4NTU4Y2ZiYjU5YSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGltZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvaW5kZXguanMiXSwibmFtZXMiOlsiVGltZVBpY2tlciIsInRlbXBsYXRlIiwiZGVmYXVsdE9wdGlvbnMiLCJ0aW1lRm9ybWF0IiwiYXV0b05leHQiLCJjYWNoZWRFbHMiLCJldmVudHMiLCJzZXR1cFRlbXBsYXRlIiwiYm9keSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIm92ZXJsYXkiLCJ3cmFwcGVyIiwicGlja2VyIiwibWVyaWRpZW0iLCJtZXJpZGllbVNwYW5zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJkaXNwbGF5SG91cnMiLCJkaXNwbGF5TWludXRlcyIsImJ1dHRvbkNhbmNlbCIsImJ1dHRvbkJhY2siLCJidXR0b25OZXh0IiwiYnV0dG9uRmluaXNoIiwiZGlzcGxheUdyb3VwcyIsImhvdXJzIiwibWludXRlcyIsImNsb2NrSG91cnMiLCJjbG9ja01pbnV0ZXMiLCJjbG9ja01pbGl0YXJ5SG91cnMiLCJjbG9ja0hhbmQiLCJjbG9ja0hvdXJzTGkiLCJjbG9ja01pbnV0ZXNMaSIsImNsb2NrTWlsaXRhcnlIb3Vyc0xpIiwic2V0RXZlbnRzIiwiaW5wdXRFbCIsIm9wdGlvbnMiLCJlbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibXRwT3B0aW9ucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzaG93RXZlbnQiLCJldmVudCIsInNob3ciLCJpc1RlbXBsYXRlSW5ET00iLCJpbnNlcnRBZGphY2VudEhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJoYXNTZXRFdmVudHMiLCJoaWRlRXZlbnQiLCJzaG93TWludXRlcyIsInNob3dIb3VycyIsImZpbmlzaCIsImZvckVhY2giLCJjYWxsIiwic3BhbiIsIm1lcmlkaWVtU2VsZWN0RXZlbnQiLCJob3VyIiwiaG91clNlbGVjdEV2ZW50IiwibWludXRlIiwibWludXRlU2VsZWN0RXZlbnQiLCJvbiIsImhpZ2hsaWdodEhvdXJEaXNwbGF5R3JvdXAiLCJoaWdobGlnaHRNaW51dGVEaXNwbGF5R3JvdXAiLCJpc01pbGl0YXJ5Rm9ybWF0IiwiYmx1ciIsInRvZ2dsZUhvdXJzVmlzaWJsZSIsInRvZ2dsZU1pbnV0ZXNWaXNpYmxlIiwidmFsdWUiLCJsZW5ndGgiLCJzZXRUaW1lIiwic2V0RGlzcGxheVRpbWUiLCJzdHlsZSIsIm92ZXJmbG93IiwidmlzaWJpbGl0eSIsImRpc3BsYXkiLCJoZWlnaHQiLCJ0cmlnZ2VyIiwidGFyZ2V0IiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwicmVzZXRTdGF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImFsbG93ZWRDbGFzc2VzIiwiaXNBbGxvd2VkIiwic29tZSIsImNvbnRhaW5zIiwiYWxsb3dlZENsYXNzIiwiaGlkZSIsImN1cnJlbnRTdGVwIiwiTnVtYmVyIiwiaXNOYU4iLCJTdHJpbmciLCJpbm5lckhUTUwiLCJ0cmltIiwibWluIiwibm9kZUluZGV4IiwiaW5jcmVtZW50Iiwicm90YXRlRGVnIiwic3R5bGVWYWwiLCJ0cmFuc2Zvcm0iLCJob3VyRWxzIiwicm90YXRlSGFuZCIsImdldEFjdGl2ZUluZGV4IiwibWludXRlRWxzIiwidGltZVNlbGVjdGVkIiwiaXNWaXNpYmxlIiwidGltZUVscyIsImFjdGl2ZUluZGV4IiwidGltZUVsIiwiaW5kZXgiLCJBcnJheSIsImZyb20iLCJmaW5kIiwiaSIsImlubmVyVGV4dCIsInRpbWVWYWx1ZSIsImNvbnRhaW5lckVsIiwiYWN0aXZlRWwiLCJhY3RpdmVDbGFzc05hbWUiLCJjdXJyZW50QWN0aXZlIiwiaXNFcXVhbE5vZGUiLCJsaXN0RWxzIiwibmV3QWN0aXZlIiwicGFyZW50RWwiLCJwYXJlbnRFbGVtZW50IiwiaXNJbm5lciIsInNldEFjdGl2ZUVsIiwidGltZVN0cmluZyIsIm92ZXJhbGxDb21wb25lbnRzIiwic3BsaXQiLCJ0aW1lUGFydHMiLCJtYXAiLCJwYXJzZUludCIsImhvdXJzSW5kZXgiLCJhY3RpdmVNZXJpZGlhbkNsYXNzIiwiY3VycmVudE1lcmlkaWVtIiwiY29ycmVjdE1lcmlkaWVtIiwiaG91cnNMSSIsIm1pbnV0ZXNMSSIsImZpbHRlciIsIkJvb2xlYW4iLCJhc3NpZ24iLCJUeXBlRXJyb3IiLCJ0byIsIk9iamVjdCIsImluYyIsIm5leHRTb3VyY2UiLCJrZXlzQXJyYXkiLCJrZXlzIiwibmV4dEluZGV4IiwibGVuIiwibmV4dEtleSIsImRlc2MiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJlbnVtZXJhYmxlIiwiRXZlbnRzIiwiaGFuZGxlciIsInB1c2giLCJwYXJhbXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtB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QixLQUFLcEMsTUFBTCxDQUFZb0MsS0FBWixFQUFtQjRCLE1BQTdDLEVBQXFEO0FBQ25ELGFBQUtoRSxNQUFMLENBQVlvQyxLQUFaLEVBQW1CWSxPQUFuQixDQUEyQjtBQUFBLGlCQUFXd0csUUFBUUUsTUFBUixDQUFYO0FBQUEsU0FBM0I7QUFDRDtBQUNGOzs7Ozs7a0JBekNrQkgsTTs7Ozs7O0FDTHJCLHlDOzs7Ozs7Ozs7Ozs7O0FDQUEiLCJmaWxlIjoiVGltZVBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIlRpbWVQaWNrZXJcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiVGltZVBpY2tlclwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmNhN2E4MDdiODU1OGNmYmI1OWEiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSAnLi90ZW1wbGF0ZSdcbmltcG9ydCBhc3NpZ24gZnJvbSAnLi9hc3NpZ24nXG5pbXBvcnQgRXZlbnRzIGZyb20gJy4vZXZlbnRzJ1xuaW1wb3J0ICcuLi9zYXNzL21haW4uc2NzcydcblxuLyoqXG4gKiBAY2xhc3MgVGltZVBpY2tlclxuICovXG5jbGFzcyBUaW1lUGlja2VyIHtcbiAgdGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICB0aW1lRm9ybWF0OiAnc3RhbmRhcmQnLFxuICAgIGF1dG9OZXh0OiBmYWxzZSxcbiAgfVxuICBjYWNoZWRFbHMgPSB7fVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIG5ldyBUaW1lUGlja2VyIGluc3RhbmNlXG4gICAqXG4gICAqIEByZXR1cm4ge1RpbWVQaWNrZXJ9IE5ldyBUaW1lUGlja2VyIGluc3RhbmNlXG4gICAqL1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmV2ZW50cyA9IG5ldyBFdmVudHMoKVxuXG4gICAgdGhpcy5zZXR1cFRlbXBsYXRlKClcblxuICAgIHRoaXMuY2FjaGVkRWxzLmJvZHkgPSBkb2N1bWVudC5ib2R5XG4gICAgO1t0aGlzLmNhY2hlZEVscy5vdmVybGF5XSA9IHRoaXMuY2FjaGVkRWxzLmJvZHkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtb3ZlcmxheScsXG4gICAgKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMud3JhcHBlcl0gPSB0aGlzLmNhY2hlZEVscy5vdmVybGF5LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLXdyYXBwZXInLFxuICAgIClcbiAgICA7W3RoaXMuY2FjaGVkRWxzLnBpY2tlcl0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLXBpY2tlcicsXG4gICAgKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMubWVyaWRpZW1dID0gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ210cC1tZXJpZGllbScsXG4gICAgKVxuICAgIHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtU3BhbnMgPSB0aGlzLmNhY2hlZEVscy5tZXJpZGllbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdzcGFuJyxcbiAgICApXG4gICAgO1tcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlIb3VycyxcbiAgICBdID0gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtZGlzcGxheV9faG91cnMnKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5TWludXRlcyxcbiAgICBdID0gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtZGlzcGxheV9fbWludXRlcycpXG4gICAgLy8gO1tcbiAgICAvLyAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNZXJpZGllbSxcbiAgICAvLyBdID0gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtZGlzcGxheV9fbWVyaWRpZW0nKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25DYW5jZWwsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtYWN0aW9uc19fY2FuY2VsJylcbiAgICA7W3RoaXMuY2FjaGVkRWxzLmJ1dHRvbkJhY2tdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLWFjdGlvbnNfX2JhY2snLFxuICAgIClcbiAgICA7W3RoaXMuY2FjaGVkRWxzLmJ1dHRvbk5leHRdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLWFjdGlvbnNfX25leHQnLFxuICAgIClcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uRmluaXNoLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXRwLWFjdGlvbnNfX2ZpbmlzaCcpXG5cbiAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5R3JvdXBzID0ge31cbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUdyb3Vwcy5ob3VycyxcbiAgICBdID0gdGhpcy5jYWNoZWRFbHMud3JhcHBlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdob3VyLWdyb3VwJylcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUdyb3Vwcy5taW51dGVzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ21pbnV0ZS1ncm91cCcpXG4gICAgO1t0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ210cC1jbG9ja19faG91cnMnLFxuICAgIClcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXRwLWNsb2NrX19taW51dGVzJylcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtY2xvY2tfX2hvdXJzLW1pbGl0YXJ5JyxcbiAgICApXG4gICAgO1t0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmRdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLWNsb2NrX19oYW5kJyxcbiAgICApXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpID0gdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vycy5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdsaScsXG4gICAgKVxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpID0gdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgJ2xpJyxcbiAgICApXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG4gICAgICAnbGknLFxuICAgIClcblxuICAgIHRoaXMuc2V0RXZlbnRzKClcbiAgfVxuXG4gIC8qKlxuICAgKiBCaW5kIGV2ZW50IHRvIHRoZSBpbnB1dCBlbGVtZW50IHRvIG9wZW4gd2hlbiBgZm9jdXNgIGV2ZW50IGlzIGV2ZW50cy50cmlnZ2VyZWRcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd8SFRNTEVsZW1lbnR9IGlucHV0RWwgU2VsZWN0b3IgZWxlbWVudCB0byBiZSBxdWVyaWVkIG9yIGV4aXN0aW5nIEhUTUxFbGVtZW50XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbnMgdG8gbWVyZ2VkIHdpdGggZGVmYXVsdHMgYW5kIHNldCB0byBpbnB1dCBlbGVtZW50IG9iamVjdFxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgYmluZElucHV0KGlucHV0RWwsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPVxuICAgICAgaW5wdXRFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaW5wdXRFbCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXRFbClcblxuICAgIGVsZW1lbnQubXRwT3B0aW9ucyA9IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZXZlbnQgPT4gdGhpcy5zaG93RXZlbnQoZXZlbnQpKVxuICB9XG5cbiAgLyoqXG4gICAqIE9wZW4gcGlja2VyIHdpdGggdGhlIGlucHV0IHByb3ZpZGVkIGluIGNvbnRleHQgd2l0aG91dCBiaW5kaW5nIGV2ZW50c1xuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gaW5wdXRFbCBTZWxlY3RvciBlbGVtZW50IHRvIGJlIHF1ZXJpZWQgb3IgZXhpc3RpbmcgSFRNTEVsZW1lbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9ucyB0byBtZXJnZWQgd2l0aCBkZWZhdWx0cyBhbmQgc2V0IHRvIGlucHV0IGVsZW1lbnQgb2JqZWN0XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBvcGVuT25JbnB1dChpbnB1dEVsLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLmlucHV0RWwgPVxuICAgICAgaW5wdXRFbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ID8gaW5wdXRFbCA6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaW5wdXRFbClcbiAgICB0aGlzLmlucHV0RWwubXRwT3B0aW9ucyA9IGFzc2lnbih7fSwgdGhpcy5kZWZhdWx0T3B0aW9ucywgb3B0aW9ucylcbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHVwIHRoZSB0ZW1wbGF0ZSBpbiBET00gaWYgbm90IGFscmVhZHlcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNldHVwVGVtcGxhdGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzVGVtcGxhdGVJbkRPTSgpKSB7XG4gICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpXG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0SG91ckRpc3BsYXlHcm91cCgpIHtcbiAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5R3JvdXBzLmhvdXJzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1ncm91cCcpXG4gICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUdyb3Vwcy5taW51dGVzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1ncm91cCcpXG4gIH1cblxuICBoaWdobGlnaHRNaW51dGVEaXNwbGF5R3JvdXAoKSB7XG4gICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUdyb3Vwcy5ob3Vycy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtZ3JvdXAnKVxuICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlHcm91cHMubWludXRlcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtZ3JvdXAnKVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCB0aGUgZXZlbnRzIG9uIHBpY2tlciBlbGVtZW50c1xuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2V0RXZlbnRzKCkge1xuICAgIGlmICghdGhpcy5oYXNTZXRFdmVudHMoKSkge1xuICAgICAgLy8gY2xvc2VcbiAgICAgIHRoaXMuY2FjaGVkRWxzLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PlxuICAgICAgICB0aGlzLmhpZGVFdmVudChldmVudCksXG4gICAgICApXG5cbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+XG4gICAgICAgIHRoaXMuaGlkZUV2ZW50KGV2ZW50KSxcbiAgICAgIClcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbk5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB0aGlzLnNob3dNaW51dGVzKCksXG4gICAgICApXG4gICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25CYWNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgdGhpcy5zaG93SG91cnMoKSxcbiAgICAgIClcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkZpbmlzaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMuZmluaXNoKCkpXG5cbiAgICAgIC8vIG1lcmlkaWVtIHNlbGVjdCBldmVudHNcbiAgICAgIDtbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMubWVyaWRpZW1TcGFucywgc3BhbiA9PiB7XG4gICAgICAgIHNwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB0aGlzLm1lcmlkaWVtU2VsZWN0RXZlbnQoZXZlbnQpKVxuICAgICAgfSlcblxuICAgICAgLy8gdGltZSBzZWxlY3QgZXZlbnRzXG4gICAgICA7W10uZm9yRWFjaC5jYWxsKHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNMaSwgaG91ciA9PiB7XG4gICAgICAgIGhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5ob3VyU2VsZWN0RXZlbnQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnMsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGksXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIDtbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGksIGhvdXIgPT4ge1xuICAgICAgICBob3VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMuaG91clNlbGVjdEV2ZW50KFxuICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMsXG4gICAgICAgICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaSxcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgO1tdLmZvckVhY2guY2FsbCh0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaSwgbWludXRlID0+IHtcbiAgICAgICAgbWludXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgIHRoaXMubWludXRlU2VsZWN0RXZlbnQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcyxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuY2xhc3NMaXN0LmFkZCgnbXRwLWV2ZW50cy1zZXQnKVxuXG4gICAgICB0aGlzLmV2ZW50cy5vbignaG91cnNTaG93bicsICgpID0+IHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRIb3VyRGlzcGxheUdyb3VwKClcbiAgICAgIH0pXG5cbiAgICAgIHRoaXMuZXZlbnRzLm9uKCdtaW51dGVzU2hvd24nLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0TWludXRlRGlzcGxheUdyb3VwKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHBpY2tlciBpbiB0aGUgRE9NXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93KCkge1xuICAgIGNvbnN0IGlzTWlsaXRhcnlGb3JtYXQgPSB0aGlzLmlzTWlsaXRhcnlGb3JtYXQoKVxuXG4gICAgLy8gYmx1ciBpbnB1dCB0byBwcmV2ZW50IG9uc2NyZWVuIGtleWJvYXJkIGZyb20gZGlzcGxheWluZyAobW9iaWxlIGhhY2spXG4gICAgdGhpcy5pbnB1dEVsLmJsdXIoKVxuICAgIHRoaXMudG9nZ2xlSG91cnNWaXNpYmxlKHRydWUsIGlzTWlsaXRhcnlGb3JtYXQpXG4gICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSgpXG5cbiAgICBpZiAodGhpcy5pbnB1dEVsLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0VGltZSh0aGlzLmlucHV0RWwudmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0RGlzcGxheVRpbWUoe1xuICAgICAgICBob3VyczogaXNNaWxpdGFyeUZvcm1hdCA/ICcwMCcgOiAnMTInLFxuICAgICAgICBtaW51dGVzOiAnMCcsXG4gICAgICB9KVxuICAgIH1cblxuICAgIHRoaXMuY2FjaGVkRWxzLmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAgIHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtLnN0eWxlLnZpc2liaWxpdHkgPSBpc01pbGl0YXJ5Rm9ybWF0XG4gICAgICA/ICdub25lJ1xuICAgICAgOiAndmlzaWJsZSdcbiAgICB0aGlzLmNhY2hlZEVscy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIYW5kLnN0eWxlLmhlaWdodCA9IGlzTWlsaXRhcnlGb3JtYXQgPyAnOTBweCcgOiAnMTA1cHgnXG5cbiAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdzaG93JylcbiAgfVxuXG4gIC8qKlxuICAgKiBFdmVudCBoYW5kbGUgZm9yIGlucHV0IGZvY3VzXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lclxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2hvd0V2ZW50KGV2ZW50KSB7XG4gICAgdGhpcy5pbnB1dEVsID0gZXZlbnQudGFyZ2V0XG4gICAgdGhpcy5zaG93KClcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBwaWNrZXIgaW4gdGhlIERPTVxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmNhY2hlZEVscy5vdmVybGF5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJydcblxuICAgIHRoaXMuaW5wdXRFbC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnYmx1cicpKVxuICAgIHRoaXMucmVzZXRTdGF0ZSgpXG4gICAgdGhpcy5ldmVudHMudHJpZ2dlcignaGlkZScpXG4gIH1cblxuICAvKipcbiAgICogSGlkZSB0aGUgcGlja2VyIGVsZW1lbnQgb24gdGhlIHBhZ2VcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGV2ZW50IGxpc3RlbmVyIGNhbGxiYWNrXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoaWRlRXZlbnQoZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgLy8gb25seSBhbGxvdyBldmVudCBiYXNlZCBjbG9zZSBpZiBldmVudC50YXJnZXQgY29udGFpbnMgb25lIG9mIHRoZXNlIGNsYXNzZXNcbiAgICAvLyBoYWNrIHRvIHByZXZlbnQgb3ZlcmxheSBjbG9zZSBldmVudCBmcm9tIGV2ZW50cy50cmlnZ2VyaW5nIG9uIGFsbCBlbGVtZW50cyBiZWNhdXNlXG4gICAgLy8gdGhleSBhcmUgY2hpbGRyZW4gb2Ygb3ZlcmxheVxuICAgIGNvbnN0IGFsbG93ZWRDbGFzc2VzID0gWydtdHAtb3ZlcmxheScsICdtdHAtYWN0aW9uc19fY2FuY2VsJ11cbiAgICBjb25zdCB7IGNsYXNzTGlzdCB9ID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgaXNBbGxvd2VkID0gYWxsb3dlZENsYXNzZXMuc29tZShhbGxvd2VkQ2xhc3MgPT5cbiAgICAgIGNsYXNzTGlzdC5jb250YWlucyhhbGxvd2VkQ2xhc3MpLFxuICAgIClcblxuICAgIGlmIChpc0FsbG93ZWQpIHtcbiAgICAgIHRoaXMuaGlkZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0IHBpY2tlciBzdGF0ZSB0byBkZWZhdWx0c1xuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVzZXRTdGF0ZSgpIHtcbiAgICB0aGlzLmN1cnJlbnRTdGVwID0gJ2hvdXJzJ1xuICAgIHRoaXMudG9nZ2xlSG91cnNWaXNpYmxlKHRydWUsIHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpKVxuICAgIHRoaXMudG9nZ2xlTWludXRlc1Zpc2libGUoKVxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNMaVswXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaVswXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaVswXS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSlcbiAgICB0aGlzLmNhY2hlZEVscy5tZXJpZGllbVNwYW5zWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICAgIHRoaXMuaGlnaGxpZ2h0SG91ckRpc3BsYXlHcm91cCgpXG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBkaXNwbGF5ZWQgdGltZSwgd2hpY2ggd2lsbCBiZSB1c2VkIHRvIGZpbGwgaW5wdXQgdmFsdWUgb24gY29tcGxldGlvblxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IGhvdXJzOiBIb3VyIGRpc3BsYXkgdGltZSxcbiAgICogQHBhcmFtIHtudW1iZXJ8c3RyaW5nfSBtaW51dGVzOiBNaW51dGUgZGlzcGxheSB0aW1lXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzZXREaXNwbGF5VGltZSh7IGhvdXJzLCBtaW51dGVzIH0pIHtcbiAgICBpZiAodHlwZW9mIGhvdXJzICE9PSAndW5kZWZpbmVkJyAmJiBOdW1iZXIuaXNOYU4oaG91cnMpID09PSBmYWxzZSkge1xuICAgICAgLy8gLnRyaW0oKSBpcyBub3QgYWxsb3dlZCBpZiBob3VycyBpcyBub3QgcmVjb2duaXplZCBhcyBhIHN0cmluZyxcbiAgICAgIGlmICh0eXBlb2YgaG91cnMgPT09ICdzdHJpbmcnIHx8IGhvdXJzIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlIb3Vycy5pbm5lckhUTUwgPSBob3Vycy50cmltKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlIb3Vycy5pbm5lckhUTUwgPSBob3Vyc1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWludXRlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgTnVtYmVyLmlzTmFOKG1pbnV0ZXMpID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgbWluID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXNcblxuICAgICAgLy8gLnRyaW0oKSBpcyBub3QgYWxsb3dlZCBpZiBtaW4gaXMgbm90IHJlY29nbml6ZWQgYXMgYSBzdHJpbmcsXG4gICAgICAvLyAuLi4gc29tZXRpbWVzIChpbiBTYWZhcmkgYW5kIENocm9tZSkgaXQgaXMgYW4gdW50cmltbWFibGUgbnVtYmVyXG4gICAgICBpZiAodHlwZW9mIG1pbiA9PT0gJ3N0cmluZycgfHwgbWluIGluc3RhbmNlb2YgU3RyaW5nKSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNaW51dGVzLmlubmVySFRNTCA9IG1pbi50cmltKClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNaW51dGVzLmlubmVySFRNTCA9IG1pblxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnN0IG51bWVyaWNIb3VyID0gcGFyc2VJbnQoaG91cnMpXG4gICAgLy8gY29uc3QgbnVtZXJpY01pbnV0ZSA9IHBhcnNlSW50KG1pbnV0ZXMpXG4gIH1cblxuICAvKipcbiAgICogUm90YXRlIHRoZSBoYW5kIGVsZW1lbnQgdG8gc2VsZWN0ZWQgdGltZVxuICAgKlxuICAgKiBAcGFyYW0ge251bWJlcn0gbm9kZUluZGV4IEluZGV4IG9mIGFjdGl2ZSBlbGVtZW50XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZW1lbnQgRGVncmVlIGluY3JlbWVudCBlbGVtZW50cyBhcmUgb25cbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJvdGF0ZUhhbmQobm9kZUluZGV4ID0gOSwgaW5jcmVtZW50ID0gMzApIHtcbiAgICAvLyAwIGluZGV4IGlzIDE4MCBkZWdyZXNzIGJlaGluZCAwIGRlZ1xuICAgIGNvbnN0IHJvdGF0ZURlZyA9IG5vZGVJbmRleCAqIGluY3JlbWVudCAtIDE4MFxuICAgIGNvbnN0IHN0eWxlVmFsID0gYHJvdGF0ZSgke3JvdGF0ZURlZ31kZWcpYFxuXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIYW5kLnN0eWxlLnRyYW5zZm9ybSA9IHN0eWxlVmFsXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIYW5kLnN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc3R5bGVWYWxcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGVbJy1tcy10cmFuc2Zvcm0nXSA9IHN0eWxlVmFsXG4gIH1cblxuICBzaG93SG91cnMoKSB7XG4gICAgY29uc3QgaXNNaWxpdGFyeUZvcm1hdCA9IHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpXG4gICAgY29uc3QgaG91ckVscyA9IGlzTWlsaXRhcnlGb3JtYXRcbiAgICAgID8gdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGlcbiAgICAgIDogdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpXG5cbiAgICB0aGlzLnRvZ2dsZUhvdXJzVmlzaWJsZSh0cnVlLCBpc01pbGl0YXJ5Rm9ybWF0KVxuICAgIHRoaXMudG9nZ2xlTWludXRlc1Zpc2libGUoKVxuICAgIHRoaXMucm90YXRlSGFuZCh0aGlzLmdldEFjdGl2ZUluZGV4KGhvdXJFbHMpKVxuXG4gICAgdGhpcy5ldmVudHMudHJpZ2dlcignaG91cnNTaG93bicpXG4gIH1cblxuICBzaG93TWludXRlcygpIHtcbiAgICBjb25zdCBtaW51dGVFbHMgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXNMaVxuXG4gICAgdGhpcy50b2dnbGVIb3Vyc1Zpc2libGUoKVxuICAgIHRoaXMudG9nZ2xlTWludXRlc1Zpc2libGUodHJ1ZSlcbiAgICB0aGlzLnJvdGF0ZUhhbmQodGhpcy5nZXRBY3RpdmVJbmRleChtaW51dGVFbHMpLCA2KVxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZS5oZWlnaHQgPSAnMTE1cHgnXG5cbiAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdtaW51dGVzU2hvd24nKVxuICB9XG5cbiAgZmluaXNoKCkge1xuICAgIHRoaXMudGltZVNlbGVjdGVkKClcbiAgICB0aGlzLmhpZGUoKVxuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZSBob3VyIChib3RoIG1pbGl0YXJ5IGFuZCBzdGFuZGFyZCkgY2xvY2sgdmlzaWJsaXR5IGluIERPTVxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzVmlzaWJsZSBJcyBjbG9jayBmYWNlIHRvZ2dsZWQgdmlzaWJsZSBvciBoaWRkZW5cbiAgICogQHBhcmFtIHtib29sZWFufSBpc01pbGl0YXJ5Rm9ybWF0IElzIHVzaW5nIG1pbGl0YXJ5IGhvdXIgZm9ybWF0XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB0b2dnbGVIb3Vyc1Zpc2libGUoaXNWaXNpYmxlID0gZmFsc2UsIGlzTWlsaXRhcnlGb3JtYXQgPSBmYWxzZSkge1xuICAgIGlmIChpc1Zpc2libGUpIHRoaXMuY3VycmVudFN0ZXAgPSAnaG91cnMnXG5cbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgaXNWaXNpYmxlICYmICFpc01pbGl0YXJ5Rm9ybWF0ID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vycy5zdHlsZS5kaXNwbGF5ID1cbiAgICAgIGlzVmlzaWJsZSAmJiBpc01pbGl0YXJ5Rm9ybWF0ID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbk5leHQuc3R5bGUuZGlzcGxheSA9ICFpc1Zpc2libGVcbiAgICAgID8gJ2lubGluZS1ibG9jaydcbiAgICAgIDogJ25vbmUnXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIG1pbnV0ZSBjbG9jayB2aXNpYmxpdHkgaW4gRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIElzIGNsb2NrIGZhY2UgdG9nZ2xlZCB2aXNpYmxlIG9yIGhpZGRlblxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdG9nZ2xlTWludXRlc1Zpc2libGUoaXNWaXNpYmxlID0gZmFsc2UpIHtcbiAgICBpZiAoaXNWaXNpYmxlKSB0aGlzLmN1cnJlbnRTdGVwID0gJ21pbnV0ZXMnXG5cbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXMuc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZSA/ICdibG9jaycgOiAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5idXR0b25CYWNrLnN0eWxlLmRpc3BsYXkgPSBpc1Zpc2libGVcbiAgICAgID8gJ2lubGluZS1ibG9jaydcbiAgICAgIDogJ25vbmUnXG4gICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uTmV4dC5zdHlsZS5kaXNwbGF5ID0gIWlzVmlzaWJsZVxuICAgICAgPyAnaW5saW5lLWJsb2NrJ1xuICAgICAgOiAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5idXR0b25GaW5pc2guc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZVxuICAgICAgPyAnaW5saW5lLWJsb2NrJ1xuICAgICAgOiAnbm9uZSdcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGFjdGl2ZSB0aW1lIGVsZW1lbnQgaW5kZXhcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gdGltZUVscyBDb2xsZWN0aW9uIG9mIHRpbWUgZWxlbWVudHMgdG8gZmluZCBhY3RpdmUgaW5cbiAgICogQHJldHVybiB7bnVtYmVyfSBBY3RpdmUgZWxlbWVudCBpbmRleFxuICAgKi9cbiAgZ2V0QWN0aXZlSW5kZXgodGltZUVscykge1xuICAgIGxldCBhY3RpdmVJbmRleCA9IDBcbiAgICA7W10uc29tZS5jYWxsKHRpbWVFbHMsICh0aW1lRWwsIGluZGV4KSA9PiB7XG4gICAgICBpZiAodGltZUVsLmNsYXNzTGlzdC5jb250YWlucygnbXRwLWNsb2NrLS1hY3RpdmUnKSkge1xuICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4XG5cbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfSlcblxuICAgIHJldHVybiBhY3RpdmVJbmRleFxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBzZWxlY3RlZCB0aW1lIHRvIGlucHV0IGVsZW1lbnRcbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHRpbWVTZWxlY3RlZCgpIHtcbiAgICBjb25zdCBob3VycyA9IHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlIb3Vycy5pbm5lckhUTUxcbiAgICBjb25zdCBtaW51dGVzID0gdGhpcy5jYWNoZWRFbHMuZGlzcGxheU1pbnV0ZXMuaW5uZXJIVE1MXG4gICAgY29uc3QgbWVyaWRpZW0gPSB0aGlzLmlzTWlsaXRhcnlGb3JtYXQoKVxuICAgICAgPyAnJ1xuICAgICAgOiBBcnJheS5mcm9tKHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtU3BhbnMpLmZpbmQoaSA9PlxuICAgICAgICAgIGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtbWVyaWRpZW0tLWFjdGl2ZScpLFxuICAgICAgICApLmlubmVyVGV4dFxuXG4gICAgY29uc3QgdGltZVZhbHVlID0gYCR7aG91cnN9OiR7bWludXRlc30gJHttZXJpZGllbX1gXG5cbiAgICB0aGlzLmlucHV0RWwudmFsdWUgPSB0aW1lVmFsdWUudHJpbSgpXG4gICAgdGhpcy5pbnB1dEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKVxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ3RpbWVTZWxlY3RlZCcsIHtcbiAgICAgIGhvdXJzLFxuICAgICAgbWludXRlcyxcbiAgICAgIG1lcmlkaWVtLFxuICAgICAgdmFsdWU6IHRpbWVWYWx1ZSxcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIFNldCBhY3RpdmUgY2xvY2sgZmFjZSBlbGVtZW50XG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gY29udGFpbmVyRWwgTmV3IGFjdGl2ZSBlbGVtZW50cyAucGFyZW50Tm9kZVxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IGFjdGl2ZUVsIEVsZW1lbnQgdG8gc2V0IGFjdGl2ZVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2V0QWN0aXZlRWwoY29udGFpbmVyRWwsIGFjdGl2ZUVsKSB7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gJ210cC1jbG9jay0tYWN0aXZlJ1xuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSBjb250YWluZXJFbC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGFjdGl2ZUNsYXNzTmFtZSlbMF1cblxuICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpXG4gICAgYWN0aXZlRWwuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpXG4gIH1cblxuICAvKipcbiAgICogTWVyaWRpZW0gc2VsZWN0IGV2ZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGxpc3RlbmVyXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBtZXJpZGllbVNlbGVjdEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgYWN0aXZlQ2xhc3NOYW1lID0gJ210cC1tZXJpZGllbS0tYWN0aXZlJ1xuICAgIGNvbnN0IGVsZW1lbnQgPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBjdXJyZW50QWN0aXZlID0gdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIGFjdGl2ZUNsYXNzTmFtZSxcbiAgICApWzBdXG5cbiAgICBpZiAoIWN1cnJlbnRBY3RpdmUuaXNFcXVhbE5vZGUoZWxlbWVudCkpIHtcbiAgICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVDbGFzc05hbWUpXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYWN0aXZlQ2xhc3NOYW1lKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBIb3VyIHNlbGVjdCBldmVudCBoYW5kbGVyXG4gICAqXG4gICAqIEBwYXJhbSB7RXZlbnR9IGV2ZW50IEV2ZW50IG9iamVjdCBwYXNzZWQgZnJvbSBsaXN0ZW5lclxuICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjb250YWluZXJFbCBFbGVtZW50IGNvbnRhaW5pbmcgdGltZSBsaXN0IGVsZW1lbnRzXG4gICAqIEBwYXJhbSB7SFRNTENvbGxlY3Rpb259IGxpc3RFbHMgQ29sbGVjdGlvbiBvZiBsaXN0IGVsZW1lbnRzXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBob3VyU2VsZWN0RXZlbnQoZXZlbnQsIGNvbnRhaW5lckVsLCBsaXN0RWxzKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGNvbnN0IG5ld0FjdGl2ZSA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IHBhcmVudEVsID0gbmV3QWN0aXZlLnBhcmVudEVsZW1lbnRcbiAgICBjb25zdCBpc0lubmVyID0gcGFyZW50RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtY2xvY2tfX2hvdXJzLS1pbm5lcicpXG5cbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGUuaGVpZ2h0ID0gaXNJbm5lciA/ICc5MHB4JyA6ICcxMDVweCdcbiAgICB0aGlzLnNldEFjdGl2ZUVsKGNvbnRhaW5lckVsLCBuZXdBY3RpdmUpXG5cbiAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMuZ2V0QWN0aXZlSW5kZXgobGlzdEVscylcblxuICAgIHRoaXMuc2V0RGlzcGxheVRpbWUoeyBob3VyczogbmV3QWN0aXZlLmlubmVySFRNTCB9KVxuICAgIHRoaXMucm90YXRlSGFuZChhY3RpdmVJbmRleClcbiAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdob3VyU2VsZWN0ZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIEhvdXIgc2VsZWN0IGV2ZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lckVsIEVsZW1lbnQgY29udGFpbmluZyB0aW1lIGxpc3QgZWxlbWVudHNcbiAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gbGlzdEVscyBDb2xsZWN0aW9uIG9mIGxpc3QgZWxlbWVudHNcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG1pbnV0ZVNlbGVjdEV2ZW50KGV2ZW50LCBjb250YWluZXJFbCwgbGlzdEVscykge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICBjb25zdCBuZXdBY3RpdmUgPSBldmVudC50YXJnZXRcblxuICAgIHRoaXMuc2V0QWN0aXZlRWwoY29udGFpbmVyRWwsIG5ld0FjdGl2ZSlcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleChsaXN0RWxzKVxuXG4gICAgdGhpcy5zZXREaXNwbGF5VGltZSh7IG1pbnV0ZXM6IGFjdGl2ZUluZGV4IH0pXG4gICAgdGhpcy5yb3RhdGVIYW5kKGFjdGl2ZUluZGV4LCA2KVxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ21pbnV0ZVNlbGVjdGVkJylcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwaWNrZXIgc2V0IHRvIG1pbGl0YXJ5IHRpbWUgbW9kZVxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBJcyBpbiBtaWxpdGFyeSB0aW1lIG1vZGVcbiAgICovXG4gIGlzTWlsaXRhcnlGb3JtYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbC5tdHBPcHRpb25zLnRpbWVGb3JtYXQgPT09ICdtaWxpdGFyeSdcbiAgfVxuXG4gIHNldFRpbWUodGltZVN0cmluZykge1xuICAgIC8vIHRoaXMuaW5wdXRFbC5tdHBPcHRpb25zLmluaXRpYWxWYWx1ZVxuICAgIGNvbnN0IG92ZXJhbGxDb21wb25lbnRzID0gdGltZVN0cmluZy5zcGxpdCgnICcpXG4gICAgY29uc3QgdGltZVBhcnRzID0gb3ZlcmFsbENvbXBvbmVudHNbMF0uc3BsaXQoJzonKS5tYXAoaSA9PiBwYXJzZUludChpLCAxMCkpXG5cbiAgICAvLyBGaXJzdCwgc2V0IHRoZSBkaXNwbGF5IHRpbWUgKGF0IHRoZSB0b3ApIGNvcnJlY3RseS5cbiAgICB0aGlzLnNldERpc3BsYXlUaW1lKHsgaG91cnM6IHRpbWVQYXJ0c1swXSwgbWludXRlczogdGltZVBhcnRzWzFdIH0pXG5cbiAgICBsZXQgaG91cnNJbmRleCA9IHRpbWVQYXJ0c1swXVxuXG4gICAgaWYgKHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpKSB7XG4gICAgICBob3Vyc0luZGV4ID0gdGltZVBhcnRzWzBdID4gMTIgPyB0aW1lUGFydHNbMF0gLSAxMiA6IHRpbWVQYXJ0c1swXSArIDEyXG5cbiAgICAgIGlmIChob3Vyc0luZGV4ID09PSAyNCkgaG91cnNJbmRleCA9IDEyXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGFjdGl2ZU1lcmlkaWFuQ2xhc3MgPSAnbXRwLW1lcmlkaWVtLS1hY3RpdmUnXG5cbiAgICAgIGNvbnN0IG1lcmlkaWVtID0gb3ZlcmFsbENvbXBvbmVudHNbMV1cblxuICAgICAgY29uc3QgY3VycmVudE1lcmlkaWVtID0gdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgYWN0aXZlTWVyaWRpYW5DbGFzcyxcbiAgICAgIClbMF1cblxuICAgICAgY29uc3QgY29ycmVjdE1lcmlkaWVtID0gQXJyYXkuZnJvbSh0aGlzLmNhY2hlZEVscy5tZXJpZGllbVNwYW5zKS5maW5kKFxuICAgICAgICBpID0+IGkuaW5uZXJUZXh0ID09PSBtZXJpZGllbSxcbiAgICAgIClcblxuICAgICAgY3VycmVudE1lcmlkaWVtLmNsYXNzTGlzdC5yZW1vdmUoYWN0aXZlTWVyaWRpYW5DbGFzcylcbiAgICAgIGNvcnJlY3RNZXJpZGllbS5jbGFzc0xpc3QuYWRkKGFjdGl2ZU1lcmlkaWFuQ2xhc3MpXG4gICAgfVxuXG4gICAgaWYgKGhvdXJzSW5kZXggPT09IDEyKSBob3Vyc0luZGV4ID0gMFxuXG4gICAgY29uc3QgaG91cnNMSSA9IHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpXG4gICAgICA/IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vyc0xpXG4gICAgICA6IHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNMaVxuICAgIGNvbnN0IG1pbnV0ZXNMSSA9IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpXG5cbiAgICAvLyBDbGVhciBleGlzdGluZyBhY3RpdmUgaG91cnMsIHRoZW4gc2V0IHRoZSBjb3JyZWN0IGhvdXJzIHZhbHVlLlxuICAgIEFycmF5LmZyb20oaG91cnNMSSlcbiAgICAgIC5maWx0ZXIoaSA9PiBpLmNsYXNzTGlzdC5jb250YWlucygnbXRwLWNsb2NrLS1hY3RpdmUnKSlcbiAgICAgIC5mb3JFYWNoKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKCdtdHAtY2xvY2stLWFjdGl2ZScpKVxuICAgIGhvdXJzTElbaG91cnNJbmRleF0uY2xhc3NMaXN0LmFkZCgnbXRwLWNsb2NrLS1hY3RpdmUnKVxuXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgYWN0aXZlIG1pbnV0ZXMsIHRoZW4gc2V0IHRoZSBjb3JyZWN0IG1pbnV0ZSB2YWx1ZS5cbiAgICBBcnJheS5mcm9tKG1pbnV0ZXNMSSlcbiAgICAgIC5maWx0ZXIoaSA9PiBpLmNsYXNzTGlzdC5jb250YWlucygnbXRwLWNsb2NrLS1hY3RpdmUnKSlcbiAgICAgIC5mb3JFYWNoKGkgPT4gaS5jbGFzc0xpc3QucmVtb3ZlKCdtdHAtY2xvY2stLWFjdGl2ZScpKVxuICAgIG1pbnV0ZXNMSVt0aW1lUGFydHNbMV1dLmNsYXNzTGlzdC5hZGQoJ210cC1jbG9jay0tYWN0aXZlJylcblxuICAgIGlmICh0aGlzLmN1cnJlbnRTdGVwID09PSAnaG91cnMnKSB7XG4gICAgICB0aGlzLnJvdGF0ZUhhbmQodGhpcy5nZXRBY3RpdmVJbmRleChob3Vyc0xJKSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yb3RhdGVIYW5kKHRoaXMuZ2V0QWN0aXZlSW5kZXgobWludXRlc0xJKSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgcGlja2VyIG9iamVjdCBoYXMgYWxyZWFkeSBzZXQgZXZlbnRzIG9uIHBpY2tlciBlbGVtZW50c1xuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBIYXMgZXZlbnRzIGJlZW4gc2V0IG9uIHBpY2tlciBlbGVtZW50c1xuICAgKi9cbiAgaGFzU2V0RXZlbnRzKCkge1xuICAgIHJldHVybiB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmNsYXNzTGlzdC5jb250YWlucygnbXRwLWV2ZW50cy1zZXQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRlbXBsYXRlIGhhcyBhbHJlYWR5IGJlZW4gYXBwZW5kZWQgdG8gRE9NXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IElzIHRlbXBsYXRlIGluIERPTVxuICAgKi9cbiAgaXNUZW1wbGF0ZUluRE9NKCkge1xuICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1vdmVybGF5JylbMF0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGltZVBpY2tlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL3RpbWVwaWNrZXIuanMiLCJjb25zdCB0ZW1wbGF0ZSA9IGBcbjxkaXYgY2xhc3M9XCJtdHAtb3ZlcmxheVwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgPGRpdiBjbGFzcz1cIm10cC13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtZGlzcGxheVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtdGltZS1ncm91cFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaG91ci1ncm91cCBhY3RpdmUtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtZGlzcGxheV9faG91cnNcIj4xMjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtZGlzcGxheV9fc3BhY2VyXCI+JmhhaXJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWludXRlLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXRwLWRpc3BsYXlfX3NlcGFyYXRvclwiPjo8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXRwLWRpc3BsYXlfX3NwYWNlclwiPiZoYWlyc3A7PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10cC1kaXNwbGF5X19taW51dGVzXCI+MDA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1tZXJpZGllbVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXRwLW1lcmlkaWVtLS1hY3RpdmVcIj5hLm0uPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPnAubS48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj48IS0tIEVORCAubXRwLW1lcmlkaWVtIC0tPlxuICAgICAgICA8L2Rpdj48IS0tIEVORCAubXRwLWRpc3BsYXkgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtcGlja2VyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1jbG9ja19fY2VudGVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1jbG9ja19faGFuZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm10cC1jbG9ja19fdGltZSBtdHAtY2xvY2tfX291dGVyIG10cC1jbG9ja19faG91cnNcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtdHAtY2xvY2stLWFjdGl2ZVwiPjEyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjE8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT42PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjc8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+ODwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT45PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjEwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjExPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm10cC1jbG9ja19fdGltZSBtdHAtY2xvY2tfX291dGVyIG10cC1jbG9ja19fbWludXRlc1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10cC1jbG9jay0tYWN0aXZlXCI+MDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4mbWlkZG90OzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4mbWlkZG90OzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4mbWlkZG90OzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4mbWlkZG90OzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT41PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjEwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjE1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjIwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjI1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjMwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjM1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjQwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjQ1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjUwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjU1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm10cC1jbG9ja19fdGltZSBtdHAtY2xvY2tfX2hvdXJzLW1pbGl0YXJ5XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1jbG9ja19faG91cnMtLWlubmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJtdHAtY2xvY2stLWFjdGl2ZVwiPjAwPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTQ8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjE1PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xNjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTc8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjE4PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xOTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MjA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjIxPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yMjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MjM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1jbG9ja19faG91cnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+NDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+NTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+NjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+NzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+ODwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+OTwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjExPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtY2xvY2sgLS0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm10cC1hY3Rpb25zX19idXR0b24gbXRwLWFjdGlvbnNfX2NhbmNlbFwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fYmFja1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fbmV4dFwiPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm10cC1hY3Rpb25zX19idXR0b24gbXRwLWFjdGlvbnNfX2ZpbmlzaFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+RG9uZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+PCEtLSBFTkQgLm10cC1hY3Rpb25zIC0tPlxuICAgICAgICA8L2Rpdj48IS0tIEVORCAubXRwLXBpY2tlciAtLT5cbiAgICA8L2Rpdj48IS0tIEVORCAubXRwLXdyYXBwZXIgLS0+XG48L2Rpdj48IS0tIEVORCAubXRwLW92ZXJsYXkgLS0+XG5gXG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGVtcGxhdGUuanMiLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1jb250aW51ZSAqL1xuLyoqXG4gKiBPYmplY3QuYXNzaWduIHBvbHlmaWxsXG4gKlxuICogQHBhcmFtIHtvYmplY3R9IHRhcmdldCBUYXJnZXQgb2JqZWN0IHRvIG1lcmdlIHByb3BlcnRpZXMgb250b1xuICogQHBhcmFtIHsuLi5vYmplY3R9IHNvdXJjZXMgIFNvdXJjZSBvYmplY3QgdG8gbWVyZ2UgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJuIHtvYmplY3R9IFRhcmdldCBvYmplY3Qgd2l0aCBtZXJnZWQgcHJvcGVydGllc1xuICovXG5mdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gIGlmICh0YXJnZXQgPT09ICd1bmRlZmluZWQnIHx8IHRhcmdldCA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IGZpcnN0IGFyZ3VtZW50IHRvIG9iamVjdCcpXG4gIH1cblxuICBjb25zdCB0byA9IE9iamVjdCh0YXJnZXQpXG5cbiAgZm9yIChsZXQgaW5jID0gMDsgaW5jIDwgc291cmNlcy5sZW5ndGg7IGluYyArPSAxKSB7XG4gICAgbGV0IG5leHRTb3VyY2UgPSBzb3VyY2VzW2luY11cblxuICAgIGlmIChuZXh0U291cmNlID09PSAndW5kZWZpbmVkJyB8fCBuZXh0U291cmNlID09PSBudWxsKSB7XG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIG5leHRTb3VyY2UgPSBPYmplY3QobmV4dFNvdXJjZSlcblxuICAgIGNvbnN0IGtleXNBcnJheSA9IE9iamVjdC5rZXlzKG5leHRTb3VyY2UpXG5cbiAgICBmb3IgKFxuICAgICAgbGV0IG5leHRJbmRleCA9IDAsIGxlbiA9IGtleXNBcnJheS5sZW5ndGg7XG4gICAgICBuZXh0SW5kZXggPCBsZW47XG4gICAgICBuZXh0SW5kZXggKz0gMVxuICAgICkge1xuICAgICAgY29uc3QgbmV4dEtleSA9IGtleXNBcnJheVtuZXh0SW5kZXhdXG4gICAgICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihuZXh0U291cmNlLCBuZXh0S2V5KVxuXG4gICAgICBpZiAoZGVzYyAhPT0gJ3VuZGVmaW5lZCcgJiYgZGVzYy5lbnVtZXJhYmxlKSB7XG4gICAgICAgIHRvW25leHRLZXldID0gbmV4dFNvdXJjZVtuZXh0S2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0b1xufVxuXG5leHBvcnQgZGVmYXVsdCBhc3NpZ25cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9hc3NpZ24uanMiLCIvKipcbiAqIEBjbGFzcyBFdmVudHNcbiAqXG4gKiBAcHJvcCB7b2JqZWN0LjxzdHJpbmcsZnVuY3Rpb24+fSBldmVudHMgLSBIYXNoIHRhYmxlIG9mIGV2ZW50cyBhbmQgdGhlaXIgYXNzaWduZWQgaGFuZGxlciBjYWxsYmFja3NcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnRzIHtcbiAgZXZlbnRzID0ge31cblxuICAvKipcbiAgICAgKiBTZXQgaGFuZGxlciBvbiBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZSB0byBzZXQgaGFuZGxlciB0b1xuICAgICAqIEBwYXJhbSB7ZnVuY30gaGFuZGxlciAtIEhhbmRsZXIgZnVuY3Rpb24gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBvbihldmVudCwgaGFuZGxlcikge1xuICAgIGlmICghdGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXVxuICAgIH1cblxuICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGhhbmRsZXIpXG4gIH1cblxuICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSBnaXZlbiBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50IC0gRXZlbnQgbmFtZSB0byByZW1vdmUgaGFuZGxlciBmcm9tXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgb2ZmKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSkge1xuICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gW11cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICAgKiBUcmlnZ2VyIGV2ZW50IHdpdGggcGFyYW1zXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCB0byB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyAtIFBhcmFtZXRlcnMgdG8gcGFzcyB0byBldmVudCBoYW5kbGVyXG4gICAgICogQHJldHVybiB7dm9pZH1cbiAgICAgKi9cbiAgdHJpZ2dlcihldmVudCwgcGFyYW1zKSB7XG4gICAgaWYgKHRoaXMuZXZlbnRzW2V2ZW50XSAmJiB0aGlzLmV2ZW50c1tldmVudF0ubGVuZ3RoKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaChoYW5kbGVyID0+IGhhbmRsZXIocGFyYW1zKSlcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9ldmVudHMuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3Nhc3MvbWFpbi5zY3NzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIiwiaW1wb3J0IFRpbWVQaWNrZXIgZnJvbSAnLi90aW1lcGlja2VyJ1xuXG5leHBvcnQgZGVmYXVsdCBUaW1lUGlja2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9
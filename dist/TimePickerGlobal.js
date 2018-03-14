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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _timepicker = __webpack_require__(0);

var _timepicker2 = _interopRequireDefault(_timepicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// console.log(TimePicker)
window.TimePicker = _timepicker2.default;

/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyY2E3YTgwN2I4NTU4Y2ZiYjU5YSIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGltZXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdGVtcGxhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2Fzc2lnbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9zYXNzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2xvYmFsLWluZGV4LmpzIl0sIm5hbWVzIjpbIlRpbWVQaWNrZXIiLCJ0ZW1wbGF0ZSIsImRlZmF1bHRPcHRpb25zIiwidGltZUZvcm1hdCIsImF1dG9OZXh0IiwiY2FjaGVkRWxzIiwiZXZlbnRzIiwic2V0dXBUZW1wbGF0ZSIsImJvZHkiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJvdmVybGF5Iiwid3JhcHBlciIsInBpY2tlciIsIm1lcmlkaWVtIiwibWVyaWRpZW1TcGFucyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZGlzcGxheUhvdXJzIiwiZGlzcGxheU1pbnV0ZXMiLCJidXR0b25DYW5jZWwiLCJidXR0b25CYWNrIiwiYnV0dG9uTmV4dCIsImJ1dHRvbkZpbmlzaCIsImRpc3BsYXlHcm91cHMiLCJob3VycyIsIm1pbnV0ZXMiLCJjbG9ja0hvdXJzIiwiY2xvY2tNaW51dGVzIiwiY2xvY2tNaWxpdGFyeUhvdXJzIiwiY2xvY2tIYW5kIiwiY2xvY2tIb3Vyc0xpIiwiY2xvY2tNaW51dGVzTGkiLCJjbG9ja01pbGl0YXJ5SG91cnNMaSIsInNldEV2ZW50cyIsImlucHV0RWwiLCJvcHRpb25zIiwiZWxlbWVudCIsIkhUTUxFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIm10cE9wdGlvbnMiLCJhZGRFdmVudExpc3RlbmVyIiwic2hvd0V2ZW50IiwiZXZlbnQiLCJzaG93IiwiaXNUZW1wbGF0ZUluRE9NIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiaGFzU2V0RXZlbnRzIiwiaGlkZUV2ZW50Iiwic2hvd01pbnV0ZXMiLCJzaG93SG91cnMiLCJmaW5pc2giLCJmb3JFYWNoIiwiY2FsbCIsInNwYW4iLCJtZXJpZGllbVNlbGVjdEV2ZW50IiwiaG91ciIsImhvdXJTZWxlY3RFdmVudCIsIm1pbnV0ZSIsIm1pbnV0ZVNlbGVjdEV2ZW50Iiwib24iLCJoaWdobGlnaHRIb3VyRGlzcGxheUdyb3VwIiwiaGlnaGxpZ2h0TWludXRlRGlzcGxheUdyb3VwIiwiaXNNaWxpdGFyeUZvcm1hdCIsImJsdXIiLCJ0b2dnbGVIb3Vyc1Zpc2libGUiLCJ0b2dnbGVNaW51dGVzVmlzaWJsZSIsInZhbHVlIiwibGVuZ3RoIiwic2V0VGltZSIsInNldERpc3BsYXlUaW1lIiwic3R5bGUiLCJvdmVyZmxvdyIsInZpc2liaWxpdHkiLCJkaXNwbGF5IiwiaGVpZ2h0IiwidHJpZ2dlciIsInRhcmdldCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInJlc2V0U3RhdGUiLCJzdG9wUHJvcGFnYXRpb24iLCJhbGxvd2VkQ2xhc3NlcyIsImlzQWxsb3dlZCIsInNvbWUiLCJjb250YWlucyIsImFsbG93ZWRDbGFzcyIsImhpZGUiLCJjdXJyZW50U3RlcCIsIk51bWJlciIsImlzTmFOIiwiU3RyaW5nIiwiaW5uZXJIVE1MIiwidHJpbSIsIm1pbiIsIm5vZGVJbmRleCIsImluY3JlbWVudCIsInJvdGF0ZURlZyIsInN0eWxlVmFsIiwidHJhbnNmb3JtIiwiaG91ckVscyIsInJvdGF0ZUhhbmQiLCJnZXRBY3RpdmVJbmRleCIsIm1pbnV0ZUVscyIsInRpbWVTZWxlY3RlZCIsImlzVmlzaWJsZSIsInRpbWVFbHMiLCJhY3RpdmVJbmRleCIsInRpbWVFbCIsImluZGV4IiwiQXJyYXkiLCJmcm9tIiwiZmluZCIsImkiLCJpbm5lclRleHQiLCJ0aW1lVmFsdWUiLCJjb250YWluZXJFbCIsImFjdGl2ZUVsIiwiYWN0aXZlQ2xhc3NOYW1lIiwiY3VycmVudEFjdGl2ZSIsImlzRXF1YWxOb2RlIiwibGlzdEVscyIsIm5ld0FjdGl2ZSIsInBhcmVudEVsIiwicGFyZW50RWxlbWVudCIsImlzSW5uZXIiLCJzZXRBY3RpdmVFbCIsInRpbWVTdHJpbmciLCJvdmVyYWxsQ29tcG9uZW50cyIsInNwbGl0IiwidGltZVBhcnRzIiwibWFwIiwicGFyc2VJbnQiLCJob3Vyc0luZGV4IiwiYWN0aXZlTWVyaWRpYW5DbGFzcyIsImN1cnJlbnRNZXJpZGllbSIsImNvcnJlY3RNZXJpZGllbSIsImhvdXJzTEkiLCJtaW51dGVzTEkiLCJmaWx0ZXIiLCJCb29sZWFuIiwiYXNzaWduIiwiVHlwZUVycm9yIiwidG8iLCJPYmplY3QiLCJpbmMiLCJuZXh0U291cmNlIiwia2V5c0FycmF5Iiwia2V5cyIsIm5leHRJbmRleCIsImxlbiIsIm5leHRLZXkiLCJkZXNjIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiZW51bWVyYWJsZSIsIkV2ZW50cyIsImhhbmRsZXIiLCJwdXNoIiwicGFyYW1zIiwid2luZG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNE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Q0FBWW9DLEtBQVosS0FBc0IsS0FBS3BDLE1BQUwsQ0FBWW9DLEtBQVosRUFBbUI0QixNQUE3QyxFQUFxRDtBQUNuRCxhQUFLaEUsTUFBTCxDQUFZb0MsS0FBWixFQUFtQlksT0FBbkIsQ0FBMkI7QUFBQSxpQkFBV3dHLFFBQVFFLE1BQVIsQ0FBWDtBQUFBLFNBQTNCO0FBQ0Q7QUFDRjs7Ozs7O2tCQXpDa0JILE07Ozs7OztBQ0xyQix5Qzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFFQTtBQUNBSSxPQUFPakssVUFBUCx3QiIsImZpbGUiOiJUaW1lUGlja2VyR2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiVGltZVBpY2tlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJUaW1lUGlja2VyXCJdID0gZmFjdG9yeSgpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyY2E3YTgwN2I4NTU4Y2ZiYjU5YSIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tICcuL3RlbXBsYXRlJ1xuaW1wb3J0IGFzc2lnbiBmcm9tICcuL2Fzc2lnbidcbmltcG9ydCBFdmVudHMgZnJvbSAnLi9ldmVudHMnXG5pbXBvcnQgJy4uL3Nhc3MvbWFpbi5zY3NzJ1xuXG4vKipcbiAqIEBjbGFzcyBUaW1lUGlja2VyXG4gKi9cbmNsYXNzIFRpbWVQaWNrZXIge1xuICB0ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHRpbWVGb3JtYXQ6ICdzdGFuZGFyZCcsXG4gICAgYXV0b05leHQ6IGZhbHNlLFxuICB9XG4gIGNhY2hlZEVscyA9IHt9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgbmV3IFRpbWVQaWNrZXIgaW5zdGFuY2VcbiAgICpcbiAgICogQHJldHVybiB7VGltZVBpY2tlcn0gTmV3IFRpbWVQaWNrZXIgaW5zdGFuY2VcbiAgICovXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZXZlbnRzID0gbmV3IEV2ZW50cygpXG5cbiAgICB0aGlzLnNldHVwVGVtcGxhdGUoKVxuXG4gICAgdGhpcy5jYWNoZWRFbHMuYm9keSA9IGRvY3VtZW50LmJvZHlcbiAgICA7W3RoaXMuY2FjaGVkRWxzLm92ZXJsYXldID0gdGhpcy5jYWNoZWRFbHMuYm9keS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ210cC1vdmVybGF5JyxcbiAgICApXG4gICAgO1t0aGlzLmNhY2hlZEVscy53cmFwcGVyXSA9IHRoaXMuY2FjaGVkRWxzLm92ZXJsYXkuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtd3JhcHBlcicsXG4gICAgKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMucGlja2VyXSA9IHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtcGlja2VyJyxcbiAgICApXG4gICAgO1t0aGlzLmNhY2hlZEVscy5tZXJpZGllbV0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLW1lcmlkaWVtJyxcbiAgICApXG4gICAgdGhpcy5jYWNoZWRFbHMubWVyaWRpZW1TcGFucyA9IHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgJ3NwYW4nLFxuICAgIClcbiAgICA7W1xuICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUhvdXJzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1kaXNwbGF5X19ob3VycycpXG4gICAgO1tcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlNaW51dGVzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1kaXNwbGF5X19taW51dGVzJylcbiAgICAvLyA7W1xuICAgIC8vICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheU1lcmlkaWVtLFxuICAgIC8vIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1kaXNwbGF5X19tZXJpZGllbScpXG4gICAgO1tcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkNhbmNlbCxcbiAgICBdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ210cC1hY3Rpb25zX19jYW5jZWwnKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMuYnV0dG9uQmFja10gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtYWN0aW9uc19fYmFjaycsXG4gICAgKVxuICAgIDtbdGhpcy5jYWNoZWRFbHMuYnV0dG9uTmV4dF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtYWN0aW9uc19fbmV4dCcsXG4gICAgKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5idXR0b25GaW5pc2gsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtYWN0aW9uc19fZmluaXNoJylcblxuICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlHcm91cHMgPSB7fVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5R3JvdXBzLmhvdXJzLFxuICAgIF0gPSB0aGlzLmNhY2hlZEVscy53cmFwcGVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hvdXItZ3JvdXAnKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5R3JvdXBzLm1pbnV0ZXMsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbWludXRlLWdyb3VwJylcbiAgICA7W3RoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNdID0gdGhpcy5jYWNoZWRFbHMucGlja2VyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAnbXRwLWNsb2NrX19ob3VycycsXG4gICAgKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXMsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdtdHAtY2xvY2tfX21pbnV0ZXMnKVxuICAgIDtbXG4gICAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnMsXG4gICAgXSA9IHRoaXMuY2FjaGVkRWxzLnBpY2tlci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgJ210cC1jbG9ja19faG91cnMtbWlsaXRhcnknLFxuICAgIClcbiAgICA7W3RoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZF0gPSB0aGlzLmNhY2hlZEVscy5waWNrZXIuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICdtdHAtY2xvY2tfX2hhbmQnLFxuICAgIClcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzLmdldEVsZW1lbnRzQnlUYWdOYW1lKFxuICAgICAgJ2xpJyxcbiAgICApXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzTGkgPSB0aGlzLmNhY2hlZEVscy5jbG9ja01pbnV0ZXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXG4gICAgICAnbGknLFxuICAgIClcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaSA9IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vycy5nZXRFbGVtZW50c0J5VGFnTmFtZShcbiAgICAgICdsaScsXG4gICAgKVxuXG4gICAgdGhpcy5zZXRFdmVudHMoKVxuICB9XG5cbiAgLyoqXG4gICAqIEJpbmQgZXZlbnQgdG8gdGhlIGlucHV0IGVsZW1lbnQgdG8gb3BlbiB3aGVuIGBmb2N1c2AgZXZlbnQgaXMgZXZlbnRzLnRyaWdnZXJlZFxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ3xIVE1MRWxlbWVudH0gaW5wdXRFbCBTZWxlY3RvciBlbGVtZW50IHRvIGJlIHF1ZXJpZWQgb3IgZXhpc3RpbmcgSFRNTEVsZW1lbnRcbiAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9ucyB0byBtZXJnZWQgd2l0aCBkZWZhdWx0cyBhbmQgc2V0IHRvIGlucHV0IGVsZW1lbnQgb2JqZWN0XG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBiaW5kSW5wdXQoaW5wdXRFbCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgZWxlbWVudCA9XG4gICAgICBpbnB1dEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpbnB1dEVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dEVsKVxuXG4gICAgZWxlbWVudC5tdHBPcHRpb25zID0gYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBldmVudCA9PiB0aGlzLnNob3dFdmVudChldmVudCkpXG4gIH1cblxuICAvKipcbiAgICogT3BlbiBwaWNrZXIgd2l0aCB0aGUgaW5wdXQgcHJvdmlkZWQgaW4gY29udGV4dCB3aXRob3V0IGJpbmRpbmcgZXZlbnRzXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfEhUTUxFbGVtZW50fSBpbnB1dEVsIFNlbGVjdG9yIGVsZW1lbnQgdG8gYmUgcXVlcmllZCBvciBleGlzdGluZyBIVE1MRWxlbWVudFxuICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPcHRpb25zIHRvIG1lcmdlZCB3aXRoIGRlZmF1bHRzIGFuZCBzZXQgdG8gaW5wdXQgZWxlbWVudCBvYmplY3RcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG9wZW5PbklucHV0KGlucHV0RWwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMuaW5wdXRFbCA9XG4gICAgICBpbnB1dEVsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgPyBpbnB1dEVsIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpbnB1dEVsKVxuICAgIHRoaXMuaW5wdXRFbC5tdHBPcHRpb25zID0gYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKVxuICAgIHRoaXMuc2hvdygpXG4gIH1cblxuICAvKipcbiAgICogU2V0dXAgdGhlIHRlbXBsYXRlIGluIERPTSBpZiBub3QgYWxyZWFkeVxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2V0dXBUZW1wbGF0ZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNUZW1wbGF0ZUluRE9NKCkpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSlcbiAgICB9XG4gIH1cblxuICBoaWdobGlnaHRIb3VyRGlzcGxheUdyb3VwKCkge1xuICAgIHRoaXMuY2FjaGVkRWxzLmRpc3BsYXlHcm91cHMuaG91cnMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWdyb3VwJylcbiAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5R3JvdXBzLm1pbnV0ZXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWdyb3VwJylcbiAgfVxuXG4gIGhpZ2hsaWdodE1pbnV0ZURpc3BsYXlHcm91cCgpIHtcbiAgICB0aGlzLmNhY2hlZEVscy5kaXNwbGF5R3JvdXBzLmhvdXJzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1ncm91cCcpXG4gICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUdyb3Vwcy5taW51dGVzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZS1ncm91cCcpXG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBldmVudHMgb24gcGlja2VyIGVsZW1lbnRzXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzZXRFdmVudHMoKSB7XG4gICAgaWYgKCF0aGlzLmhhc1NldEV2ZW50cygpKSB7XG4gICAgICAvLyBjbG9zZVxuICAgICAgdGhpcy5jYWNoZWRFbHMub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+XG4gICAgICAgIHRoaXMuaGlkZUV2ZW50KGV2ZW50KSxcbiAgICAgIClcblxuICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT5cbiAgICAgICAgdGhpcy5oaWRlRXZlbnQoZXZlbnQpLFxuICAgICAgKVxuICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uTmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIHRoaXMuc2hvd01pbnV0ZXMoKSxcbiAgICAgIClcbiAgICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkJhY2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB0aGlzLnNob3dIb3VycygpLFxuICAgICAgKVxuICAgICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uRmluaXNoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdGhpcy5maW5pc2goKSlcblxuICAgICAgLy8gbWVyaWRpZW0gc2VsZWN0IGV2ZW50c1xuICAgICAgO1tdLmZvckVhY2guY2FsbCh0aGlzLmNhY2hlZEVscy5tZXJpZGllbVNwYW5zLCBzcGFuID0+IHtcbiAgICAgICAgc3Bhbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHRoaXMubWVyaWRpZW1TZWxlY3RFdmVudChldmVudCkpXG4gICAgICB9KVxuXG4gICAgICAvLyB0aW1lIHNlbGVjdCBldmVudHNcbiAgICAgIDtbXS5mb3JFYWNoLmNhbGwodGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpLCBob3VyID0+IHtcbiAgICAgICAgaG91ci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICB0aGlzLmhvdXJTZWxlY3RFdmVudChcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3VycyxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnNMaSxcbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgO1tdLmZvckVhY2guY2FsbCh0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaSwgaG91ciA9PiB7XG4gICAgICAgIGhvdXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5ob3VyU2VsZWN0RXZlbnQoXG4gICAgICAgICAgICBldmVudCxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3VycyxcbiAgICAgICAgICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vyc0xpLFxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICA7W10uZm9yRWFjaC5jYWxsKHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpLCBtaW51dGUgPT4ge1xuICAgICAgICBtaW51dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgdGhpcy5taW51dGVTZWxlY3RFdmVudChcbiAgICAgICAgICAgIGV2ZW50LFxuICAgICAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzLFxuICAgICAgICAgICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzTGksXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgdGhpcy5jYWNoZWRFbHMud3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtdHAtZXZlbnRzLXNldCcpXG5cbiAgICAgIHRoaXMuZXZlbnRzLm9uKCdob3Vyc1Nob3duJywgKCkgPT4ge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodEhvdXJEaXNwbGF5R3JvdXAoKVxuICAgICAgfSlcblxuICAgICAgdGhpcy5ldmVudHMub24oJ21pbnV0ZXNTaG93bicsICgpID0+IHtcbiAgICAgICAgdGhpcy5oaWdobGlnaHRNaW51dGVEaXNwbGF5R3JvdXAoKVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgcGlja2VyIGluIHRoZSBET01cbiAgICpcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNob3coKSB7XG4gICAgY29uc3QgaXNNaWxpdGFyeUZvcm1hdCA9IHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpXG5cbiAgICAvLyBibHVyIGlucHV0IHRvIHByZXZlbnQgb25zY3JlZW4ga2V5Ym9hcmQgZnJvbSBkaXNwbGF5aW5nIChtb2JpbGUgaGFjaylcbiAgICB0aGlzLmlucHV0RWwuYmx1cigpXG4gICAgdGhpcy50b2dnbGVIb3Vyc1Zpc2libGUodHJ1ZSwgaXNNaWxpdGFyeUZvcm1hdClcbiAgICB0aGlzLnRvZ2dsZU1pbnV0ZXNWaXNpYmxlKClcblxuICAgIGlmICh0aGlzLmlucHV0RWwudmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRUaW1lKHRoaXMuaW5wdXRFbC52YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXREaXNwbGF5VGltZSh7XG4gICAgICAgIGhvdXJzOiBpc01pbGl0YXJ5Rm9ybWF0ID8gJzAwJyA6ICcxMicsXG4gICAgICAgIG1pbnV0ZXM6ICcwJyxcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgdGhpcy5jYWNoZWRFbHMuYm9keS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gICAgdGhpcy5jYWNoZWRFbHMubWVyaWRpZW0uc3R5bGUudmlzaWJpbGl0eSA9IGlzTWlsaXRhcnlGb3JtYXRcbiAgICAgID8gJ25vbmUnXG4gICAgICA6ICd2aXNpYmxlJ1xuICAgIHRoaXMuY2FjaGVkRWxzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGUuaGVpZ2h0ID0gaXNNaWxpdGFyeUZvcm1hdCA/ICc5MHB4JyA6ICcxMDVweCdcblxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ3Nob3cnKVxuICB9XG5cbiAgLyoqXG4gICAqIEV2ZW50IGhhbmRsZSBmb3IgaW5wdXQgZm9jdXNcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGxpc3RlbmVyXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzaG93RXZlbnQoZXZlbnQpIHtcbiAgICB0aGlzLmlucHV0RWwgPSBldmVudC50YXJnZXRcbiAgICB0aGlzLnNob3coKVxuICB9XG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIHBpY2tlciBpbiB0aGUgRE9NXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBoaWRlKCkge1xuICAgIHRoaXMuY2FjaGVkRWxzLm92ZXJsYXkuc3R5bGUuZGlzcGxheSA9ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJ1xuXG4gICAgdGhpcy5pbnB1dEVsLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdibHVyJykpXG4gICAgdGhpcy5yZXNldFN0YXRlKClcbiAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdoaWRlJylcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBwaWNrZXIgZWxlbWVudCBvbiB0aGUgcGFnZVxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gZXZlbnQgbGlzdGVuZXIgY2FsbGJhY2tcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGhpZGVFdmVudChldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG5cbiAgICAvLyBvbmx5IGFsbG93IGV2ZW50IGJhc2VkIGNsb3NlIGlmIGV2ZW50LnRhcmdldCBjb250YWlucyBvbmUgb2YgdGhlc2UgY2xhc3Nlc1xuICAgIC8vIGhhY2sgdG8gcHJldmVudCBvdmVybGF5IGNsb3NlIGV2ZW50IGZyb20gZXZlbnRzLnRyaWdnZXJpbmcgb24gYWxsIGVsZW1lbnRzIGJlY2F1c2VcbiAgICAvLyB0aGV5IGFyZSBjaGlsZHJlbiBvZiBvdmVybGF5XG4gICAgY29uc3QgYWxsb3dlZENsYXNzZXMgPSBbJ210cC1vdmVybGF5JywgJ210cC1hY3Rpb25zX19jYW5jZWwnXVxuICAgIGNvbnN0IHsgY2xhc3NMaXN0IH0gPSBldmVudC50YXJnZXRcbiAgICBjb25zdCBpc0FsbG93ZWQgPSBhbGxvd2VkQ2xhc3Nlcy5zb21lKGFsbG93ZWRDbGFzcyA9PlxuICAgICAgY2xhc3NMaXN0LmNvbnRhaW5zKGFsbG93ZWRDbGFzcyksXG4gICAgKVxuXG4gICAgaWYgKGlzQWxsb3dlZCkge1xuICAgICAgdGhpcy5oaWRlKClcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVzZXQgcGlja2VyIHN0YXRlIHRvIGRlZmF1bHRzXG4gICAqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICByZXNldFN0YXRlKCkge1xuICAgIHRoaXMuY3VycmVudFN0ZXAgPSAnaG91cnMnXG4gICAgdGhpcy50b2dnbGVIb3Vyc1Zpc2libGUodHJ1ZSwgdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KCkpXG4gICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSgpXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWlsaXRhcnlIb3Vyc0xpWzBdLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKVxuICAgIHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtU3BhbnNbMF0uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpXG4gICAgdGhpcy5oaWdobGlnaHRIb3VyRGlzcGxheUdyb3VwKClcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXQgdGhlIGRpc3BsYXllZCB0aW1lLCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gZmlsbCBpbnB1dCB2YWx1ZSBvbiBjb21wbGV0aW9uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfHN0cmluZ30gaG91cnM6IEhvdXIgZGlzcGxheSB0aW1lLFxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IG1pbnV0ZXM6IE1pbnV0ZSBkaXNwbGF5IHRpbWVcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHNldERpc3BsYXlUaW1lKHsgaG91cnMsIG1pbnV0ZXMgfSkge1xuICAgIGlmICh0eXBlb2YgaG91cnMgIT09ICd1bmRlZmluZWQnICYmIE51bWJlci5pc05hTihob3VycykgPT09IGZhbHNlKSB7XG4gICAgICAvLyAudHJpbSgpIGlzIG5vdCBhbGxvd2VkIGlmIGhvdXJzIGlzIG5vdCByZWNvZ25pemVkIGFzIGEgc3RyaW5nLFxuICAgICAgaWYgKHR5cGVvZiBob3VycyA9PT0gJ3N0cmluZycgfHwgaG91cnMgaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUhvdXJzLmlubmVySFRNTCA9IGhvdXJzLnRyaW0oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheUhvdXJzLmlubmVySFRNTCA9IGhvdXJzXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBtaW51dGVzICE9PSAndW5kZWZpbmVkJyAmJiBOdW1iZXIuaXNOYU4obWludXRlcykgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBtaW4gPSBtaW51dGVzIDwgMTAgPyBgMCR7bWludXRlc31gIDogbWludXRlc1xuXG4gICAgICAvLyAudHJpbSgpIGlzIG5vdCBhbGxvd2VkIGlmIG1pbiBpcyBub3QgcmVjb2duaXplZCBhcyBhIHN0cmluZyxcbiAgICAgIC8vIC4uLiBzb21ldGltZXMgKGluIFNhZmFyaSBhbmQgQ2hyb21lKSBpdCBpcyBhbiB1bnRyaW1tYWJsZSBudW1iZXJcbiAgICAgIGlmICh0eXBlb2YgbWluID09PSAnc3RyaW5nJyB8fCBtaW4gaW5zdGFuY2VvZiBTdHJpbmcpIHtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheU1pbnV0ZXMuaW5uZXJIVE1MID0gbWluLnRyaW0oKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jYWNoZWRFbHMuZGlzcGxheU1pbnV0ZXMuaW5uZXJIVE1MID0gbWluXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc3QgbnVtZXJpY0hvdXIgPSBwYXJzZUludChob3VycylcbiAgICAvLyBjb25zdCBudW1lcmljTWludXRlID0gcGFyc2VJbnQobWludXRlcylcbiAgfVxuXG4gIC8qKlxuICAgKiBSb3RhdGUgdGhlIGhhbmQgZWxlbWVudCB0byBzZWxlY3RlZCB0aW1lXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBub2RlSW5kZXggSW5kZXggb2YgYWN0aXZlIGVsZW1lbnRcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluY3JlbWVudCBEZWdyZWUgaW5jcmVtZW50IGVsZW1lbnRzIGFyZSBvblxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcm90YXRlSGFuZChub2RlSW5kZXggPSA5LCBpbmNyZW1lbnQgPSAzMCkge1xuICAgIC8vIDAgaW5kZXggaXMgMTgwIGRlZ3Jlc3MgYmVoaW5kIDAgZGVnXG4gICAgY29uc3Qgcm90YXRlRGVnID0gbm9kZUluZGV4ICogaW5jcmVtZW50IC0gMTgwXG4gICAgY29uc3Qgc3R5bGVWYWwgPSBgcm90YXRlKCR7cm90YXRlRGVnfWRlZylgXG5cbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGUudHJhbnNmb3JtID0gc3R5bGVWYWxcbiAgICB0aGlzLmNhY2hlZEVscy5jbG9ja0hhbmQuc3R5bGVbJy13ZWJraXQtdHJhbnNmb3JtJ10gPSBzdHlsZVZhbFxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZVsnLW1zLXRyYW5zZm9ybSddID0gc3R5bGVWYWxcbiAgfVxuXG4gIHNob3dIb3VycygpIHtcbiAgICBjb25zdCBpc01pbGl0YXJ5Rm9ybWF0ID0gdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KClcbiAgICBjb25zdCBob3VyRWxzID0gaXNNaWxpdGFyeUZvcm1hdFxuICAgICAgPyB0aGlzLmNhY2hlZEVscy5jbG9ja01pbGl0YXJ5SG91cnNMaVxuICAgICAgOiB0aGlzLmNhY2hlZEVscy5jbG9ja0hvdXJzTGlcblxuICAgIHRoaXMudG9nZ2xlSG91cnNWaXNpYmxlKHRydWUsIGlzTWlsaXRhcnlGb3JtYXQpXG4gICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSgpXG4gICAgdGhpcy5yb3RhdGVIYW5kKHRoaXMuZ2V0QWN0aXZlSW5kZXgoaG91ckVscykpXG5cbiAgICB0aGlzLmV2ZW50cy50cmlnZ2VyKCdob3Vyc1Nob3duJylcbiAgfVxuXG4gIHNob3dNaW51dGVzKCkge1xuICAgIGNvbnN0IG1pbnV0ZUVscyA9IHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlc0xpXG5cbiAgICB0aGlzLnRvZ2dsZUhvdXJzVmlzaWJsZSgpXG4gICAgdGhpcy50b2dnbGVNaW51dGVzVmlzaWJsZSh0cnVlKVxuICAgIHRoaXMucm90YXRlSGFuZCh0aGlzLmdldEFjdGl2ZUluZGV4KG1pbnV0ZUVscyksIDYpXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tIYW5kLnN0eWxlLmhlaWdodCA9ICcxMTVweCdcblxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ21pbnV0ZXNTaG93bicpXG4gIH1cblxuICBmaW5pc2goKSB7XG4gICAgdGhpcy50aW1lU2VsZWN0ZWQoKVxuICAgIHRoaXMuaGlkZSgpXG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIGhvdXIgKGJvdGggbWlsaXRhcnkgYW5kIHN0YW5kYXJkKSBjbG9jayB2aXNpYmxpdHkgaW4gRE9NXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNWaXNpYmxlIElzIGNsb2NrIGZhY2UgdG9nZ2xlZCB2aXNpYmxlIG9yIGhpZGRlblxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzTWlsaXRhcnlGb3JtYXQgSXMgdXNpbmcgbWlsaXRhcnkgaG91ciBmb3JtYXRcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHRvZ2dsZUhvdXJzVmlzaWJsZShpc1Zpc2libGUgPSBmYWxzZSwgaXNNaWxpdGFyeUZvcm1hdCA9IGZhbHNlKSB7XG4gICAgaWYgKGlzVmlzaWJsZSkgdGhpcy5jdXJyZW50U3RlcCA9ICdob3VycydcblxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSG91cnMuc3R5bGUuZGlzcGxheSA9XG4gICAgICBpc1Zpc2libGUgJiYgIWlzTWlsaXRhcnlGb3JtYXQgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzLnN0eWxlLmRpc3BsYXkgPVxuICAgICAgaXNWaXNpYmxlICYmIGlzTWlsaXRhcnlGb3JtYXQgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgdGhpcy5jYWNoZWRFbHMuYnV0dG9uTmV4dC5zdHlsZS5kaXNwbGF5ID0gIWlzVmlzaWJsZVxuICAgICAgPyAnaW5saW5lLWJsb2NrJ1xuICAgICAgOiAnbm9uZSdcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGUgbWludXRlIGNsb2NrIHZpc2libGl0eSBpbiBET01cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBpc1Zpc2libGUgSXMgY2xvY2sgZmFjZSB0b2dnbGVkIHZpc2libGUgb3IgaGlkZGVuXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICB0b2dnbGVNaW51dGVzVmlzaWJsZShpc1Zpc2libGUgPSBmYWxzZSkge1xuICAgIGlmIChpc1Zpc2libGUpIHRoaXMuY3VycmVudFN0ZXAgPSAnbWludXRlcydcblxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrTWludXRlcy5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkJhY2suc3R5bGUuZGlzcGxheSA9IGlzVmlzaWJsZVxuICAgICAgPyAnaW5saW5lLWJsb2NrJ1xuICAgICAgOiAnbm9uZSdcbiAgICB0aGlzLmNhY2hlZEVscy5idXR0b25OZXh0LnN0eWxlLmRpc3BsYXkgPSAhaXNWaXNpYmxlXG4gICAgICA/ICdpbmxpbmUtYmxvY2snXG4gICAgICA6ICdub25lJ1xuICAgIHRoaXMuY2FjaGVkRWxzLmJ1dHRvbkZpbmlzaC5zdHlsZS5kaXNwbGF5ID0gaXNWaXNpYmxlXG4gICAgICA/ICdpbmxpbmUtYmxvY2snXG4gICAgICA6ICdub25lJ1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgYWN0aXZlIHRpbWUgZWxlbWVudCBpbmRleFxuICAgKlxuICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSB0aW1lRWxzIENvbGxlY3Rpb24gb2YgdGltZSBlbGVtZW50cyB0byBmaW5kIGFjdGl2ZSBpblxuICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFjdGl2ZSBlbGVtZW50IGluZGV4XG4gICAqL1xuICBnZXRBY3RpdmVJbmRleCh0aW1lRWxzKSB7XG4gICAgbGV0IGFjdGl2ZUluZGV4ID0gMFxuICAgIDtbXS5zb21lLmNhbGwodGltZUVscywgKHRpbWVFbCwgaW5kZXgpID0+IHtcbiAgICAgIGlmICh0aW1lRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtY2xvY2stLWFjdGl2ZScpKSB7XG4gICAgICAgIGFjdGl2ZUluZGV4ID0gaW5kZXhcblxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9KVxuXG4gICAgcmV0dXJuIGFjdGl2ZUluZGV4XG4gIH1cblxuICAvKipcbiAgICogU2V0IHNlbGVjdGVkIHRpbWUgdG8gaW5wdXQgZWxlbWVudFxuICAgKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdGltZVNlbGVjdGVkKCkge1xuICAgIGNvbnN0IGhvdXJzID0gdGhpcy5jYWNoZWRFbHMuZGlzcGxheUhvdXJzLmlubmVySFRNTFxuICAgIGNvbnN0IG1pbnV0ZXMgPSB0aGlzLmNhY2hlZEVscy5kaXNwbGF5TWludXRlcy5pbm5lckhUTUxcbiAgICBjb25zdCBtZXJpZGllbSA9IHRoaXMuaXNNaWxpdGFyeUZvcm1hdCgpXG4gICAgICA/ICcnXG4gICAgICA6IEFycmF5LmZyb20odGhpcy5jYWNoZWRFbHMubWVyaWRpZW1TcGFucykuZmluZChpID0+XG4gICAgICAgICAgaS5jbGFzc0xpc3QuY29udGFpbnMoJ210cC1tZXJpZGllbS0tYWN0aXZlJyksXG4gICAgICAgICkuaW5uZXJUZXh0XG5cbiAgICBjb25zdCB0aW1lVmFsdWUgPSBgJHtob3Vyc306JHttaW51dGVzfSAke21lcmlkaWVtfWBcblxuICAgIHRoaXMuaW5wdXRFbC52YWx1ZSA9IHRpbWVWYWx1ZS50cmltKClcbiAgICB0aGlzLmlucHV0RWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpXG4gICAgdGhpcy5ldmVudHMudHJpZ2dlcigndGltZVNlbGVjdGVkJywge1xuICAgICAgaG91cnMsXG4gICAgICBtaW51dGVzLFxuICAgICAgbWVyaWRpZW0sXG4gICAgICB2YWx1ZTogdGltZVZhbHVlLFxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogU2V0IGFjdGl2ZSBjbG9jayBmYWNlIGVsZW1lbnRcbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBjb250YWluZXJFbCBOZXcgYWN0aXZlIGVsZW1lbnRzIC5wYXJlbnROb2RlXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gYWN0aXZlRWwgRWxlbWVudCB0byBzZXQgYWN0aXZlXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBzZXRBY3RpdmVFbChjb250YWluZXJFbCwgYWN0aXZlRWwpIHtcbiAgICBjb25zdCBhY3RpdmVDbGFzc05hbWUgPSAnbXRwLWNsb2NrLS1hY3RpdmUnXG4gICAgY29uc3QgY3VycmVudEFjdGl2ZSA9IGNvbnRhaW5lckVsLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYWN0aXZlQ2xhc3NOYW1lKVswXVxuXG4gICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSlcbiAgICBhY3RpdmVFbC5jbGFzc0xpc3QuYWRkKGFjdGl2ZUNsYXNzTmFtZSlcbiAgfVxuXG4gIC8qKlxuICAgKiBNZXJpZGllbSBzZWxlY3QgZXZlbnQgaGFuZGxlclxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXJcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIG1lcmlkaWVtU2VsZWN0RXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBhY3RpdmVDbGFzc05hbWUgPSAnbXRwLW1lcmlkaWVtLS1hY3RpdmUnXG4gICAgY29uc3QgZWxlbWVudCA9IGV2ZW50LnRhcmdldFxuICAgIGNvbnN0IGN1cnJlbnRBY3RpdmUgPSB0aGlzLmNhY2hlZEVscy5tZXJpZGllbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgYWN0aXZlQ2xhc3NOYW1lLFxuICAgIClbMF1cblxuICAgIGlmICghY3VycmVudEFjdGl2ZS5pc0VxdWFsTm9kZShlbGVtZW50KSkge1xuICAgICAgY3VycmVudEFjdGl2ZS5jbGFzc0xpc3QucmVtb3ZlKGFjdGl2ZUNsYXNzTmFtZSlcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhY3RpdmVDbGFzc05hbWUpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEhvdXIgc2VsZWN0IGV2ZW50IGhhbmRsZXJcbiAgICpcbiAgICogQHBhcmFtIHtFdmVudH0gZXZlbnQgRXZlbnQgb2JqZWN0IHBhc3NlZCBmcm9tIGxpc3RlbmVyXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGNvbnRhaW5lckVsIEVsZW1lbnQgY29udGFpbmluZyB0aW1lIGxpc3QgZWxlbWVudHNcbiAgICogQHBhcmFtIHtIVE1MQ29sbGVjdGlvbn0gbGlzdEVscyBDb2xsZWN0aW9uIG9mIGxpc3QgZWxlbWVudHNcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGhvdXJTZWxlY3RFdmVudChldmVudCwgY29udGFpbmVyRWwsIGxpc3RFbHMpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuXG4gICAgY29uc3QgbmV3QWN0aXZlID0gZXZlbnQudGFyZ2V0XG4gICAgY29uc3QgcGFyZW50RWwgPSBuZXdBY3RpdmUucGFyZW50RWxlbWVudFxuICAgIGNvbnN0IGlzSW5uZXIgPSBwYXJlbnRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ210cC1jbG9ja19faG91cnMtLWlubmVyJylcblxuICAgIHRoaXMuY2FjaGVkRWxzLmNsb2NrSGFuZC5zdHlsZS5oZWlnaHQgPSBpc0lubmVyID8gJzkwcHgnIDogJzEwNXB4J1xuICAgIHRoaXMuc2V0QWN0aXZlRWwoY29udGFpbmVyRWwsIG5ld0FjdGl2ZSlcblxuICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5nZXRBY3RpdmVJbmRleChsaXN0RWxzKVxuXG4gICAgdGhpcy5zZXREaXNwbGF5VGltZSh7IGhvdXJzOiBuZXdBY3RpdmUuaW5uZXJIVE1MIH0pXG4gICAgdGhpcy5yb3RhdGVIYW5kKGFjdGl2ZUluZGV4KVxuICAgIHRoaXMuZXZlbnRzLnRyaWdnZXIoJ2hvdXJTZWxlY3RlZCcpXG4gIH1cblxuICAvKipcbiAgICogSG91ciBzZWxlY3QgZXZlbnQgaGFuZGxlclxuICAgKlxuICAgKiBAcGFyYW0ge0V2ZW50fSBldmVudCBFdmVudCBvYmplY3QgcGFzc2VkIGZyb20gbGlzdGVuZXJcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gY29udGFpbmVyRWwgRWxlbWVudCBjb250YWluaW5nIHRpbWUgbGlzdCBlbGVtZW50c1xuICAgKiBAcGFyYW0ge0hUTUxDb2xsZWN0aW9ufSBsaXN0RWxzIENvbGxlY3Rpb24gb2YgbGlzdCBlbGVtZW50c1xuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgbWludXRlU2VsZWN0RXZlbnQoZXZlbnQsIGNvbnRhaW5lckVsLCBsaXN0RWxzKSB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcblxuICAgIGNvbnN0IG5ld0FjdGl2ZSA9IGV2ZW50LnRhcmdldFxuXG4gICAgdGhpcy5zZXRBY3RpdmVFbChjb250YWluZXJFbCwgbmV3QWN0aXZlKVxuXG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmdldEFjdGl2ZUluZGV4KGxpc3RFbHMpXG5cbiAgICB0aGlzLnNldERpc3BsYXlUaW1lKHsgbWludXRlczogYWN0aXZlSW5kZXggfSlcbiAgICB0aGlzLnJvdGF0ZUhhbmQoYWN0aXZlSW5kZXgsIDYpXG4gICAgdGhpcy5ldmVudHMudHJpZ2dlcignbWludXRlU2VsZWN0ZWQnKVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHBpY2tlciBzZXQgdG8gbWlsaXRhcnkgdGltZSBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IElzIGluIG1pbGl0YXJ5IHRpbWUgbW9kZVxuICAgKi9cbiAgaXNNaWxpdGFyeUZvcm1hdCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbnB1dEVsLm10cE9wdGlvbnMudGltZUZvcm1hdCA9PT0gJ21pbGl0YXJ5J1xuICB9XG5cbiAgc2V0VGltZSh0aW1lU3RyaW5nKSB7XG4gICAgLy8gdGhpcy5pbnB1dEVsLm10cE9wdGlvbnMuaW5pdGlhbFZhbHVlXG4gICAgY29uc3Qgb3ZlcmFsbENvbXBvbmVudHMgPSB0aW1lU3RyaW5nLnNwbGl0KCcgJylcbiAgICBjb25zdCB0aW1lUGFydHMgPSBvdmVyYWxsQ29tcG9uZW50c1swXS5zcGxpdCgnOicpLm1hcChpID0+IHBhcnNlSW50KGksIDEwKSlcblxuICAgIC8vIEZpcnN0LCBzZXQgdGhlIGRpc3BsYXkgdGltZSAoYXQgdGhlIHRvcCkgY29ycmVjdGx5LlxuICAgIHRoaXMuc2V0RGlzcGxheVRpbWUoeyBob3VyczogdGltZVBhcnRzWzBdLCBtaW51dGVzOiB0aW1lUGFydHNbMV0gfSlcblxuICAgIGxldCBob3Vyc0luZGV4ID0gdGltZVBhcnRzWzBdXG5cbiAgICBpZiAodGhpcy5pc01pbGl0YXJ5Rm9ybWF0KCkpIHtcbiAgICAgIGhvdXJzSW5kZXggPSB0aW1lUGFydHNbMF0gPiAxMiA/IHRpbWVQYXJ0c1swXSAtIDEyIDogdGltZVBhcnRzWzBdICsgMTJcblxuICAgICAgaWYgKGhvdXJzSW5kZXggPT09IDI0KSBob3Vyc0luZGV4ID0gMTJcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYWN0aXZlTWVyaWRpYW5DbGFzcyA9ICdtdHAtbWVyaWRpZW0tLWFjdGl2ZSdcblxuICAgICAgY29uc3QgbWVyaWRpZW0gPSBvdmVyYWxsQ29tcG9uZW50c1sxXVxuXG4gICAgICBjb25zdCBjdXJyZW50TWVyaWRpZW0gPSB0aGlzLmNhY2hlZEVscy5tZXJpZGllbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgICBhY3RpdmVNZXJpZGlhbkNsYXNzLFxuICAgICAgKVswXVxuXG4gICAgICBjb25zdCBjb3JyZWN0TWVyaWRpZW0gPSBBcnJheS5mcm9tKHRoaXMuY2FjaGVkRWxzLm1lcmlkaWVtU3BhbnMpLmZpbmQoXG4gICAgICAgIGkgPT4gaS5pbm5lclRleHQgPT09IG1lcmlkaWVtLFxuICAgICAgKVxuXG4gICAgICBjdXJyZW50TWVyaWRpZW0uY2xhc3NMaXN0LnJlbW92ZShhY3RpdmVNZXJpZGlhbkNsYXNzKVxuICAgICAgY29ycmVjdE1lcmlkaWVtLmNsYXNzTGlzdC5hZGQoYWN0aXZlTWVyaWRpYW5DbGFzcylcbiAgICB9XG5cbiAgICBpZiAoaG91cnNJbmRleCA9PT0gMTIpIGhvdXJzSW5kZXggPSAwXG5cbiAgICBjb25zdCBob3Vyc0xJID0gdGhpcy5pc01pbGl0YXJ5Rm9ybWF0KClcbiAgICAgID8gdGhpcy5jYWNoZWRFbHMuY2xvY2tNaWxpdGFyeUhvdXJzTGlcbiAgICAgIDogdGhpcy5jYWNoZWRFbHMuY2xvY2tIb3Vyc0xpXG4gICAgY29uc3QgbWludXRlc0xJID0gdGhpcy5jYWNoZWRFbHMuY2xvY2tNaW51dGVzTGlcblxuICAgIC8vIENsZWFyIGV4aXN0aW5nIGFjdGl2ZSBob3VycywgdGhlbiBzZXQgdGhlIGNvcnJlY3QgaG91cnMgdmFsdWUuXG4gICAgQXJyYXkuZnJvbShob3Vyc0xJKVxuICAgICAgLmZpbHRlcihpID0+IGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtY2xvY2stLWFjdGl2ZScpKVxuICAgICAgLmZvckVhY2goaSA9PiBpLmNsYXNzTGlzdC5yZW1vdmUoJ210cC1jbG9jay0tYWN0aXZlJykpXG4gICAgaG91cnNMSVtob3Vyc0luZGV4XS5jbGFzc0xpc3QuYWRkKCdtdHAtY2xvY2stLWFjdGl2ZScpXG5cbiAgICAvLyBDbGVhciBleGlzdGluZyBhY3RpdmUgbWludXRlcywgdGhlbiBzZXQgdGhlIGNvcnJlY3QgbWludXRlIHZhbHVlLlxuICAgIEFycmF5LmZyb20obWludXRlc0xJKVxuICAgICAgLmZpbHRlcihpID0+IGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtY2xvY2stLWFjdGl2ZScpKVxuICAgICAgLmZvckVhY2goaSA9PiBpLmNsYXNzTGlzdC5yZW1vdmUoJ210cC1jbG9jay0tYWN0aXZlJykpXG4gICAgbWludXRlc0xJW3RpbWVQYXJ0c1sxXV0uY2xhc3NMaXN0LmFkZCgnbXRwLWNsb2NrLS1hY3RpdmUnKVxuXG4gICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPT09ICdob3VycycpIHtcbiAgICAgIHRoaXMucm90YXRlSGFuZCh0aGlzLmdldEFjdGl2ZUluZGV4KGhvdXJzTEkpKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdGF0ZUhhbmQodGhpcy5nZXRBY3RpdmVJbmRleChtaW51dGVzTEkpKVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBwaWNrZXIgb2JqZWN0IGhhcyBhbHJlYWR5IHNldCBldmVudHMgb24gcGlja2VyIGVsZW1lbnRzXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IEhhcyBldmVudHMgYmVlbiBzZXQgb24gcGlja2VyIGVsZW1lbnRzXG4gICAqL1xuICBoYXNTZXRFdmVudHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVkRWxzLndyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdtdHAtZXZlbnRzLXNldCcpXG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGVtcGxhdGUgaGFzIGFscmVhZHkgYmVlbiBhcHBlbmRlZCB0byBET01cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gSXMgdGVtcGxhdGUgaW4gRE9NXG4gICAqL1xuICBpc1RlbXBsYXRlSW5ET00oKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbXRwLW92ZXJsYXknKVswXSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lUGlja2VyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvdGltZXBpY2tlci5qcyIsImNvbnN0IHRlbXBsYXRlID0gYFxuPGRpdiBjbGFzcz1cIm10cC1vdmVybGF5XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICA8ZGl2IGNsYXNzPVwibXRwLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1kaXNwbGF5XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10cC10aW1lLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJob3VyLWdyb3VwIGFjdGl2ZS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10cC1kaXNwbGF5X19ob3Vyc1wiPjEyPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm10cC1kaXNwbGF5X19zcGFjZXJcIj4maGFpcnNwOzwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtaW51dGUtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtZGlzcGxheV9fc2VwYXJhdG9yXCI+Ojwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtZGlzcGxheV9fc3BhY2VyXCI+JmhhaXJzcDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXRwLWRpc3BsYXlfX21pbnV0ZXNcIj4wMDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLW1lcmlkaWVtXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtdHAtbWVyaWRpZW0tLWFjdGl2ZVwiPmEubS48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+cC5tLjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtbWVyaWRpZW0gLS0+XG4gICAgICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtZGlzcGxheSAtLT5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm10cC1waWNrZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtY2xvY2tcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19jZW50ZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19oYW5kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19fb3V0ZXIgbXRwLWNsb2NrX19ob3Vyc1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10cC1jbG9jay0tYWN0aXZlXCI+MTI8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT4yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjM8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT41PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjY8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT44PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjk8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTE8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19fb3V0ZXIgbXRwLWNsb2NrX19taW51dGVzXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibXRwLWNsb2NrLS1hY3RpdmVcIj4wPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPiZtaWRkb3Q7PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPjU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MTU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MjA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MjU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MzA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+MzU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NDA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NDU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NTA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+NTU8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+Jm1pZGRvdDs8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwibXRwLWNsb2NrX190aW1lIG10cC1jbG9ja19faG91cnMtbWlsaXRhcnlcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19ob3Vycy0taW5uZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm10cC1jbG9jay0tYWN0aXZlXCI+MDA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEzPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xNDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTU8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjE2PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xNzwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTg8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjE5PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MjE8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjIyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yMzwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXRwLWNsb2NrX19ob3Vyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjEyPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4yPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4zPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT40PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT41PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT42PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT43PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT44PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT45PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT4xMDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+MTE8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+PCEtLSBFTkQgLm10cC1jbG9jayAtLT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtdHAtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fY2FuY2VsXCI+Q2FuY2VsPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtdHAtYWN0aW9uc19fYnV0dG9uIG10cC1hY3Rpb25zX19iYWNrXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5CYWNrPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtdHAtYWN0aW9uc19fYnV0dG9uIG10cC1hY3Rpb25zX19uZXh0XCI+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibXRwLWFjdGlvbnNfX2J1dHRvbiBtdHAtYWN0aW9uc19fZmluaXNoXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIj5Eb25lPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj48IS0tIEVORCAubXRwLWFjdGlvbnMgLS0+XG4gICAgICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtcGlja2VyIC0tPlxuICAgIDwvZGl2PjwhLS0gRU5EIC5tdHAtd3JhcHBlciAtLT5cbjwvZGl2PjwhLS0gRU5EIC5tdHAtb3ZlcmxheSAtLT5cbmBcblxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy90ZW1wbGF0ZS5qcyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnRpbnVlICovXG4vKipcbiAqIE9iamVjdC5hc3NpZ24gcG9seWZpbGxcbiAqXG4gKiBAcGFyYW0ge29iamVjdH0gdGFyZ2V0IFRhcmdldCBvYmplY3QgdG8gbWVyZ2UgcHJvcGVydGllcyBvbnRvXG4gKiBAcGFyYW0gey4uLm9iamVjdH0gc291cmNlcyAgU291cmNlIG9iamVjdCB0byBtZXJnZSBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm4ge29iamVjdH0gVGFyZ2V0IG9iamVjdCB3aXRoIG1lcmdlZCBwcm9wZXJ0aWVzXG4gKi9cbmZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIC4uLnNvdXJjZXMpIHtcbiAgaWYgKHRhcmdldCA9PT0gJ3VuZGVmaW5lZCcgfHwgdGFyZ2V0ID09PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgZmlyc3QgYXJndW1lbnQgdG8gb2JqZWN0JylcbiAgfVxuXG4gIGNvbnN0IHRvID0gT2JqZWN0KHRhcmdldClcblxuICBmb3IgKGxldCBpbmMgPSAwOyBpbmMgPCBzb3VyY2VzLmxlbmd0aDsgaW5jICs9IDEpIHtcbiAgICBsZXQgbmV4dFNvdXJjZSA9IHNvdXJjZXNbaW5jXVxuXG4gICAgaWYgKG5leHRTb3VyY2UgPT09ICd1bmRlZmluZWQnIHx8IG5leHRTb3VyY2UgPT09IG51bGwpIHtcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgbmV4dFNvdXJjZSA9IE9iamVjdChuZXh0U291cmNlKVxuXG4gICAgY29uc3Qga2V5c0FycmF5ID0gT2JqZWN0LmtleXMobmV4dFNvdXJjZSlcblxuICAgIGZvciAoXG4gICAgICBsZXQgbmV4dEluZGV4ID0gMCwgbGVuID0ga2V5c0FycmF5Lmxlbmd0aDtcbiAgICAgIG5leHRJbmRleCA8IGxlbjtcbiAgICAgIG5leHRJbmRleCArPSAxXG4gICAgKSB7XG4gICAgICBjb25zdCBuZXh0S2V5ID0ga2V5c0FycmF5W25leHRJbmRleF1cbiAgICAgIGNvbnN0IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG5leHRTb3VyY2UsIG5leHRLZXkpXG5cbiAgICAgIGlmIChkZXNjICE9PSAndW5kZWZpbmVkJyAmJiBkZXNjLmVudW1lcmFibGUpIHtcbiAgICAgICAgdG9bbmV4dEtleV0gPSBuZXh0U291cmNlW25leHRLZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRvXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzc2lnblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2Fzc2lnbi5qcyIsIi8qKlxuICogQGNsYXNzIEV2ZW50c1xuICpcbiAqIEBwcm9wIHtvYmplY3QuPHN0cmluZyxmdW5jdGlvbj59IGV2ZW50cyAtIEhhc2ggdGFibGUgb2YgZXZlbnRzIGFuZCB0aGVpciBhc3NpZ25lZCBoYW5kbGVyIGNhbGxiYWNrc1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudHMge1xuICBldmVudHMgPSB7fVxuXG4gIC8qKlxuICAgICAqIFNldCBoYW5kbGVyIG9uIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lIHRvIHNldCBoYW5kbGVyIHRvXG4gICAgICogQHBhcmFtIHtmdW5jfSBoYW5kbGVyIC0gSGFuZGxlciBmdW5jdGlvbiBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge3ZvaWR9XG4gICAgICovXG4gIG9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgaWYgKCF0aGlzLmV2ZW50c1tldmVudF0pIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdXG4gICAgfVxuXG4gICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2goaGFuZGxlcilcbiAgfVxuXG4gIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgZXZlbnQgaGFuZGxlciBmb3IgdGhlIGdpdmVuIGV2ZW50XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgLSBFdmVudCBuYW1lIHRvIHJlbW92ZSBoYW5kbGVyIGZyb21cbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICBvZmYoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdKSB7XG4gICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgICAqIFRyaWdnZXIgZXZlbnQgd2l0aCBwYXJhbXNcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudCAtIEV2ZW50IHRvIHRyaWdnZXJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIC0gUGFyYW1ldGVycyB0byBwYXNzIHRvIGV2ZW50IGhhbmRsZXJcbiAgICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgICAqL1xuICB0cmlnZ2VyKGV2ZW50LCBwYXJhbXMpIHtcbiAgICBpZiAodGhpcy5ldmVudHNbZXZlbnRdICYmIHRoaXMuZXZlbnRzW2V2ZW50XS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlcihwYXJhbXMpKVxuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2V2ZW50cy5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2Fzcy9tYWluLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiLCJpbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWVwaWNrZXInXG5cbi8vIGNvbnNvbGUubG9nKFRpbWVQaWNrZXIpXG53aW5kb3cuVGltZVBpY2tlciA9IFRpbWVQaWNrZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9nbG9iYWwtaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9
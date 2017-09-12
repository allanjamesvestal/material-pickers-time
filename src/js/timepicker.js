import template from './template';
import assign from './assign';
import Events from './events';

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
 * @prop {HTMLCollection} cachedEls.clockMilitaryHoursLi - Militar Hour li elements clockMilitaryHours('li')
 */
class TimePicker {
    template = template;
    defaultOptions = {
        timeFormat: 'standard',
        autoNext: false,
    };
    cachedEls = {};

    /**
     * Initialize new TimePicker instance
     *
     * @return {TimePicker} New TimePicker instance
     */
    constructor() {
        this.events = new Events();

        this.setupTemplate();

        this.cachedEls.body = document.body;
        this.cachedEls.overlay = this.cachedEls.body.getElementsByClassName('mtp-overlay')[0];
        this.cachedEls.wrapper = this.cachedEls.overlay.getElementsByClassName('mtp-wrapper')[0];
        this.cachedEls.picker = this.cachedEls.wrapper.getElementsByClassName('mtp-picker')[0];
        this.cachedEls.meridiem = this.cachedEls.wrapper.getElementsByClassName('mtp-meridiem')[0];
        this.cachedEls.meridiemSpans = this.cachedEls.meridiem.getElementsByTagName('span');
        this.cachedEls.displayHours = this.cachedEls.wrapper.getElementsByClassName('mtp-display__hours')[0];
        this.cachedEls.displayMinutes = this.cachedEls.wrapper.getElementsByClassName('mtp-display__minutes')[0];
        this.cachedEls.displayMeridiem = this.cachedEls.wrapper.getElementsByClassName('mtp-display__meridiem')[0];
        this.cachedEls.buttonCancel = this.cachedEls.picker.getElementsByClassName('mtp-actions__cancel')[0];
        this.cachedEls.buttonBack = this.cachedEls.picker.getElementsByClassName('mtp-actions__back')[0];
        this.cachedEls.buttonNext = this.cachedEls.picker.getElementsByClassName('mtp-actions__next')[0];
        this.cachedEls.buttonFinish = this.cachedEls.picker.getElementsByClassName('mtp-actions__finish')[0];
        this.cachedEls.clockHours = this.cachedEls.picker.getElementsByClassName('mtp-clock__hours')[0];
        this.cachedEls.clockMinutes = this.cachedEls.picker.getElementsByClassName('mtp-clock__minutes')[0];
        this.cachedEls.clockMilitaryHours = this.cachedEls.picker.getElementsByClassName('mtp-clock__hours-military')[0];
        this.cachedEls.clockHand = this.cachedEls.picker.getElementsByClassName('mtp-clock__hand')[0];
        this.cachedEls.clockHoursLi = this.cachedEls.clockHours.getElementsByTagName('li');
        this.cachedEls.clockMinutesLi = this.cachedEls.clockMinutes.getElementsByTagName('li');
        this.cachedEls.clockMilitaryHoursLi = this.cachedEls.clockMilitaryHours.getElementsByTagName('li');

        this.setEvents();

        return this;
    }

    /**
     * Bind event to the input element to open when `focus` event is events.triggered
     *
     * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
     * @param {object} options Options to merged with defaults and set to input element object
     * @return {void}
     */
    bindInput(inputEl, options = {}) {
        const element = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);

        element.mtpOptions = assign({}, this.defaultOptions, options);
        element.addEventListener('focus', event => this.showEvent(event));
    }

    /**
     * Open picker with the input provided in context without binding events
     *
     * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
     * @param {object} options Options to merged with defaults and set to input element object
     * @return {void}
     */
    openOnInput(inputEl, options = {}) {
        this.inputEl = inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl);
        this.inputEl.mtpOptions = assign({}, this.defaultOptions, options);
        this.show();
    }

    /**
     * Setup the template in DOM if not already
     *
     * @return {void}
     */
    setupTemplate() {
        if (!this.isTemplateInDOM()) {
            document.body.insertAdjacentHTML('beforeend', template);
        }
    }

    /**
     * Set the events on picker elements
     *
     * @return {void}
     */
    setEvents() {
        if (!this.hasSetEvents()) {
            // close
            this.cachedEls.overlay.addEventListener('click', event => this.hideEvent(event));

            this.cachedEls.buttonCancel.addEventListener('click', event => this.hideEvent(event));
            this.cachedEls.buttonNext.addEventListener('click', () => this.showMinutes());
            this.cachedEls.buttonBack.addEventListener('click', () => this.showHours());
            this.cachedEls.buttonFinish.addEventListener('click', () => this.finish());

            // meridiem select events
            [].forEach.call(this.cachedEls.meridiemSpans, span => {
                span.addEventListener('click', event => this.meridiemSelectEvent(event));
            });

            // time select events
            [].forEach.call(this.cachedEls.clockHoursLi, hour => {
                hour.addEventListener('click', event => {
                    this.hourSelectEvent(event, this.cachedEls.clockHours, this.cachedEls.clockHoursLi);
                });
            });
            [].forEach.call(this.cachedEls.clockMilitaryHoursLi, hour => {
                hour.addEventListener('click', event => {
                    this.hourSelectEvent(event, this.cachedEls.clockMilitaryHours, this.cachedEls.clockMilitaryHoursLi);
                });
            });
            [].forEach.call(this.cachedEls.clockMinutesLi, minute => {
                minute.addEventListener('click', event => {
                    this.minuteSelectEvent(event, this.cachedEls.clockMinutes, this.cachedEls.clockMinutesLi);
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
    show() {
        const isMilitaryFormat = this.isMilitaryFormat();

        // blur input to prevent onscreen keyboard from displaying (mobile hack)
        this.inputEl.blur();
        this.toggleHoursVisible(true, isMilitaryFormat);
        this.toggleMinutesVisible();
        this.setDisplayTime({
            hours: isMilitaryFormat ? '00' : '12',
            minutes: '0',
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
    showEvent(event) {
        this.inputEl = event.target;
        this.show();
    }

    /**
     * Hide the picker in the DOM
     *
     * @return {void}
     */
    hide() {
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
    hideEvent(event) {
        event.stopPropagation();

        // only allow event based close if event.target contains one of these classes
        // hack to prevent overlay close event from events.triggering on all elements because
        // they are children of overlay
        const allowedClasses = ['mtp-overlay', 'mtp-actions__cancel'];
        const classList = event.target.classList;
        const isAllowed = allowedClasses.some(allowedClass => classList.contains(allowedClass));

        if (isAllowed) {
            this.hide();
        }
    }

    /**
     * Reset picker state to defaults
     *
     * @return {void}
     */
    resetState() {
        this.currentStep = 0;
        this.toggleHoursVisible(true, this.isMilitaryFormat());
        this.toggleMinutesVisible();
        this.cachedEls.clockHoursLi[0].dispatchEvent(new Event('click'));
        this.cachedEls.clockMinutesLi[0].dispatchEvent(new Event('click'));
        this.cachedEls.clockMilitaryHoursLi[0].dispatchEvent(new Event('click'));
        this.cachedEls.meridiemSpans[0].dispatchEvent(new Event('click'));
    }

    /**
     * Set the displayed time, which will be used to fill input value on completetion
     *
     * @param {object} hours: Hour display time, minutes: Minute display time
     * @return {void}
     */
    setDisplayTime({hours, minutes}) {
        if (hours) {
            // .trim() is not allowed if hours is not recognized as a string,
            if (typeof hours === 'string' || hours instanceof String) {
		this.cachedEls.displayHours.innerHTML = hours.trim();
            } else {
                this.cachedEls.displayHours.innerHTML = hours;
            }
        }

	if (minutes) {
            const min = minutes < 10 ? `0${minutes}` : minutes;

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
     * @param {integer} nodeIndex Index of active element
     * @param {integer} increment Degree increment elements are on
     * @return {void}
     */
    rotateHand(nodeIndex = 9, increment = 30) {
        // 0 index is 180 degress behind 0 deg
        const rotateDeg = nodeIndex * increment - 180;
        const styleVal = `rotate(${rotateDeg}deg)`;

        this.cachedEls.clockHand.style.transform = styleVal;
        this.cachedEls.clockHand.style['-webkit-transform'] = styleVal;
        this.cachedEls.clockHand.style['-ms-transform'] = styleVal;
    }

    showHours() {
        const isMilitaryFormat = this.isMilitaryFormat();
        const hourEls = isMilitaryFormat ? this.cachedEls.clockMilitaryHoursLi : this.cachedEls.clockHoursLi;

        this.toggleHoursVisible(true, isMilitaryFormat);
        this.toggleMinutesVisible();
        this.rotateHand(this.getActiveIndex(hourEls));
    }

    showMinutes() {
        const minuteEls = this.cachedEls.clockMinutesLi;

        this.toggleHoursVisible();
        this.toggleMinutesVisible(true);
        this.rotateHand(this.getActiveIndex(minuteEls), 6);
        this.cachedEls.clockHand.style.height = '115px';
    }

    finish() {
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
    toggleHoursVisible(isVisible = false, isMilitaryFormat = false) {
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
    toggleMinutesVisible(isVisible = false) {
        this.cachedEls.clockMinutes.style.display = isVisible ? 'block' : 'none';
        this.cachedEls.buttonBack.style.display = isVisible ? 'inline-block' : 'none';
        this.cachedEls.buttonNext.style.display = !isVisible ? 'inline-block' : 'none';
        this.cachedEls.buttonFinish.style.display = isVisible ? 'inline-block' : 'none';
    }

    /**
     * Get the active time element index
     *
     * @param {HTMLCollection} timeEls Collection of time elements to find active in
     * @return {integer} Active element index
     */
    getActiveIndex(timeEls) {
        let activeIndex = 0;

        [].some.call(timeEls, (timeEl, index) => {
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
    timeSelected() {
        const hours = this.cachedEls.displayHours.innerHTML;
        const minutes = this.cachedEls.displayMinutes.innerHTML;
        const meridiem = this.isMilitaryFormat() ? '' : this.cachedEls.displayMeridiem.innerHTML;
        const timeValue = `${hours}:${minutes} ${meridiem}`;

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
    setActiveEl(containerEl, activeEl) {
        const activeClassName = 'mtp-clock--active';
        const currentActive = containerEl.getElementsByClassName(activeClassName)[0];

        currentActive.classList.remove(activeClassName);
        activeEl.classList.add(activeClassName);
    }

    /**
     * Meridiem select event handler
     *
     * @param {Evenet} event Event object passed from listener
     * @return {void}
     */
    meridiemSelectEvent(event) {
        const activeClassName = 'mtp-clock--active';
        const element = event.target;
        const currentActive = this.cachedEls.meridiem.getElementsByClassName(activeClassName)[0];
        const value = element.innerHTML;

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
    hourSelectEvent(event, containerEl, listEls) {
        event.stopPropagation();

        const newActive = event.target;
        const parentEl = newActive.parentElement;
        const isInner = parentEl.classList.contains('mtp-clock__hours--inner');

        this.cachedEls.clockHand.style.height = isInner ? '90px' : '105px';
        this.setActiveEl(containerEl, newActive);

        const activeIndex = this.getActiveIndex(listEls);

        this.setDisplayTime({hours: newActive.innerHTML});
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
    minuteSelectEvent(event, containerEl, listEls) {
        event.stopPropagation();

        const newActive = event.target;

        this.setActiveEl(containerEl, newActive);

        const activeIndex = this.getActiveIndex(listEls);
        const displayTime = activeIndex;

        this.setDisplayTime({minutes: displayTime});
        this.rotateHand(activeIndex, 6);
        this.events.trigger('minuteSelected');
    }

    /**
     * Check if picker set to military time mode
     *
     * @return {boolean} Is in military time mode
     */
    isMilitaryFormat() {
        return Boolean(this.inputEl.mtpOptions.timeFormat === 'military');
    }

    /**
     * Check if picker object has already set events on picker elements
     *
     * @return {boolean} Has events been set on picker elements
     */
    hasSetEvents() {
        return this.cachedEls.wrapper.classList.contains('mtp-events-set');
    }

    /**
     * Check if template has already been appended to DOM
     *
     * @return {boolean} Is template in DOM
     */
    isTemplateInDOM() {
        return Boolean(document.getElementsByClassName('mtp-overlay')[0]);
    }
}

export default TimePicker;

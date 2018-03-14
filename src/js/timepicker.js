import template from './template'
import assign from './assign'
import Events from './events'
import '../sass/main.scss'

/**
 * @class TimePicker
 */
class TimePicker {
  template = template
  defaultOptions = {
    timeFormat: 'standard',
    autoNext: false,
  }
  cachedEls = {}

  /**
   * Initialize new TimePicker instance
   *
   * @return {TimePicker} New TimePicker instance
   */
  constructor() {
    this.events = new Events()

    this.setupTemplate()

    this.cachedEls.body = document.body
    ;[this.cachedEls.overlay] = this.cachedEls.body.getElementsByClassName(
      'mtp-overlay',
    )
    ;[this.cachedEls.wrapper] = this.cachedEls.overlay.getElementsByClassName(
      'mtp-wrapper',
    )
    ;[this.cachedEls.picker] = this.cachedEls.wrapper.getElementsByClassName(
      'mtp-picker',
    )
    ;[this.cachedEls.meridiem] = this.cachedEls.wrapper.getElementsByClassName(
      'mtp-meridiem',
    )
    this.cachedEls.meridiemSpans = this.cachedEls.meridiem.getElementsByTagName(
      'span',
    )
    ;[
      this.cachedEls.displayHours,
    ] = this.cachedEls.wrapper.getElementsByClassName('mtp-display__hours')
    ;[
      this.cachedEls.displayMinutes,
    ] = this.cachedEls.wrapper.getElementsByClassName('mtp-display__minutes')
    // ;[
    //   this.cachedEls.displayMeridiem,
    // ] = this.cachedEls.wrapper.getElementsByClassName('mtp-display__meridiem')
    ;[
      this.cachedEls.buttonCancel,
    ] = this.cachedEls.picker.getElementsByClassName('mtp-actions__cancel')
    ;[this.cachedEls.buttonBack] = this.cachedEls.picker.getElementsByClassName(
      'mtp-actions__back',
    )
    ;[this.cachedEls.buttonNext] = this.cachedEls.picker.getElementsByClassName(
      'mtp-actions__next',
    )
    ;[
      this.cachedEls.buttonFinish,
    ] = this.cachedEls.picker.getElementsByClassName('mtp-actions__finish')

    this.cachedEls.displayGroups = {}
    ;[
      this.cachedEls.displayGroups.hours,
    ] = this.cachedEls.wrapper.getElementsByClassName('hour-group')
    ;[
      this.cachedEls.displayGroups.minutes,
    ] = this.cachedEls.wrapper.getElementsByClassName('minute-group')
    ;[this.cachedEls.clockHours] = this.cachedEls.picker.getElementsByClassName(
      'mtp-clock__hours',
    )
    ;[
      this.cachedEls.clockMinutes,
    ] = this.cachedEls.picker.getElementsByClassName('mtp-clock__minutes')
    ;[
      this.cachedEls.clockMilitaryHours,
    ] = this.cachedEls.picker.getElementsByClassName(
      'mtp-clock__hours-military',
    )
    ;[this.cachedEls.clockHand] = this.cachedEls.picker.getElementsByClassName(
      'mtp-clock__hand',
    )
    this.cachedEls.clockHoursLi = this.cachedEls.clockHours.getElementsByTagName(
      'li',
    )
    this.cachedEls.clockMinutesLi = this.cachedEls.clockMinutes.getElementsByTagName(
      'li',
    )
    this.cachedEls.clockMilitaryHoursLi = this.cachedEls.clockMilitaryHours.getElementsByTagName(
      'li',
    )

    this.setEvents()
  }

  /**
   * Bind event to the input element to open when `focus` event is events.triggered
   *
   * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
   * @param {object} options Options to merged with defaults and set to input element object
   * @return {void}
   */
  bindInput(inputEl, options = {}) {
    const element =
      inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl)

    element.mtpOptions = assign({}, this.defaultOptions, options)
    element.addEventListener('focus', event => this.showEvent(event))
  }

  /**
   * Open picker with the input provided in context without binding events
   *
   * @param {string|HTMLElement} inputEl Selector element to be queried or existing HTMLElement
   * @param {object} options Options to merged with defaults and set to input element object
   * @return {void}
   */
  openOnInput(inputEl, options = {}) {
    this.inputEl =
      inputEl instanceof HTMLElement ? inputEl : document.querySelector(inputEl)
    this.inputEl.mtpOptions = assign({}, this.defaultOptions, options)
    this.show()
  }

  /**
   * Setup the template in DOM if not already
   *
   * @return {void}
   */
  setupTemplate() {
    if (!this.isTemplateInDOM()) {
      document.body.insertAdjacentHTML('beforeend', template)
    }
  }

  highlightHourDisplayGroup() {
    this.cachedEls.displayGroups.hours.classList.add('active-group')
    this.cachedEls.displayGroups.minutes.classList.remove('active-group')
  }

  highlightMinuteDisplayGroup() {
    this.cachedEls.displayGroups.hours.classList.remove('active-group')
    this.cachedEls.displayGroups.minutes.classList.add('active-group')
  }

  /**
   * Set the events on picker elements
   *
   * @return {void}
   */
  setEvents() {
    if (!this.hasSetEvents()) {
      // close
      this.cachedEls.overlay.addEventListener('click', event =>
        this.hideEvent(event),
      )

      this.cachedEls.buttonCancel.addEventListener('click', event =>
        this.hideEvent(event),
      )
      this.cachedEls.buttonNext.addEventListener('click', () =>
        this.showMinutes(),
      )
      this.cachedEls.buttonBack.addEventListener('click', () =>
        this.showHours(),
      )
      this.cachedEls.buttonFinish.addEventListener('click', () => this.finish())

      // meridiem select events
      ;[].forEach.call(this.cachedEls.meridiemSpans, span => {
        span.addEventListener('click', event => this.meridiemSelectEvent(event))
      })

      // time select events
      ;[].forEach.call(this.cachedEls.clockHoursLi, hour => {
        hour.addEventListener('click', event => {
          this.hourSelectEvent(
            event,
            this.cachedEls.clockHours,
            this.cachedEls.clockHoursLi,
          )
        })
      })
      ;[].forEach.call(this.cachedEls.clockMilitaryHoursLi, hour => {
        hour.addEventListener('click', event => {
          this.hourSelectEvent(
            event,
            this.cachedEls.clockMilitaryHours,
            this.cachedEls.clockMilitaryHoursLi,
          )
        })
      })
      ;[].forEach.call(this.cachedEls.clockMinutesLi, minute => {
        minute.addEventListener('click', event => {
          this.minuteSelectEvent(
            event,
            this.cachedEls.clockMinutes,
            this.cachedEls.clockMinutesLi,
          )
        })
      })

      this.cachedEls.wrapper.classList.add('mtp-events-set')

      this.events.on('hoursShown', () => {
        this.highlightHourDisplayGroup()
      })

      this.events.on('minutesShown', () => {
        this.highlightMinuteDisplayGroup()
      })
    }
  }

  /**
   * Show the picker in the DOM
   *
   * @return {void}
   */
  show() {
    const isMilitaryFormat = this.isMilitaryFormat()

    // blur input to prevent onscreen keyboard from displaying (mobile hack)
    this.inputEl.blur()
    this.toggleHoursVisible(true, isMilitaryFormat)
    this.toggleMinutesVisible()

    if (this.inputEl.value.length > 0) {
      this.setTime(this.inputEl.value)
    } else {
      this.setDisplayTime({
        hours: isMilitaryFormat ? '00' : '12',
        minutes: '0',
      })
    }

    this.cachedEls.body.style.overflow = 'hidden'
    this.cachedEls.meridiem.style.visibility = isMilitaryFormat
      ? 'none'
      : 'visible'
    this.cachedEls.overlay.style.display = 'block'
    this.cachedEls.clockHand.style.height = isMilitaryFormat ? '90px' : '105px'

    this.events.trigger('show')
  }

  /**
   * Event handle for input focus
   *
   * @param {Event} event Event object passed from listener
   * @return {void}
   */
  showEvent(event) {
    this.inputEl = event.target
    this.show()
  }

  /**
   * Hide the picker in the DOM
   *
   * @return {void}
   */
  hide() {
    this.cachedEls.overlay.style.display = 'none'
    this.cachedEls.body.style.overflow = ''

    this.inputEl.dispatchEvent(new Event('blur'))
    this.resetState()
    this.events.trigger('hide')
  }

  /**
   * Hide the picker element on the page
   *
   * @param {Event} event Event object passed from event listener callback
   * @return {void}
   */
  hideEvent(event) {
    event.stopPropagation()

    // only allow event based close if event.target contains one of these classes
    // hack to prevent overlay close event from events.triggering on all elements because
    // they are children of overlay
    const allowedClasses = ['mtp-overlay', 'mtp-actions__cancel']
    const { classList } = event.target
    const isAllowed = allowedClasses.some(allowedClass =>
      classList.contains(allowedClass),
    )

    if (isAllowed) {
      this.hide()
    }
  }

  /**
   * Reset picker state to defaults
   *
   * @return {void}
   */
  resetState() {
    this.currentStep = 'hours'
    this.toggleHoursVisible(true, this.isMilitaryFormat())
    this.toggleMinutesVisible()
    this.cachedEls.clockHoursLi[0].dispatchEvent(new Event('click'))
    this.cachedEls.clockMinutesLi[0].dispatchEvent(new Event('click'))
    this.cachedEls.clockMilitaryHoursLi[0].dispatchEvent(new Event('click'))
    this.cachedEls.meridiemSpans[0].dispatchEvent(new Event('click'))
    this.highlightHourDisplayGroup()
  }

  /**
   * Set the displayed time, which will be used to fill input value on completion
   *
   * @param {number|string} hours: Hour display time,
   * @param {number|string} minutes: Minute display time
   * @return {void}
   */
  setDisplayTime({ hours, minutes }) {
    if (typeof hours !== 'undefined' && Number.isNaN(hours) === false) {
      // .trim() is not allowed if hours is not recognized as a string,
      if (typeof hours === 'string' || hours instanceof String) {
        this.cachedEls.displayHours.innerHTML = hours.trim()
      } else {
        this.cachedEls.displayHours.innerHTML = hours
      }
    }

    if (typeof minutes !== 'undefined' && Number.isNaN(minutes) === false) {
      const min = minutes < 10 ? `0${minutes}` : minutes

      // .trim() is not allowed if min is not recognized as a string,
      // ... sometimes (in Safari and Chrome) it is an untrimmable number
      if (typeof min === 'string' || min instanceof String) {
        this.cachedEls.displayMinutes.innerHTML = min.trim()
      } else {
        this.cachedEls.displayMinutes.innerHTML = min
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
  rotateHand(nodeIndex = 9, increment = 30) {
    // 0 index is 180 degress behind 0 deg
    const rotateDeg = nodeIndex * increment - 180
    const styleVal = `rotate(${rotateDeg}deg)`

    this.cachedEls.clockHand.style.transform = styleVal
    this.cachedEls.clockHand.style['-webkit-transform'] = styleVal
    this.cachedEls.clockHand.style['-ms-transform'] = styleVal
  }

  showHours() {
    const isMilitaryFormat = this.isMilitaryFormat()
    const hourEls = isMilitaryFormat
      ? this.cachedEls.clockMilitaryHoursLi
      : this.cachedEls.clockHoursLi

    this.toggleHoursVisible(true, isMilitaryFormat)
    this.toggleMinutesVisible()
    this.rotateHand(this.getActiveIndex(hourEls))

    this.events.trigger('hoursShown')
  }

  showMinutes() {
    const minuteEls = this.cachedEls.clockMinutesLi

    this.toggleHoursVisible()
    this.toggleMinutesVisible(true)
    this.rotateHand(this.getActiveIndex(minuteEls), 6)
    this.cachedEls.clockHand.style.height = '115px'

    this.events.trigger('minutesShown')
  }

  finish() {
    this.timeSelected()
    this.hide()
  }

  /**
   * Toggle hour (both military and standard) clock visiblity in DOM
   *
   * @param {boolean} isVisible Is clock face toggled visible or hidden
   * @param {boolean} isMilitaryFormat Is using military hour format
   * @return {void}
   */
  toggleHoursVisible(isVisible = false, isMilitaryFormat = false) {
    if (isVisible) this.currentStep = 'hours'

    this.cachedEls.clockHours.style.display =
      isVisible && !isMilitaryFormat ? 'block' : 'none'
    this.cachedEls.clockMilitaryHours.style.display =
      isVisible && isMilitaryFormat ? 'block' : 'none'
    this.cachedEls.buttonNext.style.display = !isVisible
      ? 'inline-block'
      : 'none'
  }

  /**
   * Toggle minute clock visiblity in DOM
   *
   * @param {boolean} isVisible Is clock face toggled visible or hidden
   * @return {void}
   */
  toggleMinutesVisible(isVisible = false) {
    if (isVisible) this.currentStep = 'minutes'

    this.cachedEls.clockMinutes.style.display = isVisible ? 'block' : 'none'
    this.cachedEls.buttonBack.style.display = isVisible
      ? 'inline-block'
      : 'none'
    this.cachedEls.buttonNext.style.display = !isVisible
      ? 'inline-block'
      : 'none'
    this.cachedEls.buttonFinish.style.display = isVisible
      ? 'inline-block'
      : 'none'
  }

  /**
   * Get the active time element index
   *
   * @param {HTMLCollection} timeEls Collection of time elements to find active in
   * @return {number} Active element index
   */
  getActiveIndex(timeEls) {
    let activeIndex = 0
    ;[].some.call(timeEls, (timeEl, index) => {
      if (timeEl.classList.contains('mtp-clock--active')) {
        activeIndex = index

        return true
      }

      return false
    })

    return activeIndex
  }

  /**
   * Set selected time to input element
   *
   * @return {void}
   */
  timeSelected() {
    const hours = this.cachedEls.displayHours.innerHTML
    const minutes = this.cachedEls.displayMinutes.innerHTML
    const meridiem = this.isMilitaryFormat()
      ? ''
      : Array.from(this.cachedEls.meridiemSpans).find(i =>
          i.classList.contains('mtp-meridiem--active'),
        ).innerText

    const timeValue = `${hours}:${minutes} ${meridiem}`

    this.inputEl.value = timeValue.trim()
    this.inputEl.dispatchEvent(new Event('input'))
    this.events.trigger('timeSelected', {
      hours,
      minutes,
      meridiem,
      value: timeValue,
    })
  }

  /**
   * Set active clock face element
   *
   * @param {Element} containerEl New active elements .parentNode
   * @param {Element} activeEl Element to set active
   * @return {void}
   */
  setActiveEl(containerEl, activeEl) {
    const activeClassName = 'mtp-clock--active'
    const currentActive = containerEl.getElementsByClassName(activeClassName)[0]

    currentActive.classList.remove(activeClassName)
    activeEl.classList.add(activeClassName)
  }

  /**
   * Meridiem select event handler
   *
   * @param {Event} event Event object passed from listener
   * @return {void}
   */
  meridiemSelectEvent(event) {
    const activeClassName = 'mtp-meridiem--active'
    const element = event.target
    const currentActive = this.cachedEls.meridiem.getElementsByClassName(
      activeClassName,
    )[0]

    if (!currentActive.isEqualNode(element)) {
      currentActive.classList.remove(activeClassName)
      element.classList.add(activeClassName)
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
    event.stopPropagation()

    const newActive = event.target
    const parentEl = newActive.parentElement
    const isInner = parentEl.classList.contains('mtp-clock__hours--inner')

    this.cachedEls.clockHand.style.height = isInner ? '90px' : '105px'
    this.setActiveEl(containerEl, newActive)

    const activeIndex = this.getActiveIndex(listEls)

    this.setDisplayTime({ hours: newActive.innerHTML })
    this.rotateHand(activeIndex)
    this.events.trigger('hourSelected')
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
    event.stopPropagation()

    const newActive = event.target

    this.setActiveEl(containerEl, newActive)

    const activeIndex = this.getActiveIndex(listEls)

    this.setDisplayTime({ minutes: activeIndex })
    this.rotateHand(activeIndex, 6)
    this.events.trigger('minuteSelected')
  }

  /**
   * Check if picker set to military time mode
   *
   * @return {boolean} Is in military time mode
   */
  isMilitaryFormat() {
    return this.inputEl.mtpOptions.timeFormat === 'military'
  }

  setTime(timeString) {
    // this.inputEl.mtpOptions.initialValue
    const overallComponents = timeString.split(' ')
    const timeParts = overallComponents[0].split(':').map(i => parseInt(i, 10))

    // First, set the display time (at the top) correctly.
    this.setDisplayTime({ hours: timeParts[0], minutes: timeParts[1] })

    let hoursIndex = timeParts[0]

    if (this.isMilitaryFormat()) {
      hoursIndex = timeParts[0] > 12 ? timeParts[0] - 12 : timeParts[0] + 12

      if (hoursIndex === 24) hoursIndex = 12
    } else {
      const activeMeridianClass = 'mtp-meridiem--active'

      const meridiem = overallComponents[1]

      const currentMeridiem = this.cachedEls.meridiem.getElementsByClassName(
        activeMeridianClass,
      )[0]

      const correctMeridiem = Array.from(this.cachedEls.meridiemSpans).find(
        i => i.innerText === meridiem,
      )

      currentMeridiem.classList.remove(activeMeridianClass)
      correctMeridiem.classList.add(activeMeridianClass)
    }

    if (hoursIndex === 12) hoursIndex = 0

    const hoursLI = this.isMilitaryFormat()
      ? this.cachedEls.clockMilitaryHoursLi
      : this.cachedEls.clockHoursLi
    const minutesLI = this.cachedEls.clockMinutesLi

    // Clear existing active hours, then set the correct hours value.
    Array.from(hoursLI)
      .filter(i => i.classList.contains('mtp-clock--active'))
      .forEach(i => i.classList.remove('mtp-clock--active'))
    hoursLI[hoursIndex].classList.add('mtp-clock--active')

    // Clear existing active minutes, then set the correct minute value.
    Array.from(minutesLI)
      .filter(i => i.classList.contains('mtp-clock--active'))
      .forEach(i => i.classList.remove('mtp-clock--active'))
    minutesLI[timeParts[1]].classList.add('mtp-clock--active')

    if (this.currentStep === 'hours') {
      this.rotateHand(this.getActiveIndex(hoursLI))
    } else {
      this.rotateHand(this.getActiveIndex(minutesLI))
    }
  }

  /**
   * Check if picker object has already set events on picker elements
   *
   * @return {boolean} Has events been set on picker elements
   */
  hasSetEvents() {
    return this.cachedEls.wrapper.classList.contains('mtp-events-set')
  }

  /**
   * Check if template has already been appended to DOM
   *
   * @return {boolean} Is template in DOM
   */
  isTemplateInDOM() {
    return Boolean(document.getElementsByClassName('mtp-overlay')[0])
  }
}

export default TimePicker

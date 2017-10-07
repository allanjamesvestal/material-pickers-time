/* eslint-env jest */
/* eslint-disable init-declarations, id-length, max-nested-callbacks, no-console */
import expect from 'expect';
import sinon from 'sinon';
import TimePicker from './timepicker';
import Events from './events';
import assign from './assign';

describe('TimePicker', () => {
    let picker;

    beforeEach(() => {
        const spanNode = document.createElement('span');
        const liNode = document.createElement('li');
        const divNode = document.createElement('div');
        const ulNode = document.createElement('ul');
        const buttonNode = document.createElement('button');

        picker = new TimePicker();
        picker.cachedEls = {};
        picker.cachedEls.body = document.createElement('body');
        picker.cachedEls.overlay = divNode.cloneNode();
        picker.cachedEls.wrapper = divNode.cloneNode();
        picker.cachedEls.picker = divNode.cloneNode();
        picker.cachedEls.meridiem = divNode.cloneNode();
        picker.cachedEls.displayHours = spanNode.cloneNode();
        picker.cachedEls.displayMinutes = spanNode.cloneNode();
        picker.cachedEls.displayMeridiem = divNode.cloneNode();
        picker.cachedEls.buttonCancel = buttonNode.cloneNode();
        picker.cachedEls.buttonBack = buttonNode.cloneNode();
        picker.cachedEls.buttonNext = buttonNode.cloneNode();
        picker.cachedEls.buttonFinish = buttonNode.cloneNode();
        picker.cachedEls.clockHours = ulNode.cloneNode();
        picker.cachedEls.clockMinutes = ulNode.cloneNode();
        picker.cachedEls.clockMilitaryHours = ulNode.cloneNode();
        picker.cachedEls.clockHand = divNode.cloneNode();

        for (let inc = 0; inc < 60; inc += 1) {
            if (inc <= 1) {
                picker.cachedEls.meridiem.appendChild(spanNode.cloneNode());
            }
            if (inc <= 11) {
                picker.cachedEls.clockHours.appendChild(liNode.cloneNode());
            }
            if (inc <= 23) {
                picker.cachedEls.clockMilitaryHours.appendChild(liNode.cloneNode());
            }

            picker.cachedEls.clockMinutes.appendChild(liNode.cloneNode());
        }

        picker.cachedEls.meridiemSpans = picker.cachedEls.meridiem.childNodes;
        picker.cachedEls.clockHoursLi = picker.cachedEls.clockHours.childNodes;
        picker.cachedEls.clockMinutesLi = picker.cachedEls.clockMinutes.childNodes;
        picker.cachedEls.clockMilitaryHoursLi = picker.cachedEls.clockMilitaryHours.childNodes;
    });

    afterEach(() => {
        picker = null;
    });

    describe('#bindInput', () => {
        test(
            'should assign passed options merged with defaultOptions to inputEl parameter',
            () => {
                const inputEl = document.createElement('input');
                const options = {test: 'value'};
                const expectOptions = assign({}, picker.defaultOptions, options);

                picker.bindInput(inputEl, options);

                expect(inputEl.mtpOptions).toEqual(expectOptions);
            }
        );

        test('should set focus event listener to inputEl parameter', () => {
            const inputEl = document.createElement('input');
            const addEventListenerSpy = sinon.spy(inputEl, 'addEventListener');

            picker.bindInput(inputEl);

            expect(addEventListenerSpy.calledOnce).toBe(true);
            expect(addEventListenerSpy.calledWith('focus', sinon.match.func)).toBe(true);
        });
    });

    describe('#openOnInput', () => {
        test('should assign inputEl parameter to inputEl class property', () => {
            const inputEl = document.createElement('input');

            picker.openOnInput(inputEl);

            expect(picker.inputEl).toEqual(inputEl);
        });

        test(
            'should assign passed options merged with defaultOptions to inputEl.mtpOptions property',
            () => {
                const inputEl = document.createElement('input');
                const options = {test: 'value'};
                const expectOptions = assign({}, picker.defaultOptions, options);

                picker.openOnInput(inputEl, options);

                expect(picker.inputEl.mtpOptions).toEqual(expectOptions);
            }
        );

        test('should call #show method', () => {
            const inputEl = document.createElement('input');
            const showSpy = sinon.spy(picker, 'show');

            picker.openOnInput(inputEl);

            expect(showSpy.calledOnce).toBe(true);
        });
    });

    describe('#setupTemplate', () => {
        let isTemplateInDOMStub, insertAdjacentHTMLStub;

        beforeEach(() => {
            isTemplateInDOMStub = sinon.stub(picker, 'isTemplateInDOM');
            insertAdjacentHTMLStub = sinon.spy(document.body, 'insertAdjacentHTML');
        });

        afterEach(() => {
            isTemplateInDOMStub.restore();
            insertAdjacentHTMLStub.restore();
        });

        test(
            'should insert template in DOM if #isTemplateInDOM returns false',
            () => {
                isTemplateInDOMStub.onFirstCall().returns(false);
                picker.setupTemplate();

                expect(isTemplateInDOMStub.calledOnce).toBe(true);
                expect(isTemplateInDOMStub.calledBefore(insertAdjacentHTMLStub)).toBe(true);
                expect(insertAdjacentHTMLStub.calledWith('beforeend', picker.template)).toBe(true);
            }
        );

        test(
            'should not insert template in DOM if #isTemplateInDOM returns true',
            () => {
                isTemplateInDOMStub.onFirstCall().returns(true);
                picker.setupTemplate();

                expect(isTemplateInDOMStub.calledOnce).toBe(true);
                expect(isTemplateInDOMStub.calledBefore(insertAdjacentHTMLStub)).toBe(true);
                expect(insertAdjacentHTMLStub.neverCalledWith('beforeend', picker.template)).toBe(true);
            }
        );
    });

    describe('#setEvents', () => {
        let hasSetEventsStub, cachedEls, wrapperClassListAddSpy;
        const addEventListenerSpys = {};

        beforeEach(() => {
            cachedEls = picker.cachedEls;
            hasSetEventsStub = sinon.stub(picker, 'hasSetEvents');
            wrapperClassListAddSpy = sinon.spy(cachedEls.wrapper.classList, 'add');
            addEventListenerSpys.overlay = sinon.spy(cachedEls.overlay, 'addEventListener');
            addEventListenerSpys.buttonCancel = sinon.spy(cachedEls.buttonCancel, 'addEventListener');
            addEventListenerSpys.buttonFinish = sinon.spy(cachedEls.buttonFinish, 'addEventListener');
            addEventListenerSpys.buttonBack = sinon.spy(cachedEls.buttonBack, 'addEventListener');
            addEventListenerSpys.meridiemSpans = [];
            addEventListenerSpys.clockHoursLi = [];
            addEventListenerSpys.clockMinutesLi = [];
            addEventListenerSpys.clockMilitaryHoursLi = [];

            [].forEach.call(cachedEls.meridiemSpans, span => {
                addEventListenerSpys.meridiemSpans.push(sinon.spy(span, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockHoursLi, listItem => {
                addEventListenerSpys.clockHoursLi.push(sinon.spy(listItem, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockMinutesLi, listItem => {
                addEventListenerSpys.clockMinutesLi.push(sinon.spy(listItem, 'addEventListener'));
            });

            [].forEach.call(cachedEls.clockMilitaryHoursLi, listItem => {
                addEventListenerSpys.clockMilitaryHoursLi.push(sinon.spy(listItem, 'addEventListener'));
            });
        });

        afterEach(() => {
            hasSetEventsStub.restore();
            wrapperClassListAddSpy.restore();
            addEventListenerSpys.overlay.restore();
            addEventListenerSpys.buttonCancel.restore();
            addEventListenerSpys.buttonFinish.restore();
            addEventListenerSpys.buttonBack.restore();

            addEventListenerSpys.meridiemSpans.forEach(span => {
                span.restore();
            });

            addEventListenerSpys.clockHoursLi.forEach(listItem => {
                listItem.restore();
            });

            addEventListenerSpys.clockMinutesLi.forEach(listItem => {
                listItem.restore();
            });

            addEventListenerSpys.clockMilitaryHoursLi.forEach(listItem => {
                listItem.restore();
            });
        });

        test(
            'should set events on cached elements if #hasSetEvents returns false',
            () => {
                hasSetEventsStub.onFirstCall().returns(false);
                picker.setEvents();

                expect(hasSetEventsStub.calledOnce).toBe(true);
                expect(addEventListenerSpys.overlay.calledWith('click', sinon.match.func)).toBe(true);
                expect(addEventListenerSpys.buttonCancel.calledWith('click', sinon.match.func)).toBe(true);
                expect(addEventListenerSpys.buttonFinish.calledWith('click', sinon.match.func)).toBe(true);
                expect(addEventListenerSpys.buttonBack.calledWith('click', sinon.match.func)).toBe(true);

                addEventListenerSpys.meridiemSpans.forEach(span => {
                    expect(span.calledWith('click', sinon.match.func)).toBe(true);
                });

                addEventListenerSpys.clockHoursLi.forEach(listItem => {
                    expect(listItem.calledWith('click', sinon.match.func)).toBe(true);
                });

                addEventListenerSpys.clockMinutesLi.forEach(listItem => {
                    expect(listItem.calledWith('click', sinon.match.func)).toBe(true);
                });

                addEventListenerSpys.clockMilitaryHoursLi.forEach(listItem => {
                    expect(listItem.calledWith('click', sinon.match.func)).toBe(true);
                });
            }
        );

        test(
            'should not set events on cached elements if #hasSetEvents returns true',
            () => {
                hasSetEventsStub.onFirstCall().returns(true);
                picker.setEvents();

                expect(hasSetEventsStub.calledOnce).toBe(true);
                expect(addEventListenerSpys.overlay.neverCalledWith('click', sinon.match.func)).toBe(true);
                expect(addEventListenerSpys.buttonCancel.neverCalledWith('click', sinon.match.func)).toBe(true);
                expect(addEventListenerSpys.buttonFinish.neverCalledWith('click', sinon.match.func)).toBe(true);
                expect(addEventListenerSpys.buttonBack.neverCalledWith('click', sinon.match.func)).toBe(true);

                addEventListenerSpys.meridiemSpans.forEach(span => {
                    expect(span.neverCalledWith('click', sinon.match.func)).toBe(true);
                });

                addEventListenerSpys.clockHoursLi.forEach(listItem => {
                    expect(listItem.neverCalledWith('click', sinon.match.func)).toBe(true);
                });

                addEventListenerSpys.clockMinutesLi.forEach(listItem => {
                    expect(listItem.neverCalledWith('click', sinon.match.func)).toBe(true);
                });

                addEventListenerSpys.clockMilitaryHoursLi.forEach(listItem => {
                    expect(listItem.neverCalledWith('click', sinon.match.func)).toBe(true);
                });
            }
        );

        test(
            'should add .mtp-events-set to cachedEls.wrapper.classList if #hasSetEvents returns false',
            () => {
                hasSetEventsStub.onFirstCall().returns(false);
                picker.setEvents();

                expect(hasSetEventsStub.calledOnce).toBe(true);
                expect(hasSetEventsStub.calledBefore(wrapperClassListAddSpy)).toBe(true);
                expect(wrapperClassListAddSpy.calledWith('mtp-events-set')).toBe(true);
            }
        );

        test(
            'should not add .mtp-events-set to cachedEls.wrapper.classList if #hasSetEvents returns true',
            () => {
                hasSetEventsStub.onFirstCall().returns(true);
                picker.setEvents();

                expect(hasSetEventsStub.calledOnce).toBe(true);
                expect(hasSetEventsStub.calledBefore(wrapperClassListAddSpy)).toBe(true);
                expect(wrapperClassListAddSpy.neverCalledWith('mtp-events-set')).toBe(true);
            }
        );
    });

    describe('#show', () => {
        let blurSpy, isMilitaryFormatStub, toggleHoursVisibleSpy, toggleMinutesVisibleSpy,
            setDisplayTimeSpy, triggerSpy;

        beforeEach(() => {
            picker.inputEl = document.createElement('input');
            blurSpy = sinon.spy(picker.inputEl, 'blur');
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
            triggerSpy = sinon.spy(picker.events, 'trigger');
        });

        afterEach(() => {
            blurSpy.restore();
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            setDisplayTimeSpy.restore();
            triggerSpy.restore();
        });

        test('should call blur on inputEl', () => {
            picker.show();

            expect(blurSpy.calledOnce).toBe(true);
        });

        test('should call #toggleHoursVisible with true', () => {
            picker.show();

            expect(toggleHoursVisibleSpy.calledOnce).toBe(true);
            expect(toggleHoursVisibleSpy.calledWith(true)).toBe(true);
        });

        test('should call #toggleMinutesVisible with no parameters', () => {
            picker.show();

            expect(toggleMinutesVisibleSpy.calledOnce).toBe(true);
            expect(toggleMinutesVisibleSpy.neverCalledWith(true)).toBe(true);
        });

        test(
            'should call #setDisplayTime with 00 if isMilitaryFormat is true',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(true);
                picker.show();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(isMilitaryFormatStub.calledBefore(setDisplayTimeSpy)).toBe(true);
                expect(setDisplayTimeSpy.calledWith({hours: '00', minutes: '0'})).toBe(true);
            }
        );

        test(
            'should call #setDisplayTime, index 0, with 12 if isMilitaryFormat is false',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(false);
                picker.show();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(isMilitaryFormatStub.calledBefore(setDisplayTimeSpy)).toBe(true);
                expect(setDisplayTimeSpy.getCall(0).calledWith({hours: '12', minutes: '0'})).toBe(true);
            }
        );

        test(
            'should set cachedEls.displayMeridiem.style.display to none when isMilitaryFormat is true',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(true);
                picker.show();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(picker.cachedEls.displayMeridiem.style.display).toBe('none');
            }
        );

        test(
            'should set cachedEls.displayMeridiem.style.display to inline when isMilitaryFormat is false',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(false);
                picker.show();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(picker.cachedEls.displayMeridiem.style.display).toBe('inline');
            }
        );

        test(
            'should set cachedEls.meridiem.style.display to none when isMilitaryFormat is true',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(true);
                picker.show();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(picker.cachedEls.meridiem.style.display).toBe('none');
            }
        );

        test(
            'should set cachedEls.meridiem.style.display to block when isMilitaryFormat is false',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(false);
                picker.show();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(picker.cachedEls.meridiem.style.display).toBe('block');
            }
        );

        test('should set cachedEls.overlay.style.display to block', () => {
            picker.show();

            expect(picker.cachedEls.overlay.style.display).toBe('block');
        });

        test('should set cachedEls.body.style.overflow to hidden', () => {
            picker.show();

            expect(picker.cachedEls.body.style.overflow).toBe('hidden');
        });

        test('should trigger `show` event', () => {
            picker.show();

            expect(triggerSpy.calledOnce).toBe(true);
            expect(triggerSpy.calledWith('show')).toBe(true);
        });
    });

    describe('#showEvent', () => {
        test('should assign event.target to inputEl call property', () => {
            const event = {};

            event.target = document.createElement('input');
            event.target.mtpOptions = picker.defaultOptions;
            picker.showEvent(event);

            expect(picker.inputEl).toBe(event.target);
        });

        test('should call #show method', () => {
            const showSpy = sinon.spy(picker, 'show');
            const event = {};

            event.target = document.createElement('input');
            event.target.mtpOptions = picker.defaultOptions;
            picker.showEvent(event);

            expect(showSpy.calledOnce).toBe(true);
        });
    });

    describe('#hide', () => {
        let triggerSpy;

        beforeEach(() => {
            picker.inputEl = document.createElement('input');
            picker.inputEl.mtpOptions = picker.defaultOptions;
            triggerSpy = sinon.spy(picker.events, 'trigger');
        });

        afterEach(() => {
            triggerSpy.restore();
        });

        test('should set cachedEls.overlay.style.display to none', () => {
            picker.hide();

            expect(picker.cachedEls.overlay.style.display).toBe('none');
        });

        test('should set cachedEls.body.style.overflow to empty', () => {
            picker.hide();

            expect(picker.cachedEls.body.style.overflow).toBe('');
        });

        test('should call dispatchEvevnt with blur event on inputEl', () => {
            const dispatchEventSpy = sinon.spy(picker.inputEl, 'dispatchEvent');

            picker.hide();

            expect(dispatchEventSpy.calledOnce).toBe(true);
            expect(dispatchEventSpy.args[0][0].type).toBe('blur');

            dispatchEventSpy.restore();
        });

        test('should call #resetState class method', () => {
            const resetStateSpy = sinon.spy(picker, 'resetState');

            picker.hide();

            expect(resetStateSpy.calledOnce).toBe(true);

            resetStateSpy.restore();
        });

        test('should trigger `hide` event', () => {
            picker.hide();

            expect(triggerSpy.calledOnce).toBe(true);
            expect(triggerSpy.calledWith('hide')).toBe(true);
        });
    });

    describe('#hideEvent', () => {
        let event, hideSpy, stopPropagationSpy;

        beforeEach(() => {
            event = {};
            event.stopPropagation = () => {};
            event.target = document.createElement('input');
            picker.inputEl = event.target;
            picker.inputEl.mtpOptions = picker.defaultOptions;
            hideSpy = sinon.spy(picker, 'hide');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
        });

        afterEach(() => {
            hideSpy.restore();
            stopPropagationSpy.restore();
        });

        test('should call stopPropagation on event paramater', () => {
            picker.hideEvent(event);

            expect(stopPropagationSpy.calledOnce).toBe(true);
        });

        test(
            'should call #hide if event.target.classList contains mtp-overlay',
            () => {
                event.target.classList.add('mtp-overlay');
                picker.hideEvent(event);

                expect(hideSpy.calledOnce).toBe(true);
            }
        );

        test(
            'should call #hide if event.target.classList contains mtp-actions__cancel',
            () => {
                event.target.classList.add('mtp-actions__cancel');
                picker.hideEvent(event);

                expect(hideSpy.calledOnce).toBe(true);
            }
        );

        test(
            'should not call #hide if event.target.classList does not have allowed class',
            () => {
                picker.hideEvent(event);

                expect(hideSpy.calledOnce).toBe(false);
            }
        );
    });

    describe('#resetState', () => {
        let toggleHoursVisibleSpy, toggleMinutesVisibleSpy, isMilitaryFormatStub, hoursLiDispatchEventSpy,
            minutesLiDispatchEventSpy, militaryHoursLiDispatchEventSpy, meridiemSpanDispatchEventSpy;

        beforeEach(() => {
            const cachedEls = picker.cachedEls;

            picker.currentStep = 2;
            picker.inputEl = document.createElement('input');
            picker.inputEl.mtpOptions = picker.defaultOptions;
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            hoursLiDispatchEventSpy = sinon.spy(cachedEls.clockHoursLi[0], 'dispatchEvent');
            minutesLiDispatchEventSpy = sinon.spy(cachedEls.clockMinutesLi[0], 'dispatchEvent');
            militaryHoursLiDispatchEventSpy = sinon.spy(cachedEls.clockMilitaryHoursLi[0], 'dispatchEvent');
            meridiemSpanDispatchEventSpy = sinon.spy(cachedEls.meridiemSpans[0], 'dispatchEvent');
        });

        afterEach(() => {
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            hoursLiDispatchEventSpy.restore();
            minutesLiDispatchEventSpy.restore();
            militaryHoursLiDispatchEventSpy.restore();
            meridiemSpanDispatchEventSpy.restore();
        });

        test('should set currentStep to 0', () => {
            expect(picker.currentStep).toBe(2);

            picker.resetState();

            expect(picker.currentStep).toBe(0);
        });

        test(
            'should call #toggleHoursVisible with parameters true, and result of #isMilitaryFormat',
            () => {
                isMilitaryFormatStub.onCall(0).returns(true);
                isMilitaryFormatStub.onCall(1).returns(false);

                picker.resetState();

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(toggleHoursVisibleSpy.calledWith(true, true)).toBe(true);

                picker.resetState();

                expect(isMilitaryFormatStub.calledTwice).toBe(true);
                expect(toggleHoursVisibleSpy.calledWith(true, false)).toBe(true);
            }
        );

        test('should call #toggleMinutesVisible', () => {
            picker.resetState();

            expect(toggleMinutesVisibleSpy.calledOnce).toBe(true);
        });

        test(
            'should call dispatchEvent with click event on cachedEls.clockHoursLi[0]',
            () => {
                picker.resetState();

                expect(hoursLiDispatchEventSpy.calledOnce).toBe(true);
                expect(hoursLiDispatchEventSpy.args[0][0].type).toBe('click');
            }
        );

        test(
            'should call dispatchEvent with click event on cachedEls.clockMinutesLi[0]',
            () => {
                picker.resetState();

                expect(minutesLiDispatchEventSpy.calledOnce).toBe(true);
                expect(minutesLiDispatchEventSpy.args[0][0].type).toBe('click');
            }
        );

        test(
            'should call dispatchEvent with click event on cachedEls.clockMilitaryHoursLi[0]',
            () => {
                picker.resetState();

                expect(militaryHoursLiDispatchEventSpy.calledOnce).toBe(true);
                expect(militaryHoursLiDispatchEventSpy.args[0][0].type).toBe('click');
            }
        );

        test(
            'should call dispatchEvent with click event on cachedEls.meridiemSpans[0]',
            () => {
                picker.resetState();

                expect(meridiemSpanDispatchEventSpy.calledOnce).toBe(true);
                expect(meridiemSpanDispatchEventSpy.args[0][0].type).toBe('click');
            }
        );
    });

    describe('#setDisplayTime', () => {
        let displayHoursEl, displayMinutesEl;

        beforeEach(() => {
            picker.cachedEls.displayHours.innerHTML = '00';
            picker.cachedEls.displayMinutes.innerHTML = '00';
            displayHoursEl = picker.cachedEls.displayHours;
            displayMinutesEl = picker.cachedEls.displayMinutes;
        });

        test('should replace hour time with value given when index 0', () => {
            expect(displayHoursEl.innerHTML).toBe('00');
            expect(displayMinutesEl.innerHTML).toBe('00');

            picker.setDisplayTime({hours: 15});

            expect(displayHoursEl.innerHTML).toBe('15');
        });

        test('should replace minute time with value given when index 1', () => {
            expect(displayMinutesEl.innerHTML).toBe('00');

            picker.setDisplayTime({minutes: 15});

            expect(displayMinutesEl.innerHTML).toBe('15');
        });

        test('should pad minute value with 0 if value is single diget', () => {
            expect(displayMinutesEl.innerHTML).toBe('00');

            picker.setDisplayTime({minutes: 1});

            expect(displayMinutesEl.innerHTML).toBe('01');
        });
    });

    describe('#rotateHand', () => {
        test(
            'should set cachedEls.clockHand.style.transform to rotate((nodeIndex * 30 - 180)deg)',
            () => {
                const nodeIndex = 5;
                const rotateVal = 5 * 30 - 180;

                picker.rotateHand(nodeIndex);

                expect(picker.cachedEls.clockHand.style.transform).toBe(`rotate(${rotateVal}deg)`);
            }
        );

        test('should have a default value of 9 for nodeIndex', () => {
            const rotateVal = 9 * 30 - 180;

            picker.rotateHand();

            expect(picker.cachedEls.clockHand.style.transform).toBe(`rotate(${rotateVal}deg)`);
        });
    });

    // changeStep does not exist?
    describe.skip('#changeStep', () => {
        let isMilitaryFormatStub, toggleHoursVisibleSpy, toggleMinutesVisibleSpy,
            getActiveIndexStub, rotateHandSpy, timeSelectedStub, hideSpy;

        beforeEach(() => {
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            toggleHoursVisibleSpy = sinon.spy(picker, 'toggleHoursVisible');
            toggleMinutesVisibleSpy = sinon.spy(picker, 'toggleMinutesVisible');
            getActiveIndexStub = sinon.stub(picker, 'getActiveIndex');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            timeSelectedStub = sinon.stub(picker, 'timeSelected', () => {});
            hideSpy = sinon.spy(picker, 'hide');
            picker.inputEl = document.createElement('input');
        });

        afterEach(() => {
            isMilitaryFormatStub.restore();
            toggleHoursVisibleSpy.restore();
            toggleMinutesVisibleSpy.restore();
            getActiveIndexStub.restore();
            rotateHandSpy.restore();
            timeSelectedStub.restore();
            hideSpy.restore();
            delete picker.inputEl;
        });

        test(
            'should call #toggleHoursVisible(true) when step parameter is 0',
            () => {
                isMilitaryFormatStub.onFirstCall().returns(false);
                getActiveIndexStub.onFirstCall().returns(1);

                picker.changeStep(0);

                expect(toggleHoursVisibleSpy.calledOnce).toBe(true);
                expect(toggleHoursVisibleSpy.calledWith(true, false)).toBe(true);
            }
        );

        test(`should call #getActiveIndex of cachedEls.clockHoursLi
           when isMilitaryFormat is false when step is parameter 0`, () => {
                isMilitaryFormatStub.onFirstCall().returns(false);
                getActiveIndexStub.onFirstCall().returns(1);

                picker.changeStep(0);

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(getActiveIndexStub.calledOnce).toBe(true);
                expect(getActiveIndexStub.calledWith(picker.cachedEls.clockHoursLi)).toBe(true);
                expect(rotateHandSpy.calledOnce).toBe(true);
                expect(rotateHandSpy.calledWith(1)).toBe(true);
            });

        test(`should call #getActiveIndex with cachedEls.clockMilitaryHoursLi
           when isMilitaryFormat is true when step is parameter 0`, () => {
                isMilitaryFormatStub.onFirstCall().returns(true);
                getActiveIndexStub.onFirstCall().returns(1);

                picker.changeStep(0);

                expect(isMilitaryFormatStub.calledOnce).toBe(true);
                expect(getActiveIndexStub.calledOnce).toBe(true);
                expect(getActiveIndexStub.calledWith(picker.cachedEls.clockMilitaryHoursLi)).toBe(true);
                expect(rotateHandSpy.calledOnce).toBe(true);
                expect(rotateHandSpy.calledWith(1)).toBe(true);
            });

        test(
            'should call #toggleMinutesVisible(true) when step parameter is 1',
            () => {
                getActiveIndexStub.onFirstCall().returns(1);

                picker.changeStep(1);

                expect(toggleMinutesVisibleSpy.calledOnce).toBe(true);
                expect(toggleMinutesVisibleSpy.calledWith(true)).toBe(true);
            }
        );

        test(
            'should call #getActiveIndex with cachedEls.clockMinutesLi when step parameter is 1',
            () => {
                getActiveIndexStub.onFirstCall().returns(1);

                picker.changeStep(1);

                expect(getActiveIndexStub.calledOnce).toBe(true);
                expect(getActiveIndexStub.calledWith(picker.cachedEls.clockMinutesLi)).toBe(true);
            }
        );

        test(
            'should call #timeSelected and #hide when step parameter is 2',
            () => {
                picker.changeStep(2);

                expect(timeSelectedStub.calledOnce).toBe(true);
                expect(hideSpy.calledOnce).toBe(true);
            }
        );

        test('should set currentStep to the step paramater passed', () => {
            expect(picker.currentStep).toBe(0);
            picker.changeStep(1);
            expect(picker.currentStep).toBe(1);
        });
    });

    describe('#toggleHoursVisible', () => {
        let clockHours, clockMilitaryHours;

        beforeEach(() => {
            clockHours = picker.cachedEls.clockHours;
            clockMilitaryHours = picker.cachedEls.clockMilitaryHours;
        });

        test(`should set cachedEls.clockHours.style.display to none when
           isVisible is false`, () => {
                picker.toggleHoursVisible(false);

                expect(clockHours.style.display).toBe('none');
            });

        test(`should set cachedEls.clockHours.style.display to none when
           isVisible is true and isMilitaryFormat is true`, () => {
                picker.toggleHoursVisible(true, true);

                expect(clockHours.style.display).toBe('none');
            });

        test(`should set cachedEls.clockHours.style.display to block when
           isVisible is true and isMilitaryFormat is false`, () => {
                picker.toggleHoursVisible(true, false);

                expect(clockHours.style.display).toBe('block');
            });

        test(`should set cachedEls.clockMilitaryHours.style.display to none when
           isVisible is true and isMilitaryFormat is false`, () => {
                picker.toggleHoursVisible(true, false);

                expect(clockMilitaryHours.style.display).toBe('none');
            });

        test(`should set cachedEls.clockMilitaryHours.style.display to none when
           isVisible is false`, () => {
                picker.toggleHoursVisible(false);

                expect(clockMilitaryHours.style.display).toBe('none');
            });

        test(`should set cachedEls.clockMilitaryHours.style.display to block when
           isVisible is true and isMilitaryFormat is true`, () => {
                picker.toggleHoursVisible(true, true);

                expect(clockMilitaryHours.style.display).toBe('block');
            });
    });

    describe('#toggleMinutesVisible', () => {
        let clockMinutes, buttonBack;

        beforeEach(() => {
            clockMinutes = picker.cachedEls.clockMinutes;
            buttonBack = picker.cachedEls.buttonBack;
        });

        test(
            'should set cachedEls.clockMinutes.style.display to block when isVisible is true',
            () => {
                picker.toggleMinutesVisible(true);

                expect(clockMinutes.style.display).toBe('block');
            }
        );

        test(
            'should set cachedEls.clockMinutes.style.display to none when isVisible is false',
            () => {
                picker.toggleMinutesVisible(false);

                expect(clockMinutes.style.display).toBe('none');
            }
        );

        test(
            'should set cachedEls.buttonBack.style.display to inline-block when isVisible is true',
            () => {
                picker.toggleMinutesVisible(true);

                expect(buttonBack.style.display).toBe('inline-block');
            }
        );

        test(
            'should set cachedEls.buttonBack.style.display to none when isVisible is false',
            () => {
                picker.toggleMinutesVisible(false);

                expect(buttonBack.style.display).toBe('none');
            }
        );
    });

    describe('#getActiveIndex', () => {
        test('should return the index of element with .mtp-clock--active', () => {
            const expectedIndex = 6;
            const clockHoursLi = picker.cachedEls.clockHoursLi;

            clockHoursLi[expectedIndex].classList.add('mtp-clock--active');

            expect(picker.getActiveIndex(clockHoursLi)).toBe(expectedIndex);
        });
    });

    describe('#timeSelected', () => {
        let isMilitaryFormatStub, dispatchEventSpy;

        beforeEach(() => {
            picker.inputEl = document.createElement('input');
            picker.cachedEls.displayHours.innerHTML = '11';
            picker.cachedEls.displayMinutes.innerHTML = '00';
            picker.cachedEls.displayMeridiem.innerHTML = 'pm';
            isMilitaryFormatStub = sinon.stub(picker, 'isMilitaryFormat');
            dispatchEventSpy = sinon.spy(picker.inputEl, 'dispatchEvent');
        });

        afterEach(() => {
            isMilitaryFormatStub.restore();
            dispatchEventSpy.restore();
        });

        test(`should set displayTime.innerHTML and displayMeridiem.innerHTML to 
           inputEl.value if isMilitaryFormat is true`, () => {
                isMilitaryFormatStub.onCall(0).returns(false);

                picker.timeSelected();
                expect(picker.inputEl.value).toBe('11:00 pm');
            });

        test(
            'should set displayTime.innerHTML to inputEl.value if isMilitaryFormat is true',
            () => {
                isMilitaryFormatStub.onCall(0).returns(true);

                picker.timeSelected();
                expect(picker.inputEl.value).toBe('11:00');
            }
        );

        test('should call dispatch input event on inputEl', () => {
            picker.timeSelected();

            expect(dispatchEventSpy.calledOnce).toBe(true);
            expect(dispatchEventSpy.args[0][0].type).toBe('input');
        });
    });

    describe('#setActiveEl', () => {
        test(
            'should remove class .mtp-clock--active from element in containerEl parameter',
            () => {
                const clockHoursLi = picker.cachedEls.clockHoursLi;
                const removeSpy = sinon.spy(clockHoursLi[2].classList, 'remove');
                const activeEl = clockHoursLi[1];

                clockHoursLi[2].classList.add('mtp-clock--active');
                picker.setActiveEl(picker.cachedEls.clockHours, activeEl);

                expect(removeSpy.calledOnce).toBe(true);
                expect(removeSpy.calledWith('mtp-clock--active')).toBe(true);

                removeSpy.restore();
            }
        );

        test('should add class .mtp-clock--active to activeEl parameter', () => {
            const activeEl = picker.cachedEls.clockHoursLi[1];
            const addSpy = sinon.spy(activeEl.classList, 'add');

            picker.cachedEls.clockHoursLi[2].classList.add('mtp-clock--active');
            picker.setActiveEl(picker.cachedEls.clockHours, activeEl);

            expect(addSpy.calledOnce).toBe(true);
            expect(addSpy.calledWith('mtp-clock--active')).toBe(true);

            addSpy.restore();
        });
    });

    describe('#meridiemSelectEvent', () => {
        test(
            'should find child element in cachedEls.meridiem with class .mtp-clock--active and remove class',
            () => {
                const meridiemSpans = picker.cachedEls.meridiemSpans;
                const removeSpy = sinon.spy(meridiemSpans[0].classList, 'remove');
                const event = {target: meridiemSpans[1]};

                meridiemSpans[0].classList.add('mtp-clock--active');
                picker.meridiemSelectEvent(event);

                expect(removeSpy.calledOnce).toBe(true);
                expect(removeSpy.calledWith('mtp-clock--active')).toBe(true);

                removeSpy.restore();
            }
        );

        test(
            'should add class .mtp-clock--active to event.target element',
            () => {
                const meridiemSpans = picker.cachedEls.meridiemSpans;
                const addSpy = sinon.spy(meridiemSpans[1].classList, 'add');
                const event = {target: meridiemSpans[1]};

                meridiemSpans[0].classList.add('mtp-clock--active');
                picker.meridiemSelectEvent(event);

                expect(addSpy.calledOnce).toBe(true);
                expect(addSpy.calledWith('mtp-clock--active')).toBe(true);

                addSpy.restore();
            }
        );

        test(
            'should set cachedEls.displayMeridiem.innerHTML to event.target.innerHTML',
            () => {
                const meridiemSpans = picker.cachedEls.meridiemSpans;
                const event = {target: meridiemSpans[1]};

                meridiemSpans[1].innerHTML = 'am';
                meridiemSpans[0].classList.add('mtp-clock--active');
                picker.meridiemSelectEvent(event);

                expect(picker.cachedEls.displayMeridiem.innerHTML).toBe('am');
            }
        );

        test(
            'should do nothing if current active elemtn is equal node of event.target',
            () => {
                picker.cachedEls.meridiemSpans[0].classList.add('mtp-clock--active');

                const activeElement = picker.cachedEls.meridiemSpans[0];
                const event = {target: activeElement};
                const addSpy = sinon.spy(activeElement.classList, 'add');
                const removeSpy = sinon.spy(activeElement.classList, 'remove');

                picker.meridiemSelectEvent(event);

                expect(addSpy.calledOnce).toBe(false);
                expect(removeSpy.calledOnce).toBe(false);

                addSpy.restore();
                removeSpy.restore();
            }
        );
    });

    describe('#hourSelectEvent', () => {
        let event, stopPropagationSpy, setActiveElSpy, setDisplayTimeSpy, rotateHandSpy,
            getActiveIndexSpy, containerEl, listEls, triggerSpy;

        beforeEach(() => {
            const target = document.createElement('li');
            const parent = document.createElement('div');

            target.innerHTML = 'value';

            parent.appendChild(target);

            containerEl = picker.cachedEls.clockHours;
            listEls = picker.cachedEls.clockHoursLi;
            event = {
                target,
                stopPropagation: () => {},
            };

            listEls[0].classList.add('mtp-clock--active');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
            setActiveElSpy = sinon.spy(picker, 'setActiveEl');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            getActiveIndexSpy = sinon.spy(picker, 'getActiveIndex');
            triggerSpy = sinon.spy(picker.events, 'trigger');
        });

        afterEach(() => {
            stopPropagationSpy.restore();
            setActiveElSpy.restore();
            setDisplayTimeSpy.restore();
            rotateHandSpy.restore();
            getActiveIndexSpy.restore();
            triggerSpy.restore();
        });

        test('should call stopPropagation on passed event parameter', () => {
            picker.hourSelectEvent(event, containerEl, listEls);

            expect(stopPropagationSpy.calledOnce).toBe(true);
        });

        test(
            'should call setActiveEl with containerEl and event.target parameters',
            () => {
                picker.hourSelectEvent(event, containerEl, listEls);

                expect(setActiveElSpy.calledOnce).toBe(true);
                expect(setActiveElSpy.calledWith(containerEl, event.target)).toBe(true);
            }
        );

        test(
            'should call setDisplayTime with event.target.innerHTML and 0 as index parameter',
            () => {
                picker.hourSelectEvent(event, containerEl, listEls);

                expect(setDisplayTimeSpy.calledOnce).toBe(true);
                expect(setDisplayTimeSpy.calledWith({hours: event.target.innerHTML})).toBe(true);
            }
        );

        test('should call rotateHand with the result of getActiveIndex', () => {
            picker.hourSelectEvent(event, containerEl, listEls);

            expect(getActiveIndexSpy.calledOnce).toBe(true);
            expect(getActiveIndexSpy.calledWith(listEls)).toBe(true);
            expect(getActiveIndexSpy.returnValues[0]).toBe(0);
            expect(rotateHandSpy.calledOnce).toBe(true);
            expect(rotateHandSpy.calledWith(0)).toBe(true);
        });

        test('should trigger `hourSelected` event', () => {
            picker.hourSelectEvent(event, containerEl, listEls);

            expect(triggerSpy.calledOnce).toBe(true);
            expect(triggerSpy.calledWith('hourSelected')).toBe(true);
        });
    });

    describe('#minuteSelectEvent', () => {
        let event, stopPropagationSpy, setActiveElSpy, setDisplayTimeSpy, rotateHandSpy,
            getActiveIndexSpy, containerEl, listEls, triggerSpy, target;

        beforeEach(() => {
            containerEl = picker.cachedEls.clockHours;
            listEls = picker.cachedEls.clockHoursLi;
            target = document.createElement('li');
            target.innerHTML = 'value';

            event = {
                target,
                stopPropagation: () => {},
            };

            listEls[0].classList.add('mtp-clock--active');
            stopPropagationSpy = sinon.spy(event, 'stopPropagation');
            setActiveElSpy = sinon.spy(picker, 'setActiveEl');
            setDisplayTimeSpy = sinon.spy(picker, 'setDisplayTime');
            rotateHandSpy = sinon.spy(picker, 'rotateHand');
            getActiveIndexSpy = sinon.spy(picker, 'getActiveIndex');
            triggerSpy = sinon.spy(picker.events, 'trigger');
        });

        afterEach(() => {
            stopPropagationSpy.restore();
            setActiveElSpy.restore();
            setDisplayTimeSpy.restore();
            rotateHandSpy.restore();
            getActiveIndexSpy.restore();
            triggerSpy.restore();
        });

        test('should call stopPropagation on passed event parameter', () => {
            picker.minuteSelectEvent(event, containerEl, listEls);

            expect(stopPropagationSpy.calledOnce).toBe(true);
        });

        test(
            'should call setActiveEl with containerEl and event.target parameters',
            () => {
                picker.minuteSelectEvent(event, containerEl, listEls);

                expect(setActiveElSpy.calledOnce).toBe(true);
                expect(setActiveElSpy.calledWith(containerEl, event.target)).toBe(true);
            }
        );

        test(
            'should call setDisplayTime with calculated value and 1 as index parameter',
            () => {
                picker.minuteSelectEvent(event, containerEl, listEls);

                expect(setDisplayTimeSpy.calledOnce).toBe(true);
                expect(setDisplayTimeSpy.calledWith({minutes: sinon.match.number})).toBe(true);
            }
        );

        test('should call rotateHand with the result of getActiveIndex', () => {
            picker.minuteSelectEvent(event, containerEl, listEls);

            expect(getActiveIndexSpy.calledOnce).toBe(true);
            expect(getActiveIndexSpy.calledWith(listEls)).toBe(true);
            expect(getActiveIndexSpy.returnValues[0]).toBe(0);
            expect(rotateHandSpy.calledOnce).toBe(true);
            expect(rotateHandSpy.calledWith(0)).toBe(true);
        });

        test('should trigger `minuteSelected` event', () => {
            picker.minuteSelectEvent(event, containerEl, listEls);

            expect(triggerSpy.calledOnce).toBe(true);
            expect(triggerSpy.calledWith('minuteSelected')).toBe(true);
        });
    });
});

describe('Events unit tests', () => {
    let events;

    beforeEach(() => {
        events = new Events();
    });

    afterEach(() => {
        events = null;
    });

    describe('#on', () => {
        test('should create a new event index if not already set', () => {
            const eventName = 'test';

            expect(events.events[eventName]).toBeUndefined();

            events.on(eventName, () => false);

            expect(events.events[eventName].length).toBe(1);
        });

        test('should add to the existing event index if already set', () => {
            const eventName = 'test';

            expect(events.events[eventName]).toBeUndefined();

            events.on(eventName, () => false);

            expect(events.events[eventName].length).toBe(1);

            events.on(eventName, () => false);

            expect(events.events[eventName].length).toBe(2);
        });
    });

    describe('#off', () => {
        test('should remove handlers from events index', () => {
            const eventName = 'test';

            expect(events.events[eventName]).toBeUndefined();

            events.on(eventName, () => false);
            events.on(eventName, () => false);
            expect(events.events[eventName].length).toBe(2);

            events.off(eventName);

            expect(events.events[eventName].length).toBe(0);
        });
    });

    describe('#trigger', () => {
        test(
            'should trigger all the assigned callbacks for the event specified',
            () => {
                const eventName = 'test';
                const eventHandler = sinon.spy();

                events.on(eventName, eventHandler);
                events.trigger(eventName);

                expect(eventHandler.called).toBe(true);
            }
        );

        test('should call event handler with the passed parameters', () => {
            const eventName = 'test';
            const eventHandler = sinon.spy();
            const eventParams = 'params';

            events.on(eventName, eventHandler);
            events.trigger(eventName, eventParams);

            expect(eventHandler.called).toBe(true);
            expect(eventHandler.calledWith(eventParams)).toBe(true);
        });
    });
});

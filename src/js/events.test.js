/* eslint-env jest */
import expect from 'expect'
import sinon from 'sinon'
import Events from './events'

describe('Events unit tests', () => {
  let events

  beforeEach(() => {
    events = new Events()
  })

  afterEach(() => {
    events = null
  })

  describe('#on', () => {
    test('should create a new event index if not already set', () => {
      const eventName = 'test'

      expect(events.events[eventName]).toBeUndefined()

      events.on(eventName, () => false)

      expect(events.events[eventName].length).toBe(1)
    })

    test('should add to the existing event index if already set', () => {
      const eventName = 'test'

      expect(events.events[eventName]).toBeUndefined()

      events.on(eventName, () => false)

      expect(events.events[eventName].length).toBe(1)

      events.on(eventName, () => false)

      expect(events.events[eventName].length).toBe(2)
    })
  })

  describe('#off', () => {
    test('should remove handlers from events index', () => {
      const eventName = 'test'

      expect(events.events[eventName]).toBeUndefined()

      events.on(eventName, () => false)
      events.on(eventName, () => false)
      expect(events.events[eventName].length).toBe(2)

      events.off(eventName)

      expect(events.events[eventName].length).toBe(0)
    })
  })

  describe('#trigger', () => {
    test('should trigger all the assigned callbacks for the event specified', () => {
      const eventName = 'test'
      const eventHandler = sinon.spy()

      events.on(eventName, eventHandler)
      events.trigger(eventName)

      expect(eventHandler.called).toBe(true)
    })

    test('should call event handler with the passed parameters', () => {
      const eventName = 'test'
      const eventHandler = sinon.spy()
      const eventParams = 'params'

      events.on(eventName, eventHandler)
      events.trigger(eventName, eventParams)

      expect(eventHandler.called).toBe(true)
      expect(eventHandler.calledWith(eventParams)).toBe(true)
    })
  })
})

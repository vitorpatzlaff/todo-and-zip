'use strict'

import {
  SET_VISIBILITY_FILTER,
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from './actions'
import visibilityFilter from './index'
import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

test('should show all todos', () => {
  const before = SHOW_COMPLETED
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ALL }
  })
  const after = SHOW_ALL
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

test('should show just completed todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_COMPLETED }
  })
  const after = SHOW_COMPLETED
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

test('should show just completed todos', () => {
  const before = SHOW_ALL
  const action = deepFreeze({
    type: SET_VISIBILITY_FILTER,
    payload: { filter: SHOW_ACTIVE }
  })
  const after = SHOW_ACTIVE
  expect(visibilityFilter(before, action)).to.be.equal(after)
})

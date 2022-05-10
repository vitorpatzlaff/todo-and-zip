'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import address from './index'
import { FETCHING, SUCCESS } from './actions'

test('should action FETCHING start fetching', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 0,
    isFetching: false
  })

  const action = deepFreeze({
    type: FETCHING
  })

  const after = {
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 0,
    isFetching: true
  }

  expect(address(before, action)).to.be.deep.equal(after)
})

test('should action SUCCESS update address', () => {
  const before = deepFreeze({
    address: '',
    city: '',
    code: '',
    district: '',
    state: '',
    status: 0,
    isFetching: true
  })

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      address: 'Rua Paula Rodrigues',
      city: 'Osasco',
      code: '06233-030',
      district: 'Piratininga',
      state: 'SP',
      status: 200
    }
  })

  const after = {
    address: 'Rua Paula Rodrigues',
    city: 'Osasco',
    code: '06233-030',
    district: 'Piratininga',
    state: 'SP',
    status: 200,
    isFetching: false
  }

  expect(address(before, action)).to.be.deep.equal(after)
})

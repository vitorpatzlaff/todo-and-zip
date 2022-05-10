'use strict'

import { FETCHING, SUCCESS } from './actions'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch({ type: FETCHING })

  const response = await fetch(`https://ws.apicep.com/cep.json?code=${cep}`, { method: 'GET' })
    .then(res => res.json())

  dispatch({
    type: SUCCESS,
    payload: response
  })
}

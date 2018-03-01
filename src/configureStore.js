// Copyright (c) Microsoft Corporation.
// SPDX-License-Identifier: MIT

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers'
import { autoRehydrate } from 'redux-persist'

export function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunkMiddleware),
      autoRehydrate()
    )
  )
}
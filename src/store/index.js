import { createStore, createLogger } from 'vuex'
import rolodex from './modules/rolodex'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    rolodex,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

import { createStore, createLogger } from 'vuex'
import streetfood from './modules/streetfood'

const debug = process.env.NODE_ENV !== 'production'

export const store = createStore({
  modules: {
    streetfood,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

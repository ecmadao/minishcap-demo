import { Store } from 'vuex'
import { IState } from './store'

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
      $store: Store<IState>
    }
  }
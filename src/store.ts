import 'es6-promise/auto'
import { createStore } from 'vuex'
import validator from 'validator'
import { convertToShortURL, IShortenURL } from './api'

export interface IState {
    url: string
    loading: boolean
    shortUrl?: IShortenURL
}

export const MUTATION_TYPES = {
    SET_SHORT_LINK: 'setShortLink',
    SET_URL: 'setUrl',
    SET_LOADING: 'setLoading'
}

export const ACTION_TYPES = {
    SHORTEN: 'shorten'
}

export const store = createStore<IState>({
    state: {
        url: '',
        loading: false
    },
    actions: {
        async [ACTION_TYPES.SHORTEN] ({ state, commit }) {
            if (state.loading) return
            if (!state.url) return
            if (!validator.isURL(state.url)) return

            commit(MUTATION_TYPES.SET_LOADING, true)

            try {
                const res = await convertToShortURL(state.url)
                commit(MUTATION_TYPES.SET_SHORT_LINK, res.result?.pop())
                commit(MUTATION_TYPES.SET_URL, '')
            } catch (err) {
                console.error(err)
            } finally {
                commit(MUTATION_TYPES.SET_LOADING, false)
            }
        }
    },
    mutations: {
        [MUTATION_TYPES.SET_SHORT_LINK] (state: IState, shortUrl?: IShortenURL) {
            state.shortUrl = shortUrl
        },
        [MUTATION_TYPES.SET_URL] (state: IState, url: string) {
            state.url = url
        },
        [MUTATION_TYPES.SET_LOADING] (state: IState, loading: boolean) {
            state.loading = loading
        }
    }
})
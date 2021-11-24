import { mount } from '@vue/test-utils'
import Header from './Header.vue'

describe('Header test', () => {
    it('Should display the title', () => {
        const header = mount(Header)
        const p = header.find('p')

        expect(p).not.toBeNull()
        expect(p.isVisible()).toEqual(true)
        expect(p.text()).toEqual('minishcap')

    })

    it('Should display a button', () => {
        const header = mount(Header)
        const button = header.find('button')

        expect(button).not.toBeNull()
        expect(button.isVisible()).toEqual(true)
        expect(button.find('a')).not.toBeNull()
        expect(button.text()).toContain('GitHub')
    })
})
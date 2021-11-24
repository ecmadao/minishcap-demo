import { mount } from '@vue/test-utils'
import Button from './Button.vue'

describe('Button test', () => {
    it('Should display a button', () => {
        const button = mount(Button)
        expect(button.find('button')).not.toBeNull()
    })
})
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import App from './App.vue'

describe('App Smoke Test', () => {
  it('mounts without crashing', () => {
    const wrapper = mount(App)
    expect(wrapper.exists()).toBe(true)
  })

  it('contains the main title', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Weather Pro')
  })
})

import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ErrorList from "./ErrorList"

describe("ErrorList", () => {
  let wrapper
  let wrapperTwo

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ErrorList
          errors={["Title can't be blank"]}
        />
      </BrowserRouter>
    )
    wrapperTwo = mount(
      <BrowserRouter>
        <ErrorList
          errors={{}}
        />
      </BrowserRouter>
    )
  })

  it('should print the error list', () => {
    expect(wrapper.find("li").text()).toContain("Title can't be blank")
  })

  it('should not print the error list', () => {
    expect(wrapperTwo.find("li").length).toBe(0)
  })
})

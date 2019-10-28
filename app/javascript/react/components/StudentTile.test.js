import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import StudentTile from "./course/StudentTile"

describe("StudentTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <StudentTile
          firstName="Suzanne"
          lastName="Horowitz"
        />
      </BrowserRouter>
    )
  })

  it("renders an li tag with the user's name", () => {
    expect(wrapper.find("li").text()).toBe("Suzanne Horowitz")
  })
})

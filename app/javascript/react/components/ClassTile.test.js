import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ClassTile from "./course/ClassTile"

describe("ClassTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ClassTile
          name="Class 1"
          date="2019/17/08"
          summaryVideo="URL"
        />
      </BrowserRouter>
    )
  })

  it("renders an h4 tag with the class name", () => {
    expect(wrapper.find("h4").text()).toBe("Class 1")
  })

  it("renders an h6 tag with the animal species", () => {
    expect(wrapper.find("h6").text()).toBe("2019/17/08")
  })
})

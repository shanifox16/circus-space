import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import CourseShowTile from "./course/CourseShowTile"

describe("CourseShowTile", () => {
  let wrapper

  let course1 = {
    name: "Aerial Silks Level 3",
    description: "Here is the description"
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <CourseShowTile
          course={course1}
        />
      </BrowserRouter>
    )
  })

  it("renders an h6 tag with the course name", () => {
    expect(wrapper.find("#course-name").text()).toBe("Aerial Silks Level 3")
  })

  it("renders an h6 tag with the course name", () => {
    expect(wrapper.find("#course-description").text()).toBe("Here is the description")
  })
})

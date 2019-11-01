import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import ClassTile from "./course/ClassTile"

describe("ClassTile", () => {
  let wrapper, wrapper2

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <ClassTile
          id="1"
          name="Class 1"
          date="2019-08-17"
          summaryVideo="URL"
          summaryTitle="hip keys"
          summaryPosted={true}
        />
      </BrowserRouter>
    )
    wrapper2 = mount(
      <BrowserRouter>
        <ClassTile
          name="Class 1"
          date="2019-08-17"
          summaryVideo="No summary"
          summaryPosted={false}
        />
      </BrowserRouter>
    )
  })

  it("renders an h4 tag with the class name if summary is not posted", () => {
    expect(wrapper2.find("h4").text()).toBe("Class 1")
  })

  it("renders an h4 tag with the summary name if a summary is posted", () => {
    expect(wrapper.find("h4").text()).toBe("hip keys")
  })

  it("renders a tag with the date", () => {
    expect(wrapper.find("#class-date").text()).toBe("08 / 17")
  })

})

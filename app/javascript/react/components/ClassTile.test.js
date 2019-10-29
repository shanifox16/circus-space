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
          name="Class 1"
          date="2019/17/08"
          summaryVideo="URL"
          summaryPosted={true}
        />
      </BrowserRouter>
    )
    wrapper2 = mount(
      <BrowserRouter>
        <ClassTile
          name="Class 1"
          date="2019/17/08"
          summaryVideo="No summary"
          summaryPosted={false}
        />
      </BrowserRouter>
    )
  })

  it("renders an h4 tag with the class name", () => {
    expect(wrapper.find("h4").text()).toBe("Class 1")
  })

  it("renders an h5 tag with the date", () => {
    expect(wrapper.find("h5").text()).toBe("2019/17/08")
  })

  it("renders a video tag if a summary has been posted", () => {
    expect(wrapper.find("video").exists()).toBe(true)
  })

  it("does not render an h6 when a summary has been posted", () => {
    expect(wrapper.find("h6").exists()).toBe(false)
  })

  it("renders an h6 if a summary hasn't been posted", () => {
    expect(wrapper2.find("h6").text()).toBe("No summary")
  })

  it("does not render a video tag when a summary has not been posted", () => {
    expect(wrapper2.find("video").exists()).toBe(false)
  })
})

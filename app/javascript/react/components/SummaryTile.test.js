import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import SummaryTile from "./course/SummaryTile"

describe("SummaryTile", () => {
  let wrapper, wrapper2, onClickMock

  beforeEach(() => {
    onClickMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <SummaryTile
          classId="1"
          summaryPosted={true}
          summaryVideo="URL"
          redirectSummary={onClickMock}
        />
      </BrowserRouter>
    )
    wrapper2 = mount(
      <BrowserRouter>
        <SummaryTile
          classId="1"
          summaryPosted={false}
          summaryVideo="No summary"
          redirectSummary={onClickMock}
        />
      </BrowserRouter>
    )
  })

  it("renders a video tag if a summary has been posted", () => {
    expect(wrapper.find("#video-thumbnail").exists()).toBe(true)
  })

  it("does not render an h6 when a summary has been posted", () => {
    expect(wrapper.find("h6").exists()).toBe(false)
  })

  it("renders an h6 if a summary hasn't been posted", () => {
    expect(wrapper2.find("h6").text()).toBe("No summary")
  })

  it("does not render a video tag when a summary has not been posted", () => {
    expect(wrapper2.find("#video-thumbnail").exists()).toBe(false)
  })

  it("should invoke the click function when the video thumbnail is clicked", () => {
    let video = wrapper.find("#video-thumbnail")
    video.simulate("click")
    expect(onClickMock).toHaveBeenCalled()
  })
})

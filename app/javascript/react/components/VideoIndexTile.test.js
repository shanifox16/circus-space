import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import VideoIndexTile from "./videos/VideoIndexTile"

describe("VideoIndexTile", () => {
  let wrapper

  let video = {
    id: 1,
    title: "yay video",
    course: {
      name: "Silks 2"
    },
    video: {
      url: "www.awesome.com"
    }
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <VideoIndexTile
          video={video}
        />
      </BrowserRouter>
    )
  })

  it("renders the title", () => {
    expect(wrapper.find("#title").text()).toBe("yay video")
  })

  it("renders the course name", () => {
    expect(wrapper.find("#course-name").text()).toBe("Silks 2")
  })

  it("renders the video tag with the url", () => {
    expect(wrapper.find("#video-tile").prop("src")).toEqual("www.awesome.com")
  })
})

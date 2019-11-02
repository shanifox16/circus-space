import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import VideoShowTile from "./videos/VideoShowTile"

describe("VideoShowTile", () => {
  let wrapper

  let personalVideo = {
    id: 1,
    title: "yay video",
    body: "this is my video",
    public: true,
    certified: false
  }

  let videoUser = {
    id: 1,
    fname: "John",
    lname: "Doe"
  }

  let videoCourse = {
    name: "Silks 2"
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <VideoShowTile
          personalVideo={personalVideo}
          videoUrl="www.awesome.com"
          videoUser={videoUser}
          videoCourse={videoCourse}
        />
      </BrowserRouter>
    )
  })

  it("renders the title", () => {
    expect(wrapper.find(".video-title").text()).toBe("yay video")
  })

  it("renders the user name", () => {
    expect(wrapper.find(".video-user").text()).toBe("John Doe")
  })

  it("renders the course name", () => {
    expect(wrapper.find(".video-course").text()).toBe("Silks 2")
  })

  it("renders the body", () => {
    expect(wrapper.find(".video-body").text()).toBe("this is my video")
  })

  it("renders the true public icon (check)", () => {
    expect(wrapper.find("#public-icon").prop("className")).toBe("fa fa-check")
  })

  it("renders the false certified icon (x)", () => {
    expect(wrapper.find("#certified-icon").prop("className")).toBe("fa fa-times")
  })
})

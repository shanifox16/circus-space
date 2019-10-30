import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import VideoTile from "./summary/VideoTile"

describe("VideoTile", () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <VideoTile
          video="www.url.com"
        />
      </BrowserRouter>
    )
  })

  it("renders a video tag with the url in the src property", () => {
    expect(wrapper.find("video").prop("src")).toBe("www.url.com")
  })

})

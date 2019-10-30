import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import SummaryCommentsTile from "./summary/SummaryCommentsTile"

describe("SummaryCommentsTile", () => {
  let wrapper

  let user = {
    fname: "John",
    lname: "Doe",
    created_at: "2019/10/12 16:09:23"
  }

  let comment = {
    body: "This is great"
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <SummaryCommentsTile
          comment={comment}
          user={user}
          userClass="instructor"
        />
      </BrowserRouter>
    )
  })

  it("sets the className based on role", () => {
    expect(wrapper.find("div").at(0).hasClass('comment-tile instructor')).toBe(true)
  })

  it("renders the comment header", () => {
    expect(wrapper.find("h6").text()).toBe("John ():")
  })

  it("renders the comment body", () => {
    expect(wrapper.find("#comment-body").text()).toBe("This is great")
  })

})

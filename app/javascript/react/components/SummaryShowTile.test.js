import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import SummaryShowTile from "./summary/SummaryShowTile"

describe("SummaryShowTile", () => {
  let wrapper

  let summary = {
    title: "Title",
    body: "This is a body",
    date: "2019/10/12",
    homework: "Do it"
  }

  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <SummaryShowTile
          summary={summary}
          video="www.url.com"
        />
      </BrowserRouter>
    )
  })

  it("renders the title text", () => {
    expect(wrapper.find("#summary-title").text()).toBe("Title")
  })

  it("renders the date text", () => {
    expect(wrapper.find("#summary-date").text()).toBe("2019/10/12")
  })

  it("renders the body text", () => {
    expect(wrapper.find("#summary-body").text()).toBe("This is a body")
  })

  it("renders the homework text", () => {
    expect(wrapper.find("#summary-homework").text()).toBe("Do it")
  })

})

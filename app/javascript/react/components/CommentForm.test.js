import React from "react"
import Enzyme, { mount } from "enzyme"
import Adapter from "enzyme-adapter-react-16"
import { BrowserRouter } from 'react-router-dom'
Enzyme.configure({ adapter: new Adapter() })

import CommentForm from "./summary/CommentForm"

describe("CommentForm", () => {
  let wrapper, onSubmitMock, onChangeMock, onSetMock

  let commentFields = {
    body: "Part of the way through a comment"
  }

  beforeEach(() => {
    onSubmitMock = jest.fn()
    onChangeMock = jest.fn()
    onSetMock = jest.fn()
    wrapper = mount(
      <BrowserRouter>
        <CommentForm
          commentFields={commentFields}
          setCommentFields={onSetMock}
          handleCommentSubmit={onSubmitMock}
          handleInputChange={onChangeMock}
        />
      </BrowserRouter>
    )
  })

  it("saves the value of the comments field in the textarea value", () => {
    expect(wrapper.find("textarea").props().value).toBe("Part of the way through a comment")
  })

  it("should invoke the submit function when the comment is submitted", () => {
    let submitButton = wrapper.find("#submit")
    submitButton.simulate("submit")
    expect(onSubmitMock).toHaveBeenCalled()
  })

  it("should invoke the change function when a comment is typed", () => {
    let textarea = wrapper.find("textarea")
    textarea.simulate("change")
    expect(onChangeMock).toHaveBeenCalled()
  })
})

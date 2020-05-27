import React from "react";

// component
import MessagesCollection from "./MessagesCollection";

// utils
import { setShallow, findByTestAttr, checkProps } from "../../tests/testUtils";

describe("<MessagesCollection />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setShallow(<MessagesCollection messages={[]} />);
  });

  it("renders without an error", () => {
    const messagesCollection = findByTestAttr(wrapper, "messages-collection");
    expect(messagesCollection.length).toBe(1);
  });

  it("recieves expected props", () => {
    const expectedProps = {
      messages: [
        {
          createdAt: Date.now().toLocaleString(),
          email: "ex@mple.com",
          from: {},
          message: "HI!",
          name: "Greeting",
          _id: "sdk2321",
        },
      ],
    };
    const err = checkProps(MessagesCollection, expectedProps, "props");
    expect(err).toBeUndefined();
  });

  it("matches snapshot", () => {
    const messagesCollection = findByTestAttr(wrapper, "messages-collection");
    expect(messagesCollection).toMatchSnapshot();
  });
});

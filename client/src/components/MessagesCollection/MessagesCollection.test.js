import React from "react";
import toJson from "enzyme-to-json";

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
          createdAt: (1591822933023).toLocaleString(),
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
    const messagesCollectio = findByTestAttr(wrapper, "messages-collection");
    expect(toJson(messagesCollectio)).toMatchSnapshot();
  });
});

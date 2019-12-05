// Test away!

import React from "react";
import { render } from "@testing-library/react";


import Controls from "./Controls.js";

test( "Controls are present", () => {
    const wrapper = render(<Controls />);

    expect(wrapper).getByTestId();
}); 
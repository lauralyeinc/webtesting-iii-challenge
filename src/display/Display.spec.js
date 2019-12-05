// Test away!

import React from 'react';
import { render }  from "@testing-library/react";
import Display from "./Display.js";

test("<Display> snapshot", async () => {
    const wrapper = render(<Display />)
    expect(wrapper.asFragment()).toMatchSnapshot();
});
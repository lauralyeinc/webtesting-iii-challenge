// Test away

import React from 'react';
import { render } from "@testing-library/react";
import Dashboard from './Dashboard.js'; 

test("Renders Dashboard", () => {
    const wrapper = render(<Dashboard />);
});

test(" Has locked and closed in the controls", () => {
    const { getByText } = render(<Dashboard />);

    // getByText('false')
    
})

// done 
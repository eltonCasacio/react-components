import { render, screen } from "@testing-library/react";
import React from "react";
import Checkbox from "./checkbox.component";

describe("Checkbox unit test", () => {
  it("should render with label", () => {
    render(<Checkbox label="checkbox"/>);

    expect(screen.getByLabelText(/checkbox/i)).toBeInTheDocument();
  });
});
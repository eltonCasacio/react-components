import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

describe("Dropdown", () => {
  beforeEach(() => {
    const title = <h1 aria-label="toogle dropdown">Destino</h1>;

    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <Dropdown title={title}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Dropdown>
    );
  });

  it("should render title", () => {
    expect(screen.getByLabelText('toogle dropdown')).toBeInTheDocument();
  });
});

import React from "react";
import { screen, waitFor, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import InputText from "./input-text";
import { FaShippingFast } from "react-icons/fa";

describe("<InputText />", () => {
  it("Renders without Label", () => {
    render(<InputText />);

    expect(screen.queryByLabelText("Label")).not.toBeInTheDocument();
  });

  it("Renders with placeholder", () => {
    render(<InputText placeholder="hey you" />);

    expect(screen.getByPlaceholderText("hey you")).toBeInTheDocument();
  });

  it("Does not changes its value when disabled", async () => {
    const onInput = jest.fn();
    render(
      <InputText
        onInput={onInput}
        label="TextField"
        labelFor="TextField"
        id="TextField"
        disabled
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();

    const text = "This is my new text";
    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
    });
    expect(onInput).not.toHaveBeenCalled();
  });

  it("Is not accessible by tab when disabled", () => {
    render(<InputText label="TextField" labelFor="TextField" id="TextField" disabled />);

    const input = screen.getByRole("textbox");
    expect(document.body).toHaveFocus();

    userEvent.tab();
    expect(input).not.toHaveFocus();
  });

  it("Renders with error", () => {
    render(
      <InputText
        icon={<FaShippingFast data-testid="icon" />}
        label="TextField"
        labelFor="TextField"
        hasError
        errorMessage="Error message"
      />
    );

    expect(screen.getByText("Error message")).toBeInTheDocument();
  });
});

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Checkbox from "./checkbox.component";
import userEvent from "@testing-library/user-event";

describe("Checkbox unit test", () => {
  it("should render with label", () => {
    render(<Checkbox label="checkbox" labelFor="Action" />);

    expect(screen.getByLabelText(/checkbox/i)).toBeInTheDocument();
    expect(screen.getByRole(/checkbox/i)).toBeInTheDocument();
  });

  it("should render without label", () => {
    render(<Checkbox labelFor="Action" />);

    expect(screen.queryByLabelText("checkbox")).not.toBeInTheDocument();
  });

  it("should dispatch onCheck when status changes", async () => {
    const onCheck = jest.fn();
    render(<Checkbox onCheck={onCheck} labelFor="Action" />);
    expect(onCheck).not.toHaveBeenCalled();

    userEvent.click(screen.getByRole("checkbox"));
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });
    expect(onCheck).toHaveBeenCalledWith(true);
  });
});

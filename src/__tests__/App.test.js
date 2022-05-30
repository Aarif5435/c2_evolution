import { render, screen } from "@testing-library/react";
import {Input} from "../Components/Input";

describe("should pass all the test cases", function(){
  it("should have input type text", () => {
   render(<Input></Input>);
   let input = screen.getByTestId("InputTag");
   expect(input).toHaveAttribute("type", "text");
  });
})


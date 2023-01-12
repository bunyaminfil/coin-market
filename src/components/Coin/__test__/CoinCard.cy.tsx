import CoinCard from "../CoinCard";
import { coinInfo, display } from "../__fixtures__/fixtures";
import "tailwindcss/dist/tailwind.min.css";

describe("<CoinCard />", () => {
  it("renders", () => {
    cy.mount(<CoinCard coinInfo={coinInfo} display={display} />);
    cy.get(".table__fullname").should("contain.text", "Bitcoin");
  });
});

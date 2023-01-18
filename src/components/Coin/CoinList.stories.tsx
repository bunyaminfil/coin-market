import { ComponentStory, ComponentMeta } from "@storybook/react";
import { coins } from "./__fixtures__/fixtures";
import CoinList from "./CoinList";
import CoinRow from "./CoinRow";

export default {
  component: CoinList,
  title: "Components/CoinList",
} as ComponentMeta<typeof CoinList>;

const Template: ComponentStory<typeof CoinList> = () => (
  <>
    {coins.map((coin) => {
      return <CoinRow coinInfo={coin.CoinInfo} display={coin.DISPLAY} />;
    })}
  </>
);

export const Default = Template.bind({});
Default.args = {};

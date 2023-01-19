import { ComponentStory, ComponentMeta } from "@storybook/react";
import CoinRow from "../CoinRow";
import { coinInfo, display } from "../__fixtures__/fixtures";

export default {
  component: CoinRow,
  title: "Components/CoinRow",
} as ComponentMeta<typeof CoinRow>;

const Template: ComponentStory<typeof CoinRow> = (args) => (
  <CoinRow {...args} />
);

export const Default = Template.bind({});
Default.args = {
  coinInfo,
  display,
};

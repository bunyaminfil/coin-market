import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    handleClick: { action: "handleClick" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  backgroundColor: "#24a0ed",
  label: "Button",
};

export const Red = Template.bind({});
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  label: "Button",
};

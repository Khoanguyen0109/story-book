import React from "react";
import SelectMU from "./components/SelectMU";

export default {
  title: "Example/Select",
  component: SelectMU,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <SelectMU {...args} />;

export const WithLongText = Template.bind({});
WithLongText.args = {
  withLongText: true,
  label: "Select",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Select",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Select",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};

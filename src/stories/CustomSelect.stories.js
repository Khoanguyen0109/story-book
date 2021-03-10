import React from "react";
import CustomSelect from "./components/CustomSelect";

export default {
  title: "Example/CustomSelect",
  component: CustomSelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template = (args) => <CustomSelect {...args} />;

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

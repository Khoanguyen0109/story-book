import React from "react";
import CustomSelect from "./components/CustomSelect";

export default {
  title: "Example/CustomSelect",
  component: CustomSelect,
  argTypes: {
    backgroundColor: { control: "color" },
    multiple: {
      table: {
        disable: true,
      },
    },
  },
};

const Template = (args) => <CustomSelect {...args} />;

export const Single = Template.bind({});
Single.args = {
  // withLongText: true,
  label: "Select",
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: "Select",
  multiple: true,
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

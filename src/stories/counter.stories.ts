import { render } from "@builder.io/qwik";
import { renderToString } from "@builder.io/qwik/server";
import { Story, Meta } from "@storybook/html";
import { Counter } from "../components/counter/counter";
import { createButton, ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/html/writing-stories/introduction#default-export
export default {
  title: "Counter",
  // More on argTypes: https://storybook.js.org/docs/html/api/argtypes
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/html/writing-stories/introduction#using-args
const Template: Story<any> = (args) => {
  renderToString(Counter, { fragmentTagName: "div" }).then(console.log);
  //render(document, Counter, { fragmentTagName: "div" }).then(console.log);
  return `<div>${args.label}</div>`;
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/html/writing-stories/args
Primary.args = {
  label: "Button",
};

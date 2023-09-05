import type { Meta, StoryObj } from '@storybook/react';
import { Toggle, ToggleProps } from "./Toggle";
import { mockProps } from "./Toggle.mocks";

const meta = {
  title: "component/Toggle",
  component: Toggle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "버튼의 텍스트를 설정합니다.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    ...mockProps.base,
    buttonType: "primary",
  } as ToggleProps,
};


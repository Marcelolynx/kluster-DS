import type { Meta, Story } from "@storybook/react"
import { Button } from "@kluster-ds/react"

export default {
    title: "Button",
    component: Button,
} as Meta

export const Primary: Story<ButtonProps> = (args) => <Button {...args} />
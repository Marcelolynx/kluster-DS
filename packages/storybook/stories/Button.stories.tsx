import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@kluster-ds/react/src'

export default {
    title: 'Button',
    component: Button,

    args: {
        children: 'Enviar',
    },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const big: StoryObj<ButtonProps> = {
    args: {
        size: 'big',
    }
}
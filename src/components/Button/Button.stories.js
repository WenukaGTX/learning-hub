import Button from './index';

export default {
    title: 'Basic/Button',
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    }
};

export const Default = {
    args: {
        buttonText: 'Default',
    },
};

export const Primary = {
    args: {
        buttonText: 'Primary',
        type: 'primary'
    },
};

export const Secondary = {
    args: {
        buttonText: 'Secondary',
        type: 'type'
    },
};
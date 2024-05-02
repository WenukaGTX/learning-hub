import Card from './index';

export default {
    title: 'Basic/Card',
    component: Card,
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

export const Basic = {
    args: {
        type: 'basic',
        image: 'https://placehold.co/120',
        cardImageSize: 120,
        title: 'Title goes here',
        description: 'Description goes here'
    },
};

export const Round = {
    args: {
        type: 'round',
        image: 'https://placehold.co/120',
        cardImageSize: 120,
        title: 'Title goes here',
        description: 'Description goes here'
    },
};
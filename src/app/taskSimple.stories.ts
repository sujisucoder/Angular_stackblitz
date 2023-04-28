/*import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './app.component';

export default {
  component: TaskComponent,
  title: 'Task',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

const Template: Story = args => ({
  props: {
    ...args,
    onPinTask: actionsData.onPinTask,
    onArchiveTask: actionsData.onArchiveTask,
  },
});*/

// Button.stories.ts

import type { Meta, StoryObj } from '@storybook/angular/';

import { TaskSimpleComponent } from './app.component';

const meta: Meta<TaskSimpleComponent> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'TaskSimpleComponent',
  component: TaskSimpleComponent,
  argTypes: {
    onPinTask: { action: 'onPinTask' },
    onArchiveTask: { action: 'onArchiveTask' },
  },
};

export default meta;
type Story = StoryObj<TaskSimpleComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/angular/api/csf
 * to learn how to use render functions.
 */
export const PrimarywithArgs: Story = {
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX',
    },
  },
};

export const PrimaryWithRender: Story = {
  render: () => ({
    props: {
      task: {
        id: '1',
        title: 'Test Task',
        state: 'TASK_INBOX',
      },
    },
  }),
};

export const Pinned: Story = {
  render: () => ({
    props: {
      task: {
        ...PrimarywithArgs.args?.task,
        state: 'TASK_PINNED',
      },
    },
  }),
};

export const Archived: Story = {
  render: () => ({
    props: {
      task: {
        ...PrimarywithArgs.args?.task,
        state: 'TASK_ARCHIVED',
      },
    },
  }),
};
/*
export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
};


*/

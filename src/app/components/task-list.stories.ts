
import { componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import type { Meta, StoryObj } from '@storybook/angular/';

import { CommonModule } from '@angular/common';

import { TaskListComponent } from './task-list.component';
import { TaskComponent } from './task.component';
import { action } from '@storybook/addon-actions';

import * as TaskStories from './task.stories';

const meta: Meta<TaskListComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'TaskListComponent',
    component: TaskListComponent,
    decorators: [
        moduleMetadata({
            //👇 Imports both components to allow component composition with Storybook
            declarations: [TaskListComponent, TaskComponent],
            imports: [CommonModule],
        }),
        //👇 Wraps our stories with a decorator
        componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
};

export default meta;
type Story = StoryObj<TaskListComponent>;

const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};


export const Template: Story = {
    args: {
        onPinTask: TaskStories.DefaultTask.args?.onPinTask,
        onArchiveTask: TaskStories.DefaultTask.args?.onArchiveTask,
      }
}

export const DefaultList: Story = {
    args: {
            tasks: [
                {  state: 'TASK_INBOX', id: '1', title: 'Task 1' },
                {   state: 'TASK_INBOX', id: '2', title: 'Task 2' },
                {   state: 'TASK_INBOX', id: '3', title: 'Task 3' },
                {   state: 'TASK_INBOX', id: '4', title: 'Task 4' },
                {  state: 'TASK_INBOX', id: '5', title: 'Task 5' },
                {   state: 'TASK_INBOX',id: '6', title: 'Task 6' },
            ],
        },
}
  
export const WithPinnedTasks: Story = {

    args:{

        ...DefaultList.args?.tasks?.slice(0,5),

        tasks: [
          
            { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
        ]

    }
}

export const Loading: Story ={
    args : {
        tasks: [],
        loading: true,
    }

}

export const Empty: Story = {
   args : {
        // Shaping the stories through args composition.
        // Inherited data coming from the Loading story.
        // ...Loading.args,
        ...Loading.args,
        loading: false,
    }
    

}


// args:{
//     tasks: [
//         ...DefaultList.args?['tasks'].slice(0, 5),
//         { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
//     ],

// }


// render: () => ({
//     props: {

//         tasks: [
//             ...DefaultList.args?['tasks'].slice(0, 5),
//             { id: '6', title: 'Task 6 (pinned)', state: 'TASK_PINNED' },
//         ],
//     },
// })

 /*

export const Loading = Template.bind({});
Loading.args = {
    tasks: [],
    loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
};*/
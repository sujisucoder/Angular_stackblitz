import type { Meta, StoryObj } from '@storybook/angular/';
import { PureTaskListComponent } from './pure-tasklist.component'


const meta: Meta<PureTaskListComponent> = {
    /* 👇 The title prop is optional.
     * See https://storybook.js.org/docs/angular/configure/overview#configure-story-loading
     * to learn how to generate automatic titles
     */
    title: 'PureTaskListComponent',
    component: PureTaskListComponent,
    argTypes: {
     
    },
  };
  

  export default meta;
type Story = StoryObj<PureTaskListComponent>;

export const noTasks: Story = {

    args:{
        loading:false,
        
    }

}

export const loading: Story = {

    args:{
        loading:true,
        
    }

}
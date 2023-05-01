import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tasks$ : Task[] = [ 

    {
      state : 'TASK_INBOX',
      id: '1',
      title: 'Task 1',
    },
    {
      state : 'TASK_INBOX',
      id: '2',
      title: 'Task 2',
    },
    {
      state : 'TASK_INBOX',
      id: '3',
      title: 'Task 3',
    },
    {
      state : 'TASK_INBOX',
      id: '4',
      title: 'Task 4',
    },
    {
      state : 'TASK_INBOX',
      id: '5',
      title: 'Task 5',
    },
    {
      state : 'TASK_INBOX',
      id: '6',
      title: 'Task 6',
    }
   ];

   
      // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();

  archiveTask($event: any){
    this.onArchiveTask.emit($event)
  }
  
  pinTask($event: any){
    this.onPinTask.emit($event)
  }

}




@Component({
  selector: 'app-task-simple',
  template: `
    <div class="list-item">
      <label [attr.aria-label]="task.title + ''" for="title">
        <input
          type="text"
          [value]="task.title"
          readonly="true"
          id="title"
          name="title"
        />
      </label>
    </div>
  `,
})
export class TaskSimpleComponent {
  @Input() 
  task?: any = {title : 'sojem'};

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onPinTask = new EventEmitter<Event>();

  // tslint:disable-next-line: no-output-on-prefix
  @Output()
  onArchiveTask = new EventEmitter<Event>();
}
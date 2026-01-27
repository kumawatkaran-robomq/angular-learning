import { ChangeDetectorRef, Component, inject, NgModule } from '@angular/core';
import { TasksService } from '../services/tasks';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddTask } from '../add-task/add-task';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardContent } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

interface TasksInterface {
  task_id: string;
  task_name: string;
  status: string;
  user_id: string;
  created_at: string;
  updated_at: string;
}
@Component({
  selector: 'app-tasks',
  imports: [CommonModule, MatSelectModule, MatFormFieldModule,MatIconModule,FormsModule],
  templateUrl: './tasks.html',
  styleUrl:'./tasks.css'
})
export class Tasks {
  constructor(
    private tasks: TasksService,
    private cdr: ChangeDetectorRef,
  ) {}
  readonly dialog = inject(MatDialog);
  taskList: TasksInterface[] = [];
  ngOnInit(): void {
    this.tasks.getTasks().subscribe((res) => {
      this.taskList = res.rows;
      this.cdr.detectChanges();
      console.log(this.taskList);
    });
  }

  onStatusChange(task: any, e: Event) {
    const value = (e.target as HTMLSelectElement).value;
    task.status = value;
    console.log(this.taskList);
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddTask, {
      width: '80%',
    });
  }
}

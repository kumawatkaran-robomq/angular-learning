import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../services/tasks';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './add-task.html',
})
export class AddTask {
  constructor(private taskService: TasksService) {}
  readonly dialogRef = inject(MatDialogRef);
  newTask = new FormGroup({
    task_name: new FormControl('', [Validators.required]),
    status: new FormControl('to-do', [Validators.required]),
  });

  submit() {
    if (this.newTask.invalid) return;

    const task_name = this.newTask.value.task_name ?? '';
    const status = this.newTask.value.status ?? 'to-do';

    this.taskService.postTask(task_name, status).subscribe({
      next: (res: any) => {
        console.log('new task created');
        this.newTask.reset();
        this.cancel();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  cancel() {
    this.dialogRef.close('task-added');
  }
}

  import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TasksService } from '../services/tasks';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './update-task.html',
})
export class UpdateTaskComponent {
  constructor(private taskService: TasksService) {}
  readonly dialogRef = inject(MatDialogRef);
  readonly data=inject(MAT_DIALOG_DATA);
  

  oldTask = new FormGroup({
    task_name: new FormControl(this.data.task_name, [Validators.required]),
    status: new FormControl(this.data.status, [Validators.required]),
  });

  update() {
    if (this.oldTask.invalid) return;

    const task_name = this.oldTask.value.task_name ?? '';
    const status = this.oldTask.value.status ?? 'to-do';
    const task_id=this.data.task_id;

    this.taskService.updateTask(task_id,task_name, status).subscribe({
      next: (res: any) => {
        this.oldTask.reset();
        this.cancel();
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  cancel() {
    this.dialogRef.close('task-updated');
  }
}

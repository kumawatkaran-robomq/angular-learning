import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-task.html',
})
export class AddTask {
  readonly dialogRef=inject(MatDialogRef);
  taskTitle = '';
  status: 'to-do' | 'in-progress' | 'complete' = 'to-do';

  submit() {
    if (!this.taskTitle.trim()) return;

    const newTask = {
      task_name: this.taskTitle,
      status: this.status,
    };

    console.log('New Task:', newTask);
    this.reset();
  }

  cancel() {
    this.dialogRef.close();
  }

  reset() {
    this.taskTitle = '';
    this.status = 'to-do';
  }
}

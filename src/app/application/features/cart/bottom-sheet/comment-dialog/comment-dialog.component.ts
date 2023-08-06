import { Component, Inject, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { CocktailWish } from '@enteties';
import { FormBuilder, FormControl, FormsModule, NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

export interface CommentDialogData {
  wish: CocktailWish;
}

@Component({
  selector: 'app-comment-dialog',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
  ],  templateUrl: './comment-dialog.component.html',
})
export class CommentDialogComponent {
  @Input() placeholder = "e.g.: More Booze!"

  public readonly noteControl = new FormControl(this.data.wish.note)

  constructor(
    private readonly _dialogRef: MatDialogRef<CommentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CommentDialogData,
  ) {}

  public onSubmit() : void {
    this.data.wish.note = this.noteControl.value || "";
    this._dialogRef.close(this.data.wish)
  }
}

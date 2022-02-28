import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackService {

  constructor(private _snackbar: MatSnackBar) {
  }

  message(input: { message: string }) {
    this._snackbar.open(
      `${ input.message }`,
      'OK',
      { horizontalPosition: 'end', verticalPosition: 'top', duration: 3000 },
    );
  }

}

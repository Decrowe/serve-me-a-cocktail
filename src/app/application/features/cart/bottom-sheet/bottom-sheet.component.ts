import { Component,  OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {

  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { CartService } from '@facades';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CocktailWish } from '@enteties';
import { Subject, filter, takeUntil } from 'rxjs';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CommentDialogComponent } from './comment-dialog/comment-dialog.component';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-bottom-sheet',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule,MatDialogModule, MatBadgeModule],
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss'],
})
export class BottomSheetComponent implements OnInit, OnDestroy {
  
  private readonly _bottomSheetRef = inject(MatBottomSheetRef<BottomSheetComponent>);
  private readonly _cartService = inject(CartService);
  private readonly _dialog = inject(MatDialog);
  private readonly _destroyed = new Subject<void>();
    
  public readonly wishes$ = this._cartService.cart$
  
  ngOnInit(): void {
    this.wishes$.pipe(takeUntil(this._destroyed), filter((wishes)=> wishes.length === 0)).subscribe(()=> 
    this._bottomSheetRef.dismiss())
  }

  ngOnDestroy(): void {
    this._destroyed.next();
    this._destroyed.complete();
  }

  public onCollapse() : void {
    this._bottomSheetRef.dismiss()

  }

  public onDelete(wish: CocktailWish) {
    this._cartService.deleteWish(wish)
  }

  public onEditComment(wish: CocktailWish ):void {
    this._cartService.updateWish(wish)
  }

  public openDialog(wish: CocktailWish) :void {
    this._dialog.open(CommentDialogComponent, {data: {wish}, restoreFocus: false}).afterClosed().subscribe((result) => this.onEditComment(result))
  }
}

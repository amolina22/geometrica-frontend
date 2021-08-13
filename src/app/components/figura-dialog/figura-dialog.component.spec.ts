import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiguraDialogComponent } from './figura-dialog.component';

describe('FiguraDialogComponent', () => {
  let component: FiguraDialogComponent;
  let fixture: ComponentFixture<FiguraDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiguraDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiguraDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

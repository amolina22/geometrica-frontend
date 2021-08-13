import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { GeometriaService } from 'src/app/services/geometria.service';

@Component({
  selector: 'app-figura-dialog',
  templateUrl: './figura-dialog.component.html',
  styleUrls: ['./figura-dialog.component.css']
})
export class FiguraDialogComponent implements OnInit, OnDestroy {

  public listaFigura: any[];
  private subscription: Subscription = new Subscription();
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private _serviceGemetria: GeometriaService,
    public dialogRef: MatDialogRef<FiguraDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.listaTipoFigura();
  }

  /**
  * Inicializa formgorup.
  */
  initForm() {
    this.form = this.formBuilder.group({
      tipoFigura: ['', Validators.required],
      superficie: [''],
      base: [''],
      altura: [''],
      diametro: [''],
    });
  }

  listaTipoFigura() {
    this.listaFigura = [
      { tipoFigura: 'Cuadrado' },
      { tipoFigura: 'Triángulo' },
      { tipoFigura: 'Círculo' },
    ];
  }

  /**
   * Inserta la información de la figura.
   */
   guardarFigura() {
    const obj = {
      tipoFigura: this.form.get('tipoFigura').value,
      superficie: this.form.get('superficie').value,
      base: this.form.get('base').value,
      altura: this.form.get('altura').value,
      diametro: this.form.get('diametro').value,
    };
    this._serviceGemetria.insertar(obj).subscribe(
      result => {
        this.openSnackBar('La figura se agregó exitosamente', 'Cerrar');
        this.dialogRef.close();
      }, error => {
        console.log(error);
      }
    );

  }

  /**
   * Muestra mensaje.
   */
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 10000,
    });
  }

  /**
   * Unsubscribe.
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { IFigura } from 'src/app/models/figura';
import { GeometriaService } from 'src/app/services/geometria.service';
import { FiguraDialogComponent } from '../figura-dialog/figura-dialog.component';

@Component({
  selector: 'app-geometria',
  templateUrl: './geometria.component.html',
  styleUrls: ['./geometria.component.css']
})
export class GeometriaComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public form: FormGroup;
  public dataSource = new MatTableDataSource();
  public listaFigura: any[];

  public displayedColumns = [
    'tipoFigura',
    'superficie',
    'base',
    'altura',
    'diametro',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private _serviceGemetria: GeometriaService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.listaTipoFigura();
    this.cargaRegistros();
  }

  /**
   * Inicializa
   */
  initForm() {
    this.form = this.formBuilder.group({
      keywords: [''],
    });
  }

  listaTipoFigura(){
    this.listaFigura = [
      { tipoFigura: 'Cuadrado' },
      { tipoFigura: 'Triángulo' },
      { tipoFigura: 'Círculo' },
  ];
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  initDataSource() {
    this.dataSource = new MatTableDataSource();
  }

  cargaRegistros() {
    this.initDataSource();
    this._serviceGemetria.listaFiguras().subscribe(
      figuras => {
        this.dataSource = new MatTableDataSource(figuras);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.filterPredicate();
      }, error => {
        console.log(error);
      }
    );
  }

  private filterPredicate() {
    this.dataSource.filterPredicate = (data: IFigura, filter: string): boolean => {
      const dataStr = Object.keys(data).reduce((currentTerm: string, key: string) => {
        return (currentTerm + (data as { [key: string]: any })[key] + '◬');
      }, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      const transformedFilter = filter.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
      return dataStr.indexOf(transformedFilter) !== -1;
    };
  }

  cargaRegistrosTipoFigura(tipoFigura) {
    console.log(tipoFigura);
    this.initDataSource();
    this._serviceGemetria.consultaTipoFigura(tipoFigura).subscribe(
      figuras => {
        this.dataSource = new MatTableDataSource(figuras);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.filterPredicate();
      }, error => {
        console.log(error);
      }
    );
  }

  openDialogAgregarFigura() {
    const dialogRef = this.dialog.open(FiguraDialogComponent, {
      width: '900px',
      maxHeight: '740px',
      disableClose: true,
      data: {
      }

    });
    dialogRef.afterClosed().subscribe(result => {
      this.cargaRegistros();
    });

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

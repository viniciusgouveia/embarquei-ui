import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog, MatDrawer } from '@angular/material';

import { StorageDataService } from './../../../services/storage-data.service';
import { LembreteDialogComponent } from './../../usuarios/estudante/checkin/checkin.component';

import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  fotoUsuario: string;

  isAutenticado;

  @ViewChild('drawerRef') public drawer: MatDrawer;

  constructor(private dialog: MatDialog, public router: Router, 
    private storageDataService: StorageDataService, private elementRef: ElementRef) 
  {}

  ngOnInit() 
  {
    // const hammertime = new Hammer(this.elementRef.nativeElement, {});
   
    // if (this.isAutenticado)
    // {
    //   hammertime.on('panright', (ev) => {
    //     this.drawer.open();
    //   });
    //   hammertime.on('panleft', (ev) => {
    //     this.drawer.close();
    //   });
    // }
  }

  ocultarToolbar() 
  {
    return !this.isTelaLogin();
  }

  ocultarMenu()
  {
    // this.isAutenticado = true;

    // const token = localStorage.getItem('embarquei-token');

    // if (token === undefined || token === null)
    // {
    //   this.isAutenticado = false;
    // }
    return this.router.url !== '/estudante/cadastro' && !this.isTelaLogin()
      && this.existeToken();
  }

  existeToken()
  {
    const token = localStorage.getItem('embarquei-token');

    if (token === undefined || token === null)
    {
      return false;
    }
    return true;
  }

  isTelaLogin() 
  {
    return this.router.url === '/login';
  }

  alterarBackground() {
    if (this.isTelaLogin()) 
    {
      return '#2979FF';
    }
    // return 'initial';
  }

  abrirLembreteDialog()
  {
    this.dialog.open(LembreteDialogComponent, {
      height: '90%', width: '99%'//,
    });
  }



  // ABRE A BARRA LATERAL
  // @HostListener('panright')
  // openDrawer() 
  // {
  //   if (this.existeToken()) 
  //   {
  //     this.drawer.open();
  //   }
  // }

  // FECHA A BARRA LATERAL
//   @HostListener('panleft')
//   closeDrawer() 
//   {
//     if (this.existeToken())
//     {
//       this.drawer.close();
//     }
//   }
}


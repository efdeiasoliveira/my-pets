import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private router: Router){

  }

  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: () => this.router.navigate(['']), shortLabel: 'Home', icon: 'po-icon-home' },
    { label: 'Tutores', action: () => this.router.navigate(['owners']), shortLabel: 'Home', icon: 'po-icon-home' },
    { label: 'Pets', shortLabel: 'Home', icon: 'po-icon-home'  },
    { label: 'Sair', shortLabel: 'Home', icon: 'po-icon-home'  }
  ];


}

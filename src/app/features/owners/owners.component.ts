import { Component } from '@angular/core';
import { PoBreadcrumb, PoPageAction, PoTableColumn, PoNotificationService } from '@po-ui/ng-components';
import { Owners } from './shared/interfaces/owners.model';
import { OwnersService } from './shared/services/owners.service';

@Component({
  selector: 'app-owners',
  templateUrl: './owners.component.html',
  styleUrls: ['./owners.component.css']
})
export class OwnersComponent {

  actions: Array<PoPageAction> = [
    { label: 'Novo' }
  ]

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/'},
      { label: 'Tutores' }
    ]
  }

  columns: Array<PoTableColumn> = []
  owners: Owners = {
    items: [],
    hasNext: false,
    remainingRecords: 0
  }

  constructor(
    private ownersService: OwnersService,
    private poNotificationService: PoNotificationService
  ){
    this.setColumns();
    this.getOwners();
  }

  ngOninit(): void {

  }

  setColumns(): void {
    this.columns = [
      { property: 'id', label: 'Código' },
      { property: 'name', label: 'Nome' },
      { property: 'rg', label: 'RG', visible: false },
      { property: 'cpf', label: 'CPF' },
      { property: 'email', label: 'E-Mail' },
      { property: 'tel1', label: 'Telefone 1' },
      { property: 'tel2', label: 'Telefone 2', visible: false },
      { property: 'pets', label: 'Pets', type: 'icon', icons: [
        { value: 'view-pet', icon: 'po-icon-eye', tooltip: 'Visualizar Pets' },
        { value: 'include-pet', icon: 'po-icon-plus-circle', tooltip: 'Incluir Pets'}
      ] }
    ]
  }


  getOwners(): void{
    this.ownersService.get().subscribe({
      next: (owners: Owners) => this.owners.items = owners.items,
      error: (error: any) => this.poNotificationService.error('Falha ao retornar tutores.')
    })
  }
}

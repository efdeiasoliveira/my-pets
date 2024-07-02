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

  isLoading: boolean = false;
  hasNextPage: boolean = false;
  page: number = 1;
  textRemainingRecords: string = '';
  totalOwners: number = 0;

  constructor(
    private ownersService: OwnersService,
    private poNotificationService: PoNotificationService
  ){
    this.setColumns();
    this.getOwners(1,10);
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


  getOwners(page:number, pageSize:number): void{
    this.isLoading = true;
    this.ownersService.get(page,pageSize).subscribe({
      next: (owners: Owners) => this.onGetSuccess(owners),
      error: (error: any) => { this.poNotificationService.error('Falha ao retornar tutores.'); this.isLoading = false }
    })
  }

  onGetSuccess(owners:Owners): void {
    if (this.owners.items.length === 0){
      this.owners.items = owners.items;
    } else {
      this.owners.items = this.owners.items.concat(owners.items);
    }

    this.isLoading = false;
    this.hasNextPage = owners.hasNext;
    this.totalOwners = this.owners.items.length;
    this.textRemainingRecords = `Mostrando ${this.totalOwners} de ${this.totalOwners+owners.remainingRecords}`
  }

  showMoreItems(): void{
    this.page += 1;
    this.getOwners(this.page,10);
  }
}

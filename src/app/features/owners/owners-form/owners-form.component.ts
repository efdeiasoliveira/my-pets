import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PoBreadcrumb } from '@po-ui/ng-components';
import { OwnerForm } from '../shared/interfaces/owner-form.model';

@Component({
  selector: 'app-owners-form',
  templateUrl: './owners-form.component.html',
  styleUrls: ['./owners-form.component.css']
})
export class OwnersFormComponent implements OnInit {

  ownersForm: FormGroup = new FormGroup<OwnerForm>({
    id: new FormControl('', {nonNullable: true}),
    name: new FormControl('', {nonNullable: true}),
    rg: new FormControl('', {nonNullable: true}),
    cpf: new FormControl('', {nonNullable: true}),
    email: new FormControl('', {nonNullable: true}),
    tel1: new FormControl('', {nonNullable: true}),
    tel2: new FormControl('', {nonNullable: true})
  })

  breadcrumb: PoBreadcrumb = {
    items: [
      { label: 'Home', link: '/'},
      { label: 'Tutores', link: 'owners' },
      { label: 'Novo Registro' }
    ]
  }

  constructor(){
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(): void {
    this.ownersForm = new FormGroup<OwnerForm>({
      id: new FormControl('', {nonNullable: true}),
      name: new FormControl('', {nonNullable: true}),
      rg: new FormControl('', {nonNullable: true}),
      cpf: new FormControl('', {nonNullable: true}),
      email: new FormControl('', {nonNullable: true}),
      tel1: new FormControl('', {nonNullable: true}),
      tel2: new FormControl('', {nonNullable: true})
    })
  }
}

import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Users } from '../../interface/user.data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  formUser: FormGroup;
  formUserUpdate: FormGroup;
  users: Users[];
  regexLetter: any = /[a-zA-Z]/;
  regexEmail: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  modalRef: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.formUser = this.fb.group({
      name : ['', [Validators.required, Validators.pattern(this.regexLetter)]],
      lastName: ['', [Validators.required, Validators.pattern(this.regexLetter)]],
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      GitHub: ['', [Validators.required]]
    });

    // Validación para la modificación de usuarios existentes
    this.formUserUpdate = this.fb.group({
      id: [null],
      name : ['', [Validators.required, Validators.pattern(this.regexLetter)]],
      lastName: ['', [Validators.required, Validators.pattern(this.regexLetter)]],
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      GitHub: ['', [Validators.required]]
    });

  }

  
  get name() { return this.formUser.get('name'); }
  get lastName() { return this.formUser.get('lastName'); }
  get email() { return this.formUser.get('email'); }
  get github() { return this.formUser.get('GitHub'); }

  get nameUpdate() { return this.formUserUpdate.get('name'); }
  get lastNameUpdate() { return this.formUserUpdate.get('lastName'); }
  get emailUpdate() { return this.formUserUpdate.get('email'); }
  get githubUpdate() { return this.formUserUpdate.get('GitHub'); }

  
  getUsers() {
  }

  addUser(){

    
    // Puedes modificar la alerta como quieras
    // You can modify the alert as you want
    //  Swal.fire({
    //    title: 'Usuario agregado',
    //    icon: 'success',
    //    text: 'Ha sido agregado con éxito',
    //    timer: 3000,
    //    backdrop:`
    //    rgba(0,0,123,0.4)
    //  url("../../../assets/images/gato-laptop.gif")
    //    right top
    //  `
    //  });
  }

  deleteUser(id: number){
    
    // Puedes modificar la alerta como quieras
    // You can modify the alert as you want
    //  Swal.fire({
    //    title: 'Usuario eliminado',
    //    icon: 'info',
    //    text: 'Pulverizado',
    //    timer: 3000,
    //    backdrop:`
    //    rgba(0,0,123,0.4)
    //    url("../../../assets/images/gatos-rayos.gif")
    //    left top
    //    `
    //  });
  }

  updateUser(user: Users){
  }

  cleanForm(number: number) {
    if(number == 1){
      this.formUser.reset();
    } else {
      this.formUserUpdate.reset();
    }
  }

  openModal(template: TemplateRef<any>, user: Users) {
    const { id, name, lastName, email, GitHub } = user;
    this.formUserUpdate.setValue({
      id: id,
      name: name,
      lastName: lastName,
      email: email,
      GitHub: GitHub
    });
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    });
  }

}

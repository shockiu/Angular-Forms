import { Component, OnInit, TemplateRef } from '@angular/core';
import { Users } from '../../interface/user.data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  id = 1;
  idupdate: number;
  nameuser: string;
  lastname: string;
  emailuser: string;
  githubuser: string;
  nameuserupdate: string;
  lastnameuupdate: string;
  emailuserupdate: string;
  githubuserupdate: string;
  users: Users[];
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  getUsers() {
  }

  addUser(user: Users) {


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

  deleteUser(id: number) {
    
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

  updateUser(user: Users) {
  }

  openModal(template: TemplateRef<any>, user: Users) {
    const { id, name, lastName, email, GitHub } = user;
    this.idupdate = id;
    this.nameuserupdate = name;
    this.lastnameuupdate = lastName;
    this.emailuserupdate = email;
    this.githubuserupdate = GitHub; 
    this.modalRef = this.modalService.show(template, {
      animated: true,
      backdrop: 'static'
    })
  }

}

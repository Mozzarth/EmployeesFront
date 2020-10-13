import { EmployesService } from 'src/app/services/employes.service';
import { Component, OnInit } from '@angular/core';
import { Iemploye } from 'src/app/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})


export class EmployesComponent implements OnInit {
  _employe: Iemploye = this.employeClean
  employes: Iemploye[] = []

  constructor(private employeService: EmployesService) { }

  get employeClean(): Iemploye {
    return { name: "", salary: 0, position: "", office: "", estado: true }
  }
  resetForm(form: NgForm) {
    if (confirm("Clean?")) {
      // this._employe = this.employeClean
      form.reset()
    }
  }
  ngOnInit(): void {
    this.getEmployes()
  }

  getEmployes() {
    this.employeService.getEmployees()
      .subscribe(
        dt => { this.employes = dt.data },
        e => { console.log(e), console.log(e) }
      )
  }

  addEmploye() {
    if (this._employe._id == undefined) {
      this.employeService.addEmploye(this._employe)
        .subscribe(
          dt => { this.getEmployes(), this._employe = this.employeClean },
          e => console.log(e))
    } else {
      this.employeService.editEmploye(this._employe)
        .subscribe(
          dt => { this.getEmployes(), this._employe = this.employeClean },
          e => console.log(e))
    }

  }
  deleteEmploye(id: string) {
    if (confirm("Delete ?")) {
      this.employeService.delete(id)
        .subscribe(
          dt => this.getEmployes(),
          e => console.log(e)
        )
    }
  }
  editEmploye(editEmploye: Iemploye) {
    this._employe = editEmploye
  }


}

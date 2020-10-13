import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { IResp, Iemploye } from "../models";
import { Injectable } from '@angular/core';

const URI = `${environment.URI_API}/employe`

@Injectable({ providedIn: 'root' })
export class EmployesService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<IResp<Iemploye[]>>(URI)
  }
  addEmploye(employe: Iemploye) {
    return this.http.post(URI, employe)
  }
  editEmploye(employe: Iemploye) {
    return this.http.put(`${URI}/${employe._id}`, employe)
  }
  delete(id: string) {
    return this.http.delete(`${URI}/${id}`)
  }
}

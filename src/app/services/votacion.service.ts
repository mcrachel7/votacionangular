import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Votacion, votacionWithoutID } from '../models/votacion';

const API= environment.urlBackend;
const ENDPOINT = 'playlists';

@Injectable({
  providedIn: 'root'
})
export class VotacionService {

  constructor(
    private http: HttpClient
  ) { }
 //GET
 getAllVotacion(){
  return this.http.get<Votacion[]>(`${API}/${ENDPOINT}`)
}
//POST
postVotacion(votacion:votacionWithoutID){
  return this.http.post(`${API}/${ENDPOINT}`,votacion);
}
//PUT
putVotacion(id:string,votacion:votacionWithoutID){
  return this.http.put(`${API}/${ENDPOINT}/${id}`,votacion)
}
//PATCH
patchVotacion(id:string,votacion:votacionWithoutID){
  return this.http.patch(`${API}/${ENDPOINT}/${id}`,votacion)
}
//DELETE
deleteVotacion(id:string){
  return this.http.delete(`${API}/${ENDPOINT}/${id}`)
}
}


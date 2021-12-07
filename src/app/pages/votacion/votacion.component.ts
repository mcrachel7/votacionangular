import { Component, OnInit } from '@angular/core';
import { Votacion } from 'src/app/models/votacion';
import { VotacionService } from 'src/app/services/votacion.service';

@Component({
  selector: 'app-votacion',
  templateUrl: './votacion.component.html',
  styleUrls: ['./votacion.component.css']
})
export class VotacionComponent implements OnInit {
   listaVotacion: Votacion[]=[]; 
  constructor(
    private votacionService: VotacionService, 
  ) { }

  ngOnInit(): void {
    this.votacionService.getAllVotacion().toPromise().then(
      (data: Votacion[]) => this.listaVotacion= data
    )
  }

}




  

  

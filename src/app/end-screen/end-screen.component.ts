import { Component, OnInit} from '@angular/core';
import { Store } from 'src/app/services/store.service' //Récupérer la donnée counter
import { User } from '../user';
import { TranslatePipe } from '../pipes/translate.pipe';
import { RoutingService } from '../services/routing.service';

import { newGame } from '../user-observable';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css'],
  providers: [TranslatePipe],
})
export class EndScreenComponent implements OnInit {
  //CurrentUser properties
  username: string
  score: number
  victories: number

  tabDonnees:User[]
  // //IMPORTER DONNÉES OBSERVABLE
  // currentUser :User = this.store.currentUser // On l'importe mais on peut y accéder via le service directement


  constructor(
    private store: Store,
    private routingService: RoutingService,
    // private newGame: newGame,
    ) {
      this.tabDonnees = this.store.getData();
    }

  ngOnInit() {
    // Si pas de user -> redirection vers la page de login
    if (!this.store.currentUser){
      this.routingService.goToLogin()
    }
    //subscribes 
    this.store.userSubject.subscribe((user)=> {
      this.username=user.username
      this.score=this.store.currentUser.score
      this.victories=this.store.currentUser.victories
    })
  }
}

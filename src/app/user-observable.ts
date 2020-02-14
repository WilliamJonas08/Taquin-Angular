import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Store } from './services/store.service';


// Observer(next,error,complete)   (3 fonctions à définir)
// -> Je croyais que observer était une fonction mais ça a l'air d'être un objet avec les propriétés next error et complete, chaque propriété étant définie comme une fonction

/** Lorsque on va mettre à jour les données de store (contient les parametres "username", "score" 
 * et "victories" de l'attribut "currentUser") via les observables, les subscribers de chacun des observables 
 * concernés seront notifiés et mettront à jour une de ces 3 propriétés de "currentUser" (il me semble). 
 * CEPENDANT, doit on faire souscrire ( aux observables ) tous ceux qui importent des données de store ?
 * (qui ne sont donc aucunement liés directement aux observables)
 */


 /**QUESTIONS :
  *  - Store contient à la fois les données de la partie ( dans "currentUser" ) et les Subjects qui mettent à jour ces données
  *  - Existence de fcts définies dans le store qui permettent de .next le subject, qui mettra ensuite à jour les données
  *  - Côté components : sachant qu'ils importent directement les données via les données du service ( qui sont donc 
  *  directement accessibles), doit on les faire souscrire aux Subjects afin de récupérer les données de manière dynamiques 
  *  ou est ce que la maj dynamique suffit ?
  */
@Injectable({
    providedIn: 'root'
  })

/**
 * Sert à définir les données de CurrentUser lors de chaque partie
 */
export class newGame {
    // public usernameObservable:Observable<string>
    // public scoreObservable:Observable<number>
    // public victoriesObservable:Observable<number>

    constructor(
        private store: Store,
    ){
        // this.usernameObservable=new Observable(this.usernameObserver);
        // this.scoreObservable=new Observable(this.scoreObserver);
        // this.victoriesObservable=new Observable(this.victoriesObserver);
    }

    //     //Used on login
    // public usernameObserver= {
    //     next: function(username):void{
    //         this.store.currentUser.username=username
    //     },
    //     // error: function(error){return("Error find when recieving username: "+ error)},
    // }

    // // Used on move
    // /** Arguments : 0 if setting value ; 1 if score++
    //  */ 
    // public scoreObserver = {
    //     next: function(value:Number):void{
    //         if (value===1){ // cas de l'incrémentation aux clicks
    //             this.store.score++
    //             return
    //         }
    //         if(value===0){ // cas de la définition du score initial lors du login
    //             this.store.score=value
    //             return
    //         } 
    //     },
    //     // error: function(error){return("Error find when recieving username: "+ error)},
    // }

    // // Used on victory
    // /** Arguments : 0 if setting value ; 1 if majVictories(currentUser.username)
    //  */ 
    // public victoriesObserver = {
    //     next: function(value):void{
    //         if(value===0){
    //             this.store.victories = value
    //         }
    //         if(value===1){
    //             this.store.majVictories(this.store.currentUser.username)
    //         }

    //     },
    //     error: function(error){return("Error find when recieving username: "+ error)},
    // }
}





/**
 * 
 *    TEST  
 * 
 */




// //Création du constructeur de l'observable
// function ObservableConstructor(observer){   //observer est ici une simple variable de fonction, lors de l'appel futur, on appellera myObservable

// }

// //Création de l'observable, conformément au constructeur ObservableConstructor
// const userUpdates$ = new Observable (ObservableConstructor)

// //Création Objet de 3 fonctions
// const myObserver = {
//     next: function(x){} ,
//     error: function(error){
//         console.log("An error appeared : "+ error)
//     },
//     complete: function(){},
// }
// //Subscribe
// userUpdates$.subscribe(myObserver)

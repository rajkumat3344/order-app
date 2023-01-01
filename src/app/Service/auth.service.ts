import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string){
    this.fireAuth.signInWithEmailAndPassword(email, password).then(
      ()=>{
        localStorage.setItem('token', 'true');
        this.router.navigate(['home']);
      }, err=>{
        alert(err);
        this.router.navigate(['/login']);
      }
    )
  }

  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err=>{
        alert(err);
    })
  }
}

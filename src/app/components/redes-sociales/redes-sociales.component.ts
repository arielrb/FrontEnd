import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {
  isLogged = false;
  constructor(private router: Router, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login(){
    //funcion login, cuando clickee el boton redirecciona a login

    this.router.navigate(['/login'])
  }
}

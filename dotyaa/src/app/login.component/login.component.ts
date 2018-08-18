import { Component , OnInit} from '@angular/core';

@Component({
    selector: 'app-login-component',
    styleUrls: ['login-component.css'],
    templateUrl: 'login-component.html'
})
export class LoginComponent{
    constructor(){
        console.log("Login page works");
    }
    
    OnInit(){
        console.log("mahima")
    }
}
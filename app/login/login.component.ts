import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { AuthenticationService } from './authentication.service';
import{SidebarService} from '../sidebar/sidebar.service';

@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html',
    styleUrls: ['./css/login.component.css','./css/style.css','./css/form-elements.css'],
    providers :[AuthenticationService]
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    //submitted = false;
    //private user:User=null;

    error = '';
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,private side:SidebarService) { }

    ngOnInit() {
        // reset login status
        this.side.hide();
        this.authenticationService.logout();
        
      

    }

    login() {
        this.loading = true;
        //this.submitted=true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    console.log(result+"& "+this.authenticationService.getToken());
                    this.router.navigate(['dashboard']);
                    
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });              
}

    SignUp()
    {
        alert("ok");
        this.loading=false;
       //this.submitted=false;
        this.router.navigate(['register']);   
    }

    
}

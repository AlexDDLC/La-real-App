import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  credentials = {
    email: 'prueba@gmail.com',
    password: '123'
  };

  constructor(private auth: AuthService, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  logIn() {
    this.auth.login(this.credentials).subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/members');
      } else {
        const alert = await this.alertCtrl.create(
          {
            header: 'login fallido',
            message: 'Credenciales erroneas',
            buttons: ['OK']
          });
        await alert.present();
      }
    });
  }

}

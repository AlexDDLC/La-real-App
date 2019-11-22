import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-person',
  templateUrl: './chat-person.page.html',
  styleUrls: ['./chat-person.page.scss'],
})
export class ChatPersonPage implements OnInit {

  messages = [
    {
      user: 'Alex',
      createdAt: 15544090856000,
      msg: 'Hola'
    },
    {
      user: 'Esmeralda',
      createdAt: 15544090856000,
      msg: 'Hola, que tal estas?'
    },
    {
      user: 'Alex',
      createdAt: 15544090856000,
      msg: 'Muy bien, gracias'
    }
  ];

  currentUser = 'Alex';
  newMsg = '';
  @ViewChild(IonContent, { static: false }) content:IonContent

  constructor(private route: ActivatedRoute) { }

  sendMessage() {
    this.messages.push(
      {
        user: 'Alex',
        createdAt: new Date().getTime(),
        msg: this.newMsg
      }
    );

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }

  ngOnInit() {
    const data = this.route.snapshot.paramMap.get('name');
    console.log(data);
  }

}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {



  form = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;
  success = false;
  error = false;

  sendEmail() {
    this.loading = true;
    this.success = false;
    this.error = false;

    emailjs.send(
      environment.emailjs.serviceId,
      environment.emailjs.templateId,
      {
        name: this.form.name,
        email: this.form.email,
        message: this.form.message
      },
      environment.emailjs.publicKey
    ).then(() => {
      this.loading = false;
      this.success = true;

      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }).catch(() => {
      this.loading = false;
      this.error = true;
    });
  }
}

import { Component } from '@angular/core';
import { UserDetails } from '../../models/signup';
import { SignupService } from '../../services/signup.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Messages } from 'primeng/messages';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signuprequest!: UserDetails;
  loading: boolean = false;
  errorMessage!: string;
  messages: Messages[];
  form: FormGroup = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    phoneNumber: new FormControl(''),
    adharNumber: new FormControl(''),
    adharPic: new FormControl(''),
    profilePic: new FormControl(''),
      currentAddress: new FormControl(''),
      companyName:new FormControl('')
  });
  submitted = false;
  selectedAadhar: any;
  selectedProfile: any;
  constructor(private readonly signupService: SignupService,
    private readonly formBuilder: FormBuilder,
    private readonly messageService: MessageService,
    private authService: AuthService,
    private readonly router: Router) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[6-9]{1}[0-9]{9}')]],
      adharNumber: ['', [Validators.required]],
      adharPic:[null,Validators.required],
      profilePic: [null, Validators.required],
      currentAddress: ['', Validators.required],
      companyName: ['']
      // Add more form controls as needed
    });
  }
  validateEmail(event: any) {
    if (this.isValidateEmailPattern(event.target.value)) {
      this.validateEmailExists(event.target.value);
    }
  }
  validatePhoneNumber(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
    if (event.target.value.length === 10) {
      this.validatePhoenNumberExists(event.target.value);
    }
  }

  validateNumber(event: any) {
    const pattern = /[0-9]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


  isValidateEmailPattern(str: string) {
    let pattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$";
    return str?.match(pattern) !== null;
  }
  validateEmailExists(email: string) {
    this.loading = true;
    this.errorMessage = "";
    this.signupService.validateEmailExists(email).
      subscribe({
        next: (v) => {
          this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Email Already Exists', life: 5000 });
          console.log(v)
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }
  validatePhoenNumberExists(phoneNumber: number) {
    this.loading = true;
    this.errorMessage = "";
    this.signupService.validatePhoenNumberExists(phoneNumber).
      subscribe({
        next: (v) => {
          console.log(v)
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }
  createUser() {
    this.loading = true;
    this.errorMessage = "";
    this.signupService.createUser(this.signuprequest).
      subscribe({
        next: (v) => console.log(v),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }

  onClickLogin(phoneNumber: string) {
    // Example: Call AuthService login method with username and password
    this.authService.login(phoneNumber);
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    // Call registration service to submit form data
    this.signupService.register(this.form.value)
      .subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          // Reset form after successful registration
          this.form.reset();
          this.submitted = false;
        },
        error: (e) =>
          console.error('Registration failed', e),
        complete: () => console.info('Login process completed')
      })

  }

  onFileSelected(event: any) {
    this.selectedProfile = event.target.files[0];
  }
  onAadhaarFileSelected(event: any) {
    this.selectedAadhar = event.target.files[0];
  }
  f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
}

import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AppValidators } from 'src/app/shared/forms/validators/validators';
import { DEPARTMENTS } from 'src/app/shared/ubigeo/departments';
import { PROVINCES } from 'src/app/shared/ubigeo/provinces';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css'],
})
export class StudentNewComponent implements OnInit {
  departments = DEPARTMENTS;
  provinces: any[] = [];
  /*   emailField = new FormControl('', [
    Validators.required,
    // Validators.minLength(6),
    // Validators.maxLength(10),
    AppValidators.emailFormat,
    AppValidators.rangeLength(6, 10),
  ]); */

  emailField: FormControl<string>;

  /*   studentForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl('', [
      Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(10),
      AppValidators.emailFormat,
      AppValidators.rangeLength(6, 18),
    ]),
  }) */

  studentForm: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    email: FormControl<string>;
    ubigeo: FormGroup<{
      department: FormControl<string>;
      province: FormControl<string>;
    }>,
    phones: FormArray<FormControl<string>>;
    contactInfo: FormArray<FormGroup<{
      type: FormControl<string>,
      contact: FormControl<string>
    }>>
    password: FormControl<string>,
    confirmPassword: FormControl<string>,
    photo: FormControl<string>,
  }>;

  get emailControl() {
    return this.studentForm.get('email') as FormControl;
  }

  get departmentControl() {
    return this.studentForm.get('ubigeo.department') as FormControl;
  }

  get provinceControl() {
    return this.studentForm.get('ubigeo.province') as FormControl;
  }

  get phonesArray() {
    return this.studentForm.get('phones') as FormArray;
  }

  get contactInfoArray() {
    return this.studentForm.get('contactInfo') as FormArray;
  }

  get passwordControl() {
    return this.studentForm.get('password') as FormControl;
  }

  get confirmPasswordControl() {
    return this.studentForm.get('confirmPassword') as FormControl;
  }

  get photoControl() {
    return this.studentForm.get('photo') as FormControl;
  }

  constructor(private fb: FormBuilder) {
    this.emailField = this.fb.nonNullable.control('', [
      Validators.required,
      // Validators.minLength(6),
      // Validators.maxLength(10),
      AppValidators.emailFormat,
      AppValidators.rangeLength(6, 10),
    ]);

    this.studentForm = this.fb.nonNullable.group({
      firstName: ['', Validators.required],
      lastName: '',
      email: ['', [Validators.required, AppValidators.emailFormat]],
      ubigeo: this.fb.nonNullable.group({
        department: ['', [Validators.required]],
        province: ['', [Validators.required]],
      }),
      phones: this.fb.array([
        this.fb.nonNullable.control('')
      ]),
      contactInfo: this.fb.array([
        this.fb.nonNullable.group({
          type: '',
          contact: ''
        })
      ]),
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      photo: ['', AppValidators.extension(['jpg', 'png'])]
    }, {
      validators: AppValidators.compareFields('password', 'confirmPassword')
    });

    /*     this.studentForm = this.fb.group({
      firstName: this.fb.nonNullable.control('', Validators.required),
      lastName: this.fb.nonNullable.control(''),
      email: this.fb.nonNullable.control('', [Validators.required, AppValidators.emailFormat]) ,
    }) */

    this.departmentControl.valueChanges.subscribe((dapartmentId: string) => {
      this.provinceControl.setValue('');
      this.provinces = PROVINCES[dapartmentId];
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.loadFromHttp();
    }, 3000);
  }

  addNewPhone() {
    this.phonesArray.push(this.fb.control(''))
  }

  removePhone(index: number) {
    this.phonesArray.removeAt(index)
  }

  addContactInfo() {
    this.contactInfoArray.push(this.fb.group({
      type: '',
      contact: ''
    }))
  }

  removeContactInfo(index: number) {
    this.contactInfoArray.removeAt(index)
  }

  loadFromHttp() {
    this.studentForm.patchValue({
      lastName: 'Vilcarromero',
      firstName: 'Luis',
    });
  }

  save() {
    this.studentForm.markAllAsTouched();
    console.log(this.studentForm.value);
    if (this.studentForm.invalid) return;
    //  this.studentHttp.create(this.studentForm.value)
  }
}

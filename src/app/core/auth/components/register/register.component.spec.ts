// import {ComponentFixture, TestBed} from '@angular/core/testing';
// import {
//     FormBuilder,
//     FormsModule,
//     ReactiveFormsModule,
//     Validators,
// } from '@angular/forms';
// import {ActivatedRoute, convertToParamMap} from '@angular/router';
// import {provideMockStore} from '@ngrx/store/testing';
// import {BehaviorSubject} from 'rxjs';
// import {AuthFacade} from '../../auth.facade';
// import {RegisterUserRequest} from '../../models/register-request.model';

// import {RegisterComponent} from './register.component';
// import {fakeAsync, tick} from '@angular/core/testing';

// describe('RegisterComponent', () => {
//     let component: RegisterComponent;
//     let fixture: ComponentFixture<RegisterComponent>;
//     let authFacade: AuthFacade;
//     let formBuilder: FormBuilder;

//     const initialState = {
//         isSubmitting: false,
//     };

//     class ActivatedRouteStub {
//         // Use a Subject to provide values that can change over time
//         private subject = new BehaviorSubject(convertToParamMap({}));

//         // Expose paramMap as an Observable
//         readonly paramMap = this.subject.asObservable();

//         // Method to set the paramMap value
//         setParamMap(params: any) {
//             this.subject.next(convertToParamMap(params));
//         }
//     }

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [RegisterComponent, ReactiveFormsModule, FormsModule],
//             providers: [
//                 AuthFacade,
//                 provideMockStore({initialState}),
//                 {provide: ActivatedRoute, useClass: ActivatedRouteStub},
//                 FormBuilder,
//             ],
//         });
//         fixture = TestBed.createComponent(RegisterComponent);
//         authFacade = TestBed.inject(AuthFacade);
//         formBuilder = TestBed.inject(FormBuilder);
//         component = fixture.componentInstance;
//         component.form = formBuilder.nonNullable.group({
//             username: ['', Validators.required],
//             email: ['', [Validators.required, Validators.email]],
//             password: ['', Validators.required],
//         });
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });

//     it('should be pressed onSubmit and called auth register user', fakeAsync(() => {
//         const registerUserSpy = spyOn(authFacade, 'registerUser');
//         const mockData = {
//             username: 'Jacob',
//             email: 'jake@jake.jake',
//             password: 'jakejake',
//         };

//         component.form.setValue(mockData);
//         component.onSubmit();
//         tick();

//         const mockUserRequesData: RegisterUserRequest = {
//             user: mockData,
//         };

//         expect(registerUserSpy).toHaveBeenCalledWith(mockUserRequesData);
//     }));
// });

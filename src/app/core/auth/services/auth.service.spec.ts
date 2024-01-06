// import {TestBed} from '@angular/core/testing';
// import {
//     HttpClientTestingModule,
//     HttpTestingController,
// } from '@angular/common/http/testing';

// import {AuthService} from './auth.service';
// import {environment} from 'src/environments/environment';

// describe('AuthService', () => {
//     let authService: AuthService;
//     let httpTestingController: HttpTestingController;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [HttpClientTestingModule],
//             providers: [AuthService],
//         });
//         authService = TestBed.inject(AuthService);
//         httpTestingController = TestBed.inject(HttpTestingController);
//     });

//     it('should be created', () => {
//         expect(authService).toBeTruthy();
//     });

//     it('should send register user request', () => {
//         const mockData = {
//             user: {
//                 username: 'Jacob',
//                 email: 'jake@jake.jake',
//                 password: 'jakejake',
//             },
//         };
//         const mockRespons = {
//             user: {
//                 email: 'jake@jake.jake',
//                 token: 'jwt.token.here',
//                 username: 'Jacob',
//                 bio: 'I work at statefarm',
//                 image: null,
//             },
//         };

//         authService.register(mockData).subscribe((res) => {
//             expect(res).toEqual(mockRespons.user);
//         });

//         const req = httpTestingController.expectOne(
//             environment.apiUrl + '/users'
//         );
//         expect(req.request.method).toBe('POST');
//         req.flush(mockRespons);
//     });
// });

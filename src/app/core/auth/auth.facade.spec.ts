import {TestBed} from '@angular/core/testing';
import {provideMockStore, MockStore} from '@ngrx/store/testing';
import {AuthFacade} from './auth.facade';
import {authActions} from './store/auth.actions';

describe('AuthFacadeService', () => {
    let authFacade: AuthFacade;
    let store: MockStore;

    const initialState = {
        isSubmitting: false,
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthFacade, provideMockStore({initialState})],
        });
        authFacade = TestBed.inject(AuthFacade);
        store = TestBed.inject(MockStore);
    });

    it('should be created', () => {
        expect(authFacade).toBeTruthy();
    });

    it('should dispatch register request', () => {
        const mockRequestData = {
            user: {
                username: 'Jacob',
                email: 'jake@jake.jake',
                password: 'jakejake',
            },
        };

        spyOn(store, 'dispatch');

        authFacade.registerUser(mockRequestData);

        expect(store.dispatch).toHaveBeenCalledWith(
            authActions.registerUser({user: mockRequestData})
        );
    });
});

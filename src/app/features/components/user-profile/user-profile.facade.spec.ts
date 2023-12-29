import {TestBed} from '@angular/core/testing';

import {UserProfileFacade} from './user-profile.facade';

describe('UserProfileService', () => {
    let service: UserProfileFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(UserProfileFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

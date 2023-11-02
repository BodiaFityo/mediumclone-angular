import {TestBed} from '@angular/core/testing';

import {PopularTagsFacade} from './popular-tags.facade';

describe('PopularTagsService', () => {
    let service: PopularTagsFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PopularTagsFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

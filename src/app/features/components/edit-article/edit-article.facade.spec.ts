import {TestBed} from '@angular/core/testing';

import {EditArticleFacade} from './edit-article.facade';

describe('EditArticleFacade', () => {
    let service: EditArticleFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(EditArticleFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

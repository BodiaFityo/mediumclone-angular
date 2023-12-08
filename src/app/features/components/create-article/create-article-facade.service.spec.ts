import {TestBed} from '@angular/core/testing';

import {CreateArticleFacade} from './create-article-facade';

describe('CreateArticleFacade', () => {
    let service: CreateArticleFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(CreateArticleFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

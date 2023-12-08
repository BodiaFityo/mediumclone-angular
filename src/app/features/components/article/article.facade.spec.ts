import {TestBed} from '@angular/core/testing';

import {ArticleFacade} from './article.facade';

describe('ArticleService', () => {
    let service: ArticleFacade;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ArticleFacade);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});

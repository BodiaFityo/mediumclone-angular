import {createActionGroup, emptyProps, props} from '@ngrx/store';

export const popularTagsActions = createActionGroup({
    source: 'PopularTags',
    events: {
        'Get Popular Tags': emptyProps(),
        'Get Popular Tags Success': props<{tags: string[]}>(),
        'Get Popular Tags Failure': props<{error: string}>(),
    },
});

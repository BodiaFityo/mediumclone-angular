import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleForm} from '../models/article-form.model';
import {
    FormArray,
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
} from '@angular/forms';
import {ErrorMessagesComponent} from '../../error-messages/error-messages.component';
import {BackEndErrors} from 'src/app/shared/models/back-end-errors.model';

@Component({
    selector: 'mc-article-form',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule, ErrorMessagesComponent],
    templateUrl: './article-form.component.html',
    styleUrls: ['./article-form.component.scss'],
})
export class ArticleFormComponent implements OnInit {
    @Input() initFormValues!: ArticleForm;
    @Input() isSubmitting: boolean | null = false;
    @Input() backendErrors: string[] | null = null;
    @Output() articleSubmit = new EventEmitter<ArticleForm>();

    get tagList(): FormArray {
        return this.form.get('tagList') as FormArray;
    }

    form: FormGroup = this.fb.nonNullable.group({
        title: [''],
        description: [''],
        body: [''],
        tagField: '',
        tagList: this.fb.array([]),
    });

    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.initForm();
    }

    private initForm(): void {
        this.form.patchValue({
            title: this.initFormValues.title,
            description: this.initFormValues.description,
            body: this.initFormValues.body,
        });

        if (this.initFormValues.tagList.length) {
            this.initFormValues.tagList.forEach((tag) => {
                this.tagList.push(this.fb.control(tag.trim()));
            });
        }
    }

    addTag(event: Event): void {
        const tagField = this.form.get('tagField') as FormControl;

        if (tagField.value) {
            this.tagList.push(this.fb.control(tagField.value.trim()));
            this.form.get('tagField')?.setValue('');
        }

        event.preventDefault();
    }

    removeTag(index: number): void {
        this.tagList.removeAt(index);
    }

    onSubmit(): void {
        const formValues = this.form.getRawValue();
        const mapToArticleForm: ArticleForm = {
            title: formValues.title,
            body: formValues.body,
            description: formValues.description,
            tagList: formValues.tagList,
        };

        this.articleSubmit.next(mapToArticleForm);
    }
}

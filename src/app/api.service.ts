import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {Question} from '../app/common/models/question'

const Base_URL = 'http://localhost:3000';

@Injectable({
    providedIn: 'root'
})

export class QuestionService{
    model = 'Question';
    constructor(private http: HttpClient) {}
    getAllQuestions (){
        return this.http.get('http://localhost:3000/api/questions/string1');
    }

    private getUrl(){
        return `${Base_URL}/${this.model}`;
    }
}
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private name: string;
  private age: number;
  private email: string;
  private address: {
    street: string,
    city: string,
    province: string,
    postcode: string
  };
  private todoList: Todo[];
  private isEditable = true;
  private skill: string[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.name = 'angpao';
    this.age = 21;
    this.email = 'angpao.kittimasak@gmail.com';

    this.address = {
      street: '555',
      city: 'toronto',
      province: 'canada',
      postcode: '36000'
    };

    this.skill = ['java', 'angular', 'node'];

    this.todoService.getTodoList().subscribe((response) => {
      this.todoList = response;
    });
  }
  toggleEdit() {
    this.isEditable = ! this.isEditable;
  }

  addSkill(skills) {
    this.skill.unshift(skills);
    return false;
  }
  removeSkill(skills) {
    this.skill.forEach((element, index) => {
      if (element === skills) {
        this.skill.splice(index, 1);
      }
    });
  }

}
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private todoService = inject(TodoService);
  private route = inject(ActivatedRoute);

  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  currentStatus: string | null = null;
  loading = true;
  error = '';

  ngOnInit(): void {
   
    this.todoService.getTodos().subscribe({
      next: (data: Todo[]) => {
        console.log('Данные загружены:', data.length, 'задач'); // для отладки
        this.todos = data.slice(0, 30);
        this.filterTodos();
        this.loading = false;
      },
      error: (err) => {
        console.error(' Ошибка HTTP:', err);
        this.error = 'ne удалось загрузить задачи. Проверь app.config.ts и интернет!';
        this.loading = false;
      }
    });

   
    this.route.queryParams.subscribe(params => {
      this.currentStatus = params['status'] || null;
      this.filterTodos();
    });
  }

  filterTodos(): void {
    if (this.todos.length === 0) return;   

    let result = this.todos;

    if (this.currentStatus === 'completed') {
      result = this.todos.filter(t => t.completed);
    } else if (this.currentStatus === 'pending') {
      result = this.todos.filter(t => !t.completed);
    }

    this.filteredTodos = result;
  }
}
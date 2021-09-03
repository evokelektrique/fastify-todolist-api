// Todo list storage
export let bucket = []

export interface Todo {
   id: number
   task: string
}

// Just a simple in memory model class
export class TodoModel {
   constructor(public todo_list: any) {}

   findAll(todo_list) {
      return this.todo_list
   }

   find(id: number) {
      console.log(id)
      return this.todo_list.find(todo => todo.id === id)
   }

   insert(todo: Todo) {
      // I could use this.todo_list but it would break the DDD(Domain Driven Design),
      // So instead, We use the internal function `findAll()` which makes more sense
      // Right?
      const todo_list = this.findAll()
      this.todo_list = [...todo_list, todo]

      return todo
   }
}

export class TodoListItem {
  desc: string = '';
  completed: boolean = false;
  constructor(desc: string) {
    this.desc = desc;
  }

  onComplete(e:TodoListItem): void {
    e.completed = !e.completed;
    console.log(e.completed);
  }

  onEdit(e:TodoListItem): void {
    console.log('edit ' + this.desc);
  }

  
}

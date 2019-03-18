export class Newspaper {
  id: string;
  title: string;
  content: string;
  comment: string;

constructor(id: string , content: string, title: string, comment?: string) {
  this.id = id;
  this.title = title;
  this.content = content;
  this.comment = comment;
}
}

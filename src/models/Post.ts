import ISearchable  from './ISeachable';
import Content from './Content';
import Comment  from './Comment';

class Post extends Content{

  private _body: string;
  private _comments : Comment[] = [];

  constructor(idUser: number, title: string,id: number ,body: string) {
    super(idUser, title, id);
    this._body = body;
  }

  get id(): number {
    return this._id;
  }

  get body(): string {
    return this._body;
  }

  set body(body: string) {
    this._body = body;
  }

  get comments(): Comment[] {
    return this._comments;
  }
  get idUser(): number {
    return super.idUser;
  }

  get title(): string {
    return super.title;
  }

  set comments(comments: Comment[]) {
    this._comments = comments;
  }
  public addComment (comment: Comment){
    this._comments.push(comment);
  }

  public removeComment (comment: Comment){
    this._comments = this._comments.filter(item => item !== comment);
  }

  public searchCommentById(id: number): Comment | undefined {
    console.log('Searching comment by id...')
    return this._comments.find((comment) => comment.idComment === id);
  }
  public search(searchArguments: string): ISearchable[] | undefined {
    if( 
      this.title.includes(searchArguments) ||
      this.body.includes(searchArguments) 
    ){
      return [this];
    }else{
      return undefined;
    }
  }
  
  public toString(): string {
    return `Post: ${this.title}\n${this.body} \nComments: ${this.comments.map(item => item.toString()).join('\n')}`;
  }
}

export default Post;
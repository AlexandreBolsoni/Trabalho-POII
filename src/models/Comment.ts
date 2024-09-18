class Comment {
  private _id: number;
  private _postId: number;
  private _email: string;
  private _body: string;

  constructor( idComment: number, postId: number, email: string, body: string) {
    this._id = idComment;
    this._postId = postId;
    this._email = email;
    this._body = body;
  }

  get idComment(): number {
    return this._id;
  }

  get postId(): number {
    return this._postId;
  }

  get email(): string {
    return this._email;
  }

  get body(): string {
    return this._body;
  }

  set body(body: string) {
    this._body = body;
  }

  set email(email: string) {
    this._email = email;
  }


  public toString(): string {
    return `Comment: ${this.email}, Body: (${this.body})`;
  }
}

export default Comment;

import {Subject} from 'rxjs';


export class PostService{
postSubject= new Subject<any[]>();
  created = new Date();
  private  posts = [
    {
      title: 'post 1',
      content: 'dodoc kk opk jj hd ndjnd jdjdjcjcj cjdis cijd kffjifjf jijiri jfj kfjk irjrrij ',
      loveIts: 7,
      created_at: this.created
    },
    {
      title: 'post 2',
      content: 'dicjdo icjjcjf sjjsjjssjfi jdhdjvj kroko kokrok okrk krk kor kor ',
      loveIts: -2,
      created_at: this.created
    },
    {
      title: 'post 3',
      content: 'ududh icjdjs ocidjdfb jjvi rplprlp lprlp lprlprlp ll orkr korkok ',
      loveIts: 0,
      created_at: this.created
    }
  ];
  constructor(){}

  emitPosts(){
    this.postSubject.next(this.posts.slice());
  }

  ajoutPost(title:string,content:string,loveIts:number,created_at:Date){
    const postObject={
      title:'',
      content:'',
      loveIts:0,
      created_at:this.created
    }
    postObject.title=title;
    postObject.content=content;
    postObject.loveIts=loveIts;
    postObject.created_at=created_at;
    this.posts.push(postObject);
    this.emitPosts();

  }

  supprimePost(title:string,content:string,loveIts:number,created_at:Date){
    const postObject = {
      title: title,
      content: content,
      loveIts: loveIts,
      created_at: created_at
    }
    var index = this.posts.map(function(e) { return e.title; }).indexOf(title);
    if (index > -1){
      this.posts.splice(index,1);
    }
    this.emitPosts();

  }

}

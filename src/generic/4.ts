/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

// class Component {
//   constructor (public props:T) {}
// }

// class Page extends Component {
//   pageInfo () {
//     console.log(this.props.title);
//   }
// }

// export {};


interface Props {
  title: string;
}

class Component<T> {
  constructor (public props:T) {}
}

class Page extends Component<Props> {
  pageInfo ():void {
    console.log(this.props.title);
  }
}

export {};
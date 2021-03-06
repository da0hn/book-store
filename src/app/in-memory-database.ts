import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { Category } from '@book-store/views/categories/shared';
import { Book } from '@book-store/views/books/shared';


export class InMemoryDatabase implements InMemoryDbService {
  createDb(): {} | Observable<{}> | Promise<{}> {

    const categories: Category[] = [
      {
        'id': 5,
        'name': 'Categoria 1',
        'description': 'Descrição da Categoria 1',
      },
      {
        'name': 'Categoria 4',
        'description': 'Descrição da categoria 4',
        'id': 8,
      },
      {
        'id': 9,
        'name': 'Categoria 5',
        'description': 'Descrição categoria 5',
      },
    ];

    const books: Book[] = [
      {
        'id': 1,
        'title': 'DDD - Drive Domain Design',
        'author': 'Eric Evans',
        'idCategory': 5,
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        'id': 2,
        'title': 'Titulo 1 Editado',
        'idCategory': 8,
        'author': 'Autor 1',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consectetur tortor ultrices dapibus. Suspendisse suscipit erat quis iaculis porta. Proin lorem massa, suscipit efficitur condimentum vitae, tincidunt eget diam. Donec sit amet elementum sapien. Curabitur laoreet dolor at ipsum egestas, quis auctor sem porta. Etiam ullamcorper congue condimentum. In non dui sagittis, malesuada nisl vel, auctor ligula. Praesent et diam sed justo hendrerit interdum quis placerat ex. Donec ac tellus sed ante viverra porttitor.\n\nMauris efficitur ullamcorper neque, vel dictum magna varius id. Aenean vehicula consectetur lectus ut iaculis. Morbi dapibus interdum aliquet. Cras eu diam augue. Donec tortor purus, ornare et tempus vitae, suscipit sit amet enim. Cras aliquam ante ac leo congue egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sed libero est.\n\nSuspendisse lobortis libero ut urna efficitur, quis posuere arcu dictum. Etiam iaculis, neque gravida scelerisque venenatis, metus ante rhoncus nisi, ac viverra quam dolor quis arcu. Integer ac tristique ipsum, efficitur tempus nulla. Phasellus laoreet cursus quam, sed efficitur nunc tempor quis. Etiam accumsan nunc ut eros auctor maximus vitae et arcu. Praesent efficitur vitae ligula in feugiat. Suspendisse ut lectus volutpat, blandit nibh eget, ultrices diam. Morbi nec augue est.',
      },
      {
        'title': 'Titulo 2',
        'idCategory': 5,
        'author': 'Autor 2',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consectetur tortor ultrices dapibus. Suspendisse suscipit erat quis iaculis porta. Proin lorem massa, suscipit efficitur condimentum vitae, tincidunt eget diam. Donec sit amet elementum sapien. Curabitur laoreet dolor at ipsum egestas, quis auctor sem porta. Etiam ullamcorper congue condimentum. In non dui sagittis, malesuada nisl vel, auctor ligula. Praesent et diam sed justo hendrerit interdum quis placerat ex. Donec ac tellus sed ante viverra porttitor.\n\nMauris efficitur ullamcorper neque, vel dictum magna varius id. Aenean vehicula consectetur lectus ut iaculis. Morbi dapibus interdum aliquet. Cras eu diam augue. Donec tortor purus, ornare et tempus vitae, suscipit sit amet enim. Cras aliquam ante ac leo congue egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sed libero est.\n\nSuspendisse lobortis libero ut urna efficitur, quis posuere arcu dictum. Etiam iaculis, neque gravida scelerisque venenatis, metus ante rhoncus nisi, ac viverra quam dolor quis arcu. Integer ac tristique ipsum, efficitur tempus nulla. Phasellus laoreet cursus quam, sed efficitur nunc tempor quis. Etiam accumsan nunc ut eros auctor maximus vitae et arcu. Praesent efficitur vitae ligula in feugiat. Suspendisse ut lectus volutpat, blandit nibh eget, ultrices diam. Morbi nec augue est.',
        'id': 3,
      },
      {
        'title': 'Titule 3',
        'idCategory': 5,
        'author': 'Autor 3',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod consectetur tortor ultrices dapibus. Suspendisse suscipit erat quis iaculis porta. Proin lorem massa, suscipit efficitur condimentum vitae, tincidunt eget diam. Donec sit amet elementum sapien. Curabitur laoreet dolor at ipsum egestas, quis auctor sem porta. Etiam ullamcorper congue condimentum. In non dui sagittis, malesuada nisl vel, auctor ligula. Praesent et diam sed justo hendrerit interdum quis placerat ex. Donec ac tellus sed ante viverra porttitor.\n\nMauris efficitur ullamcorper neque, vel dictum magna varius id. Aenean vehicula consectetur lectus ut iaculis. Morbi dapibus interdum aliquet. Cras eu diam augue. Donec tortor purus, ornare et tempus vitae, suscipit sit amet enim. Cras aliquam ante ac leo congue egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus sed libero est.\n\nSuspendisse lobortis libero ut urna efficitur, quis posuere arcu dictum. Etiam iaculis, neque gravida scelerisque venenatis, metus ante rhoncus nisi, ac viverra quam dolor quis arcu. Integer ac tristique ipsum, efficitur tempus nulla. Phasellus laoreet cursus quam, sed efficitur nunc tempor quis. Etiam accumsan nunc ut eros auctor maximus vitae et arcu. Praesent efficitur vitae ligula in feugiat. Suspendisse ut lectus volutpat, blandit nibh eget, ultrices diam. Morbi nec augue est.',
        'id': 4,
      },
      {
        'id': 7,
        'title': 'Titulo 19203910',
        'idCategory': 9,
        'author': 'Autor 19023901',
        'content': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut risus congue, varius ante vel, efficitur urna. Nullam tortor quam, maximus quis consectetur congue, posuere vitae erat. In tempus, urna eget interdum tristique, turpis sem viverra nisi, eu mattis nulla lacus in massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec est lacus, malesuada eget elementum finibus, sodales quis libero. Morbi quis viverra sapien. Mauris sed metus mollis, pellentesque nulla ut, faucibus est. Proin a congue elit, eu consectetur sem. Phasellus eget finibus tellus. Praesent mauris lorem, posuere eu elementum nec, blandit sit amet ex. Fusce a condimentum odio, vel porttitor dui. Nam non nunc at justo maximus volutpat at at tortor. Sed tempor, dui nec faucibus laoreet, risus tellus elementum metus, quis aliquam dolor justo eget nisl. Donec mollis venenatis tellus sit amet placerat. Curabitur lacus nisi, porta vel viverra ut, vehicula at odio.\n\nDonec pharetra felis feugiat massa ultrices, sed feugiat nunc efficitur. Sed vulputate maximus imperdiet. Cras suscipit ipsum eu tincidunt placerat. Aliquam facilisis nisl nec libero aliquam, eget tristique mi maximus. Praesent eu augue sodales, consequat tellus nec, consectetur turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vulputate urna ac neque efficitur, nec semper urna euismod. Praesent in orci a ipsum interdum placerat sit amet et urna. Phasellus varius id enim id convallis. In pretium, eros sit amet dignissim lobortis, dolor purus vehicula enim, malesuada condimentum elit tellus vel nisl. Pellentesque in elit bibendum, consequat est egestas, consequat urna. Vestibulum non nibh sed lacus ornare lacinia eu fermentum tortor. Maecenas non arcu sed quam semper efficitur. Duis ultrices fringilla egestas. Fusce faucibus odio faucibus orci convallis dignissim. Sed dignissim nunc nibh, maximus varius justo sollicitudin quis.\n\nProin malesuada, velit a facilisis auctor, velit dolor convallis felis, sed eleifend risus justo sollicitudin sem. Pellentesque sit amet nulla nec arcu tincidunt venenatis. Quisque magna nibh, porttitor eu libero vehicula, gravida ultrices leo. Nunc consectetur massa vel est efficitur, blandit rhoncus quam feugiat. Aliquam nisi leo, luctus a vehicula ut, ultricies quis lacus. Nullam id nulla venenatis, ullamcorper justo vel, scelerisque felis. Nullam id elit in odio lacinia pretium. Etiam diam ligula, congue ut neque a, porttitor lacinia lacus. Nunc ante nisi, rutrum ultricies massa eu, ornare porta velit. Cras egestas ullamcorper ultricies. Sed ac dictum sem, id scelerisque dolor. Mauris ultricies dui nec tortor convallis blandit. Proin ut consequat leo.\n\nVestibulum suscipit, dolor quis egestas blandit, eros leo dignissim eros, sit amet porta ipsum orci suscipit arcu. Pellentesque faucibus ultrices lorem ac molestie. Cras eget dapibus enim, eget tincidunt urna. Aenean at sem elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi feugiat massa tortor, in efficitur velit malesuada id.',
      },
    ];

    return { categories, books };
  }

}


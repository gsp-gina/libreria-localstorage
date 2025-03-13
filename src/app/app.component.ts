import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Book } from './book';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-root',
  imports: [BannerComponent,HeaderComponent,FooterComponent,ListComponent,SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'libreria';
  myBookList:Book[] = [];

  //se inyecta el servicio al componente
  constructor(private libraryService:LibraryService) {  }
  
  ngOnInit() {
    this.loadInitialBooks(); // Carga los libros al inicio
  }
   // Muestra todos los libros inicialmente
  loadInitialBooks() {
    this.myBookList = this.libraryService.getBooks();
  }

  searchEvent(eventList:Book[]){
    this.myBookList = eventList;
    console.log(this.myBookList);
  }


}

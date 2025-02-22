import { Component,OnInit  } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/interfaces/Book';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {
  public book!: Book;
  
  constructor(private service: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getBookById(this.route.snapshot.params.id).subscribe(data => {
      this.book = data;
    })
  }
}

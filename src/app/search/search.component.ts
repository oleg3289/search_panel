import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchStr: string = ''
  minLength: number = 3
  isLoaded: boolean = false
  user: any

  constructor(private service:  UsersService) { }

  handleChange() {
    if (this.minLength <= this.searchStr.length) {
      this.service.getUser(this.searchStr)
      .subscribe(user => {
        this.user = user
        this.isLoaded = true
      })
    }
  }
  
}

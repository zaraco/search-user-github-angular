import {Component} from "@angular/core";
import {SearchService} from "../../../service/search.service";
import {User} from "../../../models";

@Component({
  selector: 'search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent {
  users: User[] = [];
  searchUser: string = ''

  constructor(private searchService: SearchService) {
  }

  onChange() {
    this.searchService.search(this.searchUser).subscribe((value)=> {
      this.users = value.items
    })
  }

}

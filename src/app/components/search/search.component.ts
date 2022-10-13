import { Component, OnInit, Input } from '@angular/core';

export interface SearchProps {
  filter?: boolean;
  placeholder?: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() filter? = false;
  @Input() placeholder = 'Procure um usuário...';

  constructor() { }

  ngOnInit(): void {
  }

}

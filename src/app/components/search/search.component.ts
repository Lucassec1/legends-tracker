import { DropdownItem } from './../dropdown/dropdown.component';
import { SearchTypeOptions, Size } from './../core/types/search';
import { Component, OnInit, Input } from '@angular/core';

type Filter = 'true' | 'false';

export interface SearchProps {
  filter?: string;
  filterOptions?: DropdownItem[]
  size?: string;
  placeholder?: string;
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() filter: Filter = 'false';
  @Input() filterOptions: DropdownItem[] = [];
  @Input() size?: Size = 'md';
  @Input() placeholder? = 'Procure por um usuário...';

  public type!: SearchTypeOptions;

  ngOnInit(): void {
    this.type = SearchTypeOptions[this.filter]
  }

}

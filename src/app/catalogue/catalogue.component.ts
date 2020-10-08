import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../modules/articles-service.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {

  constructor(private articles_service : ArticlesService) {}

  ngOnInit(): void {
    this.articles_service.getData();
  }

}

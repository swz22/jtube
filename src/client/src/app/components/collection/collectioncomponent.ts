import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {
    file: File | null = null;
    files: any = [];

  constructor(private http: HttpClient, private router: Router) {
  }

  gotovideo(video: string) {
    this.router.navigate(["video", video])
  }

  getFiles() {
    this.http.get<any>('/files').subscribe(files => this.files = files);
  }

  stream(filename: string){
    this.router.navigate(['stream', filename]);
  }

  delete(id: string){
    this.http.post<any>('/files/del/' + id, null).subscribe(files => this.files = files);
  }

  ngOnInit(): void {
    this.getFiles();
   }
}

import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.scss'],
})

export class UploadPageComponent implements OnInit {
  title = 'upload-page';

  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  fileUploadForm: FormGroup;
  fileInputLabel: string;
  file: File | null = null;
  files: any = [];
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getFiles();
  }

  onFileSelect(event: Event) {
    const files = (<HTMLInputElement>event.target).files;
    console.log(files);
    if (files) {
      this.file = files[0];
    }
  }

  onFormSubmit() {
    if (!this.file) {
      return alert('Select a file!')
    }
    const formData = new FormData();
    formData.append('file', this.file);
    this.http.post<any>('/upload', formData).subscribe();
    this.file = null;
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

  refreshPage() {
    window.location.reload();
  }
}

import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Blog} from "../../../interfaces/blog.interface";

@Component({
  selector: 'app-blog-modal',
  templateUrl: "./blogModal.component.html"
})

export class BlogModalComponent {
  blog: Blog

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
    this.blog = data
    console.log(data)
  }
}

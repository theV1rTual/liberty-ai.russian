import {Component, OnInit} from "@angular/core";
import { BlogServiceService} from "../../services/blogService.service";
import {Blog} from "../../interfaces/blog.interface";
import {MatDialog} from "@angular/material/dialog";
import {BlogModalComponent} from "../../shared/modals/blogModal/blogModal.component";

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html'
})

export class BlogComponent implements OnInit{

  blogs: Blog[] = []
  blog!: Blog
  loading: boolean = true
  constructor(private blogService: BlogServiceService, private dialog: MatDialog) {}

  ngOnInit() {
    this.getBlogs()
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe(value => {
      this.loading = false
      this.blogs = value
    })
  }

  openBlog(title: string) {
    this.blogService.getBlog(title).subscribe(value => {
      this.blog = value

      this.dialog.open(BlogModalComponent, {
        data: this.blog
      })
    })

  }

  currentPage = 1;

  changePage(page: number): void {
    this.currentPage = page;
  }

  getSubtitle(inputString: string) {
    return inputString.slice(0, 200)

    // Define a regular expression pattern to identify sentences
    // let punctuationMarks = ['.', '!', '?'];
    //
    // // Initialize a counter for sentence endings
    // let sentenceEndings = 0;
    //
    // // Iterate through the characters in the input string
    // for (let i = 0; i < inputString.length; i++) {
    //   let char = inputString[i];
    //   if (punctuationMarks.includes(char)) {
    //     sentenceEndings++;
    //     if (sentenceEndings === 2) {
    //       // Return the substring starting from the next character after the second sentence ending
    //       return inputString.substring(i + 1);
    //     }
    //   }
    // }
    //
    // // If there are not enough sentences, return a message
    // return "Not enough sentences in the input string.";
  }

  protected readonly Array = Array;
}

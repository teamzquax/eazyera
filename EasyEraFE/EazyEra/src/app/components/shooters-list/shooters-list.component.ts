import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Photographer {
  name: string;
  imageUrl: string;
  galleryImageUrls: string[];
  experience: string; // Added experience property
  shoots: number; // Added shoots property
  photographer:string
}

@Component({
  selector: 'app-shooters-list',
  templateUrl: './shooters-list.component.html',
  styleUrl: './shooters-list.component.scss'
})
export class ShootersListComponent {
  photographers: Photographer[] = [
    {
      name: "Bradley Steve",
      imageUrl: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      galleryImageUrls: [
        "https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0ebd884b4d6ac379f42146a2b26fbf2e",
        "https://images.unsplash.com/photo-1460499593944-39e14f96a8c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d8bc3d45d5eeaaf4f576665707f4fddb",
        "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=218dfdd2c0735dbd6ca0f718064a748b",
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=a0941b28175909ca62f096eb533b0c97"
      ],
      experience: "0-4 yrs", // Added experience
      shoots: 9, // Added shoots
      photographer:"C"
    },
    {
      name: "Bradley Steve",
      imageUrl: "https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      galleryImageUrls: [
        "https://images.unsplash.com/photo-1462774603919-1d8087e62cad?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=0ebd884b4d6ac379f42146a2b26fbf2e",
        "https://images.unsplash.com/photo-1460499593944-39e14f96a8c6?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=d8bc3d45d5eeaaf4f576665707f4fddb",
        "https://images.unsplash.com/photo-1434434319959-1f886517e1fe?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=218dfdd2c0735dbd6ca0f718064a748b",
        "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&s=a0941b28175909ca62f096eb533b0c97"
      ],
      experience: "0-4 yrs", // Added experience
      shoots: 9, // Added shoots
      photographer:"C"
    },
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
}

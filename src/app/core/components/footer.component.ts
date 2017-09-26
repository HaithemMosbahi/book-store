import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <footer>
      <a href="https://www.polymer-project.org/1.0/toolbox/">Made by Angular & ngRx</a>
      <div class="demo-label">Demo Only</div>
      </footer>
    `,
    styles: [
        `
        footer {
            position: fixed;
            bottom: 0;
            width: 100%;
        text-align: center;
        margin-top: 20px;
        line-height: 24px;
        }

        .demo-label {
            box-sizing: border-box;
            width: 120px;
            padding: 6px;
            margin: 8px auto 0;
            background-color: #202020;
            color: white;
            text-transform: uppercase;
        }
    `
    ]
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
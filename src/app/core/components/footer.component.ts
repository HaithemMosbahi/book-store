import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    template: `
      <a href="https://angular.io/">Made by Angular & ngRx</a>
      <div class="demo-label">Demo Only</div>
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

        a {
            text-decoration: none !important;
            text-align: center;
            white-space: nowrap;
            color: #757575 !important;
            padding-bottom: 20px;
        }

        .demo-label {
            box-sizing: border-box;
            width: 120px;
            padding: 6px;
            margin: 8px auto 0;
            background-color: #202020;
            color: white;
            text-transform: uppercase;
            font-size: 14px;
        }
    `
    ]
})

export class FooterComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}
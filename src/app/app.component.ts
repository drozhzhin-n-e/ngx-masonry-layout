import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	masonryMaxHeight = 250;
	masonryGutter = 4;

	myImages: any = [
		{
			path: '/assets/img/yi-sung-tsai-04--vertical.jpg',
			width: 669,
			height: 1000
		},
		{
			path: '/assets/img/yi-sung-tsai-01.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-02.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-03.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-04.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-05.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-06.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-07.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-08.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-09.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-10.jpg',
			width: 1000,
			height: 669
		},
		{
			path: '/assets/img/yi-sung-tsai-11.jpg',
			width: 1000,
			height: 669
		}
	];

	handleMasonryLayoutEvents(event){
		console.log(event);
	}
}

## Demo

http://crystalui.org/components/masonry-layout

## Installation

Install the npm package.

    npm i ngx-masonry-layout
        
Import module:

    import { MasonryLayoutComponent } from 'ngx-masonry-layout/components';
 
	@NgModule({
	    declarations: [ MasonryLayoutComponent ]
	})

## Usage
    
	myImages = [
		{
			path: 'path_to_image',
			width: natural_width,
			height: natural_height
		}
	];

	<masonry-layout 
		[max-height]="250"
		[gutter]="4" 
		[images]="myImages"
		(events)="handleMasonryLayoutEvents($event)"></masonry-layout>

## Properties

| name             | type                                | description                                                               |
|------------------|-------------------------------------|---------------------------------------------------------------------------|
| max-height       | number                              | Maximum row height.                                                       |
| gutter           | number                              | Adds space between item elements (it is recommended to use even numbers). |
| class-name       | string or array                     | Adds classes for each item.                                               |
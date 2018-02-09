AngularX masonry layout component.

## Installation

Install the npm package.

    npm i ngx-masonry-layout
        
Import module:

    import { MasonryLayoutDirective } from 'ngx-masonry-layout/components';
     
    @NgModule({
        declarations: [ MasonryLayoutDirective ]
    })

## Usage
    
	<div 
		masonry-layout 
		[max-height]="250" 
		[gutter]="10"
	>
		<img src="path_to_image" />
		<img src="path_to_image" />
	</div>

## Properties

| name             | type                                | description                                       |
|------------------|-------------------------------------|---------------------------------------------------|
| max-height       | number                              | Maximum row height.                               |
| gutter           | number                              | Adds space between item elements.                |

## Demo
http://crystalui.org/components/masonry-layout
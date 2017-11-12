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
		ngx-masonry-layout 
		[max-height]="400" 
		[gutter]="10"
	>
		<img src="/assets/virginie-khateeb.jpg" />
		<img src="/assets/rasmus-hjortshoj.jpg" />
	</div>

## Properties

| name             | type                                | description                                       |
|------------------|-------------------------------------|---------------------------------------------------|
| max-height       | number                              | Maximum row height.                               |
| gutter           | number                              | 	Adds space between item elements.                |

## Demo
http://crystalui.org/components/masonry-layout
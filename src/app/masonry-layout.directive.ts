import { Directive, ElementRef, HostListener, Input, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[ngx-masonry-layout]'
})

export class MasonryLayoutDirective {
    GUTTER = 0;

    @Input('max-height') MAX_HEIGHT = 400; 

    @Input('gutter')
    set gutter(value: any){
        this.GUTTER = value / 2;
    }

    nodes: any;
    elem: any;
    savedNodeDimensions: any = [];
    observer: any;
     
    constructor(private elementRef: ElementRef){
        this.elem = this.elementRef.nativeElement;
    }

    @HostListener('window:resize', ['$event'])
    onWindowResize(event) {
        this.getRows(); 
    }

    ngAfterViewInit() {
        this.hideNodes();
        this.init();

        this.observer = new MutationObserver(mutations => {
            this.init();
            this.getRows();
        });
        let config = { childList: true };
        this.observer.observe(this.elem, config);
    }

    init(){
        this.nodes = this.getNodes();
        this.saveNodesDimensions();
    }

    getRows(){
        let parentWidth = Math.floor(this.elem.parentNode.offsetWidth);
        let totalRowWidth: any = 0; 
        let rows: any = {
            start: 0,
            length: 0
        };

        this.elem.style.width = parentWidth +'px';
        this.setColStyles();

        this.nodes.some((node, index) => {

            if (totalRowWidth === 0){
                rows.start = index;
                rows.length = 0;
            }

            rows.length++;
            totalRowWidth += this.getComputedWidth(index);
            
            if (totalRowWidth >= parentWidth || this.isLastChild(index)){
                rows.end = index;
                let scaling = totalRowWidth/parentWidth;

                this.setColDimensions(scaling, rows);
                totalRowWidth = 0; 
            }
        });
    }

    setColDimensions(scaling: any, rows: any){
        let totalRowWidth: any = 0;
        let parentWidth = this.elem.parentNode.offsetWidth;
        scaling = (scaling < 1) ? 1 : scaling;

        this.nodes.some((node, index) => {
            if (index >= rows.start && index <= rows.end){
                let nodeWidth;

                if (index === rows.end && scaling > 1){ 
                    nodeWidth = (100 - totalRowWidth) - ((this.GUTTER * 2) / parentWidth * 100);
                    node.style.width = 'calc('+nodeWidth+'%)';

                    this.showNodes();
                } else {
                    nodeWidth = ((this.getComputedWidth(index) / scaling) / parentWidth * 100) - ((rows.length * (this.GUTTER * 2)) * (this.getComputedWidth(index) / scaling) / parentWidth) / parentWidth * 100;
                    node.style.width = 'calc('+nodeWidth+'%)';
                    
                    totalRowWidth += nodeWidth;
                    totalRowWidth += (this.GUTTER / parentWidth * 100) * 2;  
                }

                node.style.margin = this.getNodeMargin(parentWidth);
                node.style.height = '';
                
                if (rows.length > 1){
                    node.style.height = this.nodes[rows.start].offsetHeight + 'px';
                }
            }
        });
    }

    setColStyles(){
        this.nodes.some((node, index) => {
            node.style.float = 'left';
        });
    }

    getNodes(){
        return Array.prototype.slice.call( this.elem.children );
    }

    getComputedWidth(index: any){
        return this.savedNodeDimensions[index].width / (this.savedNodeDimensions[index].height / this.MAX_HEIGHT);
    }

    saveNodesDimensions(){
        this.nodes.some((node, index) => {
            let width;
            let height;
            let self = this;         

            if (node.getElementsByTagName("img")[0]){
                let img = node.getElementsByTagName("img")[0];
                width = img.naturalWidth;
                height = img.naturalHeight;
                
                img.onload = function(){
                    width = img.naturalWidth;
                    height = img.naturalHeight;
                    self.savedNodeDimensions[index] = Object.assign({}, { width, height });
                    self.getRows();
                }
            } else {
                width = node.naturalWidth ? node.naturalWidth : node.offsetWidth;
                height = node.naturalHeight ? node.naturalHeight : node.offsetHeight;

                node.onload = function(){ 
                    width = node.naturalWidth ? node.naturalWidth : node.offsetWidth;
                    height = node.naturalHeight ? node.naturalHeight : node.offsetHeight;
                    self.savedNodeDimensions[index] = Object.assign({}, { width, height });
                    self.getRows();
                }
            }

            this.savedNodeDimensions[index] = Object.assign({}, { width, height });
        });
    }

    isLastChild(index: any){
        return index + 1 === this.nodes.length;
    }

    hideNodes(){
        this.elem.style.opacity = 0;
    }

    showNodes(){
        this.elem.style.opacity = 1;
    }

    getNodeMargin(parentWidth: any){
        return 'calc('+this.GUTTER / parentWidth * 100+'%)';
    }
}
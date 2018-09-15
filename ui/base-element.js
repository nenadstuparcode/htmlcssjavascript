import $ from '../node_modules/jquery/dist/jquery.min.js';
export class BaseElement {
   constructor(){
       this.element = null; //jquery object
   }
   appendToElement(el){
       this.createElement();
       el.append(this.element);
   }
   createElement(){
       let s = this.getElementString();
       this.element = $(s);
   }
   getElementString(){
       throw 'please overide get element string in base element'
   }
}


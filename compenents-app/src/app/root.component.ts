// Importing Angular component from angualr core.
import { Component} from "@angular/core"

/**
 * Adding Componet Decorator 
 * template: login form structure 
 */ 

@Component ({
    selector: 'my-app-component',
    template: `<div class="center-block" id="login">
    <input type="text" name="Name" class="form-control"/>
    <input type="button" value="Login" class="btn btn-primary btn-block"/></div>`,
    styleUrls: ['./root.component.css']
})

// Class RootComponent
export class RootComponent {

}
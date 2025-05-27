import { NgModule } from "@angular/core";
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatIconModule} from "@angular/material/icon"


@NgModule({
    exports:[
        MatButtonModule,
        MatCardModule,
MatInputModule,
MatSelectModule,
MatFormFieldModule,
MatIconModule
    
    ]
})
export class MaterialModule{}
import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatToolbarModule,
} from '@angular/material';

const MaterialComponents = [
    MatButtonModule,
    MatToolbarModule
];

@NgModule({
    declarations: [],
    imports: [MaterialComponents],
    exports: [MaterialComponents]
})

export class MaterialModule { }

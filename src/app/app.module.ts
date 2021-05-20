import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { AppComponent } from './app.component';
import { MathModule } from './math/math.module';

const defaultEditorConfig: NgxMonacoEditorConfig = {
  defaultOptions: {
    theme: 'vs-dark',
    automaticLayout: true,
    minimap: {
      enabled: false
    },
    scrollBeyondLastLine: false,
    scrollbar: {
      vertical: "hidden",
      horizontal: "hidden"
    }
  }
};

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    MathModule,
    MonacoEditorModule.forRoot(defaultEditorConfig)
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {}

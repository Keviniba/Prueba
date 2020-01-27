import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { VideojuegosComponent } from "./Components/videojuegos/app.videojuegos.component";
import { SeriesComponent } from "./Components/series/app.series.component";
import { PeliculasComponent } from "./Components/peliculas/app.peliculas.component";

@NgModule({
  declarations: [
    AppComponent,
    VideojuegosComponent,
    SeriesComponent,
    PeliculasComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"; // this is needed!
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";

import { AppRoutes } from "./app.routing";
import { AdminLayoutComponent } from "./layouts/admin/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth/auth-layout.component";
import { FixedPluginModule } from "./shared/fixedplugin/fixedplugin.module";
import { FooterModule } from "./shared/footer/footer.module";
import { NavbarModule } from "./shared/navbar/navbar.module";
import { PagesnavbarModule } from "./shared/pagesnavbar/pagesnavbar.module";
import { SidebarModule } from "./sidebar/sidebar.module";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true,
    }),
    SidebarModule,
    NavbarModule,
    FooterModule,
    FixedPluginModule,
    PagesnavbarModule,
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Component, OnInit, ElementRef } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

declare var $: any;

@Component({
  moduleId: module.id,
  selector: "login-cmp",
  templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
  test: Date = new Date();
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}
  checkFullPageBackgroundImage() {
    var $page = $(".full-page");
    var image_src = $page.data("image");

    if (image_src !== undefined) {
      var image_container =
        '<div class="full-page-background" style="background-image: url(' +
        image_src +
        ') "/>';
      $page.append(image_container);
    }
  }

  ngOnInit() {
    this.checkFullPageBackgroundImage();

    setTimeout(function () {
      // after 1000 ms we add the class animated to the login/register card
      $(".card").removeClass("card-hidden");
    }, 700);
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

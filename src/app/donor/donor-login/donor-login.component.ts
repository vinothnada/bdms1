import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as $jv from "jquery-validation";

@Component({
  selector: "app-donor-login",
  templateUrl: "./donor-login.component.html",
  styleUrls: ["./donor-login.component.scss"],
})
export class DonorLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(function () {
      $jv("form[name='donorlogin']").validate({
        rules: {
          inputEmail: {
            required: true,
            email: true,
          },
          inputPassword: {
            required: true,
          },
        },
        messages: {
          password: {
            required: "Please provide a password",
          },
          email: "Please enter a valid email address",
        },
        submitHandler: function (form) {
          form.submit();
        },
      });
    });
  }

}

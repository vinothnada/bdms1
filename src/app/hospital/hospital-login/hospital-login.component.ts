import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import * as $jv from "jquery-validation";

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.scss']
})
export class HospitalLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $jv("form[name='hospitalLogin']").validate({
        rules: {
          hospitalId: {
            required: true,
          },
          inputPassword: {
            required: true,
          },
        },
        messages: {
          password: {
            required: "Please provide a password",
          },
          email: "Please enter a valid hospital Id",
        },
        submitHandler: function (form) {
          form.submit();
        },
      });
    });
  }

}

import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import * as $jv from "jquery-validation";

@Component({
  selector: 'app-donor-register',
  templateUrl: './donor-register.component.html',
  styleUrls: ['./donor-register.component.scss']
})
export class DonorRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $jv("form[name='donerregistar']").validate({
        rules: {
          nic: {
            required: true,
          },
          email: {
            required: true,
          },
          city: {
            required: true,
          },
          contact1: {
            required: true,
            number : true
          },
          donorName: {
            required: true,
          },
          district: {
            required: true,
          },
          password: {
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

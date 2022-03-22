import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";
import * as $jv from "jquery-validation";

@Component({
  selector: "app-donor-profile",
  templateUrl: "./donor-profile.component.html",
  styleUrls: ["./donor-profile.component.scss"],
})
export class DonorProfileComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(function () {
      $jv("form[name='donerprofile']").validate({
        rules: {
          donerprofile: {
            required: true,
          },
          nic: {
            required: true,
          },
          email: {
            required: true,
            email: true,
          },
          city: {
            required: true,
          },
          contact2: {
            required: true,
            number: true
          },
          bloodGroup: {
            required: true,
          },
          firstName: {
            required: true,
          },
          lastName: {
            required: true,
          },
          district: {
            required: true,
          },
          contact1: {
            required: true,
            number:true
          },
          dob: {
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

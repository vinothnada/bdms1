import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import * as $jv from "jquery-validation";

@Component({
  selector: 'app-hospital-register',
  templateUrl: './hospital-register.component.html',
  styleUrls: ['./hospital-register.component.scss']
})
export class HospitalRegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(function () {
      $jv("form[name='hospitalregistar']").validate({
        rules: {
          hospitalId: {
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
          hospitalName: {
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

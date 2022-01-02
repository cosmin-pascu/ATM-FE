import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AtmService } from '../atm.service';
import { banknote } from '../banknote';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})

export class MainPageComponent implements OnInit {
  isLinear = true;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  currencies: string[];
  banknotesList: banknote[];
  moneySuccessfullyWithdrawn = false;

  constructor(private _formBuilder: FormBuilder,
              private atmService: AtmService) {
    this.currencies = ["EUR", "RON"];
    this.banknotesList = [];
   }

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      selected_currency: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      sum: ['', Validators.required],
    });
  }

  withdrawMoney() {
    var currency = this.firstFormGroup.get('selected_currency')?.value;
    var sum = this.secondFormGroup.get('sum')?.value;

    this.atmService.withdrawMoney(currency, sum).subscribe(list => {
      this.banknotesList = list;
      this.moneySuccessfullyWithdrawn = true;
    }, (error) => {
      this.moneySuccessfullyWithdrawn = false;
    });
  }

}

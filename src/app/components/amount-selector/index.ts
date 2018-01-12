import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-amount-selector',
  templateUrl: './template.html',
  styleUrls: ['./style.scss']
})
export class AmountSelectorComponent implements OnInit {
  public static readonly DEFAULT_AMOUNT = 3000;
  static readonly QUICK_AMOUNTS = [1000, 2000, 3000, 5000, 7000, 10000, 20000];

  amount: number;
  amountAfterTaxCredit: number;
  otherAmount: number;
  quickAmounts: number[];

  @Input()
  amountForm: FormGroup;

  static computeAmountAfterTaxCredit(initialAmount: number) {
    return parseInt((initialAmount * 0.34).toString(), 10);
  }

  static convertToIntegerAmount(amount) {
    return parseInt(Math.max(parseFloat(amount.replace(',', '.').replace(' ', '')) * 100, 0).toString(), 10);
  }

  ngOnInit() {
    this.amount = AmountSelectorComponent.DEFAULT_AMOUNT;
    this.quickAmounts = AmountSelectorComponent.QUICK_AMOUNTS;
    this.updateAmounts();
  }

  onQuickAmountClick(amount) {
    this.amount = amount;
    this.otherAmount = null;
    this.updateAmounts();
  }

  onOtherAmountChange(otherAmount) {
    this.amount = AmountSelectorComponent.convertToIntegerAmount(otherAmount);
    this.updateAmounts();
  }

  isQuickAmountChecked(quickAmount) {
    return this.amount === quickAmount;
  }

  isOtherAmountChecked(otherAmount) {
    return otherAmount && AmountSelectorComponent.QUICK_AMOUNTS.indexOf(AmountSelectorComponent.convertToIntegerAmount(otherAmount)) <= -1;
  }

  updateAmounts() {
    this.amountForm.patchValue({amount: Math.max(this.amount, 0).toString()});
    this.amountAfterTaxCredit = AmountSelectorComponent.computeAmountAfterTaxCredit(this.amount);
  }
}

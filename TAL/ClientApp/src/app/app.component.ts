import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PremiumService } from './services/premium.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ClientApp';
  age = 38;
  saving: boolean = false;
  occupations: any = [
    { text: "Cleaner", value: 1.5 },
    { text: "Doctor", value: 1},
    { text: "Author", value: 1.25},
    { text: "Farmer", value: 1.75},
    { text: "Mechanic", value: 1.75},
    { text: "Florist", value: 1.5}];
 
  form: FormGroup;
 
  constructor(private formBuilder: FormBuilder, private premiumService: PremiumService) {
 
  }
 
  ngOnInit() {
    this.createForm();

  }
 
  private createForm() {
    let formGroup: { [k: string]: any } = {
      Name: ['', Validators.required],
      DateOfBirth: ['', Validators.required],
      Age: [],
      SumAssured: ['', Validators.required],
      Occupation: [-1, Validators.required],
      Premium: []
    };
 
    this.form = this.formBuilder.group(formGroup);
  }
 
  private calculatePremium(occupation: any) {
    this.saving = true;
    const userModel = this.form.value;
    console.log(JSON.stringify(userModel));

    setTimeout(() => { this.saving = false; console.log(this.saving); }, 2000);

    this.premiumService.calculatePremium({
      Name: userModel.Name,
      Age: userModel.Age,
      RiskFactor: userModel.RiskFactor,
      SumAssured: userModel.SumAssured
    }).subscribe((result) => {
      let calculatedPremium = result;
      console.log(calculatedPremium);
      this.form["Premium"].value = calculatedPremium;
    });
  }
}

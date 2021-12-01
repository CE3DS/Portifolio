import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public containerClass!: string[];
  experience!: string;

  constructor() { }

  ngOnInit(): void {
    this.experience = this.setExperience();
  }

  setExperience() {

    let beginDate = new Date("2021-06-01");
    let currentDate = new Date();

    let months = currentDate.getUTCMonth() - beginDate.getUTCMonth();
    let expTime = months + (12 * (currentDate.getUTCFullYear() - beginDate.getUTCFullYear()));

    if (expTime <= 12)
      return expTime.toString() + " meses";
    else {
      var years_: string = (~~(expTime / 12)).toString();
      var msg = ~~years_.toString() + (years_ == '1' ? " ano" : " anos")

      if (months > 0) {
        msg = (msg + " e " + months);
        if (months == 1) {
          msg = msg + " mês";
        } else
          msg = msg + " meses";
      }
      return msg;
    }
  }
}

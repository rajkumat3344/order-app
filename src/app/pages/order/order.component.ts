import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{

  isValid: boolean = false;

  orderid: string = '';
  firstname: string = '';
  lastname: string = '';
  address: string = '';
  dateOfOrder: string = '';
  quantity: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
  
  }


  placeOrder(orderId: string){

    //check if orderId is null
    if(this.orderid == ''){
      // console.log('Please provide a order id!');
        this.router.navigate(['./notFound']);
    }
    else{
      // this.orderid = orderId;
      // console.log(orderId,
      //   this.firstname,
      //   this.lastname,
      //   this.address,
      //   this.dateOfOrder,
      //   this.quantity);

      setTimeout(()=>{
        this.router.navigate(['./success']);
      },1000)

    }
  }

  back(){
    this.router.navigate(['/home']);
  }


}

import { Component, OnInit } from '@angular/core';
import {AllFunctionService} from '../all-function.service';

// this.tableCont.holdindex = index;
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  btnData:any;
  btnDataall:any;
  type:any;editData:any;userId:any;location:any;id:any;value:any;
  constructor(private btncont:AllFunctionService) {
  
  }

  add(){
    if((this.userId != null) && (this.id!= null) && (this.type != null) && (this.location!=null)){

      this.btncont.id=this.id;
      this.btncont.type=this.type;
      this.btncont.userId=this.userId;
      this.btncont.location=this.location;
  this.btncont.Add();
  //changing location
  // console.log(this.btncont.location);
  //value is being updated
  // alert(this.btncont.id);
  this.btncont.Add();
  this.btncont.subscribeData({userId:null,id:null,type:null,location:null});
  
    }

  }
  addrow(){
  // console.log(this.btncont.UserInfo);
  
    if((this.userId != null) && (this.id!= null) && (this.type != null) && (this.location!=null)){
      for(let i=0;i<this.btncont.UserInfo.length;i++){
        if(this.userId!=this.btncont.userId &&
          this.id!=this.btncont.userId &&
          this.location!=this.btncont.location &&
          this.type!=this.btncont.type){


            this.btncont.id=this.id;
this.btncont.type=this.type;
this.btncont.userId=this.userId;
this.btncont.location=this.location; 

//Added row
// console.log(this.btncont.id,this.btncont.type,this.btncont.userId,this.btncont.location);
      this.btncont.Addrow();
      this.btncont.subscribeData({userId:null,id:null,type:null,location:null});
      this.btncont.id=null;
      this.btncont.type=null;
      this.btncont.userId=null;
      this.btncont.location=null;

        }
      }


    }
    else{
      alert("checking for git");
      alert("add Row Not Working");
    }


}


  ngOnInit() {
    this.btncont.serviceSubject.subscribe(btnData=>{
      // console.log("in",btnData);
      this.location=btnData.location;
    this.id=btnData.id;
    this.userId=btnData.userId;
    this.type=btnData.type;
  })
  this.btncont.serviceSubjectbtn.subscribe(btnDataall=>{
    // console.log("databtn",btnDataall);
    // btnDataall[this.btncont.holdindex]['location']=this.btnData.location;
    //btnDataall contain object of updated after add or delete
    this.btncont.UserInfo = btnDataall;
  })

  }

}

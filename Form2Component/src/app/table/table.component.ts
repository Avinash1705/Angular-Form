import { Component, OnInit } from '@angular/core';
import {AllFunctionService} from '../all-function.service';
import { HttpClient } from '@angular/common/http';
import { from, Subscription, Subject } from 'rxjs';


// this.tableCont.holdindex = index;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  [x: string]: any;
  Disablebtn:any;
  //  subject:any;
  holdindex:any=null;
  userActivated:any;
private activateSub:Subscription;
  UserInfo:any;
  public url='assets/user.json';
 
  type:any;editData:any;userId:any;location:any;id:any;value:any;
  constructor(private tableCont:AllFunctionService,private http: HttpClient) {
    // this.tableCont.type=this.type;
    // this.tableCont.id=this.id;
    // this.tableCont.location=this.location;
    // this.tableCont.userId=this.userId;
    console.log("Cons",this.tableCont.type);
    console.log("term",term,"btnUSerInfo",this.btncont.UserInfo,"itemCopy",this.btncont.itemsCopy);
    this.btncont.UserInfo = this.btncont.itemsCopy.filter((tag)=> {
      //filter acc to location
      return tag.location.indexOf(term) >= 0;
    }); 
    
}
  
   UpdateData(index: string | number){
     
    this.holdindex=index;
    
    this.tableCont.editData=this.UserInfo;
    this.tableCont.holdindex = this.holdindex;
     this.editData=this.UserInfo[this.holdindex];
    // console.log("table editdata",this.UserInfo);

    //data send to other component using subscribe
      this.tableCont.subscribeData(this.editData);
      this.tableCont.subscribeDatabtn(this.UserInfo);
//update all service input var
    this.tableCont.id=this.editData.id;
    this.tableCont.location=this.editData.location;
    this.tableCont.userId=this.editData.userId;
    this.tableCont.type=this.editData.type;
    // console.log( this.tableCont.type);
    // console.log(this.holdindex);
    
    
    // this.editData=this.dataFilt;
    // console.log("Filtdata in tab",this.editData);
    
    
     }
     DeleteData(){
      //  console.log(this.editData)
    //Filling null to all input of ng model
     this.UserInfo.splice(this.holdindex, 1);
     this.tableCont.subscribeData({userId:'',id:'',type:'',location:''});

     this.tableCont.id=null;
        this.tableCont.type=null;
        this.tableCont.userId=null;
        this.tableCont.location=null;
     }

    
   ngOnInit() {
    //  console.log("funnnnn");
     
    // this.editData=this.tableCont.UserInfo;
   this.activateSub= this.getJson().subscribe(data=>{
     this.userActivated=data;
      let res=data[0];
      this.UserInfo=res['UserInfo'];
      this.itemsCopy = this.UserInfo;
      console.log(this.UserInfo);
      })
      this.tableCont.serviceFilt.subscribe(btnData=>{
        // console.log("in",btnData);
        this.location=btnData.location;
      this.id=btnData.id;
      this.userId=btnData.userId;
      this.type=btnData.type;
      console.log("Working");
      
    })
      
  
    }
    ngOnDestroy():void{
      this.activateSub.unsubscribe();
    }
 getJson(){
    return this.http.get(this.tableCont.url);
 }

}

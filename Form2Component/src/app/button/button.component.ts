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
  searchText:any;
  btnDataall:any;
  // searchTerm:any;
  type:any;editData:any;userId:any;location:any;id:any;value:any;
  constructor(private btncont:AllFunctionService) {
  }
  searchForInput(){
   this. searchFilterbtn();
  }
  searchFilterbtn(){
    let term = this.searchText;
    console.log(this.searchText);
    
    this.btncont.subscribeDataFilt(term);

    // this.searchFilter();
    // console.log("status");
    
   } 
 

  add(){

      // this.btncont.editindexnew=-1;
    if((this.userId != null) && (this.id!= null) && (this.type != null) && (this.location!=null)){
      for(let i=0;i<this.btncont.UserInfo.length;i++){
        // console.log(i,this.btncont.holdindex);
        if(this.userId[ i]!=this.btncont.userId[this.btncont.holdindex] ||
          this.id[ i]!=this.btncont.userId[this.btncont.holdindex] ||
          this.location[ i]!=this.btncont.location[this.btncont.holdindex]||
          this.type[ i]!=this.btncont.type[this.btncont.holdindex]){
            this.btncont.id=this.id;
            // console.log("add",this.btncont.id);
            
            this.btncont.type=this.type;
            this.btncont.userId=this.userId;
            this.btncont.location=this.location;
     console.log("log whole obj updating",this.btncont.UserInfo)
            this.btncont.Add();
        this.btncont.subscribeData({userId:null,id:null,type:null,location:null});
        this.btncont.id=null;
        this.btncont.type=null;
        this.btncont.userId=null;
        this.btncont.location=null;
this.btncont.holdindex = -1;
        // console.log("Current holdindex value",this.btncont.holdindex);

        // this.btncont.holdindex=-1;
        // console.log("CHanged Current holdindex value",this.btncont.holdindex);
       }
     }
      // console.log("add index values",this.userId[ 0],this.btncont.userId[0]);
     
   }

   
 }
  addrow(){
    

        if((this.userId != null) && (this.id!= null) && (this.type != null) && (this.location!=null)){
      for(let i=0;i<this.btncont.UserInfo.length;i++){
        if(this.userId[ i]!=this.btncont.userId[this.btncont.holdindex] &&
          this.id[ i]!=this.btncont.userId[this.btncont.holdindex] &&
          this.location[ i]!=this.btncont.location[this.btncont.holdindex] &&
          this.type[ i]!=this.btncont.type[this.btncont.holdindex]){


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

      //Changing update btn to Edit
           this.btncont.holdindex=-1;
        }
      }
    }
    else{
      
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
     console.log("databtn",btnDataall);
    // btnDataall[this.btncont.holdindex]['location']=this.btnData.location;
    //btnDataall contain object of updated after add or delete
    this.btncont.UserInfo = btnDataall;
  })

  }

}

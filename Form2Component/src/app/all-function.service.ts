import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AllFunctionService {
  

  
  title = 'form';
  public url='assets/user.json';
  holdindex:any;
  editindex:any;
  editindexnew:any;
  type:any;editData:any;userId:any;location:any;id:any;value:any;
  UserInfo : object[];
  itemsCopy:any;
  searchText:any;
  copyArr:any;
  newUp:boolean;
  serviceSubject:any = new Subject();
  serviceSubjectbtn:any = new Subject();
  serviceFilt:any=new Subject();
  // searchFilter(){
  //   this.searchTerm=this.searchText;
  //   let term = this.searchTerm;
  //   this.UserInfo = this.itemsCopy.filter((tag)=> {
  //     //filter acc to location
  //     return tag.location.indexOf(term) >= 0;
  //   }); 
  //  }  
//    EmptyFieldOnClick(){
//     //  alert("Empty working")
//      //Emplty filed after onclick
// this.id="";
// this.type="";
// this.userId="";
// this.location="";
//    }

 
  Add(){
    // console.log(this.editData);
    // this.userId=userId;
    // this.id=id;
    // this.type=type;
    // this.location=location;
    // this.editindexnew=-1;
    this.UserInfo.splice(this.holdindex,1,{userId:this.userId,id:this.id,type:this.type,location:this.location});
    // console.log("Add in service file",this.UserInfo ,"Full obj");
    //console.log("userId:",this.userId,"id:",this.id,"type:",this.type,"location:",this.location);
    //console.log("particular row update",this.UserInfo.splice(this.holdindex,1,{userId:this.userId,id:this.id,type:this.type,location:this.location}));
  
    
   }
   Addrow(){
    
     this.UserInfo.splice(this.UserInfo.length,0,{userId:this.userId,id:this.id,type:this.type,location:this.location});
      // console.log(this.UserInfo);
      
     }
  // DeleteData(index: number){
  //  this.UserInfo.splice(index, 1);
  //  console.log(this.UserInfo);
  // }
  constructor(private http: HttpClient){
    // let subject =new Subject();
    // subject.next();
    this.getJson().subscribe(data=>{
    let res=data[0];
    this.UserInfo=res['UserInfo'];
    this.editindex=this.holdindex;
    this.itemsCopy = this.UserInfo;
    // console.log(this.UserInfo);
    })
    //undef holdindex
  }
  
  getJson(){
    return this.http.get(this.url);
 }
subscribeData(data){
  // console.log("innnn")
  this.serviceSubject.next(data);
}
subscribeDataFilt(filtData){
  
this.serviceFilt.next(filtData)
}
subscribeDatabtn(databtn){
  //  console.log("Databtn",databtn)
  this.serviceSubjectbtn.next(databtn);
}
   ngOnInit(){

    
    // console.log(this.UserInfo);
    }
}

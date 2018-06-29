
class facebook{

name!:string;
age!:number;
city!:string;
education!:string;
gender!:string;
mobile!:string;
aboutyou!:string;
email!:string;


constructor(name:string,
    age:number,
    city:string,
    education:string,
    gender:string,
    mobile:string,
    aboutyou:string,email:string){

this.age=age;
this.city=city;
this.education=education;
this.gender=gender;
this.mobile=mobile;;
this.aboutyou=aboutyou;
this.email=email;

}

getaboutyou =()=>{

return this.aboutyou,this.email;

}


    
}

let user1=new facebook("anand",22,"banglore",'srm university',"m",8124345698,"decent software professional working on java","anand.mak1996@gmail.com")

let email=user1.getaboutyou()

alert(email)
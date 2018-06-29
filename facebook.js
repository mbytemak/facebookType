var facebook = /** @class */ (function () {
    function facebook(name, age, city, education, gender, mobile, aboutyou, email) {
        var _this = this;
        this.getaboutyou = function () {
            return _this.aboutyou, _this.email;
        };
        this.age = age;
        this.city = city;
        this.education = education;
        this.gender = gender;
        this.mobile = mobile;
        ;
        this.aboutyou = aboutyou;
        this.email = email;
    }
    return facebook;
}());
var user1 = new facebook("anand", 22, "banglore", 'srm university', "m", 8124345698, "decent software professional working on java", "anand.mak1996@gmail.com");
var email = user1.getaboutyou();
alert(email);

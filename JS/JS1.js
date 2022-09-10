// variable 
let a = 5;
var b = 10;
const c = 15;
    // all are used to create variable 
    // let and const are block variable 
    // we can't change value of const variable


// function
    // creating function
    function abcd(){
        console.log("hello world");
    }
    abcd();  // call function 

// Array
    const z = ["a","b","c","d"];
    // here we can change the value of array Element but not change the reference of it 
    z[0] = "z";
    console.log(z);

// object
    const obj = {
        firstName: "vansh",
        lastName: "patel",
        city: "Unjha",
        Salary: 1000,
        printDetail: function (){
                        console.log("Name: "+this.firstName + " " + this.lastName);
                        console.log("city: "+ this.city);
                    }
    }
    obj.printDetail();

    // nested object
    const student = { 
        name: 'John', 
        age: 20,
        marks: {
            science: 70,
            math: 75
        }
    }
    // accessing property of student object
    console.log(student.marks); // {science: 70, math: 75}

    // accessing property of marks object
    console.log(student.marks.science); // 70


// contstructor
    function Person(personName, personAge, personGender){
        this.name = personName;
        this.age = personAge;
        this.gender = personGender;

        this.greet = function () {
            return ("Hi " +this.name);
        }
    }

    const person1 = new Person("vansh",18,"male");
    const person2 = new Person("Jenish",18,"male");

    console.log(person1.name);
    console.log(person2.name);
 
// getter & setter
    const stu = {
        firstName: "vansh",

        get readName(){
            return this.firstName;
        },

        set setName(name){
            this.firstName = name;
        }
    }

    console.log(stu.firstName);
    console.log(stu.readName);
    stu.setName = "xyz";
    console.log(stu.readName);

// object define property
    const st = {
        firstName: "abcd"
    }

    // syntax
    // Object.defineProperty(obj, prop, descriptor)

    // getter
    Object.defineProperty(
        st,
        "getName",
        {
            get : function() {
                return this.firstName;
            }
        }
        );

    // setter
    Object.defineProperty(
            st,
            "setName",
            {
                set : function(name) {
                    this.firstName = name;
                }
            }
            );
        
    console.log(st.firstName);
    console.log(st.getName);
    st.setName = "defg";
    console.log(st.getName);

 
// prototype
    function per() {
        this.firstName = "qwer";
    }

    // syntax
    // objectConstructorName.prototype.key = 'value';

    per.prototype.gender = "male";

    const perso1 = new per();
    console.log(perso1.gender);

    per.prototype.greet = function () {
        console.log("Hi "+ this.firstName);
    }

    perso1.greet();
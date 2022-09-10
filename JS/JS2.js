// Array 
    const car = ["bmw", "audi", "jaguar"];
    console.log(car);
    // add element  -> push
    car.push("Porche");
    console.log(car);
    // add element at first index  -> unshift
    car.unshift("mersedes");
    console.log(car);
    //remove the last elment -> pop
    car.pop();
    console.log(car);
    // remove the first element -> shift
    car.shift();
    console.log(car);

    // length of array -> length
    console.log(car.length);

// for in loop
    const number = [1,2,3,4,5,6];
    for(let k in number){
        console.log(k);
    }

// Arrow function
    // syntax
    // let myFunction = (arg1, arg2, ...argN) => {
    //     statement(s)
    // }

    let greet = () => {
        console.log("hello world");
    }
    greet();

    // Arrow function as an Expression
    let age = 5;

    let welcome = (age < 18) ?
    () => console.log('Baby') :
    () => console.log('Adult');

    welcome(); // Baby

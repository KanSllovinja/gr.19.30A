var car ={
    name:"lambo",
    color:"red",
    year:"2021",
    kilometers: 10000,
    StartEngine: function(){
        alert("vroooooom");
    },

    get getkilometers(){
        return this.kilometers;
    },
     
    set setkilometers(km){
        this.kilometers = km;
    }
    
    
};

console.log(car.getkilometers);

car.setkilometers = 100;

console.log(car.getkilometers);

var computer = new Object();

computer.name = "Lenovo";
computer.CPU = "intel come i7";
computer.GPU = "rtx 1600";
computer.RAM = "32GB";

computer.type = function(){
    return this.name + ' , ' + this.CPU + ' , ' + this. GPU + ' , ' + this.RAM + ' , '
};

alert(computer.GPU);

alert(computer.type());

delete computer.GPU;
alert(computer.GPU);



function Computer(name, CPU, GPU, RAM){
    this.name = name;
    this.CPU = CPU;
    this.GPU = GPU;
    this.RAM = RAM;
}

var computer1 = new computer("Mackbook", "M1 8-core", "5000M GPU", "32GB RAM");
var computer2 = new computer("Lenovo", "intel core i7", "Geforce 1600", "16GB");
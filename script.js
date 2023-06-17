let fnameinput = document.querySelector("#name");
let professioninput = document.querySelector("#profession");
let ageinput = document.querySelector("#age");
let addemployeebtn = document.querySelector(".add-employee-btn");
let message = document.querySelector(".message");
let displayemployeetable = document.querySelector(".display-employee-table");
let employee = [];

addemployeebtn.addEventListener("click",()=>{
    let fname = fnameinput.value;
    let profession = professioninput.value;
    let age = ageinput.value;
    console.log(fname,profession,age);
    if(fname=="" || profession=="" || age==""){
        message.innerHTML = "Error : Please Make sure all the feilds are filled before adding in an employee !";
        message.style= `color: red;`;
        return;
    }
    let newEmployee={
        id: employee.length + 1,
        name :fname,
        profession :profession,
        age :age
    }
    
    employee.push(newEmployee);
    console.log(employee);
    
    message.innerHTML ="Success : Employee Added!";
    message.style= `color: green;`;

    displayemployee(employee);

    fnameinput.value ="";
	professioninput.value ="";
	ageinput.value = ""; 
});

function displayemployee(employee){
    displayemployeetable.innerHTML="";
    let employees ="";
    employee.forEach(item => {
        const employeedetail = `
        <div class = "employee-row">
        <div class="employeedetails">
        <span>${item.id}</span> 
		  <span>Name:${item.name}</span> 
		  <span>Profession:${item.profession}</span>
		  <span>Age:${item.age}</span>
          </div>
          <button class="delete">Delete User</button>
        </div>
        
        `;
        employees += employeedetail;
    });
      displayemployeetable.innerHTML= employees;
}



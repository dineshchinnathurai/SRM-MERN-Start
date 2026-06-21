let employees =
    JSON.parse(localStorage
        .getItem("employees")) || [];
displayEmployees();

function addEmployee() {
    let name = document.getElementById("empName").value;
    let age = document.getElementById("empAge").value;
    let department = document.getElementById("empDepartment").value;
    let salary = document.getElementById("empSalary").value;

    // validation 
    if (name === "" || age === "" || department === "" || salary === "") {
        alert("Please fill all the fields");
        return;
    }
    let employee = {
        id: Date.now(),
        name: name,
        age: age,
        department: department,
        salary: salary
    };
    // push all data into local storage 
    employees.push(employee);
    localStorage
        .setItem("employees", JSON.stringify(employees));
    clearForm();
    displayEmployees();
}
// displaying existing data 
function displayEmployees() {
    let table = document
        .getElementById("employeeTable");
    table.innerHTML = "";
    // read data from for-loop 
    employees.forEach(function (emp) {
        table.innerHTML += `
            <tr>
                <td> ${emp.id}</td>
                <td> ${emp.name}</td>
                <td> ${emp.age}</td>
                <td> ${emp.department}</td>
                <td> ${emp.salary}</td>
                <td>
                    <button class="edit-btn"
                        onclick="editEmployee(${emp.id})">
                        Edit
                    </button>
                    <button class="delete-btn"
                        onclick="deleteEmployee(${emp.id})">
                        Delete
                    </button>
                </td>
            </tr>`;

                });
}
        // delete employee 
        function deleteEmployee(id) {
            employees = employees.filter(function (emp) {
                return emp.id !== id;

            });
            localStorage.setItem("employees", JSON.stringify(employees))
            displayEmployees();
        };

        function editEmployee(id){
            let employee  = employees.find(function(emp){

                return emp.id === id;

            });
            document.getElementById("empName").value= employee.name;
            document.getElementById("empAge").value= employee.age;
            document.getElementById("empDepartment").value= employee.department;
            document.getElementById("empSalary").value= employee.salary;
            
            // .....................
              deleteEmployee(id);
}

function searchEmployee() {

    let searchValue =
        document.getElementById("search")
        .value
        .toLowerCase();

    let rows =
        document.querySelectorAll(
            "#employeeTable tr"
        );

    rows.forEach(function (row) {

        let employeeName =
            row.children[1]
            .textContent
            .toLowerCase();

        if (employeeName.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function clearForm() {

    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("empDepartment").value = "";
    document.getElementById("empSalary").value = "";
}

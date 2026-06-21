const API_URL =
    "http://localhost:5000/api/customers";

let editId = null;


// ====================
// LOAD CUSTOMERS
// ====================

window.onload =
    fetchCustomers;



// ====================
// ADD OR UPDATE CUSTOMER
// ====================

async function addCustomer() {

    const accountNumber =
        document.getElementById(
            "accountNumber"
        ).value;

    const name =
        document.getElementById(
            "name"
        ).value;

    const age =
        document.getElementById(
            "age"
        ).value;

    const gender =
        document.getElementById(
            "gender"
        ).value;

    const phone =
        document.getElementById(
            "phone"
        ).value;

    const accountType =
        document.getElementById(
            "accountType"
        ).value;

    const balance =
        document.getElementById(
            "balance"
        ).value;


    // validation

    if (
        accountNumber === "" ||
        name === "" ||
        age === "" ||
        gender === "" ||
        phone === "" ||
        accountType === "" ||
        balance === ""
    ) {

        alert(
            "Please fill all fields"
        );

        return;
    }


    const customer = {

        accountNumber,
        name,
        age,
        gender,
        phone,
        accountType,
        balance

    };


    try {

        // UPDATE CUSTOMER

        if (editId) {

            await fetch(
                `${API_URL}/${editId}`,
                {

                    method: "PUT",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            customer
                        )

                });

            alert(
                "Customer Updated Successfully"
            );

            editId = null;

        }


        // CREATE CUSTOMER

        else {

            await fetch(
                API_URL,
                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify(
                            customer
                        )

                });

            alert(
                "Account Created Successfully"
            );

        }


        clearForm();

        fetchCustomers();

    }

    catch (error) {

        console.log(error);

    }

}



// ====================
// FETCH CUSTOMERS
// ====================

async function fetchCustomers() {

    try {

        const response =
            await fetch(
                API_URL
            );

        const customers =
            await response.json();

        displayCustomers(
            customers
        );

    }

    catch (error) {

        console.log(error);

    }

}



// ====================
// DISPLAY CUSTOMERS
// ====================

function displayCustomers(
    customers
) {

    const table =
        document.getElementById(
            "customerTable"
        );


    // clear old rows

    table.innerHTML = "";



    // ====================
    // DASHBOARD
    // ====================

    document
        .getElementById(
            "totalCustomers"
        )
        .innerText =
        customers.length;


    let totalBalance = 0;

    let savings = 0;

    let current = 0;


    customers.forEach(
        (customer) => {

            totalBalance +=
                Number(
                    customer.balance
                );


            if (
                customer.accountType
                === "Savings"
            ) {

                savings++;

            }


            if (
                customer.accountType
                === "Current"
            ) {

                current++;

            }

        });


    document
        .getElementById(
            "totalBalance"
        )
        .innerText =
        `₹${totalBalance}`;


    document
        .getElementById(
            "savingsCount"
        )
        .innerText =
        savings;


    document
        .getElementById(
            "currentCount"
        )
        .innerText =
        current;



    // ====================
    // DISPLAY TABLE
    // ====================

    customers.forEach(
        (customer) => {

            table.innerHTML +=

                `
<tr>

<td>
${customer.accountNumber}
</td>

<td>
${customer.name}
</td>

<td>
${customer.age}
</td>

<td>
${customer.gender}
</td>

<td>
${customer.phone}
</td>

<td>
${customer.accountType}
</td>

<td>
₹${customer.balance}
</td>


<td>

<button
onclick=
'editCustomer(
"${customer._id}",
"${customer.accountNumber}",
"${customer.name}",
"${customer.age}",
"${customer.gender}",
"${customer.phone}",
"${customer.accountType}",
"${customer.balance}"
)'>

Edit

</button>


<button
onclick=
'deleteCustomer(
"${customer._id}"
)'>

Delete

</button>

</td>


<td>

<button
onclick=
'depositMoney(
"${customer._id}"
)'>

Deposit

</button>


<button
onclick=
'withdrawMoney(
"${customer._id}"
)'>

Withdraw

</button>

</td>

</tr>

`;

        });

}



// ====================
// EDIT CUSTOMER
// ====================

function editCustomer(
    id,
    accountNumber,
    name,
    age,
    gender,
    phone,
    accountType,
    balance
) {

    editId = id;


    document
        .getElementById(
            "accountNumber"
        ).value =
        accountNumber;


    document
        .getElementById(
            "name"
        ).value =
        name;


    document
        .getElementById(
            "age"
        ).value =
        age;


    document
        .getElementById(
            "gender"
        ).value =
        gender;


    document
        .getElementById(
            "phone"
        ).value =
        phone;


    document
        .getElementById(
            "accountType"
        ).value =
        accountType;


    document
        .getElementById(
            "balance"
        ).value =
        balance;

}



// ====================
// DELETE CUSTOMER
// ====================

async function deleteCustomer(
    id
) {

    const confirmDelete =
        confirm(
            "Delete customer?"
        );


    if (
        !confirmDelete
    ) {

        return;
    }


    try {

        await fetch(
            `${API_URL}/${id}`,
            {

                method:
                    "DELETE"

            });

        alert(
            "Customer Deleted Successfully"
        );

        fetchCustomers();

    }

    catch (error) {

        console.log(error);

    }

}



// ====================
// DEPOSIT MONEY
// ====================

async function depositMoney(
    id
) {

    const amount =
        prompt(
            "Enter Deposit Amount"
        );


    if (
        !amount ||
        amount <= 0
    ) {

        alert(
            "Invalid Amount"
        );

        return;
    }


    try {

        await fetch(
            `${API_URL}/deposit/${id}`,
            {

                method: "PUT",

                headers: {

                    "Content-Type":
                        "application/json"

                },

                body:
                    JSON.stringify({

                        amount

                    })

            });

        alert(
            "Money Deposited"
        );

        fetchCustomers();

    }

    catch (error) {

        console.log(error);

    }

}



// ====================
// WITHDRAW MONEY
// ====================

async function withdrawMoney(
    id
) {

    const amount =
        prompt(
            "Enter Withdraw Amount"
        );


    if (
        !amount ||
        amount <= 0
    ) {

        alert(
            "Invalid Amount"
        );

        return;
    }


    try {

        const response =
            await fetch(
                `${API_URL}/withdraw/${id}`,
                {

                    method: "PUT",

                    headers: {

                        "Content-Type":
                            "application/json"

                    },

                    body:
                        JSON.stringify({

                            amount

                        })

                });

        const data =
            await response.json();


        // insufficient balance

        if (
            response.status
            === 400
        ) {

            alert(
                data.message
            );

            return;
        }


        alert(
            "Money Withdrawn"
        );

        fetchCustomers();

    }

    catch (error) {

        console.log(error);

    }

}



// ====================
// SEARCH CUSTOMER
// ====================

function searchCustomer() {

    const searchValue =
        document
            .getElementById(
                "searchInput"
            ).value;


    const rows =
        document
            .querySelectorAll(
                "#customerTable tr"
            );


    rows.forEach(
        (row) => {

            const accountNo =
                row.children[0]
                    .innerText;


            if (
                accountNo.includes(
                    searchValue
                )
            ) {

                row.style.display =
                    "";

            }

            else {

                row.style.display =
                    "none";

            }

        });

}



// ====================
// CLEAR FORM
// ====================

function clearForm() {

    document
        .getElementById(
            "accountNumber"
        ).value = "";

    document
        .getElementById(
            "name"
        ).value = "";

    document
        .getElementById(
            "age"
        ).value = "";

    document
        .getElementById(
            "gender"
        ).value = "";

    document
        .getElementById(
            "phone"
        ).value = "";

    document
        .getElementById(
            "accountType"
        ).value = "";

    document
        .getElementById(
            "balance"
        ).value = "";

}
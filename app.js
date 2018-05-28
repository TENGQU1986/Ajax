// document.querySelector('.button').addEventListener('click', loadData);

// function loadData() {
//   // Create an XHR Object
//   const xhr = new XMLHttpRequest();

//   // Open
//   xhr.open('Get', 'data.txt', true);

//   xhr.onload = function() {
//     if(this.status === 200) {
//       console.log(this.responseText);
//     }
//   }
//   xhr.send();
// }

document.querySelector('#button2').addEventListener('click', loadCustomers);

function loadCustomers() {
  
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  let output = '';
  xhr.onload = function() {
    if(this.status === 200) {
      console.log(JSON.parse(this.responseText));
      const customers = JSON.parse(this.responseText);
      customers.forEach(function(customer) {
        output += `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
        `
      });

      document.getElementById('customers').innerHTML = output;
    } 
  }
  

  xhr.send();
}
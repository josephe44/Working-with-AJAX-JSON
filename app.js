// Loading for a customer
document.getElementById('button1').addEventListener('click', loadCustomer)

function loadCustomer() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'customer.json', true)

  xhr.onload = function () {
    if (this.status === 200) {
      customer = JSON.parse(this.responseText)
      const output = `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>NAME: ${customer.name}</li>
          <li>COMPANY: ${customer.company}</li>
          <li>PHONE: ${customer.phone}</li>
        </ul>
      `
      document.getElementById('output1').innerHTML = output
    }
  }

  xhr.send()
}

// Loading for an array of customers
document.getElementById('button2').addEventListener('click', loadCustomers)

function loadCustomers() {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'customers.json', true)

  xhr.onload = function () {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText)
      let output = ''
      customers.forEach(function (customer) {
        output += `
          <ul>
            <li>ID: ${customer.id}</li>
            <li>NAME: ${customer.name}</li>
            <li>COMPANY: ${customer.company}</li>
            <li>PHONE: ${customer.phone}</li>
          </ul>
        `
        document.getElementById('output2').innerHTML = output
      })
    }
  }

  xhr.send()
}

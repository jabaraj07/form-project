let submit = document.getElementById("submit");
let COUNTRY = document.getElementById("COUNTRY");
let STATE = document.getElementById("STATE");
let GENDER = document.getElementById("GENDER");
let PINCODE = document.getElementById("PINCODE");
let ADDRESS = document.getElementById("ADDRESS");
let LASTNAME = document.getElementById("LAST NAME");
let FIRSTNAME = document.getElementById("FIRST NAME");
let tbody = document.getElementById("tbody");

// let firstvalue = document.getElementById("FIRSTNAMEval")
// let lastvalue = document.getElementById("LASTNAMEval")
// let addressvalue= document.getElementById("ADDRESSval")

const data = [{ firstname: "", lastname: "", address: "", gender: "" ,pincode:"",state:"",country:""}];

function buttonclick() {
  data[0].firstname = FIRSTNAME.value;
  data[0].lastname = LASTNAME.value;
  data[0].address = ADDRESS.value;
  data[0].gender = GENDER.value;
  data[0].pincode = PINCODE.value;
  data[0].state = STATE.value;
  data[0].country = COUNTRY.value;

  FIRSTNAME.value = "";
  LASTNAME.value = "";
  ADDRESS.value = "";
  GENDER.value = "";
  PINCODE.value=""
  STATE.value=""
  COUNTRY.value=""

  const FNdata = data.map((e) => e.firstname);
  const LNdata = data.map((e) => e.lastname);
  const ADDdata = data.map((e) => e.address);
  const Genderdata = data.map((e) => e.gender);
  const pincodedata = data.map((e) => e.pincode);
  const statedata = data.map((e) => e.state);
  const countrydata = data.map((e) => e.country);

 const tablerow = document.createElement("tr");

  tablerow.innerHTML = `<td class="td1">${FNdata}</td>  <td class="td2"> ${LNdata}</td> <td class="td3">${ADDdata}</td> <td class="td4">${Genderdata}</td> <td class="td4">${pincodedata}</td> <td class="td4">${statedata}</td> <td class="td4">${countrydata}</td>`;
  tbody.appendChild(tablerow);

}

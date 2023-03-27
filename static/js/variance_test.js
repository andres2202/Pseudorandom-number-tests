const tableDiv = document.getElementById('table-div');
const table = document.querySelector('table');
const tableResult = document.getElementById('table-results');
const spanResultTrue = document.getElementById('span-result-true');
const spanResultFalse = document.getElementById('span-result-false');
const lblValidation = document.getElementById('lbl_validation');
const fileInput = document.getElementById('file');
const btnSubmit = document.getElementById('submitBtn');

function isEmpty(table){
    return table.rows.length == 1;
}
if(isEmpty(table)){
    tableDiv.style.visibility = 'hidden'
    tableResult.style.visibility = 'hidden'
}

document.getElementById('submitBtn').addEventListener('click', () => {
    if(!isEmpty(table)){
        tableDiv.style.visibility = 'visible';
        tableResult.style.visibility = 'visible';
    }else{
        tableDiv.style.visibility = 'hidden';
        tableResult.style.visibility = 'hidden'
    }
});

fileInput.addEventListener('change', () => {
  const fileName = fileInput.value
  const fileExtension = fileName.split('.').pop();
  if (fileName !== '' && fileExtension == "csv") {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});


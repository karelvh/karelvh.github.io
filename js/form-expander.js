var expanded = false;

document.getElementById('btn-get_in_touch').addEventListener('click', expandForm);
document.getElementById('btn-get_in_touch').addEventListener('keypress', expandForm);

function expandForm() {
  if(expanded) {
    document.getElementById('form-contact').className = 'contact hidden';
    expanded = false;
  } else {
    document.getElementById('form-contact').className = 'contact';
    expanded = true;
  }
}

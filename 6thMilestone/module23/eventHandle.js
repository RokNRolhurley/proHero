function event01(){
    const handleStatus = document.getElementById('test-text');
    handleStatus.innerText = 'Handled by function attached onclick attribute';

}

function event02(){
    const updateStatus = document.getElementById('test-text');
    updateStatus.innerText = 'Text updated by 2nd button';
}

document.getElementById('btn-update').addEventListener('click', function(){
  const inputField = document.getElementById('text-input');
  const inputText = inputField.value;

  const updateField = document.getElementById('text-default');  
  updateField.innerText = inputText;
})
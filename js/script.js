document.getElementById('formAgen').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
    var taza=0.6;
    var sexo=document.getElementById('sexo').value;
    var edad = document.getElementById('edad').value;
    var mensual = parseFloat(document.getElementById('mensual').value);
    var saldo=parseFloat(document.getElementById('saldo').value)
  
    var pension = (mensual*edad*taza)/12;
    var fondo= edad*mensual*saldo;
  
    console.log('Sexo: ', sexo)
    console.log('Edad: ', edad);
    console.log('Sueldo Mensual : S/ ', mensual);
    console.log('Saldo Actual: S/ ', saldo);
    console.log('Pensión Estimada : S/', pension);
    console.log('Fondo Estimado : S/', fondo);
  });
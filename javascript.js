
function insert(num) //função criada para chamar cada numero e operaçoes
{
    var numero = document.getElementById('display').innerHTML; //variavel de cada numero
    document.getElementById('display').innerHTML = numero + num; // para que um numero nao tire o outro da tela
}
function clean()
{   //função para limpar tela
    document.getElementById('display').innerHTML = "";
}
function back()
{   //função para apagar um numero por vez
    var display = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = display.substring(0, display.length -1);
}
function calcular()
{   //função para calcular 
    // var resultado = document.getElementById('display').innerHTML;
    
    var display = document.getElementById('display').innerHTML;
    
    if(display)
    {
        document.getElementById('display').innerHTML = eval(display);
    }
        
    else
    {
        
        document.getElementById('display').innerHTML = "ERROR..."
    }
    
}
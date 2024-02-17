var speed = 65.0;
var max_speed = 90.0;
if (speed <= 90){
    log(`Voce esta dentro do limite de velocidade`)
}
else if (speed > 90){
    log(`Voce ultrapassou o limite de velocidade: \nSua velocidade: ${speed}\nLimite de velocidade: ${max_speed}`);
}
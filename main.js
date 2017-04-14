//Fabricio Junior 14/04/2017

var largura, altura, numOndas, ondas, calda, larguraB;
var aleatorio;

function setup(){
	largura = windowWidth;
	altura = windowHeight;
	tela = createCanvas(largura, altura);
	frameRate(60);

	ondas = [];
	calda = [];
	larguraB = 10;
	numOndas = largura/larguraB;
	//numOndas = 5;
	aleatorio = true;

	for(var i=0; i<numOndas; i++){
		ondas.push(new Barra(i*larguraB, altura/2.0, larguraB, altura));
		calda.push(altura/2.0);
	}
}

function draw(){
	background(255);
	//Desenhar
	//ondas[0].ondular(largura, altura);
	
	calda.pop();
	calda.unshift(ondas[0].y);

	for(var i=1; i<ondas.length; i++){
		ondas[i].y = calda[i];
	}
	
	//print(calda);
	for(var i=0; i<ondas.length; i++){
		ondas[i].desenhar();
	}
	//Ondular
	ondas[0].ondular(largura, altura);

	if(frameCount % 300 == 0 && aleatorio == true){
		rand = round(random(1));
		if(rand == 0){
			ondas[0].aumentar();
		}
		else{
			ondas[0].diminuir();
		}
		print("Ocilacao e Velocidade: " + ondas[0].ocilacao);
	}
	
}

function keyPressed(){
	if(keyCode == 32){
		if(aleatorio == false){aleatorio = true;}
		else{aleatorio = false;}
		print("Aleatorio: " + aleatorio);
	}
	if(keyCode == UP_ARROW){
		ondas[0].aumentar();
	}
	else if(keyCode == DOWN_ARROW){
		ondas[0].diminuir();
	}
	else if(keyCode == LEFT_ARROW){
		oo = ondas[0].ocilacao;
		vv = ondas[0].maxVelocidadeY;
		print(oo);
		print(vv);
		ondas = [];
		calda = [];
		larguraB /= 2;
		numOndas = largura/larguraB;

		for(var i=0; i<numOndas; i++){
			ondas.push(new Barra(i*larguraB, altura/2.0, larguraB, altura));
			calda.push(altura/2.0);
		}
		ondas[0].ocilacao = oo;
		ondas[0].maxVelocidadeY = vv;
		print("Largura da Onda: " + larguraB);
		print("Numeros de Barras: " + ondas.length);
	}
	else if(keyCode == RIGHT_ARROW){
		oo = ondas[0].ocilacao;
		vv = ondas[0].maxVelocidadeY;
		ondas = [];
		calda = [];
		larguraB *= 2;
		numOndas = largura/larguraB;

		for(var i=0; i<numOndas; i++){
			ondas.push(new Barra(i*larguraB, altura/2.0, larguraB, altura));
			calda.push(altura/2.0);
		}
		ondas[0].ocilacao = oo;
		ondas[0].maxVelocidadeY = vv;
		print("Largura da Onda: " + larguraB);
		print("Numeros de Barras: " + ondas.length);
	}
}
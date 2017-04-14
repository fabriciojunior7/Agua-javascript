function Barra(x, y, largura, altura){
	//Atributos
	this.x = x;
	this.y = y;
	this. largura = largura;
	this.altura = altura;
	this.aceleracaoY = 0.5;
	this.velocidadeY = 0;
	this.maxVelocidadeY = 1;
	this.ocilacao = 1;

	this.desenhar = function(){
		noStroke();
		fill(0, 0, 255, 100);
		rect(this.x, this.y, this.largura, this.altura);
	}

	this.aumentar = function(){
		if(this.ocilacao < 16){
			if(this.ocilacao > 0){
				this.maxVelocidadeY *= 2.0;
				this.ocilacao *= 2.0;
			}
			else if(this.ocilacao <= 0){
			this.ocilacao = 1;
			this.maxVelocidadeY = 1;
			}
			else if(this.ocilacao == 1){
				this.ocilacao = 2;
				this.maxVelocidadeY = 2;
			}
		}
		
		print("Subir");
		print(this.ocilacao);
	}

	this.diminuir = function(){
		if(this.ocilacao < 0.5){
			this.ocilacao = 0;
			this.maxVelocidadeY = 0;
		}
		else{
			this.maxVelocidadeY /= 2.0;
			this.ocilacao /= 2.0;
		}
		print("Descer");
		print(this.ocilacao);
	}

	this.ondular = function(largura, altura){
		if(this.y < (altura/2.0)-this.ocilacao && this.aceleracaoY < 0){
			this.aceleracaoY *= -1;
		}
		else if(this.y > (altura/2.0)+this.ocilacao && this.aceleracaoY > 0){
			this.aceleracaoY *= -1;
		}

		if(this.velocidadeY <= this.maxVelocidadeY && this.velocidadeY >= -this.maxVelocidadeY){
			this.velocidadeY += this.aceleracaoY;
		}
		else if(this.velocidadeY > this.maxVelocidadeY){
			this.velocidadeY = this.maxVelocidadeY;
		}
		else if(this.velocidadeY < -this.maxVelocidadeY){
			this.velocidadeY = -this.maxVelocidadeY;
		}

		if(this.ocilacao != 0){
			this.y += this.velocidadeY;
		}
	}
}
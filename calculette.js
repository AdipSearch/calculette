var affichage = document.getElementById('ecran');

		function action(bouton){
			var bouton_valeur = bouton.innerHTML;

			if (bouton_valeur=='C'){
				affichage.innerHTML = '0';
			}else if(bouton_valeur=='='){

				affichage.innerHTML = eval(affichage.innerHTML);


			}else{
				if(affichage.innerHTML == 0){
					affichage.innerHTML = bouton_valeur;
				}else{
					affichage.innerHTML = affichage.innerHTML+bouton_valeur;
				}

			}

		}
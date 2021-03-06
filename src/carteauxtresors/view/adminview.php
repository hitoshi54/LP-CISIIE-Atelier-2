<?php
namespace carteauxtresors\view;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

class adminview
{
	protected $data = null ;
	protected $baseURL = null;
	protected $dossier = "";

    public function __construct($data)
	{
        $this->data = $data;
    }

	private function getStatus() {
		if(array_key_exists('status', $this->data)) {
			if(is_numeric($this->data['status'])) {
				$status = $this->data['status'];
				unset($this->data['status']);
				return $status;
			}
		}
		return 400;
	}



	private function header($req, $resp, $args)
	{
		$html = "
			<!DOCTYPE html>
			<html lang='fr'>
				<head>
					<meta charset='UTF-8'>
					<meta name='viewport' content='width=device-width, initial-scale=1'>
					<title>Backend - Carte aux trésors</title>
					<script src='".$this->baseURL."/js/lib/jquery.min.js'></script>
					<script src='".$this->baseURL."/js/script.js'></script>
					<script src='".$this->baseURL."/js/coche.js'></script>
					<link rel='stylesheet' type='text/css' href='".$this->baseURL."/css/style.css'/>
					<link rel='stylesheet' type='text/css' href='".$this->baseURL."/css/main.css'/>
					<link rel='shortcut icon' href='".$this->baseURL."/favicon.ico'>
				</head>
				<body>
					<header>
						<a href='".$this->baseURL."/admin'>
							<img src='".$this->baseURL."/img/carte.png' alt='La carte aux trésors'>
						</a>
					</header>
		";
		if(isset($_SESSION["message"]))
		{
			$html .= "<div id='messageBox'>".filter_var($_SESSION["message"], FILTER_SANITIZE_FULL_SPECIAL_CHARS)."</div>";
			unset($_SESSION["message"]);
		}
		$html .= "

					<div id='content'>
		";

		return $html;
	}

	private function footer($req, $resp, $args)
	{
		$html = "
					</div>
					<footer>
						2017 ; La Carte aux Trésors - LP CISIIE (Atelier 2) - Thibaut DALICHAMPT, Charles PIGUET, Hugo HAPPE et Dylan CLEMENT
					</footer>
				</body>
			</html>
		";

		return $html;
	}


	// -----------


	/* private function exemple($req, $resp, $args)
	{
		$html = "";
		return $html;
    }*/
	
	private function accueil($req, $resp, $args)
	{
		$html = "<div id='gestionpoints'>
			<h2>Gestion des points</h1>
			<form name='ajoutPoint' method='POST' action='".$this->baseURL.$this->dossier."/points/ajouter'>
				<label for='addLatitudeP'>Latitude : </label>
				<input type='text' name='addLatitudeP' id='addLatitudeP' placeholder='Coordonnées GPS : Latitude' required />
				<br/>
				<label for='addLongitudeP'>Longitude : </label>
				<input type='text' name='addLongitudeP' id='addLongitudeP' placeholder='Coordonnées GPS : Longitude' required />
				<br/>
				<label for='addIndication'>Indication : </label>
				<input type='text' name='addIndication' id='addIndication' placeholder='Indications sur la situation du point' required />
				<br/><br/>
				<button class='btn-floating btn-large waves-effect waves-light blue' type='submit'>+</button>
			</form>
			<br/><hr/><br/>
			<form name='supprimerPoint' method='POST' action='".$this->baseURL.$this->dossier."/points/supprimer'>
				<button class='waves-effect waves-light btn' type='submit'>Supprimer</button>
				<table class='responsive-table'>
					<tr>
						<th>
							<input type='checkbox' id='cochertout' name='cochertout' value='all' style='display:inline;' onclick='cocher()' />
						</th>
						<th>
							ID
						</th>
						<th>
							Latitude
						</th>
						<th>
							Longitude
						</th>
						<th>
							Indication
						</th>
					</tr>
		";
		
		foreach($this->data[0] as $point)
		{
			$html .= "
				<tr>
					<td>
						<input type='checkbox' name='coche[]' id='case' value='".$point->id."' style='display:inline;' />
					</td>
					<td>
						".$point->id."
					</td>
					<td>
						".$point->latitude."
					</td>
					<td>
						".$point->longitude."
					</td>
					<td>
						".$point->indication."
					</td>
				</tr>
			";
		}
		
		$html .= "
				</table>
				<button class='waves-effect waves-light btn' type='submit'>Supprimer</button>
			</form>
		</div>";
		
		
		$html .= "<div id='gestiondestinations'>
			<h2>Gestion des destinations finales</h1>
			<form name='ajoutDestination' method='POST' action='".$this->baseURL.$this->dossier."/destinations/ajouter'>
				<label for='addNom'>Nom : </label>
				<input type='text' name='addNom' id='addNom' placeholder='Nom du lieu' style='font-weight:bold;' />
				<br/>
				<label for='addLatitudeD'>Latitude : </label>
				<input type='text' name='addLatitudeD' id='addLatitudeD' placeholder='Coordonnées GPS : Latitude' required />
				<br/>
				<label for='addLongitudeD'>Longitude : </label>
				<input type='text' name='addLongitudeD' id='addLongitudeD' placeholder='Coordonnées GPS : Longitude' required />
				<br/>
				<label for='addIndice1'>Premier indice : </label>
				<input type='text' name='addIndice1' id='addIndice1' placeholder='Premier indice à donner' required />
				<br/>
				<label for='addIndice1'>Deuxième indice : </label>
				<input type='text' name='addIndice2' id='addIndice2' placeholder='Deuxième indice à donner' required />
				<br/>
				<label for='addIndice1'>Troisième indice : </label>
				<input type='text' name='addIndice3' id='addIndice3' placeholder='Troisième indice à donner' required />
				<br/>
				<label for='addIndice1'>Quatrième indice : </label>
				<input type='text' name='addIndice4' id='addIndice4' placeholder='Quatrième indice à donner' required />
				<br/>
				<label for='addIndice1'>Cinquième indice : </label>
				<input type='text' name='addIndice5' id='addIndice5' placeholder='Cinquième indice à donner' required />
				<br/><br/>
				<button class='btn-floating btn-large waves-effect waves-light blue' type='submit'>+</button>
			</form>
			<br/><hr/><br/>
			<form name='supprimerDestination' method='POST' action='".$this->baseURL.$this->dossier."/destinations/supprimer'>
				<button class='waves-effect waves-light btn' type='submit'>Supprimer</button>
				<table class='responsive-table'>
					<tr>
						<th>
							<input type='checkbox' id='cochertout2' name='cochertout' value='all' style='display:inline;' onclick='cocher2()' />
						</th>
						<th>
							ID
						</th>
						<th>
							Nom
						</th>
						<th>
							Latitude
						</th>
						<th>
							Longitude
						</th>
						<th>
							Indices
						</th>
					</tr>
		";
		
		foreach($this->data[1] as $destination)
		{
			$html .= "
				<tr>
					<td>
						<input type='checkbox' name='coche2[]' id='case' value='".$destination->id."' style='display:inline;' />
					</td>
					<td>
						".$destination->id."
					</td>
					<td>
						".$destination->nom."
					</td>
					<td>
						".$destination->latitude."
					</td>
					<td>
						".$destination->longitude."
					</td>
					<td>
						<ul>
							<li>".$destination->indice1."</li>
							<li>".$destination->indice2."</li>
							<li>".$destination->indice3."</li>
							<li>".$destination->indice4."</li>
							<li>".$destination->indice5."</li>
						</ul>
					</td>
				</tr>
			";
		}
		
		$html .= "
				</table>
				<button class='waves-effect waves-light btn' type='submit'>Supprimer</button>
			</form>
		</div>";
		
		
		return $html;
    }
	
	private function connexion($req, $resp, $args)
	{
		$html = "
			<div id='connexionForm'>
				<h2>Authentification</h2>
				<form name='connexion' method='post' action='".$this->baseURL.$this->dossier."/connexion'>
					<label for='mdp'>Mot de passe : </label>
					<input type='password' name='mdp' id='mdp' placeholder='Entrez votre mot de passe...' required /><br/><br/>
					<button class='waves-effect waves-light btn' type='submit'>Connexion</button>
				</form>
			</div>
		";
		
		return $html;
	}


	// -----------

	public function render($selector, $req, $resp, $args)
	{
		$url = $req->getUri()->getBasePath();
		$this->baseURL = str_replace("/admin", "", $url);
		
		if($_SERVER["SERVER_NAME"] != "backend.findyourway.local")
		{
			$this->dossier = "/admin";
		}
		
		
		$html = $this->header($req, $resp, $args);

		// Sélectionne automatiquement le sélecteur.
		$html .= $this->$selector($req, $resp, $args);

		$html .= $this->footer($req, $resp, $args);

		$resp->getBody()->write($html);
		return $resp;
	}
}

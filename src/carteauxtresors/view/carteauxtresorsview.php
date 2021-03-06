<?php
namespace carteauxtresors\view;

use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

class carteauxtresorsview
{
	protected $data = null ;
	protected $baseURL = null;

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

	private function newGame($req, $resp, $args)
	{
		if(is_array($this->data))
		{
			$json = json_encode($this->data);
			$resp = $resp->withHeader('Content-Type', 'application/json');
		}
		else
		{
			$json = $this->data;
			$resp = $resp->withHeader('Content-Type', 'application/json');
		}
		$resp->getBody()->write($json);
		return $resp;
	}

	private function scorePartie($req, $resp, $args)
	{
		if(is_array($this->data))
		{
			$json = json_encode($this->data);
			$resp = $resp->withHeader('Content-Type', 'application/json');
		}
		else
		{
			$json = $this->data;
			$resp = $resp->withHeader('Content-Type', 'application/json');
		}
		$resp->getBody()->write($json);
		return $resp;
	}

	private function meilleurScores($req, $resp, $args)
	{
		$json = '{ "scores" : '.$this->data.' }';
		$resp = $resp->withStatus(200)->withHeader('Content-Type', 'application/json');
		$resp->getBody()->write($json);
		return $resp;
	}

	private function recupPoints($req, $resp, $args)
	{
		$json = '{ "points" : '.$this->data.' }';
		$resp = $resp->withStatus(200)->withHeader('Content-Type', 'application/json');
		$resp->getBody()->write($json);
		return $resp;
	}

	private function destinationFinale($req, $resp, $args)
	{
		$json = $this->data;
		$json = substr($json, 0, -1);
		$json = substr($json, 1);
		$json = '{ "destination" : '.$json.' }';
		$resp = $resp->withStatus(200)->withHeader('Content-Type', 'application/json');
		$resp->getBody()->write($json);
		return $resp;
	}

	public function render($selector, $req, $resp, $args)
	{
		$this->baseURL = $req->getUri()->getBasePath();

		// Sélectionne automatiquement le sélecteur.

		$this->resp = $this->$selector($req, $resp, $args);
		return $this->resp;

	}
}

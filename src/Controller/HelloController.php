<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HelloController extends AbstractController
{
    #[Route('/hello/{name}', name: 'app_hello',methods: ['POST'])]
    public function post(string $name): Response
    {
        return $this->json([
            'message' => 'Hello, '.$name,
            'numberOfLetters' => strlen($name),
        ]);
    }
}

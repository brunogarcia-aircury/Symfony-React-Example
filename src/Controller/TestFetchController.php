<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TestFetchController extends AbstractController
{
    #[Route('/api/fetch example', name: 'app_test_fetch')]
    public function index(): Response
    {
        return $this->json(['message'=>'Hello my name is Bruno and THIS is a react+symfony project']);
    }
}

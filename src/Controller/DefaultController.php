<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @var array|string[]
     */
    const ROUTES = [
        '/', // Root
        '/hello',
        '/hello fetch',
    ];

    #[Route(self::ROUTES, name: 'app_browser_request',methods: ['GET'])]
    public function index(): Response
    {
        return $this->render('base.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }
}

<?php
require_once __DIR__.'/vendor/autoload.php';

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\ParameterBag;

$app = new Silex\Application();

$app['debug'] = true;
date_default_timezone_set('UTC');

$app->register(new Silex\Provider\DoctrineServiceProvider(), array(
    'db.options' => array(
        'driver'   => 'pdo_sqlite',
        'path'     => __DIR__.'/app.db',
    ),
));

$app->before(function (Request $request) {
    if (0 === strpos($request->headers->get('Content-Type'), 'application/json')) {
        $data = json_decode($request->getContent(), true);
        $request->request->replace(is_array($data) ? $data : array());
    }
});

$app->post('/subscribe/add', function (Request $request) use ($app) {
    $values = array(
        'subscribed_at' => date('Y-m-d H:i:s'),
        'email'         => $request->request->get('email'),
    );

    $stmt = $app['db']->insert('subscribers', $values);

    return $app->json(array('success'), 201);
})
->assert('email', '\w+');

$app->run();
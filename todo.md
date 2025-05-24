* Contract tesitng with prism
    * create another app, use this swagger spec to spin up the prism container
    * create a test container in this app for postgres, to just test integration there
        * make sure that we run migrations on that test container same as we do with the current db
            * https://bytesmith.dev/blog/20240305-nestjs-integration-test-with-test-containers/
        * see if we need to seed that test container at all
            * run the same seed script?

* Test containers for full e2e testing, make sure that we run migrations as well on the test containers and seed scripts!
    * set up a database that uses the seed script!
    * set up a prism test container and spin it up for tests!!!


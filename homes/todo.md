* Contract tesitng with prism
    * create a test container in this app for postgres, to just test integration there
        * make sure that we run migrations on that test container same as we do with the current db
            * https://bytesmith.dev/blog/20240305-nestjs-integration-test-with-test-containers/
    * create another app, use this swagger spec to spin up the prism container
        * see if we need to seed that test container at all
            * run the same seed script?

* Test containers for full e2e testing, make sure that we run migrations as well on the test containers and seed scripts!
    * set up a database that uses the seed script!
    * set up a prism test container and spin it up for tests!!!



* blog 
    * openapi spec and what it is
    * generating it with nestjs
    * prism command line static responses
    * prism dynamic responses and docker container 
    * test containers and postgres
    * running migrations on test containers same as app
    * seeding test containers
    * running curl to get the latest openapi spec from the other project repository for contract testing



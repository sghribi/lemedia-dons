server "dons.lemediatv.fr", user: "www-data", roles: %{app db web}
set :deploy_to, "/var/www/dons.lemediatv.fr"
set :npm_env_variables, {
    "NODE_ENV" => "production"
}

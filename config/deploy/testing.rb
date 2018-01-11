server "ghribi.net", user: "www-data", roles: %{app db web}
set :deploy_to, "/var/www/dons-lemedia.ghribi.net"
set :npm_env_variables, {
    "NODE_ENV" => "testing"
}

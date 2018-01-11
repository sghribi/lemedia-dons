server "ghribi.net", user: "www-data", roles: %{app db web}
set :deploy_to, "/var/www/dons-lemedia.ghribi.net"

namespace :deploy do
  desc 'Build application after deploy'
  task :build do
    on roles fetch(:npm_roles) do
      within fetch(:npm_target_path, release_path) do
        with fetch(:npm_env_variables, {}) do
          execute :npm, 'run build-testing'
        end
      end
    end
  end
end

before 'deploy:symlink:release', 'deploy:build'

server "dons.lemediatv.fr", user: "www-data", roles: %{app db web}
set :deploy_to, "/var/www/dons.lemediatv.fr"

namespace :deploy do
  desc 'Build application after deploy'
  task :build do
    on roles fetch(:npm_roles) do
      within fetch(:npm_target_path, release_path) do
        with fetch(:npm_env_variables, {}) do
          execute :npm, 'run build-production'
        end
      end
    end
  end
end

before 'deploy:symlink:release', 'deploy:build'

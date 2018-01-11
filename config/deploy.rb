# config valid for current version and patch releases of Capistrano
lock "~> 3.10.1"

set :application, "lemedia-dons"
set :repo_url, "git@github.com:sghribi/lemedia-dons.git"
set :npm_flags, '--silent --no-progress'
set :nvm_type, :user
set :nvm_node, 'v8.9.4'
set :nvm_map_bins, %w{node npm}

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp

# Default value for :format is :airbrussh.
# set :format, :airbrussh

# You can configure the Airbrussh format using :format_options.
# These are the defaults.
# set :format_options, command_output: true, log_file: "log/capistrano.log", color: :auto, truncate: :auto

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# append :linked_files, "config/database.yml", "config/secrets.yml"

# Default value for linked_dirs is []
# append :linked_dirs, "log", "tmp/pids", "tmp/cache", "tmp/sockets", "public/system"
append :linked_dirs, "node_modules"

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for local_user is ENV['USER']
# set :local_user, -> { `git config user.name`.chomp }

# Default value for keep_releases is 5
# set :keep_releases, 5

# Uncomment the following to require manually verifying the host key before first deploy.
# set :ssh_options, verify_host_key: :secure

namespace :deploy do
  desc 'Build application after deploy'
  task :build do
    on roles fetch(:npm_roles) do
      within fetch(:npm_target_path, release_path) do
        with fetch(:npm_env_variables, {}) do
          execute :npm, 'run build'
        end
      end
    end
  end
end

before 'deploy:symlink:release', 'deploy:build'

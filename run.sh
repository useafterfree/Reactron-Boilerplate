trap 'kill $(jobs -p)' SIGINT


export APP_HOME="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
export NODE_ENV=development

## Clean up redis
# redis-cli flushall

## kill port
function killAppsOnPorts() {
  if [ -z "${1+x}" ]; then
    echo "Killing: $1"
    kill -9 "$1" 
  fi
}


# killall webpack
# killall electron
# killall gulp
# killall node

PIDS=$(lsof -ti tcp:3000)
killAppsOnPorts "$PIDS"
PIDS=$(lsof -ti tcp:3030)
killAppsOnPorts "$PIDS"


## Server process
# node server.js & ## spawn bg process server
ELECTRON_DISABLE_SECURITY_WARNINGS=true DEBUG=gulp-server-runner,server yarn watch
## UI process
# gulp -w
#
# ## Electron
# ./node_modules/.bin/electron .
#
# ## when you control-c it will kill child processes (jobs -p) via TRAP

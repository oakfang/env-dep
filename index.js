const Module = require("module");
const readPkg = require("read-pkg").sync;

function register() {
  const { envDependencies = {} } = readPkg();
  const env = process.env.NODE_ENV;
  const { require: _require } = Module.prototype;
  Module.prototype.require = function(id) {
    if (id in envDependencies) {
      const envs = envDependencies[id];
      const alias = envs[env] || envs._;
      if (alias) {
        id = alias;
      }
    }
    return _require.call(this, id);
  };
}

module.exports = register;

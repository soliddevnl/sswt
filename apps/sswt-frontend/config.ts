interface EnvironmentConfig {
  apiUrl: string;
}

const config = new Map<string, EnvironmentConfig>();
config.set("localhost", {
  apiUrl: "http://localhost:8000",
});

config.set("sswt.soliddev.nl", {
  apiUrl: "https://sswt-api.soliddev.nl",
});

function getEnvironmentConfig(hostname: string): EnvironmentConfig {
  const envConfig = config.get(hostname);

  if (!envConfig) {
    throw new Error("No config for hostname " + hostname);
  }

  return envConfig;
}

export function getConfig(): EnvironmentConfig {
  return getEnvironmentConfig(window.location.hostname);
}

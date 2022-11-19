type ConfigKey = 'API_URL';

const config: {
  [key in ConfigKey]?: string;
} = {
  'API_URL': process.env.API_URL
}

export const getConfig = (key: ConfigKey): string => {
  if (config[key]) {
    throw new Error('No key in config');
  }

  return config[key] as string;
}

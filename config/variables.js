export default ['APP_HOST', 'APP_PORT', 'DB_HOST', 'DB_NAME', 'DB_COLLECTION']
.reduce((acc, val) => {
  if (process.env[val]) {
    acc[val] = process.env[val]
    return acc
  } else {
    throw new Error('Enviromental property ' + val + ' is missing')
  }
}, {})

/**
 * @param {*} value
 * @returns returns the value of the port as string number or boolean
 */
export default function normalizePort(value) {
  const port = parseInt(value, 10);

  if (Number.isNaN(port)) {
    // Named pipe
    return value;
  }

  if (port >= 0) {
    // Port number
    return port;
  }

  return false;
}

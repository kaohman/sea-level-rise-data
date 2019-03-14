export const fetchData = async (path, method, data = null) => {
  let options;
  switch (method) {
    case 'DELETE':
      options = { method };
      break
    case 'GET':
      options = data;
      break
    default:
      options = {
        method,
        body: data,
        headers: {
          'Content-type': 'application/json'
        }
      };
  }
  const response = await fetch(`https://sea-level-rise-data.herokuapp.com/${path}`, options);
  const json = await response.json();

  return json
};
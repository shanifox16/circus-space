const fetchSubscribers = () => {
  return fetch('/api/v1/subscribers')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage)
      throw(error);
    }
  })
  .then(response => response.json())
}

export default fetchSubscribers

const fetchNotifications = () => {
  return fetch('/api/v1/notifications')
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

export default fetchNotifications

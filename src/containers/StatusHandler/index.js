import React from 'react'

const StatusHandler = ({ json, isLoading, error, listHandler }) => (
  <div>
    {console.log(json, isLoading, error)}
    {json.Error && <p class="error">Error: {json.Error}</p>}

    {!json.Search &&
      listHandler && <p class="message">The list of movies is empty</p>}

    {isLoading && (
      <div class="spinner">
        <div class="rect1" />
        <div class="rect2" />
        <div class="rect3" />
        <div class="rect4" />
        <div class="rect5" />
      </div>
    )}

    {error && <p>Sorry! There was an network error</p>}
  </div>
)

export default StatusHandler

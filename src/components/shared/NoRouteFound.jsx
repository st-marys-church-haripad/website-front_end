const NoRouteFound = () => {
  return (
    <div className="container vstack">
      <div className="notFound-container">
          <p className="text-green">
            <i className="fa-solid fa-ban fa-2x"></i>
          </p>
          <p className="notFound">404 error,<br />
            The request page doesn't exist!!!....
          </p>
      </div>
    </div>
  )
}

export default NoRouteFound;
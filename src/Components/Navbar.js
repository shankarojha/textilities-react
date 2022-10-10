import './Navbar.css'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid" style={{color:props.mode==="dark"?"white":"black"}}>
    <Link className="navbar-brand" to="/" style={{color:props.mode==="dark"?"white":"black"}}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={{color:props.mode==="dark"?"white":"black"}}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={{color:props.mode==="dark"?"white":"black"}}>About</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" style={{color:props.mode==="dark"?"white":"black"}} role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#" style={{color:props.mode==="dark"?"white":"black"}}>Action</Link></li>
            <li><Link className="dropdown-item" to="#" style={{color:props.mode==="dark"?"white":"black"}}>Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#" style={{color:props.mode==="dark"?"white":"black"}}>Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li> */}
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      <div className=" m-1 d-flex form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label style={{color: props.mode==="light"?"black":"white"}} className="mx-1 form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode==="light"?"dark":"light"} Mode`}</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string
}

Navbar.defaultProps = {
    title:"Title not found"
}
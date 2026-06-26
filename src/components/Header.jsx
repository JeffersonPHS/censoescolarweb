import { Container, Nav, Navbar } from 'react-bootstrap';
import { IoSchoolOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'



function Header() {
  return (
    <header className='Estilizar' style={{ marginBottom: '10px'}}>
     <nav class="navbar navbar-expand-lg " >
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Instituiçao</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link className="nav-link" to="/Home">Home</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to="/listagem">Listagem</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    </header>
  );
}
export default Header;
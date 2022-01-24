// or less ideally
import { Row,Col } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Navbar,Container,Nav,Offcanvas,NavDropdown,Button } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import { LogoutUser } from '../../store/actions/UserActions';
import { TourifyLogo } from '../shared/icons';

export const CustomNav = () => {
    
  const { pathname, push } = useRouter();
  const isLogged = useSelector((state) => state.member.success);
  const dispatch = useDispatch();
  const menu = [
    {
      url: "/",
      text: "Beranda"
    },
    {
      url: "/dashboard",
      text: "Dashboard",
      login:true,
    },
    // {
    //   url: "/users/register",
    //   text: "Registration",
    // },
  ];
  
  const Logout = () => {
    dispatch(LogoutUser());
    push("/users/login");
  };
    return (
        <>
        <Row className="justify-content-center">
            <Col className="align-self-center" span={18}>
        <Navbar bg="transparent" expand="lg" variant="light" className="px-0">
            <Navbar.Brand href="#home">
              <div
                className="d-flex">
                    <TourifyLogo width={60}/>
            {' '}
            <h6 className="ml-3 align-self-center font-weight-bold">Tour Travel<br/>Revolution</h6>
            </div>
            </Navbar.Brand>
  <Navbar.Toggle className="bg-white border-0 py-3" aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="ml-auto my-2 my-lg-0"
      navbarScroll
    >
        
        {menu.map((el) =>
            el.login ? (
              isLogged && (
                  
                <Link href={el.url}><a className="nav-link ml-0 ml-md-5 text-dark align-self-center font-weight-bold">{el.text}</a></Link>
              )
            ) : (
                <Link href={el.url}><a className="nav-link ml-0 ml-md-5 text-dark align-self-center font-weight-bold">{el.text}</a></Link>
            )
          )}
      {isLogged?(<Button className="ml-0 ml-md-5 py-3 px-5 rounded-pill bg-orange shadow-lg-orange" onClick={Logout}>Logout</Button>) : 
      (<Link href="/users/login"><Button className="ml-0 ml-md-5 py-3 px-5 rounded-pill bg-orange shadow-lg-orange" onClick={Logout} >Masuk</Button></Link>)}
    </Nav>
  </Navbar.Collapse>
</Navbar>
  </Col>
  </Row>
      </>
    )
}
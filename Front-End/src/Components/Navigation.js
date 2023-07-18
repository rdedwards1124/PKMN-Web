import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";

const Navigation = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav
                        className="justify-content-between"
                        style={{ width: "100%" }}
                    >
                        <Nav.Item>
                            <Nav.Link as={Link} to="/" className="nav-link">
                                Home
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/favorites"
                                className="nav-link"
                            >
                                Favorites
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/searchpage"
                                className="nav-link"
                            >
                                SearchPage
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route
                    path="/favorites"
                    element={<Favorites selectData={selectData} />}
                />
                <Route path="/searchpage" element={<SearchPage />} />
                <Route
                    path="/movieshowpage/:id"
                    element={<MovieShowPage selectData={selectData} />}
                />
                <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </>
    );
};

export default Navigation;
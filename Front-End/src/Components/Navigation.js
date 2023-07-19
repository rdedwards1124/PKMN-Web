import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Favorites from "./Favorites";
import BattleTeams from "./BattleTeams";
import SearchPage from "./SearchPage";
import PokemonInfo from "./PokemonInfo";
import NotFound from "./NOTFOUND";

const Navigation = () => {
    return (
        <>
            <Navbar>
                <Container>
                    <Nav>
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
                                to="/battleteams"
                                className="nav-link"
                            >
                                Battle Teams
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link
                                as={Link}
                                to="/searchpage"
                                className="nav-link"
                            >
                                Search Pokemon
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/battleteams" element={<BattleTeams />} />
                <Route path="/searchpage" element={<SearchPage />} />
                <Route path="/pokemoninfo/:id" element={<PokemonInfo />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

export default Navigation;

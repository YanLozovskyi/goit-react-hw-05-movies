import { PageLoader, Header, Footer, Container, Section } from 'components';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Wrap, StyledLink, Nav, Logo } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Wrap>
        <Container>
          <Header>
            <Logo to={'/'}>tmdb</Logo>
            <Nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </Nav>
          </Header>
        </Container>
        <main>
          <Container>
            <Section>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </Section>
          </Container>
        </main>
        <Container>
          <Footer>
            <Nav>
              <StyledLink to="/">Home</StyledLink>
              <StyledLink to="/movies">Movies</StyledLink>
            </Nav>
          </Footer>
        </Container>
      </Wrap>
    </>
  );
};

export default Layout;

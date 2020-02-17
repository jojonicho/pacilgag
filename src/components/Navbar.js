import React, { useState } from "react"
import { Link } from "gatsby"
import Slide from 'react-reveal/Slide';

import tw from "tailwind.macro";
import styled from "@emotion/styled";
import pacilgag from "../images/pacilgag.svg"

// const Image = styled(Img)`h-12 mr-2`;
// const ImageContainer = tw.div`h-12 mr-2 w-full`;
const Nav = tw.nav`w-full bg-purple-900 flex items-center justify-between flex-wrap p-4`;
const LogoContainer = tw.div`
`;
const Input = tw.input`hover:bg-gray-600 hover:text-white bg-gray-100 mb-4 lg:mb-0 focus:outline-none rounded-md py-2 px-3 w-full lg:w-4/5` ;

// const MenuSvg = tw.svg`fill-current h-3 w-3`;
// const SmallMenuDiv = tw.div`block lg:hidden`;
// const SmallMenuButton = tw.div`flex items-center px-3 py-2 border rounded text-gray border-gray-400 hover:text-black hover:border-black`;
// const LinkContainer = styled.div`
//   ${tw`text-sm lg:flex-grow`}
//   .active {
//     ${tw`border-black border-b-2 text-black`}
//   }
// `;
const TLink = styled(Link)`
  ${tw`hover:text-pink-500 leading-tight text-white mr-6`}
`;
// const LinkDiv = tw.div`
//   hidden w-full flex-grow lg:flex lg:items-center lg:w-auto
// `;
// const LinkMobileDiv = styled.div`
//   ${tw`w-full block mt-5 flex-grow lg:hidden`}
//   display: ${props => (props.open ? `flex` : `none`)}
// `;

const Icon = tw.img`
lg:ml-12 mb-4 lg:mb-0 md:mb-0
`;

const InputDiv = tw.div`
flex content-center items-center justify-center flex-wrap lg:w-2/4
`;

const Page = tw.div`
flex content-center items-center justify-center flex-wrap
`;

const Navbar = () => {
    const [active, setActive] = useState('false');
    return (
        <Nav>
            <Link>
                <LogoContainer>
                    <Icon src={pacilgag} />
                </LogoContainer>
            </Link>
            <InputDiv>
            <Input type="text" placeholder="sEaRcH fOr DaNk MeMeS"/>
            </InputDiv>
            <Page>
                <TLink to="/" activeClassName="active" className="link-large">
                        Discover
                </TLink>
                <TLink to="/keluarga" activeClassName="active" className="link-large">
                        Saved MeMeS
                </TLink>
            </Page>
            {/* <SmallMenuDiv>
                <SmallMenuButton onClick={() => setActive(!active)}>
                    <MenuSvg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </MenuSvg>
                </SmallMenuButton>
            </SmallMenuDiv> */}
            {/* <LinkDiv>
                <LinkContainer>
                    <TLink to="/" activeClassName="active" className="link-large">
                        halaman utama
          </TLink>
                    <TLink to="/keluarga" activeClassName="active" className="link-large">
                        keluarga kami
          </TLink>
                </LinkContainer>
            </LinkDiv>
            <LinkMobileDiv open={active}>
                <LinkContainer>
                    <TLink to="/" activeClassName="active" className="link-large">
                        halaman utama
          </TLink>
                    <TLink to="/keluarga" activeClassName="active" className="link-large">
                        keluarga kami
          </TLink>
                </LinkContainer>
            </LinkMobileDiv> */}
        </Nav>
    );
}

export default Navbar
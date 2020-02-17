import tw from "tailwind.macro"
import React, { useEffect, useState } from "react";
import SEO from "../components/seo"
import Navbar from '../components/Navbar'
import { BarLoader } from 'react-spinners';
// import Masonry from 'react-masonry-component';
import styled from '@emotion/styled'
import Masonry from 'react-masonry-css'
import Modal from 'react-modal';

import MasonryInfiniteScroller from 'react-masonry-infinite';

const Wrapper = tw.div`
  flex items-center justify-center flex-row font-sans bg-gray-900 p-3 lg:p-12 flex-wrap
`
const MasonWrapper = styled.div`
  .container {
      ${tw`flex`}
  }
`
const Main = tw.div`
  p-2 lg:p-4 bg-gray-100 rounded-md lg:rounded-lg shadow-2xl ml-1 mr-1 lg:ml-2 lg:mr-2 mb-4 hover:bg-pink-400
`

const Icon = tw.img`
w-full
`


const Memes = () => {
    const apiUrl = `https://meme-api.herokuapp.com/gimme/12`;

    const proxyUrl = "https://cors-anywhere.herokuapp.com/";

    const [state, setState] = useState({ data: null, loading: true });

    useEffect(() => {
        setState({ data: state.data, loading: true });
        window
            .fetch(proxyUrl + apiUrl)
            .then(x => x.json())
            .then(y => {
                setState({ data: y, loading: false });
            });
    }, [apiUrl, setState]);

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    function toggle() {
        setIsOpen( x => !x);
    }

    return (
        <Wrapper>
            {state.loading ?
                <BarLoader
                    color={"#FFFFFF"}
                />
                :
                <MasonWrapper>
                    {/* <MasonryInfiniteScroller
                        hasMore={true}
                        loadMore={() => this.setState({ elements: this.state.elements.push("Element") })}
                    >
                        {state.data.memes.map((meme, index) => (
                            <>
                                <button onClick={openModal(index)}>
                                    <Main>
                                        <Icon src={meme.url} alt={meme.title} key={index} />
                                    </Main>
                                </button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={closeModal}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <Main>
                                        <Icon src={meme.url} alt={meme.title} key={index} />
                                    </Main>
                                </Modal>
                            </>
                        ))}
                    </MasonryInfiniteScroller> */}
                    <Masonry
                        breakpointCols={3}
                        className="container"
                        columnClassName="grid-column">

                        {state.data.memes.map((meme, index) => (
                            <>
                                <button onClick={toggle}>
                                    <Main>
                                        <Icon src={meme.url} alt={meme.title} key={index} />
                                    </Main>
                                </button>
                                <Modal
                                    isOpen={modalIsOpen}
                                    onRequestClose={toggle}
                                    style={customStyles}
                                    contentLabel="Example Modal"
                                >
                                    <Main>
                                        <Icon src={meme.url} alt={meme.title} key={index} />
                                    </Main>
                                </Modal>
                            </>
                        ))}
                    </Masonry>
                </MasonWrapper>
            }
        </Wrapper>

    )
}

export default Memes;
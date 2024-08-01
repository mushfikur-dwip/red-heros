import React from 'react';
import imgBefore from '../assets/before.jpg';
import imgAfter from '../assets/sec.png';

import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px;
    max-width: 471.48px;

`;

function secImg() {
    return (
        <Container>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        margin: "auto",
                        border: "5px solid white",
                    }}
                    src={imgBefore}
                    alt="Before"
                />
                <span>
                    <b
                        style={{
                            color: "red",
                        }}
                    >
                        আগে
                    </b>
                </span>
            </div>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <img
                    style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                        margin: "auto",
                        border: "5px solid white",
                    }}
                    src={imgAfter}
                    alt="After"
                />
                <span>
                    <b
                        style={{
                            color: "red",
                        }}
                    >
                        পরে
                    </b>
                </span>
            </div>
        </Container>
    );
}

export default secImg;

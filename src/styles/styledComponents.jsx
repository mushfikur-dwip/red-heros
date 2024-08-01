// src/styles/styledComponents.js
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 90%;
    height: auto;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #ffffff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin: 20px;
`;
// export const howToWork = styled.div`
//     display: flex;
//     width: 90%;
//     flex-direction: column;
//     align-items: center;
//     padding: 10px !imoortant;
//     background-color: #ffffff;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     border-radius: 10px;
//     margin: 20px;
// `;

export const Title = styled.h1`
    margin-bottom: 20px;
    color: #333;
`;

export const UploadButton = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

export const SwitchButton = styled.button`
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #ef233c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-width: 700 !important;
    font-family: "Hind Siliguri", sans-serif !important;    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

export const Footer = styled.div`
    display:flex;
    gap: 10px;
    aline-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 10px;
    padding: 7px;
    background-color: #EF233C;
    color: #fffff !important;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    font-width: 700 !important;
    font-family: "Hind Siliguri", sans-serif !important;    &:disabled {
        background-color: #cccccc;
        cursor: not-allowed;
    }
`;

export const FrameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #cccc; /* Dashed border */
    border-radius: 5px; /* Rounded corners */
    background-color: #e6f0f8; /* Light background */
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    margin-bottom: 20px;
    width: 300px; /* Adjust width to be similar to your image */
    position: relative; /* To position the control buttons */  
`;

export const CircleCanvas = styled.canvas`
    width: 100%;
    height: auto; /* Adjust the height automatically */
    border-radius: 5px;
    box-sizing: border-box;
    background-color: white; /* Ensure the background is white */
    margin-bottom: 10px;
`;

export const DownloadButton = styled.button`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: #D90429; /* Similar to the image button background */
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-size: 18px;
    font-width: 700 !important;
    font-family: "Hind Siliguri", sans-serif !important;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Add shadow to match the style */
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #EF233C; /* Slightly darker blue on hover */
    }
`;

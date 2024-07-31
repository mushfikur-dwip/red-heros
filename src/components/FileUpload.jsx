// src/components/FileUpload.js
import React from 'react';
import { useDropzone } from 'react-dropzone';
import styled from 'styled-components';

const FileUpload = ({ onDrop }) => {
    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <UploadContainer {...getRootProps()}>
            <input {...getInputProps()} />
            <p>আপনার ছবি যুক্ত করুন</p>
        </UploadContainer>
    );
};

const UploadContainer = styled.div`
    border: 2px dashed #cccccc;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    cursor: pointer;
    background-color: #f0f4f8; 
    margin-bottom: 20px; 
    width: 100%;
    max-width: 400px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
`;


export default FileUpload;

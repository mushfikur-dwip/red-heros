// src/components/PhotoFrame.js
import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const DEFAULT_SIZE = 180; // Facebook profile photo size

const PhotoFrame = ({ photo }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (photo) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.src = photo;
            img.onload = () => {
                // Resize the preview image to fit within the circular frame
                const scale = Math.min(DEFAULT_SIZE / img.width, DEFAULT_SIZE / img.height);
                const width = img.width * scale;
                const height = img.height * scale;
                const x = (DEFAULT_SIZE - width) / 2;
                const y = (DEFAULT_SIZE - height) / 2;

                canvas.width = DEFAULT_SIZE;
                canvas.height = DEFAULT_SIZE;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, x, y, width, height);

                // Apply red color filter
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const data = imageData.data;
                for (let i = 0; i < data.length; i += 4) {
                    data[i] = data[i]; // Red
                    data[i + 1] = 0; // Green
                    data[i + 2] = 0; // Blue
                }
                ctx.putImageData(imageData, 0, 0);

                // Draw circular frame
                // ctx.beginPath();
                // ctx.arc(DEFAULT_SIZE / 2, DEFAULT_SIZE / 2, DEFAULT_SIZE / 2 - 10, 0, 2 * Math.PI);
                // ctx.lineWidth = 0;
                // ctx.strokeStyle = 'red';
                // ctx.stroke();
            };
        }
    }, [photo]);

    const handleDownload = () => {
        const img = new Image();
        img.src = photo;
        img.onload = () => {
            const originalCanvas = document.createElement('canvas');
            const ctx = originalCanvas.getContext('2d');
            originalCanvas.width = img.width;
            originalCanvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            // Apply red color filter
            const imageData = ctx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
            const data = imageData.data;
            for (let i = 0; i < data.length; i += 4) {
                data[i] = data[i]; // Red
                data[i + 1] = 0; // Green
                data[i + 2] = 0; // Blue
            }
            ctx.putImageData(imageData, 0, 0);

            // // Draw frame
            // ctx.strokeStyle = 'red';
            // ctx.lineWidth = 20;
            // ctx.strokeRect(0, 0, originalCanvas.width, originalCanvas.height);

            // Download the image
            const link = document.createElement('a');
            link.href = originalCanvas.toDataURL('image/png');
            link.download = 'framed-photo.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    };

    return (
        <FrameContainer>
            <CircleCanvas ref={canvasRef} />
            <DownloadButton className='redBtn' onClick={handleDownload}>ফ্রেমবিহীন ছবি ডাউনলোড</DownloadButton>
        </FrameContainer>
    );
};


export const FrameContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border: 1px solid #cccc; 
    border-radius: 5px;
    background-color: #e6f0f8; 
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); 
    margin-bottom: 20px;
    width: 300px; 
    position: relative;  
`;

export const CircleCanvas = styled.canvas`
    width: 100%;
    height: auto;
    border-radius: 5px;
    box-sizing: border-box;
    background-color: white;
    margin-bottom: 10px;
`;

const DownloadButton = styled.button`
    margin-top: 10px;
    padding: 12px 24px;
    background-color: #D90429;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
    font-width: 700 !important;
    font-family: "Hind Siliguri", sans-serif !important;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #EF233C; 
    }
`;

export default PhotoFrame;

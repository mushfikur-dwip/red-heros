// src/components/PhotoFrameWithImage.js
import React, { useRef, useState, useEffect } from 'react';
import frameImage from '../assets/frame.png'; // Import the predefined frame image
import { FrameContainer, CircleCanvas, DownloadButton } from '../styles/styledComponents';

const DEFAULT_SIZE = 180; // Facebook profile photo size

const PhotoFrameWithImage = ({ photo }) => {
    const canvasRef = useRef(null);
    const [isFrameLoaded, setFrameLoaded] = useState(false);

    useEffect(() => {
        if (photo) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            const frame = new Image();

            img.src = photo;
            frame.src = frameImage;

            img.onload = () => {
                frame.onload = () => {
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

                    // Draw frame image
                    ctx.drawImage(frame, 0, 0, canvas.width, canvas.height);
                    setFrameLoaded(true);
                };
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

            // Draw frame
            const frame = new Image();
            frame.src = frameImage;
            frame.onload = () => {
                ctx.drawImage(frame, 0, 0, originalCanvas.width, originalCanvas.height);

                // Download the image
                const link = document.createElement('a');
                link.href = originalCanvas.toDataURL('image/png');
                link.download = 'red-hero.png';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            };
        };
    };

    return (
        <FrameContainer>
            <CircleCanvas ref={canvasRef} />
            <DownloadButton onClick={handleDownload} disabled={!isFrameLoaded}>
                <span style={{ textDecoration: 'none' }}>ফ্রেমযুক্ত ছবি ডাউনলোড</span>
            </DownloadButton>
            <span><a style={{ color: 'red', textDecoration: 'none' }} target='_blank' href="https://facebook.com/mushfikurdwip">আমাদেরকে ফ্রেম দিন</a></span>
        </FrameContainer>
    );
};

export default PhotoFrameWithImage;

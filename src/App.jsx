import React, { useState, useEffect } from "react";
import FileUpload from "./components/FileUpload";
import PhotoFrame from "./components/PhotoFrame";
import PhotoFrameWithImage from "./components/PhotoFrameWithImage";
import GlobalStyle from "./styles/globalStyles";
import HowTo from "./components/FirstImg.jsx";
import SecImg from "./components/SecImg.jsx";
import {
    Container,
    Title,
    SwitchButton,
    Footer,
} from "./styles/styledComponents";

const App = () => {
    const [photo, setPhoto] = useState(null);
    const [useFrame, setUseFrame] = useState(false);
    const [showFirstImg, setFirstImg] = useState(false);
    const [imageCount, setImageCount] = useState(() => {
        // Initialize from localStorage or default to 0
        const savedCount = localStorage.getItem("imageCount");
        return savedCount ? parseInt(savedCount, 10) : 0;
    });

    useEffect(() => {
        // Save imageCount to localStorage whenever it changes
        localStorage.setItem("imageCount", imageCount);
    }, [imageCount]);

    const handlePhotoDrop = (acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.onload = (e) => {
            setPhoto(e.target.result);
            setImageCount((prevCount) => prevCount + 1);
        };
        reader.readAsDataURL(file);
    };

    const toggleFrame = () => { 
        setUseFrame((prevUseFrame) => !prevUseFrame);
        setFirstImg((prevFirstImg) => !prevFirstImg);   
    };
    return (
        <>
            <GlobalStyle />
            <Container className="containerColor">
                <Title style={{ color: "red", textDecoration: "none", textAlign: "center" }}>
                    আন্দোলন হোক<br style={{
                    }} /> ঘরে ঘরে
                </Title>
                <div>{/* Yoসu might want to add something here if needed */}</div>
                {!useFrame && photo && <PhotoFrame photo={photo} />}
                {useFrame && photo && <PhotoFrameWithImage photo={photo} />}
                <FileUpload onDrop={handlePhotoDrop} />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <SwitchButton onClick={() => setUseFrame(!useFrame)}>
                        {useFrame ? "ফ্রেমবিহীন ছবি" : "ফ্রেমযুক্ত ছবি"}
                    </SwitchButton>
                    {/* <SwitchButton>
                    <span>{imageCount} ইমেজ জেনারেট হয়েছে</span>
                    </SwitchButton> */}
                    <span
                        style={{
                            textAlign: "center",
                        }}
                    >
                        এই টুল দ্বারা জেনারেট করা ইমেজ আমাদের ডাটাবেইজে সংরক্ষিত থাকবে না।
                    </span>
                </div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    <Footer>
                        <a
                            style={{
                                fontWeight: "600",
                                color: "white",
                                textAlign: "center",
                                textDecoration: "none",
                            }}
                            target="_blank"
                            href="https://facebook.com/mushfikurdwip"
                        >
                            Don't Click
                        </a>
                    </Footer>
                    <Footer>
                        <a
                            style={{
                                fontWeight: "600",
                                color: "white",
                                cursor: 'none !important',
                                textAlign: "center",
                                textDecoration: "none",
                                pointerEvents: "none !important",
                            }}
                            target="_blank"
                            href="#"
                            disabled
                        >
                            শহীদ ভাইয়েরা
                        </a>
                    </Footer>
                </div>
            </Container>
            {/* <HowTo />
            <SecImg /> */}
            {showFirstImg ? <HowTo /> : <SecImg />} {/* Conditionally render HowTo or SecImg */}

        </>
    );
};

export default App;

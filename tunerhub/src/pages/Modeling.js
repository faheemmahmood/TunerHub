// pages/Modeling.js
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

// Component to load and render the model
const Model = () => {
    const { scene } = useGLTF('/models/myModel.gltf'); // Update the path to your model

    return <primitive object={scene} />;
};

const Modeling = () => {
    return (
        <div className="modeling-container">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Model />
                <OrbitControls />
            </Canvas>
        </div>
    );
    
};

// This will automatically load your GLTF model when the component mounts
export default Modeling;

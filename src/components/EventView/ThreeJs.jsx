import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeJs = () => {
    const sceneRef = useRef()

    useEffect(() => {

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();

        renderer.setSize(window.innerWidth, window.innerHeight);
        sceneRef.current.appendChild(renderer.domElement);
        const geometry = new THREE.BoxGeometry();
        const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        const cube = new THREE.Mesh(geometry, material)
        scene.add(cube)

        //Camer position
        camera.position.z = 5
        //Animation Loop
        const animate = () => {
            requestAnimationFrame(animate);

            //Rotate
            cube.rotation.x += 0.02;
            cube.rotation.y += 0.01;

            renderer.render(scene, camera)
        }

        animate()

        return () => {
            sceneRef.current.removeChild(renderer.domElement);
        }

    }, [])
    return <div ref={sceneRef} ></div>
};

export default ThreeJs;
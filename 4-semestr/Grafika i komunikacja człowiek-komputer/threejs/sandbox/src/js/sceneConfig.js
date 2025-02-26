import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

export const scene = new THREE.Scene(); // instance of Scene, where everything is going to be rendered
export const camera = new THREE.PerspectiveCamera(
  75, // FOV - field of view
  window.innerWidth / window.innerHeight, // aspekt ratio, should be always innerWidth / innerHeight
  0.1, // clipping plane - near. Objects won't be rendered if this distance
  1000 // clipping plane - far. Objects won't be rendered if this distance
);

export const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.set(0, 0, 100);

export const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
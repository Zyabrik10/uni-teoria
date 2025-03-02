# Three js

# Init

```cmd
npm install three
npm install --save-dev vite
```

# Scene

Example code:

```js
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); // creating a canvas to render the scene.
renderer.setSize(window.innerWidth, window.innerHeight); // set canvas size
document.body.appendChild(renderer.domElement); // inserting canvas into document

// ...
```

Creating a new scene. This instance will be used to add objects to the scene by `scene.add()`

```js
const scene = new THREE.Scene();
```

Creating a new camera. This instance will be used to visualize objects depending on angle, distance and so on.

```js
const camera = new THREE.PerspectiveCamera(
    75, // FOV - field of view
    window.innerWidth / window.innerHeight, // screen ratio
    0.1, // min distance between rendering and not rendering
    1000 // max distance between rendering and not rendering
);
```

# BoxGeometry

```js
const geometry = new THREE.BoxGeometry(
    1, // width
    1, // height
    1 // depth
);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); 
const cube = new THREE.Mesh(geometry, material); 
scene.add( cube );
```
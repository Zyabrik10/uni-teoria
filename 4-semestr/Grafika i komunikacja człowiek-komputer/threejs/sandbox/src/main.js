import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { randFloat } from "three/src/math/MathUtils.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

camera.position.y = 30;
camera.position.z = 30;
camera.position.x = -50;

camera.lookAt(30, -20, 0);

controls.update();

renderer.render(scene, camera);



function initCubes() {
  const n = 100;

  const angleStep = (Math.PI * 2) / n;

  const sp = 0.01;

  for (let i = 0; i < n; i++) {
    const cube = createCube(randFloat(0, 2), "red");

    cube.angle = angleStep * i;
    cube.angleStep = -sp;
    cube.ax = "x";
    cube.rad = 20;

    const angle = angleStep * i;

    cube.position.x = Math.cos(angle) * cube.rad;
    cube.position.z = Math.sin(angle) * cube.rad;
    
    scene.add(cube);
  }

  for (let i = 0; i < n; i++) {
    const cube = createCube(randFloat(0, 2), "blue");

    cube.angle = angleStep * i;
    cube.angleStep = -sp;
    cube.ax = "z";
    cube.rad = 22;

    const angle = angleStep * i;

    cube.position.y = Math.cos(angle) * cube.rad;
    cube.position.z = Math.sin(angle) * cube.rad;
    
    scene.add(cube);
  }
  
  for (let i = 0; i < n; i++) {
    const cube = createCube(randFloat(0, 2), "green");
    
    cube.angle = angleStep * i;
    cube.angleStep = sp;
    cube.ax = "y";
    cube.rad = 18;

    const angle = angleStep * i;

    cube.position.y = Math.cos(angle) * cube.rad;
    cube.position.x = Math.sin(angle) * cube.rad;
    
    scene.add(cube);
  }
}

initCubes();

function animate() {
  scene.children.forEach((cube) => {
    switch (cube.ax) {
      case "x":
        cube.position.x = Math.cos(cube.angle) * cube.rad;
        cube.position.z = Math.sin(cube.angle) * cube.rad;
        break;
      case "y":
        cube.position.y = Math.cos(cube.angle) * cube.rad;
        cube.position.x = Math.sin(cube.angle) * cube.rad;
        break;
      case "z":
        cube.position.y = Math.cos(cube.angle) * cube.rad;
        cube.position.z = Math.sin(cube.angle) * cube.rad;
        break;
    }
    cube.angle += cube.angleStep;

  });

  renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

function createCube(size, color) {
  const geometry = new THREE.BoxGeometry(size, size, size);
  const material = new THREE.MeshBasicMaterial({ color });
  const cube = new THREE.Mesh(geometry, material);

  return cube;
}
import * as THREE from "three";

import { sphereGeometryConfig, sphereMaterialConfig } from "./js/objectConfig";
import { camera, controls, renderer, scene } from "./js/sceneConfig";
import { randInt } from "three/src/math/MathUtils.js";

const balls = [];
const lines = [];
const wall = {
  x: 400,
  y: 400,
  z: 400,
};
const linkRadius = 100;

class Ball {
  constructor(geometry, material, vel) {
    this.ball = addSphere(geometry, material);
    this.vel = vel;
  }

  move() {
    this.ball.position.x += this.vel.x;
    this.ball.position.y += this.vel.y;
    this.ball.position.z += this.vel.z;

    if (this.ball.geometry.parameters.radius + this.ball.position.x >= wall.x) {
      this.ball.position.x = wall.x - this.ball.geometry.parameters.radius;
      this.vel.x *= -1;
    } else if (
      this.ball.position.x - this.ball.geometry.parameters.radius <=
      -wall.x
    ) {
      this.ball.position.x = -wall.x + this.ball.geometry.parameters.radius;
      this.vel.x *= -1;
    }

    if (this.ball.geometry.parameters.radius + this.ball.position.y >= wall.y) {
      this.ball.position.y = wall.y - this.ball.geometry.parameters.radius;
      this.vel.y *= -1;
    } else if (
      this.ball.position.y - this.ball.geometry.parameters.radius <=
      -wall.y
    ) {
      this.ball.position.y = -wall.y + this.ball.geometry.parameters.radius;
      this.vel.y *= -1;
    }

    if (this.ball.geometry.parameters.radius + this.ball.position.z >= wall.z) {
      this.ball.position.z = wall.z - this.ball.geometry.parameters.radius;
      this.vel.z *= -1;
    } else if (
      this.ball.position.z - this.ball.geometry.parameters.radius <=
      -wall.z
    ) {
      this.ball.position.z = -wall.z + this.ball.geometry.parameters.radius;
      this.vel.z *= -1;
    }
  }
}

function init() {
  for (let i = 0; i < 10; i++) {
    balls.push(
      new Ball([randInt(1, 15), 32, 16], sphereMaterialConfig, {
        x: randInt(-20, 20) / 100,
        y: randInt(-20, 20) / 100,
        z: randInt(-20, 20) / 100,
      })
    );
  }
}

function animation() {
  renderer.render(scene, camera);

  for (const object of balls) {
    for (const object2 of balls) {
      if (object.ball.uuid === object2.ball.uuid) continue;

      const dist = object.ball.position.distanceTo(object2.ball.position);

      const uuid = object.ball.uuid;
      const uuid2 = object2.ball.uuid;

      if (dist <= linkRadius) {
        const { x, y, z } = object.ball.position;
        const { x: x1, y: y1, z: z1 } = object2.ball.position;

        const _line = lines.find((l) => {
          return l.parentsId === uuid + uuid2 || l.parentsId === uuid2 + uuid;
        });

        if (!_line) {
          const newLine = lineSphere([x, y, z], [x1, y1, z1], [uuid, uuid2], {
            color: "white",
          });

          scene.add(newLine);
          lines.push(newLine);

          continue;
        }

        setNewPoints(_line, [
          new THREE.Vector3(x, y, z),
          new THREE.Vector3(x1, y1, z1),
        ]);
      } else {
        const _line = lines.find((l) => {
          return l.parentsId === uuid + uuid2 || l.parentsId === uuid2 + uuid;
        });
        scene.remove(_line);
      }
    }

    object.move();
  }

  controls.update();
}

function addSphere(geometryConf, materialConf) {
  const geometry = new THREE.SphereGeometry(...geometryConf);
  const material = new THREE.MeshBasicMaterial(materialConf);
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);
  return sphere;
}

function lineSphere(coor1, coor2, parentsId, materialConf) {
  //create a blue LineBasicMaterial
  const material = new THREE.LineBasicMaterial(materialConf);

  const points = [];

  points.push(new THREE.Vector3(...coor1));
  points.push(new THREE.Vector3(...coor2));

  console.log(points, coor1, coor2);

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const line = new THREE.Line(geometry, material);
  line.parentsId = parentsId[0] + parentsId[1];

  return line;
}

function setNewPoints(line, newPoints) {
  const newPositions = new Float32Array(
    newPoints.flatMap((p) => [p.x, p.y, p.z])
  );
  line.geometry.setAttribute(
    "position",
    new THREE.BufferAttribute(newPositions, 3)
  );
  line.geometry.attributes.position.needsUpdate = true;
}

renderer.setAnimationLoop(animation);
init();
renderer.render(scene, camera);

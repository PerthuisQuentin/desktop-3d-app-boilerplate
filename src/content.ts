import * as THREE from 'three';
import 'three/OrbitControls';

var camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

var controls = new THREE.OrbitControls(camera);

var scene = new THREE.Scene();

var geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
var material = new THREE.MeshNormalMaterial();

var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function update() {
	controls.update();
}

export {scene, camera, update};
import * as THREE from 'three';

import { scene, camera, update } from './content';

var renderer: THREE.WebGLRenderer;

init();
animate();

function init() {
	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);
	update();
	renderer.render(scene, camera);
}
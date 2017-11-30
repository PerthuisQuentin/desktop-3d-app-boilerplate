import { WebGLRenderer } from 'three';

import { scene, camera, mesh } from './src/content';

var renderer: WebGLRenderer;

init();
animate();

function init() {
	renderer = new WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);
}

function animate() {
	requestAnimationFrame(animate);

	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;

	renderer.render(scene, camera);
}
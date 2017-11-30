import {
	Scene,
	PerspectiveCamera,
	BoxGeometry,
	MeshNormalMaterial,
	Mesh,
	Camera,
	Geometry,
	Material
} from 'three';

var camera = new PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
camera.position.z = 1;

var scene = new Scene();

var geometry = new BoxGeometry(0.2, 0.2, 0.2);
var material = new MeshNormalMaterial();

var mesh = new Mesh(geometry, material);
scene.add(mesh);

export {scene, camera, mesh};
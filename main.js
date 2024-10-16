
// Import necessary libraries for 3D rendering (e.g., Three.js)
import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.01, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add geometries and materials
const materials = [
    new THREE.MeshBasicMaterial({ color: 0x11B7E0 }),
    new THREE.MeshBasicMaterial({ color: 0xD2A11A }),
    new THREE.MeshBasicMaterial({ color: 0x0F8A3D }),
    new THREE.MeshBasicMaterial({ color: 0xB7B4E0 }),
    new THREE.MeshBasicMaterial({ color: 0xC91D7B })
];

// Box
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const box = new THREE.Mesh(boxGeometry, materials[0]);
box.position.set(-1.824, 2.160, -3.713);
scene.add(box);

// Capsule
const capsuleGeometry = new THREE.CapsuleGeometry(0.64, 1.48, 4, 8);
const capsule = new THREE.Mesh(capsuleGeometry, materials[1]);
capsule.position.set(-1.874, 1.880, -5.219);
scene.add(capsule);

// Sphere
const sphereGeometry = new THREE.SphereGeometry(1, 32, 16);
const sphere = new THREE.Mesh(sphereGeometry, materials[2]);
sphere.position.set(-1.706, 1.934, -7.403);
scene.add(sphere);

// Torus
const torusGeometry = new THREE.TorusGeometry(1, 0.4, 12, 48);
const torus = new THREE.Mesh(torusGeometry, materials[3]);
torus.position.set(-1.833, 1.749, -9.487);
scene.add(torus);

// Lathe
const lathePoints = [new THREE.Vector2(0, -0.5), new THREE.Vector2(0.5, 0), new THREE.Vector2(0, 0.5)];
const latheGeometry = new THREE.LatheGeometry(lathePoints, 12);
const lathe = new THREE.Mesh(latheGeometry, materials[4]);
lathe.position.set(-1.139, 2.209, -2.303);
scene.add(lathe);

// Camera position
camera.position.set(7.79, 6.59, -3.00);

// Animation loop for slow rotating camera
function animate() {
    requestAnimationFrame(animate);

    // Slow rotation
    camera.position.x = 10 * Math.sin(Date.now() * 0.001); // Rotate around the Y axis
    camera.position.z = 10 * Math.cos(Date.now() * 0.001); // Rotate around the X axis
    camera.lookAt(0, 1, 0); // Keep looking at the center of the scene

    renderer.render(scene, camera);
}

// Start animation
animate();

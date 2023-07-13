// Scene Mesh Camera Renderer

// Scene
const scene = new THREE.Scene();

// Group (for Meshes)
const group = new THREE.Group();

// Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 1;
mesh.position.y = 1;
mesh.position.z = 1;

scene.add(mesh);

// MeshTwo
const geometryT = new THREE.BoxGeometry(1, 1, 1);
const materialT = new THREE.MeshBasicMaterial({ color: "blue" });
const meshT = new THREE.Mesh(geometryT, materialT);
meshT.position.y = 2;
scene.add(meshT);

group.add(mesh, meshT);
group.position.x = 1;
// group.position.y = -1;
// group.position.z = ;

scene.add(group);

// Axes Helper
const axesHelper = new THREE.AxesHelper(4);

// Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
  1,
  2000
); // near value is 1, far value is 2000

camera.position.z = 4;
camera.position.x = 1;
camera.position.y = 1;

scene.add(camera);

// Renderer - responsible for drawing the scene on teh canvas
const canvas = document.querySelector(".draw"); // select canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); // add webglrenderer
renderer.setSize(aspect.width, aspect.height); // set size of renderer
renderer.render(scene, camera);

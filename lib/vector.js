/* THREE */

class Vector {
  constructor(x, y, z, color = 0xFF0000) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.color = color;
    this.magnitude = this.getMagnitude();
    this.group = new THREE.Object3D();

    const material = new THREE.MeshBasicMaterial({ color: this.color });

    // bar
    const radius = 1;
    const radialSegments = 12;
    const magnitudeGeometry = new THREE.CylinderGeometry(radius, radius, this.magnitude, radialSegments);
    const magMesh = new THREE.Mesh(magnitudeGeometry, material);
    this.group.add(magMesh);

    // arrow
    // const coneRadius = 5;
    // const coneHeight = 10;
    // const heightSegments = 1;
    // const coneGeometry = new THREE.ConeGeometry(coneRadius, coneHeight, heightSegments);
    // const coneMesh = new THREE.Mesh(coneGeometry, material);
    // this.group.add(coneMesh);

    return this;
  }

  getMagnitude() {
    const xMag = this.x * this.x;
    const yMag = this.y * this.y;
    const zMag = this.z * this.z;

    return Math.sqrt(xMag + yMag + zMag);
  }
}
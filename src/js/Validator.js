export default class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const firstCheck = /^(\w|-)+$/g.test(this.name);
    const secondCheck = /^[A-Za-z].+[A-Za-z]$/.test(this.name);
    const thirdCheck = !(/\d{4,}/.test(this.name));

    if (firstCheck && secondCheck && thirdCheck) {
      return true;
    }
    return false;
  }
}

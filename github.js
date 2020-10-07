// Using ES6 classes

class GitHub {
  constructor() {
    this.client_id = "55d5aea3f1c0f61cfa50";
    this.client_secret = "1a3431a898ebb4360a70a49ddfeb36ec14be5848";
  }

  // creating an async function
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}

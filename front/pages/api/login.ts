
export let AuthToken: any = null;

export default async function handler(req, res) {
  try {
    const { body } = req;
    const response = await fetch('http://localhost:4001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(body)
    });

    const data = await response.json();

    AuthToken = data;

    res.status(200).send(data)
  } catch (err) {
    console.log(err);

    throw err;
  }
}

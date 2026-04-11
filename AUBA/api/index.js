export default async (req, res) => {
  try {
    const { reqHandler } = await import('../dist/AUBA/server/server.mjs');
    return reqHandler(req, res);
  } catch (error) {
    console.error('SSR Error:', error);
    res.status(500).send('Internal Server Error');
  }
};

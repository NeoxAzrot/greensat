export const GET = async (request: Request) => {
  console.log(request);
  return new Response('Hello, Next.js!');
};

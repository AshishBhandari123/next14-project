import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <h3>Sorry, the page you are looking for does not exist.</h3>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;

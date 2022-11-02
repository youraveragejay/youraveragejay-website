import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "../layouts/MainLayout";

const ErrorPage = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 10000);
  }, []);

  return (
    <MainLayout>
      <div className="errorpage">
        <title>Error: 404 That page cannot be found</title>
        <h1>Ooops...</h1>
        <h1>ERROR: 404</h1>

        <h2>That page cannot be found</h2>

        <p>
          There may be a typo in the url, or this page has been deleted. Please
          double check the url, contact the previous owner of this page, or
          return to the{" "}
          <Link href="/" legacyBehavior>
            <a>Homepage</a>
          </Link>
          .
        </p>
        <p>
          <i>You will be redirected after 10 seconds...</i>
        </p>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;

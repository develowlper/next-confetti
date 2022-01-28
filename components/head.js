import NextHead from "next/head";

export default function Head() {
  return (
    <NextHead>
      <title>Next Confetti</title>
      <link rel="preconnect" href="https://api.fontshare.com" />
      <link
        href="https://api.fontshare.com/css?f[]=satoshi@400&display=swap"
        rel="stylesheet"
      ></link>
    </NextHead>
  );
}

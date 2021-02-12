import Head from 'next/head';
import React from 'react';
type Props = {
  title: string;
};
const HeadContent = (props: Props) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Nubes!"
      />

      <link rel="icon" href={'/favicon.ico'} />
      <style>{`
        body {
          margin: 0;
        }
      `}</style>
    </Head>
  );
};

export default HeadContent;

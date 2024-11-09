"use client";

import { useEffect, useState } from "react";

// import useSWR from "swr";

// const fetcher = (url: string): Promise<any[]> =>
//   fetch(url).then((res) => res.json());

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/get-zapier-data");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>NORMEQ</h1>
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading data...</p>
        )}
      </main>
    </div>
  );
}

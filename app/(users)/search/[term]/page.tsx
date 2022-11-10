import React from "react";

interface ITermPageProps {
  params: {
    term: string;
  };
}

interface ISearchResult {
  organic_results: [
    {
      position: number;
      title: string;
      link: string;
      thumbnail: string;
      snippet: string;
    }
  ];
}

const search = async (term: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${term}&api_key=` // ${process.env.API_KEY}
  );

  // throw new Error("Oops!");

  const data: ISearchResult = await res.json();

  return data;
};

const TermPage = async ({ params: { term } }: ITermPageProps) => {
  const searchResults = await search(term);

  return (
    <div>
      <p className="text-gray-500 text-sm">You searched for:&nbsp;{term}</p>

      <ol className="space-y-5 p-5">
        {searchResults?.organic_results?.map((result, i) => (
          <li key={i} className="list-decimal">
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TermPage;

import Head from "next/head";
import Banner from "../src/components/Banner";
import Header from "../src/components/Header";
import MediaRows from "../src/components/MediaRow";
import { Movie } from "../typings";
import requests from "../utils/requests";

export const getServerSideProps = async () => {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals.url).then((res) => res.json()),
    fetch(requests.fetchTrending.url).then((res) => res.json()),
    fetch(requests.fetchTopRated.url).then((res) => res.json()),
    fetch(requests.fetchActionMovies.url).then((res) => res.json()),
    fetch(requests.fetchComedyMovies.url).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies.url).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies.url).then((res) => res.json()),
    fetch(requests.fetchDocumentaries.url).then((res) => res.json()),
  ]);
  
  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
};

interface Props {
  netflixOriginals: Movie[];
  trendingNow: Movie[];
  topRated: Movie[];
  actionMovies: Movie[];
  comedyMovies: Movie[];
  horrorMovies: Movie[];
  romanceMovies: Movie[];
  documentaries: Movie[];
}

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}: Props) => {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Kreed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Banner netflixOriginals={netflixOriginals} />
        <section className="absolute md:space-y-24 md:pt-40">
          <MediaRows title="Trending Now" movies={trendingNow}/>
          <MediaRows title="Top Rated" movies={topRated}/>
          <MediaRows title="Action Thrillers" movies={actionMovies}/>
          {/* My Watchlist Component */}
          <MediaRows title="Comedies" movies={comedyMovies}/>
          <MediaRows title="Horror Movies" movies={horrorMovies}/>
          <MediaRows title="Romance Movies" movies={romanceMovies}/>
          <MediaRows title="Documentaries" movies={documentaries}/>
        </section>
      </main>
      {/* Modal */}
    </div>
  );
};

export default Home;

import "./App.css";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import { listBooksAtom } from "./recoile/atom/booksAtom";
import { getBooks } from "./services/book";
import PullToRefresh from "react-simple-pull-to-refresh";

function App() {
  const [_, setBooksList] = useRecoilState(listBooksAtom);
  const booksList = useRecoilValue(listBooksAtom);
  const [page, setPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [hasMore, setHasMore] = React.useState(true);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    getBooks(page, 10).then((res) => {
      let { data } = res;
      setBooksList((old) => (old.length === 0 ? data : [...old, ...data]));
      setLoading(false);
      if (data.length === 0) {
        setHasMore(false);
      }
    });

    // console.log(booksList)
  }, [page]);

  function handleRefresh() {
    return getBooks(1, 10).then((res) => {
      let { data } = res;
      setBooksList(() => data);
      setRefreshing(false);
    });
  }
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight * 0.8 &&
      !loading &&
      hasMore
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div className="App">
      <PullToRefresh onRefresh={handleRefresh}>
        <div>
          <Header title={"Books"}></Header>
          <div
            style={{ marginLeft: "10%", marginRight: "10%" }}
            className="grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 flex-wrap "
          >
            {booksList.map((book) => (
              <div className="p-1">
                <ProductCard data={book}></ProductCard>
              </div>
            ))}
          </div>
        </div>
      </PullToRefresh>
    </div>
  );
}

export default App;

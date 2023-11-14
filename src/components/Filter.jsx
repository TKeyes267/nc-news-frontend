const Filter = ({ sortBy, setSortBy }) => {
  //   const handleOrderByChange = (event) => {
  //     setOrder(event.target.value);
  //   };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };
  return (
    <>
      <div className=" flex content-center px-4 py-2">
        <select
          name="sortList"
          id="sortList"
          value={sortBy}
          onChange={handleSortByChange}
          className="mr-4 border-2 border-concrete"
        >
          <option value="" disabled defaultValue>
            Sort by:
          </option>
          <option value="created_at">Date created</option>
          <option value="votes">Likes</option>
          <option value="author">Author</option>
        </select>{" "}
        {/* <select
          name="orderList"
          id="orderList"
          value={order}
          onChange={handleOrderByChange}
          className="border-2 border-concrete"
        >
          <option value="" disabled defaultValue>
            Order by:
          </option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select> */}
      </div>
    </>
  );
};

export default Filter;

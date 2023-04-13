export const filterData = (searchText, restaurants) => {
  return restaurants.filter((r) =>
    r?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase())
  );
};